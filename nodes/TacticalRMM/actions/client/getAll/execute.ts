import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getAll(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
		const qs = {} as IDataObject;
		const requestMethod = 'GET';
		const endpoint = '/clients';
		const body = {} as IDataObject;

		let responseData;
		responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

		return this.helpers.returnJsonArray(responseData);
}
