import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function updateSnippet(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const body: IDataObject = {};

	if (updateFields.name) {
		body.name = updateFields.name;
	}

	if (updateFields.code) {
		body.code = updateFields.code;
	}

	if (updateFields.shell) {
		body.shell = updateFields.shell;
	}

	if (updateFields.desc) {
		body.desc = updateFields.desc;
	}

	const responseData = await tacticalApiRequest.call(this, 'PUT', `/scripts/snippets/${id}/`, body);

	return this.helpers.returnJsonArray(responseData as any);
}
