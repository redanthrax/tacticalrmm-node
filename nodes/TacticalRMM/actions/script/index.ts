import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteScript from './delete';
import * as download from './download';
import * as test from './test';
import * as getSnippets from './getSnippets';
import * as getSnippetById from './getSnippetById';
import * as createSnippet from './createSnippet';
import * as updateSnippet from './updateSnippet';
import * as deleteSnippet from './deleteSnippet';

import { INodeProperties } from 'n8n-workflow';

export {
	getAll,
	getById,
	create,
	update,
	deleteScript as delete,
	download,
	test,
	getSnippets,
	getSnippetById,
	createSnippet,
	updateSnippet,
	deleteSnippet,
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['script'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new script',
				action: 'Create a script',
			},
			{
				name: 'Create Snippet',
				value: 'createSnippet',
				description: 'Create a code snippet',
				action: 'Create snippet',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a script',
				action: 'Delete a script',
			},
			{
				name: 'Delete Snippet',
				value: 'deleteSnippet',
				description: 'Delete a code snippet',
				action: 'Delete snippet',
			},
			{
				name: 'Download',
				value: 'download',
				description: 'Download script content',
				action: 'Download a script',
			},
			{
				name: 'Get By ID',
				value: 'getById',
				description: 'Get a script by ID',
				action: 'Get a script by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many scripts',
				action: 'Get many scripts',
			},
			{
				name: 'Get Snippet By ID',
				value: 'getSnippetById',
				description: 'Get a code snippet by ID',
				action: 'Get snippet by ID',
			},
			{
				name: 'Get Snippets',
				value: 'getSnippets',
				description: 'Retrieve code snippets',
				action: 'Get snippets',
			},
			{
				name: 'Test',
				value: 'test',
				description: 'Test a script on an agent',
				action: 'Test script',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a script',
				action: 'Update a script',
			},
			{
				name: 'Update Snippet',
				value: 'updateSnippet',
				description: 'Update a code snippet',
				action: 'Update snippet',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteScript.description,
	...download.description,
	...test.description,
	...getSnippets.description,
	...getSnippetById.description,
	...createSnippet.description,
	...updateSnippet.description,
	...deleteSnippet.description,
];
