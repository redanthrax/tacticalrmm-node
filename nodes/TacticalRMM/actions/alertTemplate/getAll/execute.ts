import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function getAll(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;

	const qs: IDataObject = {};

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.limit = limit;
	}

	const responseData = await apiRequest.call(this, 'GET', '/alerts/templates/', {}, qs);

	return this.helpers.returnJsonArray(responseData as any);
}
