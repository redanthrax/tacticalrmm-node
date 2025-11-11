import { CoreProperties } from '../../Interfaces';

export const coreTestEmailDescription: CoreProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['core'],
				operation: ['testEmail'],
			},
		},
		default: '',
		required: true,
		placeholder: 'test@example.com',
		description: 'Email address to send test email to',
	},
];

export { coreTestEmailDescription as description };
