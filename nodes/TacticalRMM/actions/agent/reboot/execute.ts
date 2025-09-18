import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function reboot(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const force = this.getNodeParameter('force', index, false) as boolean;
	const delay = this.getNodeParameter('delay', index, 0) as number;

	const requestMethod = 'POST';
	const endpoint = `/agents/${agentId}/reboot`;
	
	const body = {
		force,
		delay,
	} as IDataObject;

	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData || { success: true, message: 'Reboot command sent', agentId });
}