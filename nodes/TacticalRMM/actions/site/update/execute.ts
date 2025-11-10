import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const siteId = this.getNodeParameter('siteId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	if (!siteId) {
		throw new Error('Site ID is required');
	}

	const requestMethod = 'PUT';
	const endpoint = `/clients/sites/${siteId}/`;

	const siteData: IDataObject = {
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
			siteData.custom_fields = fields;
		}
	}

	const body = siteData;
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return responseData;
	}

	return [responseData as IDataObject];
}
