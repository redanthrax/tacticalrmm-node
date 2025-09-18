import { AgentProperties } from '../../Interfaces';

export const agentShutdownDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['shutdown'],
			},
		},
		default: '',
		description: 'ID of the agent to shutdown',
	},
];