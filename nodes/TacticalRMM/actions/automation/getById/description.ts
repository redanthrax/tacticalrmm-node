import { INodeProperties } from 'n8n-workflow';

export const automationGetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'policyId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['getById'],
			},
		},
		required: true,
		default: '',
		description: 'The ID of the policy to retrieve',
	},
];
