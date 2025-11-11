import { INodeProperties } from 'n8n-workflow';

export const automationCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['create'],
			},
		},
		required: true,
		default: '',
		description: 'Name of the policy',
	},
	{
		displayName: 'Description',
		name: 'desc',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Description of the policy',
	},
	{
		displayName: 'Active',
		name: 'active',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['create'],
			},
		},
		default: true,
		description: 'Whether the policy is active',
	},
	{
		displayName: 'Enforced',
		name: 'enforced',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['create'],
			},
		},
		default: false,
		description: 'Whether the policy is enforced',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Alert Template',
				name: 'alert_template',
				type: 'number',
				default: 0,
				description: 'ID of the alert template to use',
			},
			{
				displayName: 'Excluded Agents',
				name: 'excluded_agents',
				type: 'string',
				default: '',
				description: 'Comma-separated list of agent IDs to exclude',
			},
			{
				displayName: 'Excluded Clients',
				name: 'excluded_clients',
				type: 'string',
				default: '',
				description: 'Comma-separated list of client IDs to exclude',
			},
			{
				displayName: 'Excluded Sites',
				name: 'excluded_sites',
				type: 'string',
				default: '',
				description: 'Comma-separated list of site IDs to exclude',
			},
		],
	},
];
