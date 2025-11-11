import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteAutomation from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteAutomation as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['automation'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new automation policy',
				action: 'Create an automation policy',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an automation policy',
				action: 'Delete an automation policy',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get an automation policy by ID',
				action: 'Get an automation policy by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many automation policies',
				action: 'Get many automation policies',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an automation policy',
				action: 'Update an automation policy',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteAutomation.description,
];
