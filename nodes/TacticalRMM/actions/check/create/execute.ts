import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const checkType = this.getNodeParameter('checkType', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	if (!agentId) {
		throw new Error('Agent ID is required');
	}

	if (!name) {
		throw new Error('Check name is required');
	}

	const requestMethod = 'POST';
	const endpoint = '/checks/';

	const checkData: IDataObject = {
		agent: agentId,
		check_type: checkType,
		name,
		...additionalFields,
	};

	const body = checkData;
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
