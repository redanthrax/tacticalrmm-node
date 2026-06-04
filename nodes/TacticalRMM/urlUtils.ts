/**
 * Tactical RMM (Django) routes are defined with trailing slashes in OpenAPI.
 * POST/PATCH/DELETE to paths without a trailing slash can redirect and return
 * 405 Method Not Allowed (e.g. reboot vs wol on the same agent).
 */
export function ensureTrailingSlash(endpoint: string): string {
	const trimmed = endpoint.trim();
	const queryIndex = trimmed.indexOf('?');
	const path = queryIndex === -1 ? trimmed : trimmed.slice(0, queryIndex);
	const query = queryIndex === -1 ? '' : trimmed.slice(queryIndex);

	if (path === '' || path === '/') {
		return trimmed;
	}

	if (!path.endsWith('/')) {
		return `${path}/${query}`;
	}

	return trimmed;
}
