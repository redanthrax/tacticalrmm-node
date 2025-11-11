import { AlertTemplateProperties } from '../../Interfaces';

export const alertTemplateGetByIdDescription: AlertTemplateProperties = [
	{
		displayName: 'Template ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['alertTemplate'],
				operation: ['getById'],
			},
		},
		default: '',
		description: 'ID of the alert template',
	},
];

export { alertTemplateGetByIdDescription as description };
