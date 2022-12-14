import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

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
								name: 'Get Many',
								value: 'getAll',
								description: 'Retrieve many clients',
								action: 'Get many clients',
						},
						{
								name: 'Get By ID',
								value: 'getById',
								description: 'Get a client by ID',
								action: 'Get an client by ID',
						},
				],
				default: 'getAll',
		},
		...getAll.description,
		...getById.description,
];
