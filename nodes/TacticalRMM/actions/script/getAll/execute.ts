import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function getAll(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;

	const qs: IDataObject = {};

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.limit = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/scripts/';
	const body = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
