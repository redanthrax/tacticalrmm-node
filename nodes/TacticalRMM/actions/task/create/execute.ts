import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const script = this.getNodeParameter('script', index) as number;
	const task_type = this.getNodeParameter('task_type', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		name,
		script,
		task_type,
	};

	const fields = [
		'alert_severity', 'assigned_check', 'continue_on_error', 'custom_field',
		'email_alert', 'enabled', 'expire_date', 'run_as_user', 'run_time_days',
		'run_time_minute', 'script_args', 'start_date', 'timeout', 'text_alert'
	];

	for (const field of fields) {
		if (additionalFields[field] !== undefined) {
			body[field] = additionalFields[field];
		}
	}

	const requestMethod = 'POST';
	const endpoint = '/tasks/';
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
