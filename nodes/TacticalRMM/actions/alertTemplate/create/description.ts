import { AlertTemplateProperties } from '../../Interfaces';

export const alertTemplateCreateDescription: AlertTemplateProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['alertTemplate'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the alert template',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['alertTemplate'],
				operation: ['create'],
			},
		},
		options: [
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

export { alertTemplateCreateDescription as description };
