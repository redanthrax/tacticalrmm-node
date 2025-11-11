import type { INodeProperties } from 'n8n-workflow';

export const scriptUpdateSnippetDescription: INodeProperties[] = [
	{
		displayName: 'Snippet ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['updateSnippet'],
			},
		},
		default: '',
		description: 'The ID of the snippet to update',
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
				operation: ['updateSnippet'],
			},
		},
		options: [
			{
				displayName: 'Code',
				name: 'code',
				type: 'string',
				typeOptions: {
					rows: 10,
				},
				default: '',
				description: 'The snippet code',
			},
			{
				displayName: 'Description',
				name: 'desc',
				type: 'string',
				default: '',
				description: 'Description of the snippet',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the snippet',
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
		],
	},
];

export { scriptUpdateSnippetDescription as description };
