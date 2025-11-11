import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const checkId = this.getNodeParameter('checkId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	if (!checkId) {
		throw new Error('Check ID is required');
	}

	const requestMethod = 'PUT';
	const endpoint = `/checks/${checkId}/`;

	const checkData: IDataObject = {
		...updateFields,
	};

	const body = checkData;
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
