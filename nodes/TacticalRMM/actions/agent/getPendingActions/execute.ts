import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function getPendingActions(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;

	const responseData = await tacticalApiRequest.call(this, 'GET', `/agents/${agentId}/pendingactions/`);

	return this.helpers.returnJsonArray(responseData as any);
}
