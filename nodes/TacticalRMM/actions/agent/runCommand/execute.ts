import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function runCommand(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const command = this.getNodeParameter('command', index) as string;
	const shell = this.getNodeParameter('shell', index, 'cmd') as string;
	const timeout = this.getNodeParameter('timeout', index, 300) as number;

	const requestMethod = 'POST';
	const endpoint = `/agents/${agentId}/cmd`;
	
	const body = {
		command,
		shell,
		timeout,
	} as IDataObject;

	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}