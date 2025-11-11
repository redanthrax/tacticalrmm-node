import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const taskId = this.getNodeParameter('taskId', index) as number;

	if (!taskId) {
		throw new Error('Task ID is required');
	}

	const requestMethod = 'DELETE';
	const endpoint = `/tasks/${taskId}/`;
	const body = {};
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
