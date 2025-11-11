import { INodeProperties } from 'n8n-workflow';

export const checkUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Check ID',
		name: 'checkId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['update'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the check to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Alert Severity',
				name: 'alert_severity',
				type: 'options',
				options: [
					{
						name: 'Error',
						value: 'error',
					},
					{
						name: 'Info',
						value: 'info',
					},
					{
						name: 'Warning',
						value: 'warning',
					},
				],
				default: 'warning',
			},
			{
				displayName: 'Email Alert',
				name: 'email_alert',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Fails Before Alert',
				name: 'fails_b4_alert',
				type: 'number',
				default: 1,
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Run Interval (Seconds)',
				name: 'run_interval',
				type: 'number',
				default: 300,
			},
			{
				displayName: 'Text Alert',
				name: 'text_alert',
				type: 'boolean',
				default: false,
			},
		],
	},
];
