import { AgentProperties } from '../../Interfaces';

export const agentGetPendingActionsDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getPendingActions'],
			},
		},
		default: '',
		description: 'ID of the agent to get pending actions for',
	},
];

export { agentGetPendingActionsDescription as description };
