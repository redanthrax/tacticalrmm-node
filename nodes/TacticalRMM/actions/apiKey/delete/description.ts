import { ApiKeyProperties } from '../../Interfaces';

export const apiKeyDeleteDescription: ApiKeyProperties = [
	{
		displayName: 'API Key ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the API key to delete',
	},
];

export { apiKeyDeleteDescription as description };
