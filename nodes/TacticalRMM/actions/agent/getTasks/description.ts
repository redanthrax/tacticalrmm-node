import { AgentProperties } from '../../Interfaces';

export const agentGetTasksDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getTasks'],
			},
		},
		default: '',
		description: 'ID of the agent to get tasks from',
	},
];