import type { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Retention Days',
		name: 'retentionDays',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['logs'],
				operation: ['updateDebugSettings'],
			},
		},
		typeOptions: {
			minValue: 0,
			maxValue: 3650,
		},
		default: 30,
		description: 'Number of days to retain debug logs (0 = infinite)',
	},
];
