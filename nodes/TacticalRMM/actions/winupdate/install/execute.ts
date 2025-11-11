import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function install(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const guids = this.getNodeParameter('guids', index) as string;

	const requestMethod = 'POST';
	const endpoint = `/winupdate/${agentId}/install/`;
	const body = {
		guids: guids.split(',').map((guid: string) => guid.trim()),
	} as IDataObject;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
