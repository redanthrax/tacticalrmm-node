import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function deleteAgent(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;

	const requestMethod = 'DELETE';
	const endpoint = `/agents/${agentId}`;
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray({ success: true, agentId, message: 'Agent deleted successfully', responseData });
}