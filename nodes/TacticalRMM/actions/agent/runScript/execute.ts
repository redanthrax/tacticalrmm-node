import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function runScript(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const scriptId = this.getNodeParameter('scriptId', index) as number;
	const args = this.getNodeParameter('args', index, '') as string;
	const timeout = this.getNodeParameter('timeout', index, 300) as number;

	const requestMethod = 'POST';
	const endpoint = `/agents/${agentId}/runscript`;
	
	const body = {
		script_id: scriptId,
		args: args ? args.split(' ').filter(arg => arg.trim() !== '') : [],
		timeout,
	} as IDataObject;

	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}