import { INodeProperties } from 'n8n-workflow';

export const requestDescription: INodeProperties[] = [
	{
		displayName: 'Method',
		name: 'method',
		type: 'options',
		options: [
			{ name: 'DELETE', value: 'DELETE' },
			{ name: 'GET', value: 'GET' },
			{ name: 'PATCH', value: 'PATCH' },
			{ name: 'POST', value: 'POST' },
			{ name: 'PUT', value: 'PUT' },
		],
		default: 'GET',
		required: true,
		displayOptions: {
			show: {
				resource: ['customApi'],
				operation: ['request'],
			},
		},
		description: 'HTTP method for the request',
	},
	{
		displayName: 'Endpoint',
		name: 'endpoint',
		type: 'string',
		default: '/agents/',
		required: true,
		displayOptions: {
			show: {
				resource: ['customApi'],
				operation: ['request'],
			},
		},
		placeholder: '/agents/',
		description:
			'API path (e.g. /agents/, /clients/). See docs/swagger.yaml or docs/api-catalog.md for available endpoints.',
	},
	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'json',
		default: {},
		displayOptions: {
			show: {
				resource: ['customApi'],
				operation: ['request'],
			},
		},
		description: 'Query string parameters as a JSON object, e.g. {"limit": 25}',
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'json',
		default: {},
		displayOptions: {
			show: {
				resource: ['customApi'],
				operation: ['request'],
				method: ['POST', 'PUT', 'PATCH', 'DELETE'],
			},
		},
		description: 'Request body as JSON. See docs/swagger.yaml for field details.',
	},
];
