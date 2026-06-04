import * as request from './request';

import { INodeProperties } from 'n8n-workflow';

export { request };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customApi'],
			},
		},
		options: [
			{
				name: 'Request',
				value: 'request',
				description: 'Call any Tactical RMM REST endpoint',
				action: 'Make a custom API request',
			},
		],
		default: 'request',
	},
	...request.description,
];
