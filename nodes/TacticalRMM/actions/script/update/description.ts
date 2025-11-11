import { INodeProperties } from 'n8n-workflow';

export const scriptUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Script ID',
		name: 'scriptId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['update'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the script to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['update'],
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the script',
			},
			{
				displayName: 'Run As User',
				name: 'run_as_user',
				type: 'boolean',
				default: false,
				description: 'Whether to run as logged in user',
			},
			{
				displayName: 'Script Code',
				name: 'code',
				type: 'string',
				typeOptions: {
					rows: 10,
				},
				default: '',
				description: 'The script code to execute',
			},
			{
				displayName: 'Script Type',
				name: 'script_type',
				type: 'options',
				options: [
					{
						name: 'Built-in',
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
				displayName: 'Shell Type',
				name: 'shell',
				type: 'options',
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
				displayName: 'Timeout',
				name: 'timeout',
				type: 'number',
				default: 90,
				description: 'Script timeout in seconds',
			},
		],
	},
];
