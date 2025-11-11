import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function createSnippet(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const code = this.getNodeParameter('code', index) as string;
	const shell = this.getNodeParameter('shell', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		name,
		code,
		shell,
	};

	if (additionalFields.desc) {
		body.desc = additionalFields.desc;
	}

	const responseData = await tacticalApiRequest.call(this, 'POST', '/scripts/snippets/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
