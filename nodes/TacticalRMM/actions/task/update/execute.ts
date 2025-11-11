import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const taskId = this.getNodeParameter('taskId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {};

	const fields = ['name', 'enabled', 'script_args', 'timeout'];

	for (const field of fields) {
		if (updateFields[field] !== undefined) {
			body[field] = updateFields[field];
		}
	}

	const requestMethod = 'PUT';
	const endpoint = `/tasks/${taskId}/`;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
