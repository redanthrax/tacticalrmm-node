import { UserProperties } from '../../Interfaces';

export const userGetAllDescription: UserProperties = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
	},
];

export { userGetAllDescription as description };
