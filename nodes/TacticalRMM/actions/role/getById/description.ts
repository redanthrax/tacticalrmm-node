import { RoleProperties } from '../../Interfaces';

export const roleGetByIdDescription: RoleProperties = [
	{
		displayName: 'Role ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['role'],
				operation: ['getById'],
			},
		},
		default: '',
		description: 'ID of the role to retrieve',
	},
];

export { roleGetByIdDescription as description };
