import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function updateDebugSettings(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const retentionDays = this.getNodeParameter('retentionDays', index) as number;

	const body = {
		retention_days: retentionDays,
	};

	const responseData = await tacticalApiRequest.call(this, 'PATCH', '/logs/debug/', body);

	return this.helpers.returnJsonArray(responseData as any);
}
