import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteDeployment from './delete';
import * as generate from './generate';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteDeployment, generate };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['deployment'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a deployment',
				action: 'Create deployment',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a deployment',
				action: 'Delete deployment',
			},
			{
				name: 'Generate',
				value: 'generate',
				description: 'Generate agent installer',
				action: 'Generate installer',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get a deployment by ID',
				action: 'Get deployment by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many deployments',
				action: 'Get many deployments',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteDeployment.description,
	...generate.description,
];
