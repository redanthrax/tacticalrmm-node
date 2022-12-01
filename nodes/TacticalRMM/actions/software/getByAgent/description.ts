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
];
