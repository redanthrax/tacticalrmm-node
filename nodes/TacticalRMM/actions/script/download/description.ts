import { INodeProperties } from 'n8n-workflow';

export const scriptDownloadDescription: INodeProperties[] = [
	{
		displayName: 'Script ID',
		name: 'scriptId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['download'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the script to download',
	},
];
