import { AgentProperties } from '../../Interfaces';

export const agentGetChecksDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getChecks'],
			},
		},
		default: '',
		description: 'ID of the agent to get checks from',
	},
];