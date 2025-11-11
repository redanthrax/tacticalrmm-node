import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function deletePendingActionById(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as string;

	const responseData = await tacticalApiRequest.call(this, 'DELETE', `/logs/pendingactions/${id}/`);

	return this.helpers.returnJsonArray(responseData as any);
}
