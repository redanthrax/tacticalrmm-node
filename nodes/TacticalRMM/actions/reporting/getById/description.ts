import { ReportingProperties } from '../../Interfaces';

export const reportingGetByIdDescription: ReportingProperties = [
	{
		displayName: 'Template ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['getById'],
			},
		},
		default: '',
		description: 'ID of the report template',
	},
];

export { reportingGetByIdDescription as description };
