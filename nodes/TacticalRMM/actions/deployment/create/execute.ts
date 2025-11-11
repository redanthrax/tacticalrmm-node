import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const client = this.getNodeParameter('client', index) as string;
	const site = this.getNodeParameter('site', index) as string;
	const install_method = this.getNodeParameter('install_method', index) as string;

	const body: IDataObject = {
		client,
		site,
		install_method,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', '/clients/deployments/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
