import { DeploymentProperties } from '../../Interfaces';

export const deploymentGenerateDescription: DeploymentProperties = [
	{
		displayName: 'Deployment ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['deployment'],
				operation: ['generate'],
			},
		},
		default: '',
		description: 'ID of the deployment to generate installer for',
	},
];

export { deploymentGenerateDescription as description };
