import * as deleteAllPendingActions from './deleteAllPendingActions';
import * as deletePendingActionById from './deletePendingActionById';
import * as getPendingActionById from './getPendingActionById';
import * as getPendingActions from './getPendingActions';
import * as updateAuditSettings from './updateAuditSettings';
import * as updateDebugSettings from './updateDebugSettings';

import { INodeProperties } from 'n8n-workflow';

export {
	deleteAllPendingActions,
	deletePendingActionById,
	getPendingActionById,
	getPendingActions,
	updateAuditSettings,
	updateDebugSettings,
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['logs'],
			},
		},
		options: [
			{
				name: 'Delete All Pending Actions',
				value: 'deleteAllPendingActions',
				description: 'Delete all pending actions',
				action: 'Delete all pending actions',
			},
			{
				name: 'Delete Pending Action By ID',
				value: 'deletePendingActionById',
				description: 'Delete a specific pending action',
				action: 'Delete pending action by ID',
			},
			{
				name: 'Get Pending Action By ID',
				value: 'getPendingActionById',
				description: 'Get a specific pending action',
				action: 'Get pending action by ID',
			},
			{
				name: 'Get Pending Actions',
				value: 'getPendingActions',
				description: 'Get all pending actions',
				action: 'Get pending actions',
			},
			{
				name: 'Update Audit Log Settings',
				value: 'updateAuditSettings',
				description: 'Update audit log retention settings',
				action: 'Update audit log settings',
			},
			{
				name: 'Update Debug Log Settings',
				value: 'updateDebugSettings',
				description: 'Update debug log retention settings',
				action: 'Update debug log settings',
			},
		],
		default: 'getPendingActions',
	},
	...getPendingActions.description,
	...deleteAllPendingActions.description,
	...getPendingActionById.description,
	...deletePendingActionById.description,
	...updateAuditSettings.description,
	...updateDebugSettings.description,
];
