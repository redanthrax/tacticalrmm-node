import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function run(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const taskId = this.getNodeParameter('taskId', index) as number;

	const requestMethod = 'POST';
	const endpoint = `/tasks/${taskId}/run/`;
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
