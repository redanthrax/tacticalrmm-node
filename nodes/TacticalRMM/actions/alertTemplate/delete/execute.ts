import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function deleteTemplate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as string;

	const responseData = await tacticalApiRequest.call(this, 'DELETE', `/alerts/templates/${id}/`);

	return this.helpers.returnJsonArray(responseData as any);
}
