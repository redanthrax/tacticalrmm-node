import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const scriptId = this.getNodeParameter('scriptId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {};

	const fields = ['name', 'description', 'category', 'shell', 'code', 'args', 'timeout', 'favorite', 'run_as_user', 'script_type'];
	
	for (const field of fields) {
		if (updateFields[field] !== undefined) {
			body[field] = updateFields[field];
		}
	}

	if (updateFields.env_vars) {
		try {
			body.env_vars = JSON.parse(updateFields.env_vars as string);
		} catch (error) {
			body.env_vars = updateFields.env_vars;
		}
	}

	const requestMethod = 'PUT';
	const endpoint = `/scripts/${scriptId}/`;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
