import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getByAgent(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
		const requestMethod = 'GET';
		const body = {} as IDataObject;
		const agentId = this.getNodeParameter('agentId', index) as string;
		const limit = this.getNodeParameter('limit', index) as number;
		const qs = {
			limit,
		} as IDataObject;
		const endpoint = `/software/${agentId}/`;
		const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
		if (responseData.software) {
						responseData.software = responseData.software.sort((a: any, b: any) => a.name.localeCompare(b.name));
				}
		responseData['agent_id'] = agentId;
		return this.helpers.returnJsonArray(responseData);
}
