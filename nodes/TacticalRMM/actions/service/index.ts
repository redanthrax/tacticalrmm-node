import * as getMany from './getMany';
import * as getByName from './getByName';
import * as control from './control';

import { INodeProperties } from 'n8n-workflow';

export { getMany, getByName, control };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['service'],
			},
		},
		options: [
			{
				name: 'Control',
				value: 'control',
				description: 'Start, stop, or restart a service',
				action: 'Control a service',
			},
			{
				name: 'Get By Name',
				value: 'getByName',
				description: 'Get a service by name',
				action: 'Get a service by name',
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'Retrieve many services from an agent',
				action: 'Get many services',
			},
		],
		default: 'getMany',
	},
	...getMany.description,
	...getByName.description,
	...control.description,
];
