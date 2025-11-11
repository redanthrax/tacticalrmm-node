import { INodeProperties } from 'n8n-workflow';

export const automationUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'policyId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['update'],
			},
		},
		required: true,
		default: '',
		description: 'The ID of the policy to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Active',
				name: 'active',
				type: 'boolean',
				default: true,
				description: 'Whether the policy is active',
			},
			{
				displayName: 'Alert Template',
				name: 'alert_template',
				type: 'number',
				default: 0,
				description: 'ID of the alert template to use',
			},
			{
				displayName: 'Description',
				name: 'desc',
				type: 'string',
				default: '',
				description: 'Description of the policy',
			},
			{
				displayName: 'Enforced',
				name: 'enforced',
				type: 'boolean',
				default: false,
				description: 'Whether the policy is enforced',
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
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the policy',
			},
		],
	},
];
