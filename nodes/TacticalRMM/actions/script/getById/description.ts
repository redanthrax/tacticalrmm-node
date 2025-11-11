import { INodeProperties } from 'n8n-workflow';

export const scriptGetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Script ID',
		name: 'scriptId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['getById'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the script to retrieve',
	},
];
