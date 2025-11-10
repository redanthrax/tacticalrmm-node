import { INodeProperties } from 'n8n-workflow';

export const siteGetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['site'],
				operation: ['getById'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the site to retrieve',
	},
];
