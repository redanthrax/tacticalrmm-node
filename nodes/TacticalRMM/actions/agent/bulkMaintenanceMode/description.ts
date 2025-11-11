import { AgentProperties } from '../../Interfaces';

export const agentBulkMaintenanceModeDescription: AgentProperties = [
	{
		displayName: 'Agent IDs',
		name: 'agentIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['bulkMaintenanceMode'],
			},
		},
		default: '',
		description: 'Comma-separated list of agent IDs to set maintenance mode for',
	},
	{
		displayName: 'Maintenance Mode',
		name: 'maintenanceMode',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['bulkMaintenanceMode'],
			},
		},
		default: true,
		description: 'Whether to enable or disable maintenance mode',
	},
];

export { agentBulkMaintenanceModeDescription as description };
