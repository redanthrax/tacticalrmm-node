import { RoleProperties } from '../../Interfaces';

export const roleDeleteDescription: RoleProperties = [
	{
		displayName: 'Role ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['role'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the role to delete',
	},
];

export { roleDeleteDescription as description };
