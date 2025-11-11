import { ReportingProperties } from '../../Interfaces';

export const reportingUpdateDescription: ReportingProperties = [
	{
		displayName: 'Template ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the report template to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the report template',
			},
		],
	},
];

export { reportingUpdateDescription as description };
