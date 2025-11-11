import { INodeProperties } from 'n8n-workflow';

export const checkCreateDescription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['create'],
			},
		},
		required: true,
		default: '',
		description: 'The ID of the agent to create the check for',
	},
	{
		displayName: 'Check Type',
		name: 'checkType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['create'],
			},
		},
		required: true,
		options: [
			{
				name: 'CPU Load',
				value: 'cpuload',
			},
			{
				name: 'Disk Space',
				value: 'diskspace',
			},
			{
				name: 'Event Log',
				value: 'eventlog',
			},
			{
				name: 'Memory',
				value: 'memory',
			},
			{
				name: 'Ping',
				value: 'ping',
			},
			{
				name: 'Script',
				value: 'script',
			},
			{
				name: 'Service',
				value: 'winsvc',
			},
		],
		default: 'diskspace',
		description: 'The type of check to create',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['create'],
			},
		},
		required: true,
		default: '',
		description: 'Name of the check',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['check'],
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
				default: 'warning',
				description: 'Alert severity level',
			},
			{
				displayName: 'Email Alert',
				name: 'email_alert',
				type: 'boolean',
				default: false,
				description: 'Whether to send email alerts',
			},
			{
				displayName: 'Fails Before Alert',
				name: 'fails_b4_alert',
				type: 'number',
				default: 1,
				description: 'Number of consecutive failures before alerting',
			},
			{
				displayName: 'Run Interval (Seconds)',
				name: 'run_interval',
				type: 'number',
				default: 300,
				description: 'How often to run the check in seconds',
			},
			{
				displayName: 'Text Alert',
				name: 'text_alert',
				type: 'boolean',
				default: false,
				description: 'Whether to send SMS alerts',
			},
		],
	},
];
