// Copies node and credential icons into dist (replaces the former gulp build:icons task).
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';

const ICON_EXTENSIONS = new Set(['.png', '.svg']);

function copyIcons(sourceDir, destDir) {
	for (const entry of readdirSync(sourceDir, { recursive: true, withFileTypes: true })) {
		if (!entry.isFile() || !ICON_EXTENSIONS.has(extname(entry.name))) continue;
		const source = join(entry.parentPath, entry.name);
		const destination = join(destDir, relative(sourceDir, source));
		mkdirSync(dirname(destination), { recursive: true });
		copyFileSync(source, destination);
	}
}

for (const dir of ['nodes', 'credentials']) {
	copyIcons(resolve(dir), resolve('dist', dir));
}
