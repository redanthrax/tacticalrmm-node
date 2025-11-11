import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const policyId = this.getNodeParameter('policyId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {};

	if (updateFields.name !== undefined) {
		body.name = updateFields.name;
	}

	if (updateFields.desc !== undefined) {
		body.desc = updateFields.desc;
	}

	if (updateFields.active !== undefined) {
		body.active = updateFields.active;
	}

	if (updateFields.enforced !== undefined) {
		body.enforced = updateFields.enforced;
	}

	if (updateFields.alert_template !== undefined) {
		body.alert_template = updateFields.alert_template;
	}

	if (updateFields.excluded_agents) {
		const agents = (updateFields.excluded_agents as string).split(',').map((s) => s.trim());
		body.excluded_agents = agents;
	}

	if (updateFields.excluded_clients) {
		const clients = (updateFields.excluded_clients as string).split(',').map((s) => s.trim());
		body.excluded_clients = clients;
	}

	if (updateFields.excluded_sites) {
		const sites = (updateFields.excluded_sites as string).split(',').map((s) => s.trim());
		body.excluded_sites = sites;
	}

	const requestMethod = 'PUT';
	const endpoint = `/automation/policies/${policyId}/`;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
