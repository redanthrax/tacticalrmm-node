import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function getById(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const taskId = this.getNodeParameter('taskId', index) as number;

	const requestMethod = 'GET';
	const endpoint = `/tasks/${taskId}/`;
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
