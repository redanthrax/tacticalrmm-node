import { AgentProperties } from '../../Interfaces';

export const agentGetProcessesDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getProcesses'],
			},
		},
		default: '',
		description: 'ID of the agent to get processes from',
	},
];