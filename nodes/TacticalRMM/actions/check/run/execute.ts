import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const checkIds = this.getNodeParameter('checkIds', index, '') as string;

	if (!agentId) {
		throw new Error('Agent ID is required');
	}

	const requestMethod = 'POST';
	const endpoint = `/checks/${agentId}/run/`;
	
	const body: IDataObject = {};
	if (checkIds) {
		body.check_ids = checkIds.split(',').map((id) => id.trim());
	}
	
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
