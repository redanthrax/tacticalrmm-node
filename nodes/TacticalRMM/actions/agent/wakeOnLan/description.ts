import { AgentProperties } from '../../Interfaces';

export const agentWakeOnLanDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['wakeOnLan'],
			},
		},
		default: '',
		description: 'ID of the agent to wake',
	},
];

export { agentWakeOnLanDescription as description };
