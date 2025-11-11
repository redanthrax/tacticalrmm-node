import { ReportingProperties } from '../../Interfaces';

export const reportingCreateDescription: ReportingProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the report template',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Template Type',
				name: 'template_type',
				type: 'options',
				options: [
					{name: 'Agent', value: 'agent'},
					{name: 'Client', value: 'client'},
					{name: 'Site', value: 'site'},
				],
				default: 'agent',
				description: 'Type of report template',
			},
		],
	},
];

export { reportingCreateDescription as description };
