import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function control(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const serviceName = this.getNodeParameter('serviceName', index) as string;
	const action = this.getNodeParameter('action', index) as string;

	const requestMethod = 'POST';
	const endpoint = `/services/${agentId}/${serviceName}/`;
	const body = {
		action,
	} as IDataObject;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
