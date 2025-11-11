import { SoftwareProperties } from '../../Interfaces';

export const softwareInstallGloballyDescription: SoftwareProperties = [
	{
		displayName: 'Agent IDs',
		name: 'agentIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['software'],
				operation: ['installGlobally'],
			},
		},
		default: '',
		description: 'Comma-separated list of agent IDs to install software on',
	},
	{
		displayName: 'Package Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['software'],
				operation: ['installGlobally'],
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
				operation: ['installGlobally'],
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

export { softwareInstallGloballyDescription as description };
