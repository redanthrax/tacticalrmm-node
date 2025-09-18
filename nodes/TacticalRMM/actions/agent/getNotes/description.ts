import { AgentProperties } from '../../Interfaces';

export const agentGetNotesDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getNotes'],
			},
		},
		default: '',
		description: 'ID of the agent to get notes for',
	},
];

export { agentGetNotesDescription as description };
