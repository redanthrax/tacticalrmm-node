import { AlertTemplateProperties } from '../../Interfaces';

export const alertTemplateUpdateDescription: AlertTemplateProperties = [
	{
		displayName: 'Template ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['alertTemplate'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the alert template to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['alertTemplate'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the alert template',
			},
			{
				displayName: 'Action',
				name: 'action',
				type: 'options',
				options: [
					{name: 'Email', value: 'email'},
					{name: 'SMS', value: 'sms'},
					{name: 'Dashboard', value: 'dashboard'},
				],
				default: 'email',
				description: 'Alert action type',
			},
			{
				displayName: 'Email Recipients',
				name: 'email_recipients',
				type: 'string',
				default: '',
				description: 'Comma-separated email addresses',
			},
			{
				displayName: 'Text Recipients',
				name: 'text_recipients',
				type: 'string',
				default: '',
				description: 'Comma-separated phone numbers',
			},
		],
	},
];

export { alertTemplateUpdateDescription as description };
