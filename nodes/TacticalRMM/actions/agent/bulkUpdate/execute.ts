import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function bulkUpdate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentIds = this.getNodeParameter('agentIds', index) as string;
	const version = this.getNodeParameter('version', index, '') as string;

	const agentIdArray = agentIds.split(',').map(id => id.trim());

	const body: any = {
		agents: agentIdArray,
	};

	if (version) {
		body.version = version;
	}

	const responseData = await tacticalApiRequest.call(this, 'POST', '/agents/update/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
