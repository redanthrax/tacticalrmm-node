import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		required: true,
		default: '',
		description: 'The name of the client',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Custom Fields',
				name: 'custom_fields',
				type: 'fixedCollection',
				default: {},
				description: 'Custom fields for the client',
				placeholder: 'Add Custom Field',
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						name: 'fields',
						displayName: 'Field',
						values: [
							{
								displayName: 'Field Name or ID',
								name: 'name',
								type: 'options',
								default: '',
								description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
								typeOptions: {
									loadOptionsMethod: 'getCustomFields',
								},
								options: [],
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'The value for this custom field',
							},
						],
					},
				],
			},
			{
				displayName: 'Site Name',
				name: 'site_name',
				type: 'string',
				default: '',
				description: 'The name of the default site for the client',
			},
		],
	},
];
