import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function getById(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as string;

	const responseData = await tacticalApiRequest.call(this, 'GET', `/accounts/${id}/users/`);

	return this.helpers.returnJsonArray(responseData as any);
}
