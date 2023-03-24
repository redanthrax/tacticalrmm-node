import { IExecuteFunctions } from 'n8n-core';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function get(
		this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
		const requestMethod = 'GET';
		const body = {} as IDataObject;
		const qs = {} as IDataObject;
		const endpoint = `/software/`;
		const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
		return this.helpers.returnJsonArray(responseData);
}
