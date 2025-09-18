import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function shutdown(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;

	const requestMethod = 'POST';
	const endpoint = `/agents/${agentId}/shutdown`;
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData || { success: true, message: 'Shutdown command sent', agentId });
}