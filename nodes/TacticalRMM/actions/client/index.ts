import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteClient from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteClient as delete };

export const description: INodeProperties[] = [
		{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
						show: {
								resource: ['client'],
						},
				},
				options: [
						{
								name: 'Create',
								value: 'create',
								description: 'Create a new client',
								action: 'Create a client',
						},
						{
								name: 'Delete',
								value: 'delete',
								description: 'Delete a client',
								action: 'Delete a client',
						},
						{
								name: 'Get By ID',
								value: 'getById',
								description: 'Get a client by ID',
								action: 'Get a client by ID',
						},
						{
								name: 'Get Many',
								value: 'getAll',
								description: 'Retrieve many clients',
								action: 'Get many clients',
						},
						{
								name: 'Update',
								value: 'update',
								description: 'Update a client',
								action: 'Update a client',
						},
				],
				default: 'getAll',
		},
		...getAll.description,
		...getById.description,
		...create.description.createDescription,
		...update.description.updateDescription,
		...deleteClient.description.deleteDescription,
];
