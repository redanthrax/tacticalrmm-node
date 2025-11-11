import { INodeProperties } from 'n8n-workflow';

export const checkResetDescription: INodeProperties[] = [
	{
		displayName: 'Check ID',
		name: 'checkId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['reset'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the check to reset',
	},
];
