import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function install(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;

	const body: IDataObject = {
		name,
	};

	if (additionalOptions.version) {
		body.version = additionalOptions.version;
	}

	if (additionalOptions.install_args) {
		body.install_args = additionalOptions.install_args;
	}

	const responseData = await tacticalApiRequest.call(this, 'POST', `/software/${agentId}/`, body);

	return this.helpers.returnJsonArray(responseData as any);
}
