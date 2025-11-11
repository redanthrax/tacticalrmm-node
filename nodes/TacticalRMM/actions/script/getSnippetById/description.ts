import type { INodeProperties } from 'n8n-workflow';

export const scriptGetSnippetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Snippet ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['script'],
				operation: ['getSnippetById'],
			},
		},
		default: '',
		description: 'The ID of the code snippet to retrieve',
	},
];

export { scriptGetSnippetByIdDescription as description };
