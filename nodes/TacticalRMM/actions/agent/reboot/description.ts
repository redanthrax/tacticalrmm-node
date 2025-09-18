import { AgentProperties } from '../../Interfaces';

export const agentRebootDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['reboot'],
			},
		},
		default: '',
		description: 'ID of the agent to reboot',
	},
	{
		displayName: 'Force Reboot',
		name: 'force',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['reboot'],
			},
		},
		default: false,
		description: 'Whether to force reboot without waiting for applications to close',
	},
	{
		displayName: 'Delay (Seconds)',
		name: 'delay',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['reboot'],
			},
		},
		default: 0,
		description: 'Delay in seconds before reboot (0-3600)',
		typeOptions: {
			minValue: 0,
			maxValue: 3600,
		},
	},
];