import { INodeProperties } from 'n8n-workflow';

export const alertGetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Alert ID',
		name: 'alertId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['getById'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the alert to retrieve',
	},
];
