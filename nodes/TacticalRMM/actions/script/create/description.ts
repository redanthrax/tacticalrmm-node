import { INodeProperties } from 'n8n-workflow';

export const scriptCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['create'],
			},
		},
		required: true,
		default: '',
		description: 'Name of the script',
	},
	{
		displayName: 'Shell Type',
		name: 'shell',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Batch',
				value: 'cmd',
			},
			{
				name: 'Datto',
				value: 'datto',
			},
			{
				name: 'PowerShell',
				value: 'powershell',
			},
			{
				name: 'Python',
				value: 'python',
			},
			{
				name: 'Shell',
				value: 'shell',
			},
		],
		default: 'powershell',
		description: 'The shell type for the script',
	},
	{
		displayName: 'Script Code',
		name: 'code',
		type: 'string',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['create'],
			},
		},
		required: true,
		default: '',
		description: 'The script code to execute',
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
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Arguments',
				name: 'args',
				type: 'string',
				default: '',
				description: 'Default command line arguments',
			},
			{
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				description: 'Category for organizing scripts',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of what the script does',
			},
			{
				displayName: 'Environment Variables',
				name: 'env_vars',
				type: 'string',
				default: '',
				description: 'Environment variables (JSON string)',
			},
			{
				displayName: 'Favorite',
				name: 'favorite',
				type: 'boolean',
				default: false,
				description: 'Whether to mark as favorite',
			},
			{
				displayName: 'Run As User',
				name: 'run_as_user',
				type: 'boolean',
				default: false,
				description: 'Whether to run as logged in user',
			},
			{
				displayName: 'Script Type',
				name: 'script_type',
				type: 'options',
				options: [
					{
						name: 'Built-In',
						value: 'builtin',
					},
					{
						name: 'User Script',
						value: 'userdefined',
					},
				],
				default: 'userdefined',
				description: 'Type of script',
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
