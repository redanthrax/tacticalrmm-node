import { SoftwareProperties } from '../../Interfaces';

export const softwareUninstallDescription: SoftwareProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['software'],
				operation: ['uninstall'],
			},
		},
		default: '',
		description: 'ID of the agent to uninstall software from',
	},
	{
		displayName: 'Package Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['software'],
				operation: ['uninstall'],
			},
		},
		default: '',
		description: 'Name of the software package to uninstall',
	},
];

export { softwareUninstallDescription as description };
