import { IExecuteFunctions } from 'n8n-core';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getByAgent(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
		const requestMethod = 'GET';
		const body = {} as IDataObject;
				const qs = {} as IDataObject;
		const agentId = this.getNodeParameter('agentId', index) as string;
				const endpoint = `/software/${agentId}/`;
		const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
				if (responseData.software) {
						responseData.software = responseData.software.sort((a, b) => a.name.localeCompare(b.name));
				}
		responseData['agent_id'] = agentId;
		return this.helpers.returnJsonArray(responseData);
}
