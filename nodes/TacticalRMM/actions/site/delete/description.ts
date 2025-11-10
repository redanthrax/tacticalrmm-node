import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['site'],
				operation: ['delete'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the site to delete',
	},
];
