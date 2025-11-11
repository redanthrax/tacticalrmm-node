import { INodeProperties } from 'n8n-workflow';

export const scriptTestDescription: INodeProperties[] = [
	{
		displayName: 'Script ID',
		name: 'scriptId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['test'],
			},
		},
		default: '',
		description: 'The ID of the script to test',
	},
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['test'],
			},
		},
		default: '',
		description: 'The ID of the agent to test the script on',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['test'],
			},
		},
		options: [
			{
				displayName: 'Arguments',
				name: 'args',
				type: 'string',
				default: '',
				description: 'Command line arguments for the script',
			},
			{
				displayName: 'Environment Variables',
				name: 'env_vars',
				type: 'json',
				default: '{}',
				description: 'Environment variables as JSON object',
			},
			{
				displayName: 'Timeout',
				name: 'timeout',
				type: 'number',
				default: 90,
				description: 'Script timeout in seconds',
			},
		],
	},
];

export { scriptTestDescription as description };
