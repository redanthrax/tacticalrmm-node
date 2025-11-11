import { DeploymentProperties } from '../../Interfaces';

export const deploymentGetByIdDescription: DeploymentProperties = [
	{
		displayName: 'Deployment ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['deployment'],
				operation: ['getById'],
			},
		},
		default: '',
		description: 'ID of the deployment',
	},
];

export { deploymentGetByIdDescription as description };
