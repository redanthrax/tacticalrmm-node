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
				operation: ['export'],
			},
		},
		default: '',
		description: 'The ID of the report template to export',
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['export'],
			},
		},
		options: [
			{
				name: 'CSV',
				value: 'csv',
			},
			{
				name: 'HTML',
				value: 'html',
			},
			{
				name: 'PDF',
				value: 'pdf',
			},
		],
		default: 'pdf',
		description: 'The format to export the report in',
	},
];
