import { INodeProperties } from 'n8n-workflow';

export const alertUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Alert ID',
		name: 'alertId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['update'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the alert to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['alert'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Resolved',
				name: 'resolved',
				type: 'boolean',
				default: false,
				description: 'Whether the alert is resolved',
			},
			{
				displayName: 'Snoozed',
				name: 'snoozed',
				type: 'boolean',
				default: false,
				description: 'Whether the alert is snoozed',
			},
			{
				displayName: 'Snooze Until',
				name: 'snooze_until',
				type: 'dateTime',
				default: '',
				description: 'Snooze the alert until this date/time',
			},
		],
	},
];
