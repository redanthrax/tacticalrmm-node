import { INodeProperties } from 'n8n-workflow';

export const scriptDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Script ID',
		name: 'scriptId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['deleteScript'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the script to delete',
	},
];
