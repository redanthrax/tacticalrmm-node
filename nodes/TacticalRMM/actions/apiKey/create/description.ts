import { ApiKeyProperties } from '../../Interfaces';

export const apiKeyCreateDescription: ApiKeyProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name for the API key',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['create'],
			},
		},
		options: [
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

export { apiKeyCreateDescription as description };
