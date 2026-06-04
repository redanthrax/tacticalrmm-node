import { INodeProperties } from 'n8n-workflow';

export const taskDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['deleteTask'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the task to delete',
	},
];
