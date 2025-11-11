import { INodeProperties } from 'n8n-workflow';

export const taskCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		required: true,
		default: '',
		description: 'Name of the task',
	},
	{
		displayName: 'Script ID',
		name: 'script',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		required: true,
		default: 0,
		description: 'ID of the script to execute',
	},
	{
		displayName: 'Task Type',
		name: 'task_type',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Check Failure',
				value: 'checkfailure',
			},
			{
				name: 'Manual',
				value: 'manual',
			},
			{
				name: 'Run Once',
				value: 'runonce',
			},
			{
				name: 'Scheduled',
				value: 'scheduled',
			},
		],
		default: 'manual',
		description: 'The type of task',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
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
				default: 'info',
				description: 'Alert severity level',
			},
			{
				displayName: 'Assigned Check',
				name: 'assigned_check',
				type: 'number',
				default: 0,
				description: 'ID of assigned check for checkfailure tasks',
			},
			{
				displayName: 'Continue on Error',
				name: 'continue_on_error',
				type: 'boolean',
				default: false,
				description: 'Whether to continue if script fails',
			},
			{
				displayName: 'Custom Field',
				name: 'custom_field',
				type: 'number',
				default: 0,
				description: 'Custom field ID',
			},
			{
				displayName: 'Email Alert',
				name: 'email_alert',
				type: 'boolean',
				default: false,
				description: 'Whether to send email alerts',
			},
			{
				displayName: 'Enabled',
				name: 'enabled',
				type: 'boolean',
				default: true,
				description: 'Whether the task is enabled',
			},
			{
				displayName: 'Expire Date',
				name: 'expire_date',
				type: 'dateTime',
				default: '',
				description: 'Task expiration date',
			},
			{
				displayName: 'Run As User',
				name: 'run_as_user',
				type: 'boolean',
				default: false,
				description: 'Whether to run as logged in user',
			},
			{
				displayName: 'Run Time Days',
				name: 'run_time_days',
				type: 'string',
				default: '',
				description: 'Days to run (for scheduled tasks) - comma separated numbers 0-6',
			},
			{
				displayName: 'Run Time Minute',
				name: 'run_time_minute',
				type: 'string',
				default: '0',
				description: 'Minute to run at (for scheduled tasks)',
			},
			{
				displayName: 'Script Args',
				name: 'script_args',
				type: 'string',
				default: '',
				description: 'Arguments to pass to the script',
			},
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'dateTime',
				default: '',
				description: 'Task start date for runonce tasks',
			},
			{
				displayName: 'Timeout',
				name: 'timeout',
				type: 'number',
				default: 120,
				description: 'Task timeout in seconds',
			},
			{
				displayName: 'Text Alert',
				name: 'text_alert',
				type: 'boolean',
				default: false,
				description: 'Whether to send text/SMS alerts',
			},
		],
	},
];
