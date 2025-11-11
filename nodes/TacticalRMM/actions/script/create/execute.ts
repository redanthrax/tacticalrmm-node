import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const shell = this.getNodeParameter('shell', index) as string;
	const code = this.getNodeParameter('code', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		name,
		shell,
		code,
	};

	if (additionalFields.description !== undefined) {
		body.description = additionalFields.description;
	}

	if (additionalFields.category !== undefined) {
		body.category = additionalFields.category;
	}

	if (additionalFields.args !== undefined) {
		body.args = additionalFields.args;
	}

	if (additionalFields.timeout !== undefined) {
		body.timeout = additionalFields.timeout;
	}

	if (additionalFields.favorite !== undefined) {
		body.favorite = additionalFields.favorite;
	}

	if (additionalFields.run_as_user !== undefined) {
		body.run_as_user = additionalFields.run_as_user;
	}

	if (additionalFields.script_type !== undefined) {
		body.script_type = additionalFields.script_type;
	}

	if (additionalFields.env_vars) {
		try {
			body.env_vars = JSON.parse(additionalFields.env_vars as string);
		} catch (error) {
			body.env_vars = additionalFields.env_vars;
		}
	}

	const requestMethod = 'POST';
	const endpoint = '/scripts/';
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
