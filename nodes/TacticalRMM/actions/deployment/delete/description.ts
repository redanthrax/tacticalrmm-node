import { DeploymentProperties } from '../../Interfaces';

export const deploymentDeleteDescription: DeploymentProperties = [
	{
		displayName: 'Deployment ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['deployment'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the deployment to delete',
	},
];

export { deploymentDeleteDescription as description };
