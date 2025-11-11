import { AlertTemplateProperties } from '../../Interfaces';

export const alertTemplateDeleteDescription: AlertTemplateProperties = [
	{
		displayName: 'Template ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['alertTemplate'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the alert template to delete',
	},
];

export { alertTemplateDeleteDescription as description };
