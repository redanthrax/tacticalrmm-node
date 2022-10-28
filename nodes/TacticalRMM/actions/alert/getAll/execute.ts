import { IExecuteFunctions } from 'n8n-core';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getAll(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
		const qs = {} as IDataObject;
		const requestMethod = 'PATCH';
		const endpoint = '/alerts';
		const body = {
				snoozedFilter: false,
				resolvedFilter: false,
		} as IDataObject;

		let responseData;
		responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

		return this.helpers.returnJsonArray(responseData);
}
