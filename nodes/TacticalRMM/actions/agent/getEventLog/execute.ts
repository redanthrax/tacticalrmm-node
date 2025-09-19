import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { tacticalApiRequest } from '../../../transport';

export async function getEventLog(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as string;
	const logName = this.getNodeParameter('logName', index) as string;
	const days = this.getNodeParameter('days', index, 1) as number;
	const limit = this.getNodeParameter('limit', index) as number;

	const body = {
		logname: logName,
		days: days,
		limit: limit,
	};

	const responseData = await tacticalApiRequest.call(this, 'POST', `/agents/${agentId}/geteventlog/`, body);

	return this.helpers.returnJsonArray(responseData as any);
}