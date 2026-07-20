#!/usr/bin/env node
/**
 * Scans pnpm-lock.yaml for Mini Shai-Hulud (and related) compromised versions
 * and suspicious install-script / C2 indicators.
 */
import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const lockfilePath = resolve(root, 'pnpm-lock.yaml');
const workspacePath = resolve(root, 'pnpm-workspace.yaml');
const packageJsonPath = resolve(root, 'package.json');
const securityDir = resolve(root, 'security');

const REQUIRED_WORKSPACE_SETTINGS = [
	'minimumReleaseAge:',
	'minimumReleaseAgeStrict:',
	'blockExoticSubdeps:',
	'strictDepBuilds:',
	'allowBuilds:',
	'overrides:',
];

const FORBIDDEN_LOCKFILES = ['package-lock.json', 'yarn.lock', 'npm-shrinkwrap.json', 'bun.lockb', 'bun.lock'];

function verifyPnpmOnlyRepository() {
	const errors = [];

	for (const file of FORBIDDEN_LOCKFILES) {
		if (existsSync(resolve(root, file))) {
			errors.push(
				`forbidden lockfile ${file} — use pnpm only (delete it and run pnpm install --frozen-lockfile)`,
			);
		}
	}

	if (!existsSync(lockfilePath)) {
		errors.push('pnpm-lock.yaml is required — this repo uses pnpm with a frozen lockfile');
	}

	if (existsSync(packageJsonPath)) {
		const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
		const pm = pkg.packageManager ?? '';
		if (!pm.startsWith('pnpm@')) {
			errors.push('package.json "packageManager" must pin pnpm (e.g. pnpm@11.14.0)');
		}
		if (!pkg.engines?.pnpm) {
			errors.push('package.json engines.pnpm is required — rejects installs with wrong package manager');
		}
	}

	return errors;
}

function verifyPnpmWorkspaceConfig() {
	const errors = [];

	if (!existsSync(workspacePath)) {
		errors.push('pnpm-workspace.yaml is missing — pnpm 10+ requires supply-chain settings there');
		return errors;
	}

	const workspace = readFileSync(workspacePath, 'utf8');
	for (const setting of REQUIRED_WORKSPACE_SETTINGS) {
		if (!workspace.includes(setting)) {
			errors.push(`pnpm-workspace.yaml missing required setting: ${setting.replace(':', '')}`);
		}
	}

	if (existsSync(packageJsonPath)) {
		const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
		if (pkg.pnpm) {
			errors.push(
				'package.json still defines "pnpm" — move settings to pnpm-workspace.yaml (ignored by pnpm 10+)',
			);
		}
	}

	return errors;
}

function verifyLockfileSettings(lockfile) {
	const errors = [];

	if (!lockfile.includes('overrides:')) {
		errors.push('pnpm-lock.yaml missing overrides — run pnpm install after editing pnpm-workspace.yaml');
	}

	return errors;
}

function verifyActivePnpmConfig() {
	const errors = [];

	try {
		const raw = execSync('pnpm config list', {
			cwd: root,
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'pipe'],
		});

		let config;
		try {
			config = JSON.parse(raw);
		} catch {
			errors.push('pnpm config list did not return JSON — expected pnpm 11+');
			return errors;
		}

		if (config.minimumReleaseAge !== 1440) {
			errors.push('minimumReleaseAge (24h delay) is not active');
		}
		if (config.minimumReleaseAgeStrict !== true) {
			errors.push('minimumReleaseAgeStrict is not active');
		}
		if (config.blockExoticSubdeps !== true) {
			errors.push('blockExoticSubdeps is not active');
		}
		if (config.strictDepBuilds !== true) {
			errors.push('strictDepBuilds is not active');
		}
		if (config.allowBuilds?.['isolated-vm'] !== true) {
			errors.push('allowBuilds allowlist missing isolated-vm');
		}

		const overrides = config.overrides ?? {};
		if (!overrides.lodash || !overrides.uuid) {
			errors.push('pnpm overrides for lodash/uuid are not active — check pnpm-workspace.yaml');
		}
	} catch (error) {
		errors.push(`unable to read pnpm config: ${error.message}`);
	}

	return errors;
}

function loadBlocklist() {
	const metaPath = resolve(securityDir, 'compromised-packages.json');
	const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
	const blockedVersions = {};

	const files = meta.blocklistFiles ?? [];
	if (files.length === 0 && meta.blockedVersions) {
		Object.assign(blockedVersions, meta.blockedVersions);
	}

	for (const file of files) {
		const data = JSON.parse(readFileSync(resolve(securityDir, file), 'utf8'));
		if (data.blockedVersions) {
			Object.assign(blockedVersions, data.blockedVersions);
		}
	}

	return { ...meta, blockedVersions };
}

function parseLockfilePackages(lockfile) {
	const packages = [];
	const re = /^\s{2}['"]?((?:@[^@/\s'"]+\/)?[^@'"/\s]+)@([^'":\s]+)['"]?:/gm;
	let match;
	while ((match = re.exec(lockfile)) !== null) {
		packages.push({ name: match[1], version: match[2] });
	}
	return packages;
}

function main() {
	const errors = [];
	const warnings = [];

	if (!existsSync(lockfilePath)) {
		console.error('error: pnpm-lock.yaml not found — commit a frozen lockfile for reproducible installs.');
		process.exit(1);
	}

	const blocklist = loadBlocklist();
	const lockfile = readFileSync(lockfilePath, 'utf8');
	const installed = parseLockfilePackages(lockfile);

	errors.push(...verifyPnpmOnlyRepository());
	errors.push(...verifyPnpmWorkspaceConfig());
	errors.push(...verifyLockfileSettings(lockfile));
	errors.push(...verifyActivePnpmConfig());

	for (const { name, version } of installed) {
		const blocked = blocklist.blockedVersions[name];
		if (blocked?.includes(version)) {
			errors.push(`blocked compromised version: ${name}@${version} (${blocklist.campaign})`);
		}
	}

	for (const indicator of blocklist.lockfileIndicators ?? []) {
		if (lockfile.includes(indicator)) {
			errors.push(`lockfile contains suspicious indicator: ${indicator}`);
		}
	}

	if (!existsSync(resolve(root, 'node_modules'))) {
		warnings.push('node_modules not present — run pnpm install before relying on local install checks');
	}

	const blocklistFileCount = (blocklist.blocklistFiles ?? []).length;
	const packageCount = Object.keys(blocklist.blockedVersions).length;

	if (warnings.length) {
		for (const w of warnings) {
			console.warn(`warn: ${w}`);
		}
	}

	if (errors.length) {
		console.error('Supply chain check FAILED:\n');
		for (const e of errors) {
			console.error(`  • ${e}`);
		}
		console.error(
			'\nSee SECURITY.md for remediation (rotate CI secrets, block egress IOCs, pin safe versions).',
		);
		process.exit(1);
	}

	console.log(
		`Supply chain check passed (${installed.length} locked packages, ${packageCount} blocklist entries from ${blocklistFileCount || 1} file(s), updated ${blocklist.updated}).`,
	);
}

main();
