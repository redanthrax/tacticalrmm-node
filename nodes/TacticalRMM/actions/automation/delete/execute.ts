import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const policyId = this.getNodeParameter('policyId', index) as string;

	if (!policyId) {
		throw new Error('Policy ID is required');
	}

	const requestMethod = 'DELETE';
	const endpoint = `/automation/policies/${policyId}/`;
	const body = {};
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
