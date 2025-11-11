import { DeploymentProperties } from '../../Interfaces';

export const deploymentCreateDescription: DeploymentProperties = [
	{
		displayName: 'Client Name or ID',
		name: 'client',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['deployment'],
				operation: ['create'],
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getClients',
		},
		default: '',
		description: 'Client for the deployment',
	},
	{
		displayName: 'Site Name or ID',
		name: 'site',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['deployment'],
				operation: ['create'],
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getSites',
		},
		default: '',
		description: 'Site for the deployment',
	},
	{
		displayName: 'Install Method',
		name: 'install_method',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['deployment'],
				operation: ['create'],
			},
		},
		options: [
			{name: 'EXE', value: 'exe'},
			{name: 'Manual', value: 'manual'},
			{name: 'PowerShell', value: 'powershell'},
		],
		default: 'exe',
		description: 'Installation method',
	},
];

export { deploymentCreateDescription as description };
