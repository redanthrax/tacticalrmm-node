import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function email(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as string;
	const emails = this.getNodeParameter('emails', index) as string;

	const body = {
		emails: emails.split(',').map((e) => e.trim()),
	};

	const responseData = await tacticalApiRequest.call(
		this,
		'POST',
		`/reporting/templates/${id}/email/`,
		body,
	);

	return this.helpers.returnJsonArray(responseData as any);
}
