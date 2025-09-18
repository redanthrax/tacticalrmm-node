import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function addNote(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const note = this.getNodeParameter('note', index) as string;

	const body = {
		note: note,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', `/agents/${agentId}/notes/`, body);

	return this.helpers.returnJsonArray(responseData as any);
}