import type { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['email'],
			},
		},
		default: '',
		description: 'The ID of the report template to email',
	},
	{
		displayName: 'Email Addresses',
		name: 'emails',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['email'],
			},
		},
		default: '',
		description: 'Comma-separated list of email addresses to send the report to',
	},
];
