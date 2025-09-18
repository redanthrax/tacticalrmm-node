import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function bulkAction(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentIds = this.getNodeParameter('agentIds', index) as string;
	const action = this.getNodeParameter('action', index) as string;
	const mode = this.getNodeParameter('mode', index, 'now') as string;

	const agentIdArray = agentIds.split(',').map(id => id.trim());

	const body = {
		agents: agentIdArray,
		action: action,
		mode: mode,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', '/agents/bulk/', body);

	return this.helpers.returnJsonArray(responseData as any);
}