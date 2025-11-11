import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function uninstall(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const name = this.getNodeParameter('name', index) as string;

	const body: IDataObject = {
		name,
	};

	const responseData = await tacticalApiRequest.call(
		this,
		'POST',
		`/software/${agentId}/uninstall/`,
		body,
	);

	return this.helpers.returnJsonArray(responseData as any);
}
