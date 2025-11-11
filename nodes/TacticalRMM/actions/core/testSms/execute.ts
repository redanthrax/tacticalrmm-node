import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function testSms(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const phoneNumber = this.getNodeParameter('phoneNumber', index) as string;

	const body: IDataObject = {
		phonenumber: phoneNumber,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', '/core/smstest/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
