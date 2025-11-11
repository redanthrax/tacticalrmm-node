import * as getMany from './getMany';
import * as scan from './scan';
import * as install from './install';
import { INodeProperties } from 'n8n-workflow';

export { getMany, scan, install };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['winupdate'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'Get Windows updates for an agent',
				action: 'Get many windows updates',
			},
			{
				name: 'Install',
				value: 'install',
				description: 'Install Windows updates on an agent',
				action: 'Install windows updates',
			},
			{
				name: 'Scan',
				value: 'scan',
				description: 'Scan for Windows updates on an agent',
				action: 'Scan for windows updates',
			},
		],
		default: 'getMany',
	},
	...getMany.winupdateGetManyDescription,
	...scan.winupdateScanDescription,
	...install.winupdateInstallDescription,
];
