import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function clearCache(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const responseData = await tacticalApiRequest.call(this, 'GET', '/core/clearcache/');

	return this.helpers.returnJsonArray(responseData as any);
}
