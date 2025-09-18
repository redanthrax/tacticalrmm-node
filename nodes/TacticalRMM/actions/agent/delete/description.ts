import { AgentProperties } from '../../Interfaces';

export const agentDeleteDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['deleteAgent'],
			},
		},
		default: '',
		description: 'ID of the agent to delete',
	},
];

export { agentDeleteDescription as description };
