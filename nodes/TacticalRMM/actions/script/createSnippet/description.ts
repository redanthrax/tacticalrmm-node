import type { INodeProperties } from 'n8n-workflow';

export const scriptCreateSnippetDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['createSnippet'],
			},
		},
		default: '',
		description: 'Name of the code snippet',
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		typeOptions: {
			rows: 10,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['createSnippet'],
			},
		},
		default: '',
		description: 'The snippet code',
	},
	{
		displayName: 'Shell Type',
		name: 'shell',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['createSnippet'],
			},
		},
		options: [
			{
				name: 'Batch',
				value: 'cmd',
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
		description: 'The shell type for the snippet',
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
				operation: ['createSnippet'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'desc',
				type: 'string',
				default: '',
				description: 'Description of the snippet',
			},
		],
	},
];

export { scriptCreateSnippetDescription as description };
