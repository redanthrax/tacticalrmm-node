import { AgentProperties } from '../../Interfaces';

export const agentDeletePendingActionsDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['deletePendingActions'],
			},
		},
		default: '',
		description: 'ID of the agent to clear pending actions for',
	},
];

export { agentDeletePendingActionsDescription as description };
