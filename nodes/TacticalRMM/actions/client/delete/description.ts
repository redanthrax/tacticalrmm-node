import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['delete'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the client to delete',
	},
];
