import { INodeProperties } from 'n8n-workflow';

export const serviceControlDescription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['service'],
				operation: ['control'],
			},
		},
		required: true,
		default: '',
		description: 'ID of the agent',
	},
	{
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['service'],
				operation: ['control'],
			},
		},
		required: true,
		default: '',
		description: 'Name of the service to control',
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['service'],
				operation: ['control'],
			},
		},
		options: [
			{
				name: 'Restart',
				value: 'restart',
				action: 'Restart a service',
			},
			{
				name: 'Start',
				value: 'start',
				action: 'Start a service',
			},
			{
				name: 'Stop',
				value: 'stop',
				action: 'Stop a service',
			},
		],
		default: 'start',
	},
];
