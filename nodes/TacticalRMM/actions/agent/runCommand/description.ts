import { AgentProperties } from '../../Interfaces';

export const agentRunCommandDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['runCommand'],
			},
		},
		default: '',
		description: 'ID of the agent to run command on',
	},
	{
		displayName: 'Command',
		name: 'command',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['runCommand'],
			},
		},
		default: '',
		description: 'Command to execute on the agent',
		typeOptions: {
			rows: 3,
		},
	},
	{
		displayName: 'Shell',
		name: 'shell',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['runCommand'],
			},
		},
		options: [
			{
				name: 'CMD',
				value: 'cmd',
				description: 'Windows Command Prompt',
			},
			{
				name: 'PowerShell',
				value: 'powershell',
				description: 'Windows PowerShell',
			},
			{
				name: 'Bash',
				value: 'bash',
				description: 'Bash shell (Linux/macOS)',
			},
			{
				name: 'Shell',
				value: 'sh',
				description: 'Default shell (Linux/macOS)',
			},
		],
		default: 'cmd',
		description: 'Shell to use for command execution',
	},
	{
		displayName: 'Timeout (Seconds)',
		name: 'timeout',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['runCommand'],
			},
		},
		default: 300,
		description: 'Timeout in seconds for command execution (1-3600)',
		typeOptions: {
			minValue: 1,
			maxValue: 3600,
		},
	},
];