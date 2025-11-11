import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function bulkRecovery(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const responseData = await tacticalApiRequest.call(this, 'GET', '/agents/bulkrecovery/');

	return this.helpers.returnJsonArray(responseData as any);
}
