import { AgentProperties } from '../../Interfaces';

export const agentGetEventLogDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getEventLog'],
			},
		},
		default: '',
		description: 'ID of the agent to get event log for',
	},
	{
		displayName: 'Log Name',
		name: 'logName',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getEventLog'],
			},
		},
		default: 'Application',
		options: [
			{
				name: 'Application',
				value: 'Application',
			},
			{
				name: 'System',
				value: 'System',
			},
			{
				name: 'Security',
				value: 'Security',
			},
		],
		description: 'The event log to retrieve',
	},
	{
		displayName: 'Days',
		name: 'days',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getEventLog'],
			},
		},
	default: 1,
	description: 'Number of days to look back for events',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getEventLog'],
			},
		},
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
	},
];

export { agentGetEventLogDescription as description };
