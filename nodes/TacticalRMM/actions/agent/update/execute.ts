import { IExecuteFunctions } from 'n8n-workflow';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const description = this.getNodeParameter('description', index, '') as string;
	const overdueEmailAlert = this.getNodeParameter('overdueEmailAlert', index, true) as boolean;
	const overdueTextAlert = this.getNodeParameter('overdueTextAlert', index, false) as boolean;
	const overdueDashboardAlert = this.getNodeParameter('overdueDashboardAlert', index, true) as boolean;
	const offlineTime = this.getNodeParameter('offlineTime', index, 240) as number;
	const overdueTime = this.getNodeParameter('overdueTime', index, 900) as number;
	const checkInterval = this.getNodeParameter('checkInterval', index, 120) as number;
	const maintenanceMode = this.getNodeParameter('maintenanceMode', index, false) as boolean;
	const blockPolicyInheritance = this.getNodeParameter('blockPolicyInheritance', index, false) as boolean;
	const alertTemplate = this.getNodeParameter('alertTemplate', index, null) as number | null;
	const policy = this.getNodeParameter('policy', index, null) as number | null;

	const requestMethod = 'PUT';
	const endpoint = `/agents/${agentId}`;
	
	const body = {
		description: description || null,
		overdue_email_alert: overdueEmailAlert,
		overdue_text_alert: overdueTextAlert,
		overdue_dashboard_alert: overdueDashboardAlert,
		offline_time: offlineTime,
		overdue_time: overdueTime,
		check_interval: checkInterval,
		maintenance_mode: maintenanceMode,
		block_policy_inheritance: blockPolicyInheritance,
		alert_template: alertTemplate,
		policy: policy,
	} as IDataObject;

	// Remove null/empty values
	Object.keys(body).forEach(key => {
		if (body[key] === null || body[key] === '') {
			delete body[key];
		}
	});

	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}