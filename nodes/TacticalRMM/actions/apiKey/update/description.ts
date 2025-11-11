import { ApiKeyProperties } from '../../Interfaces';

export const apiKeyUpdateDescription: ApiKeyProperties = [
	{
		displayName: 'API Key ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the API key to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name for the API key',
			},
			{
				displayName: 'Expiration',
				name: 'expiration',
				type: 'dateTime',
				default: '',
				description: 'Expiration date for the API key',
			},
		],
	},
];

export { apiKeyUpdateDescription as description };
