import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function getPendingActions(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
	const qs: IDataObject = {};

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.limit = limit;
	}

	const responseData = await tacticalApiRequest.call(this, 'GET', '/logs/pendingactions/', {}, qs);

	return this.helpers.returnJsonArray(responseData as any);
}
