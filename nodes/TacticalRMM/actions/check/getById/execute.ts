import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function getById(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const checkId = this.getNodeParameter('checkId', index) as number;
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = `/checks/${checkId}/`;
	const body = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
