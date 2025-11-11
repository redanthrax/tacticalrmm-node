import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';
import * as deleteAlert from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, update, deleteAlert as delete };

export const description: INodeProperties[] = [
		{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
						show: {
								resource: ['alert'],
						},
				},
				options: [
						{
								name: 'Delete',
								value: 'delete',
								description: 'Delete an alert',
								action: 'Delete an alert',
						},
						{
								name: 'Get By ID',
								value: 'getById',
								description: 'Get an alert by ID',
								action: 'Get an alert by ID',
						},
						{
								name: 'Get Many',
								value: 'getAll',
								description: 'Retrieve many alerts',
								action: 'Get many alerts',
						},
						{
								name: 'Update',
								value: 'update',
								description: 'Update an alert',
								action: 'Update an alert',
						},
				],
				default: 'getAll',
		},
		...getAll.description,
		...getById.description,
		...update.description,
		...deleteAlert.description,
];
