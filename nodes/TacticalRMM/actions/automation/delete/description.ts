import { INodeProperties } from 'n8n-workflow';

export const automationDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'policyId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['deleteAutomation'],
			},
		},
		required: true,
		default: '',
		description: 'The ID of the policy to delete',
	},
];
