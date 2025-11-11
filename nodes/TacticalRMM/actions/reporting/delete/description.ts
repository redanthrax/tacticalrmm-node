import { ReportingProperties } from '../../Interfaces';

export const reportingDeleteDescription: ReportingProperties = [
	{
		displayName: 'Template ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the report template to delete',
	},
];

export { reportingDeleteDescription as description };
