import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function deleteAllPendingActions(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const responseData = await tacticalApiRequest.call(this, 'DELETE', '/logs/pendingactions/');

	return this.helpers.returnJsonArray(responseData as any);
}
