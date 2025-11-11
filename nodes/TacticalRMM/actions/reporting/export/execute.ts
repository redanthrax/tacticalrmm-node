import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function exportReport(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as string;
	const format = this.getNodeParameter('format', index) as string;

	const body = {
		format,
	};

	const responseData = await tacticalApiRequest.call(
		this,
		'POST',
		`/reporting/templates/${id}/export/`,
		body,
	);

	return this.helpers.returnJsonArray(responseData as any);
}
