import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['site'],
				operation: ['update'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the site to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['site'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Client Name or ID',
				name: 'client',
				type: 'options',
				default: '',
				description: 'The client for the site. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
				typeOptions: {
					loadOptionsMethod: 'getClients',
				},
				options: [],
			},
			{
				displayName: 'Custom Fields',
				name: 'custom_fields',
				type: 'fixedCollection',
				default: {},
				description: 'Custom fields for the site',
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the site',
			},
		],
	},
];
