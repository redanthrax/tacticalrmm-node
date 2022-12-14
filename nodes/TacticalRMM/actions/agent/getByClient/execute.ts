import { IExecuteFunctions } from 'n8n-core';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getByClient(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
		const requestMethod = 'GET';
		const endpoint = '/agents';
		const body = {} as IDataObject;
		const clientId = this.getNodeParameter('clientId', index) as number;
		const qs = {
				client: clientId,
		} as IDataObject;

		let responseData;
		responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

		return this.helpers.returnJsonArray(responseData);
}
