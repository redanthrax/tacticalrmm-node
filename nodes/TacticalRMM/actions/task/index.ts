import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteTask from './delete';
import * as run from './run';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteTask as delete, run };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['task'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new task',
				action: 'Create a task',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a task',
				action: 'Delete a task',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get a task by ID',
				action: 'Get a task by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many tasks',
				action: 'Get many tasks',
			},
			{
				name: 'Run',
				value: 'run',
				description: 'Run a task on demand',
				action: 'Run a task',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a task',
				action: 'Update a task',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteTask.description,
	...run.description,
];
