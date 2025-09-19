import { SoftwareProperties } from '../../Interfaces';

export const softwareGetByAgentDescription: SoftwareProperties = [
		{
				displayName: 'Agent',
				name: 'agentId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
						show: {
								operation: ['getByAgent'],
								resource: ['software'],
						},
				},
			description: 'Get software by the agent',
		},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['software'],
				operation: ['getByAgent'],
			},
		},
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
	},
];
