import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		name,
		...additionalFields,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', '/accounts/apikeys/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
