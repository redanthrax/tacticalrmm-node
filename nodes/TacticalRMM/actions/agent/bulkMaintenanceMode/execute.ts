import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function bulkMaintenanceMode(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentIds = this.getNodeParameter('agentIds', index) as string;
	const maintenanceMode = this.getNodeParameter('maintenanceMode', index) as boolean;

	const agentIdArray = agentIds.split(',').map(id => id.trim());

	const body = {
		agents: agentIdArray,
		maintenance_mode: maintenanceMode,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', '/agents/maintenance/bulk/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
