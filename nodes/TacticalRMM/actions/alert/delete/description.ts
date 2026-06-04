import { INodeProperties } from 'n8n-workflow';

export const alertDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Alert ID',
		name: 'alertId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['deleteAlert'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the alert to delete',
	},
];
