import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteReport from './delete';
import * as email from './email';
import * as exportReport from './export';
import * as run from './run';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteReport, email, exportReport, run };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a report template',
				action: 'Create report template',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a report template',
				action: 'Delete report template',
			},
			{
				name: 'Email',
				value: 'email',
				description: 'Email a report',
				action: 'Email report',
			},
			{
				name: 'Export',
				value: 'export',
				description: 'Export a report',
				action: 'Export report',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get a report template by ID',
				action: 'Get report template by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many report templates',
				action: 'Get many report templates',
			},
			{
				name: 'Run',
				value: 'run',
				description: 'Run a report',
				action: 'Run report',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a report template',
				action: 'Update report template',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteReport.description,
	...email.description,
	...exportReport.description,
	...run.description,
];
