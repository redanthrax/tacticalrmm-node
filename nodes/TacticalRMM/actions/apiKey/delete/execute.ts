import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function deleteApiKey(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as string;

	const responseData = await tacticalApiRequest.call(this, 'DELETE', `/accounts/apikeys/${id}/`);

	return this.helpers.returnJsonArray(responseData as any);
}
