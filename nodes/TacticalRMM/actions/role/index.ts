import * as create from './create';
import * as deleteRole from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteRole as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['role'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new role',
				action: 'Create role',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a role',
				action: 'Delete role',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get a role by ID',
				action: 'Get role by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many roles',
				action: 'Get many roles',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a role',
				action: 'Update role',
			},
		],
		default: 'getAll',
	},
	...create.description,
	...deleteRole.description,
	...getAll.description,
	...getById.description,
	...update.description,
];
