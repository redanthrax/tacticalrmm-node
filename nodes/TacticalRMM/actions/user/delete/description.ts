import { UserProperties } from '../../Interfaces';

export const userDeleteDescription: UserProperties = [
	{
		displayName: 'User ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the user to delete',
	},
];

export { userDeleteDescription as description };
