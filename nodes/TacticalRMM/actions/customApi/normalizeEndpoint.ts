/**
 * Normalizes a Tactical RMM API path for transport.apiRequest.
 * Accepts /agents/ or agents/.
 */
export function normalizeEndpoint(raw: string): string {
	let path = raw.trim();
	if (!path) {
		throw new Error('Endpoint is required');
	}

	if (path.includes('://')) {
		try {
			path = new URL(path).pathname;
		} catch {
			throw new Error('Endpoint must be a path (e.g. /agents/), not a full URL');
		}
	}

	if (!path.startsWith('/')) {
		path = `/${path}`;
	}

	return path;
}
