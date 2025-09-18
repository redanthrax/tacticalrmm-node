import { AgentProperties } from '../../Interfaces';

export const agentRunScriptDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['runScript'],
			},
		},
		default: '',
		description: 'ID of the agent to run script on',
	},
	{
		displayName: 'Script ID',
		name: 'scriptId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['runScript'],
			},
		},
		default: '',
		description: 'ID of the script to run',
	},
	{
		displayName: 'Arguments',
		name: 'args',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['runScript'],
			},
		},
		default: '',
		description: 'Arguments to pass to the script (space-separated)',
	},
	{
		displayName: 'Timeout (Seconds)',
		name: 'timeout',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['runScript'],
			},
		},
		default: 300,
		description: 'Timeout in seconds for script execution (1-3600)',
		typeOptions: {
			minValue: 1,
			maxValue: 3600,
		},
	},
];