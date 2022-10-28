import * as getAll from './getAll';

import { INodeProperties } from 'n8n-workflow';

export { getAll };

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
								name: 'Get Many',
								value: 'getAll',
								description: 'Retrieve many alerts',
								action: 'Get many alerts',
						},
				],
				default: 'getAll',
		},
		...getAll.description,
];
