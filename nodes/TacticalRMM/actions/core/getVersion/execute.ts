import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function getVersion(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const responseData = await tacticalApiRequest.call(this, 'GET', '/core/version/');

	return this.helpers.returnJsonArray(responseData as any);
}
