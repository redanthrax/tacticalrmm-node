import { INodeProperties } from 'n8n-workflow';

export const checkGetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Check ID',
		name: 'checkId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['getById'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the check to retrieve',
	},
];
