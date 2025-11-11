import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const scriptId = this.getNodeParameter('scriptId', index) as number;

	if (!scriptId) {
		throw new Error('Script ID is required');
	}

	const requestMethod = 'DELETE';
	const endpoint = `/scripts/${scriptId}/`;
	const body = {};
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
