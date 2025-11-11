import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getAll(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs: IDataObject = {};
	
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.limit = limit;
	}
	
	if (filters.client) {
		qs.client = filters.client;
	}
	
	if (filters.monitoring_type) {
		qs.monitoring_type = filters.monitoring_type;
	}
	
	if (filters.status) {
		qs.status = filters.status;
	}
	
	if (filters.plat) {
		qs.plat = filters.plat;
	}
	
	if (filters.site) {
		qs.site = filters.site;
	}
	
	const requestMethod = 'GET';
	const endpoint = '/agents';
	const body = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
