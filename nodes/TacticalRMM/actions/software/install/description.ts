import { SoftwareProperties } from '../../Interfaces';

export const softwareInstallDescription: SoftwareProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['software'],
				operation: ['install'],
			},
		},
		default: '',
		description: 'ID of the agent to install software on',
	},
	{
		displayName: 'Package Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['software'],
				operation: ['install'],
			},
		},
		default: '',
		description: 'Name of the software package to install (Chocolatey package name)',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['software'],
				operation: ['install'],
			},
		},
		options: [
			{
				displayName: 'Version',
				name: 'version',
				type: 'string',
				default: '',
				description: 'Specific version to install',
			},
			{
				displayName: 'Install Arguments',
				name: 'install_args',
				type: 'string',
				default: '',
				description: 'Additional installation arguments',
			},
		],
	},
];

export { softwareInstallDescription as description };
