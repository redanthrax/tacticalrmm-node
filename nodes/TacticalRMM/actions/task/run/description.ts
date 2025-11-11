import { INodeProperties } from 'n8n-workflow';

export const taskRunDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['run'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the task to run',
	},
];
