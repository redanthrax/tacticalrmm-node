import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const clientId = this.getNodeParameter('clientId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	if (!clientId) {
		throw new Error('Client ID is required');
	}

	const requestMethod = 'PUT';
	const endpoint = `/clients/${clientId}/`;

	const clientData: IDataObject = {
		...updateFields,
	};

	if (updateFields.custom_fields) {
		const customFieldsData = updateFields.custom_fields as IDataObject;
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
