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
			},
			{
				name: 'Start',
				value: 'start',
			},
			{
				name: 'Stop',
				value: 'stop',
			},
		],
		default: 'start',
		description: 'Action to perform on the service',
	},
];
