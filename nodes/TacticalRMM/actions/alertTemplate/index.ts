import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteTemplate from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteTemplate };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['alertTemplate'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an alert template',
				action: 'Create alert template',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an alert template',
				action: 'Delete alert template',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get an alert template by ID',
				action: 'Get alert template by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many alert templates',
				action: 'Get many alert templates',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an alert template',
				action: 'Update alert template',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteTemplate.description,
];
