import { CoreProperties } from '../../Interfaces';

export const coreTestSmsDescription: CoreProperties = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['core'],
				operation: ['testSms'],
			},
		},
		default: '',
		required: true,
		placeholder: '+1234567890',
		description: 'Phone number to send test SMS to',
	},
];

export { coreTestSmsDescription as description };
