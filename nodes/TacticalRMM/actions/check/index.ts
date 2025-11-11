import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteCheck from './delete';
import * as reset from './reset';
import * as run from './run';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteCheck as delete, reset, run };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['check'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new check',
				action: 'Create a check',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a check',
				action: 'Delete a check',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get a check by ID',
				action: 'Get a check by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many checks',
				action: 'Get many checks',
			},
			{
				name: 'Reset',
				value: 'reset',
				description: 'Reset a check status',
				action: 'Reset a check',
			},
			{
				name: 'Run',
				value: 'run',
				description: 'Run checks on an agent',
				action: 'Run checks',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a check',
				action: 'Update a check',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteCheck.description,
	...reset.description,
	...run.description,
];
