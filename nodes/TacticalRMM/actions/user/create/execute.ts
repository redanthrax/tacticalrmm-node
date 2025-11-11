import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const username = this.getNodeParameter('username', index) as string;
	const password = this.getNodeParameter('password', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		username,
		password,
		...additionalFields,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', '/accounts/users/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
