import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const siteId = this.getNodeParameter('siteId', index) as number;

	if (!siteId) {
		throw new Error('Site ID is required');
	}

	const requestMethod = 'DELETE';
	const endpoint = `/clients/sites/${siteId}/`;
	const body = {};
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
