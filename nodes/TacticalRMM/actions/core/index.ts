import * as clearCache from './clearCache';
import * as getDashInfo from './getDashInfo';
import * as getVersion from './getVersion';
import * as testEmail from './testEmail';
import * as testSms from './testSms';

import { INodeProperties } from 'n8n-workflow';

export { clearCache, getDashInfo, getVersion, testEmail, testSms };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['core'],
			},
		},
		options: [
			{
				name: 'Clear Cache',
				value: 'clearCache',
				description: 'Clear the server cache',
				action: 'Clear cache',
			},
			{
				name: 'Get Dashboard Info',
				value: 'getDashInfo',
				description: 'Get dashboard information and statistics',
				action: 'Get dashboard info',
			},
			{
				name: 'Get Version',
				value: 'getVersion',
				description: 'Get TacticalRMM server version',
				action: 'Get version',
			},
			{
				name: 'Test Email',
				value: 'testEmail',
				description: 'Test email configuration',
				action: 'Test email',
			},
			{
				name: 'Test SMS',
				value: 'testSms',
				description: 'Test SMS configuration',
				action: 'Test SMS',
			},
		],
		default: 'getDashInfo',
	},
	...clearCache.description,
	...getDashInfo.description,
	...getVersion.description,
	...testEmail.description,
	...testSms.description,
];
