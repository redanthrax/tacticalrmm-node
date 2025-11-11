import { AgentProperties } from '../../Interfaces';

export const agentRecoverDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['recover'],
			},
		},
		default: '',
		description: 'ID of the agent to recover',
	},
];

export { agentRecoverDescription as description };
