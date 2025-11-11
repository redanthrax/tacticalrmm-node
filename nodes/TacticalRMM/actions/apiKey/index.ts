import * as create from './create';
import * as deleteApiKey from './delete';
import * as getAll from './getAll';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteApiKey as delete, getAll, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['apiKey'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new API key',
				action: 'Create API key',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an API key',
				action: 'Delete API key',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many API keys',
				action: 'Get many API keys',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an API key',
				action: 'Update API key',
			},
		],
		default: 'getAll',
	},
	...create.description,
	...deleteApiKey.description,
	...getAll.description,
	...update.description,
];
