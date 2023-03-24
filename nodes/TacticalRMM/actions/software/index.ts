import * as getByAgent from './getByAgent';
import * as get from './get';

import { INodeProperties } from 'n8n-workflow';

export { getByAgent, get };

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
								name: 'Get Software',
								value: 'get',
								description: 'Retrieve software',
								action: 'Get Software',
						},
						{
								name: 'Get By Agent',
								value: 'getByAgent',
								description: 'Retrieve software by agent',
								action: 'Get Software By Agent',
						},
				],
				default: 'getByAgent',
		},
				...getByAgent.description,
];
