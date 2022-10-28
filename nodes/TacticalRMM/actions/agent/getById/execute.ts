import { IExecuteFunctions } from 'n8n-core';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getById(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
		const agentId = this.getNodeParameter('agentId', index) as string;
		const qs = {} as IDataObject;
		const requestMethod = 'GET';
		const endpoint = `/agents/${agentId}`;
		const body = {} as IDataObject;

		let responseData;
		responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

		return this.helpers.returnJsonArray(responseData);
}
