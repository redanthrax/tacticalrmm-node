import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function test(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const scriptId = this.getNodeParameter('scriptId', index) as string;
	const agentId = this.getNodeParameter('agentId', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		script: parseInt(scriptId, 10),
	};

	if (additionalFields.args) {
		body.args = additionalFields.args;
	}

	if (additionalFields.env_vars) {
		body.env_vars = additionalFields.env_vars;
	}

	if (additionalFields.timeout) {
		body.timeout = additionalFields.timeout;
	}

	const responseData = await tacticalApiRequest.call(
		this,
		'POST',
		`/scripts/${agentId}/test/`,
		body,
	);

	return this.helpers.returnJsonArray(responseData as any);
}
