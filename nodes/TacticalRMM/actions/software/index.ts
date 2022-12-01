import * as getByAgent from './getByAgent';

import { INodeProperties } from 'n8n-workflow';

export { getByAgent };

export const description: INodeProperties[] = [
		{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
						show: {
								resource: ['software'],
						},
				},
				options: [
						{
								name: 'Get By Agent',
								value: 'getByAgent',
								description: 'Retrieve software by agent',
								action: 'Get software',
						},
				],
				default: 'getByAgent',
		},
				...getByAgent.description,
];
