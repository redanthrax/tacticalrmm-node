import type { INodeProperties } from 'n8n-workflow';

export const scriptDeleteSnippetDescription: INodeProperties[] = [
	{
		displayName: 'Snippet ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['deleteSnippet'],
			},
		},
		default: '',
		description: 'The ID of the snippet to delete',
	},
];

export { scriptDeleteSnippetDescription as description };
