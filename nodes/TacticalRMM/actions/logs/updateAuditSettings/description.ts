import type { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Retention Days',
		name: 'retentionDays',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['logs'],
				operation: ['updateAuditSettings'],
			},
		},
		typeOptions: {
			minValue: 0,
			maxValue: 3650,
		},
		default: 365,
		description: 'Number of days to retain audit logs (0 = infinite)',
	},
];
