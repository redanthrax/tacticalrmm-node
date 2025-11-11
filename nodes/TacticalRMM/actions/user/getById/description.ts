import { UserProperties } from '../../Interfaces';

export const userGetByIdDescription: UserProperties = [
	{
		displayName: 'User ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['getById'],
			},
		},
		default: '',
		description: 'ID of the user',
	},
];

export { userGetByIdDescription as description };
