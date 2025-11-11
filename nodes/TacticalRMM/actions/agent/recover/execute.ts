import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function recover(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;

	const responseData = await tacticalApiRequest.call(this, 'POST', `/agents/${agentId}/recover/`);

	return this.helpers.returnJsonArray(responseData as any);
}
