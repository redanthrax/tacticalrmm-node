import { AgentProperties } from '../../Interfaces';

export const agentPingDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['ping'],
			},
		},
		default: '',
		description: 'ID of the agent to ping',
	},
];

export { agentPingDescription as description };
