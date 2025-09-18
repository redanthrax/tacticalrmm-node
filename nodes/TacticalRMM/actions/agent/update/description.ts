import { AgentProperties } from '../../Interfaces';

export const agentUpdateDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the agent to update',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Description of the agent',
	},
	{
		displayName: 'Overdue Email Alert',
		name: 'overdueEmailAlert',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: true,
		description: 'Whether to enable email alerts when agent is overdue',
	},
	{
		displayName: 'Overdue Text Alert',
		name: 'overdueTextAlert',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: false,
		description: 'Whether to enable text alerts when agent is overdue',
	},
	{
		displayName: 'Overdue Dashboard Alert',
		name: 'overdueDashboardAlert',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: true,
		description: 'Whether to show dashboard alerts when agent is overdue',
	},
	{
		displayName: 'Offline Time (Seconds)',
		name: 'offlineTime',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: 240,
		description: 'Time in seconds after which agent is considered offline',
	},
	{
		displayName: 'Overdue Time (Seconds)',
		name: 'overdueTime',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: 900,
		description: 'Time in seconds after which agent is considered overdue',
	},
	{
		displayName: 'Check Interval (Seconds)',
		name: 'checkInterval',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: 120,
		description: 'Interval in seconds between checks',
	},
	{
		displayName: 'Maintenance Mode',
		name: 'maintenanceMode',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: false,
		description: 'Whether the agent is in maintenance mode',
	},
	{
		displayName: 'Block Policy Inheritance',
		name: 'blockPolicyInheritance',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: false,
		description: 'Whether to block policy inheritance',
	},
	{
		displayName: 'Alert Template ID',
		name: 'alertTemplate',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Alert template ID to use for this agent',
	},
	{
		displayName: 'Policy ID',
		name: 'policy',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Policy ID to apply to this agent',
	},
];