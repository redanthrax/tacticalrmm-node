import { RoleProperties } from '../../Interfaces';

export const roleCreateDescription: RoleProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['role'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name for the role',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['role'],
				operation: ['create'],
			},
		},
		options: [
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

export { roleCreateDescription as description };
