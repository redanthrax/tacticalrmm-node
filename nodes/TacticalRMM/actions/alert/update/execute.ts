import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const alertId = this.getNodeParameter('alertId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {};

	if (updateFields.resolved !== undefined) {
		body.resolved = updateFields.resolved;
	}

	if (updateFields.snoozed !== undefined) {
		body.snoozed = updateFields.snoozed;
	}

	if (updateFields.snooze_until) {
		body.snooze_until = updateFields.snooze_until;
	}

	const requestMethod = 'PUT';
	const endpoint = `/alerts/${alertId}/`;
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
