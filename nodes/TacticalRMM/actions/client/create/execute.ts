import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	if (!name) {
		throw new Error('Client name is required');
	}

	const requestMethod = 'POST';
	const endpoint = '/clients/';

	const clientData: IDataObject = {
		name,
		...additionalFields,
	};

	if (additionalFields.custom_fields) {
		const customFieldsData = additionalFields.custom_fields as IDataObject;
		if (customFieldsData.fields && Array.isArray(customFieldsData.fields)) {
			const fields: IDataObject[] = [];
			for (const field of customFieldsData.fields) {
				const fieldData = field as IDataObject;
				fields.push({
					name: fieldData.name,
					value: fieldData.value,
				});
			}
			clientData.custom_fields = fields;
		}
	}

	const body = clientData;
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
