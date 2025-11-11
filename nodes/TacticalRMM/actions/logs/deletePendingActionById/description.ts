import type { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Pending Action ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['logs'],
				operation: ['deletePendingActionById'],
			},
		},
		default: '',
		description: 'The ID of the pending action to delete',
	},
];
