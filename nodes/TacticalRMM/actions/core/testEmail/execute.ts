import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function testEmail(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', index) as string;

	const body: IDataObject = {
		email,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', '/core/emailtest/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
