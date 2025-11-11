import { AgentProperties } from '../../Interfaces';

export const agentBulkUpdateDescription: AgentProperties = [
	{
		displayName: 'Agent IDs',
		name: 'agentIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['bulkUpdate'],
			},
		},
		default: '',
		description: 'Comma-separated list of agent IDs to update',
	},
	{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['bulkUpdate'],
			},
		},
		default: '',
		description: 'Target version to update agents to (leave empty for latest)',
	},
];

export { agentBulkUpdateDescription as description };
