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
				operation: ['run'],
			},
		},
		default: '',
		description: 'The ID of the report template to run',
	},
];
