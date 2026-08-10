import { INode, NodeOperationError } from 'n8n-workflow';

import { ensureTrailingSlash } from '../../urlUtils';

/**
 * Normalizes a Tactical RMM API path for transport.apiRequest.
 * Accepts /agents/ or agents/.
 */
export function normalizeEndpoint(raw: string, node: INode): string {
	let path = raw.trim();
	if (!path) {
		throw new NodeOperationError(node, 'Endpoint is required');
	}

	if (path.includes('://')) {
		throw new NodeOperationError(
			node,
			'Endpoint must be a path (e.g. /agents/), not a full URL',
		);
	}

	if (!path.startsWith('/')) {
		path = `/${path}`;
	}

	return ensureTrailingSlash(path);
}
