import { RoleProperties } from '../../Interfaces';

export const roleUpdateDescription: RoleProperties = [
	{
		displayName: 'Role ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['role'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the role to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['role'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name for the role',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the role',
			},
			{
				displayName: 'Is Superuser',
				name: 'is_superuser',
				type: 'boolean',
				default: false,
				description: 'Whether the role has superuser privileges',
			},
		],
	},
];

export { roleUpdateDescription as description };
