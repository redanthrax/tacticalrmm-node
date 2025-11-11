import { INodeProperties } from 'n8n-workflow';

export const checkDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Check ID',
		name: 'checkId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['delete'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the check to delete',
	},
];
