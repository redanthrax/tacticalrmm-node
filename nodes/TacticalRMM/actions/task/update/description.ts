import { INodeProperties } from 'n8n-workflow';

export const taskUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the task to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Enabled',
				name: 'enabled',
				type: 'boolean',
				default: true,
				description: 'Whether the task is enabled',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the task',
			},
			{
				displayName: 'Script Args',
				name: 'script_args',
				type: 'string',
				default: '',
				description: 'Arguments to pass to the script',
			},
			{
				displayName: 'Timeout',
				name: 'timeout',
				type: 'number',
				default: 120,
				description: 'Task timeout in seconds',
			},
		],
	},
];
