import { AgentProperties } from '../../Interfaces';

export const agentGetHistoryDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getHistory'],
			},
		},
		default: '',
		description: 'ID of the agent to get history for',
	},
	{
		displayName: 'Time Filter',
		name: 'timeFilter',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getHistory'],
			},
		},
		default: '1',
		options: [
			{
				name: 'Last 24 Hours',
				value: '1',
			},
			{
				name: 'Last 7 Days',
				value: '7',
			},
			{
				name: 'Last 30 Days',
				value: '30',
			},
			{
				name: 'Last 90 Days',
				value: '90',
			},
		],
	description: 'Time period for history retrieval',
	},
];

export { agentGetHistoryDescription as description };
