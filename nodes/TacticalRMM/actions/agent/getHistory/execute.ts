import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function getHistory(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const timeFilter = this.getNodeParameter('timeFilter', index, '1') as string;
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
	
	let endpoint = `/agents/${agentId}/history/?days=${timeFilter}`;
	
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		endpoint += `&limit=${limit}`;
	}

	const responseData = await tacticalApiRequest.call(this, 'GET', endpoint);

	return this.helpers.returnJsonArray(responseData as any);
}
