import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const desc = this.getNodeParameter('desc', index) as string;
	const active = this.getNodeParameter('active', index) as boolean;
	const enforced = this.getNodeParameter('enforced', index) as boolean;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		name,
		desc,
		active,
		enforced,
	};

	if (additionalFields.alert_template) {
		body.alert_template = additionalFields.alert_template;
	}

	if (additionalFields.excluded_agents) {
		const agents = (additionalFields.excluded_agents as string).split(',').map((s) => s.trim());
		body.excluded_agents = agents;
	}

	if (additionalFields.excluded_clients) {
		const clients = (additionalFields.excluded_clients as string).split(',').map((s) => s.trim());
		body.excluded_clients = clients;
	}

	if (additionalFields.excluded_sites) {
		const sites = (additionalFields.excluded_sites as string).split(',').map((s) => s.trim());
		body.excluded_sites = sites;
	}

	const requestMethod = 'POST';
	const endpoint = '/automation/policies/';
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
