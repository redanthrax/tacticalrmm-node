import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteSite from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteSite as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['site'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new site',
				action: 'Create a site',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a site',
				action: 'Delete a site',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get a site by ID',
				action: 'Get a site by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many sites',
				action: 'Get many sites',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a site',
				action: 'Update a site',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description.createDescription,
	...update.description.updateDescription,
	...deleteSite.description.deleteDescription,
];
