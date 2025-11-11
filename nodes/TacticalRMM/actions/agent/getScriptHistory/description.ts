import { AgentProperties } from '../../Interfaces';

export const agentGetScriptHistoryDescription: AgentProperties = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getScriptHistory'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getScriptHistory'],
				returnAll: [false],
			},
		},
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
	},
];

export { agentGetScriptHistoryDescription as description };
