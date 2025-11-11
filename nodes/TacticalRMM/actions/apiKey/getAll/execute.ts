import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function getAll(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index);

	let responseData = await tacticalApiRequest.call(this, 'GET', '/accounts/apikeys/');

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index);
		responseData = responseData.slice(0, limit);
	}

	return this.helpers.returnJsonArray(responseData as any);
}
