import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function installGlobally(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentIds = this.getNodeParameter('agentIds', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;

	const agentIdArray = agentIds.split(',').map(id => id.trim());

	const body: IDataObject = {
		agents: agentIdArray,
		name,
	};

	if (additionalOptions.version) {
		body.version = additionalOptions.version;
	}

	if (additionalOptions.install_args) {
		body.install_args = additionalOptions.install_args;
	}

	const responseData = await tacticalApiRequest.call(this, 'POST', '/software/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
