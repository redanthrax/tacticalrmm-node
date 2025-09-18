import { AgentProperties } from '../../Interfaces';

export const agentBulkActionDescription: AgentProperties = [
	{
		displayName: 'Agent IDs',
		name: 'agentIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['bulkAction'],
			},
		},
		default: '',
		description: 'Comma-separated list of agent IDs to perform bulk action on',
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['bulkAction'],
			},
		},
		default: 'reboot',
		options: [
			{
				name: 'Reboot',
				value: 'reboot',
				action: 'Reboot an agent',
			},
			{
				name: 'Shutdown',
				value: 'shutdown',
				action: 'Shutdown an agent',
			},
			{
				name: 'Update Agent',
				value: 'update',
				action: 'Update an agent',
			},
			{
				name: 'Ping',
				value: 'ping',
				action: 'Ping an agent',
			},
		],
	},
	{
		displayName: 'Mode',
		name: 'mode',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['bulkAction'],
			},
		},
		default: 'now',
		options: [
			{
				name: 'Now',
				value: 'now',
			},
			{
				name: 'Schedule',
				value: 'schedule',
			},
		],
	description: 'When to execute the bulk action',
	},
];

export { agentBulkActionDescription as description };
