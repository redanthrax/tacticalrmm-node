import * as getAll from './getAll';
import * as getById from './getById';
import * as getByClient from './getByClient';
import * as update from './update';
import * as deleteAgent from './delete';
import * as runCommand from './runCommand';
import * as reboot from './reboot';
import * as getProcesses from './getProcesses';
import * as getChecks from './getChecks';
import * as shutdown from './shutdown';
import * as runScript from './runScript';
import * as getTasks from './getTasks';
import * as ping from './ping';
import * as getNotes from './getNotes';
import * as addNote from './addNote';
import * as getEventLog from './getEventLog';
import * as getHistory from './getHistory';
import * as bulkAction from './bulkAction';
import * as wakeOnLan from './wakeOnLan';
import * as recover from './recover';
import * as getPendingActions from './getPendingActions';
import * as deletePendingActions from './deletePendingActions';
import * as getScriptHistory from './getScriptHistory';
import * as getVersions from './getVersions';
import * as bulkRecovery from './bulkRecovery';
import * as bulkMaintenanceMode from './bulkMaintenanceMode';
import * as bulkUpdate from './bulkUpdate';

import { INodeProperties } from 'n8n-workflow';

export {
	getAll,
	getById,
	getByClient,
	update,
	deleteAgent,
	runCommand,
	reboot,
	getProcesses,
	getChecks,
	shutdown,
	runScript,
	getTasks,
	ping,
	getNotes,
	addNote,
	getEventLog,
	getHistory,
	bulkAction,
	wakeOnLan,
	recover,
	getPendingActions,
	deletePendingActions,
	getScriptHistory,
	getVersions,
	bulkRecovery,
	bulkMaintenanceMode,
	bulkUpdate,
};

export const description: INodeProperties[] = [
		{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
						show: {
								resource: ['agent'],
						},
				},
				options: [
						{
								name: 'Add Note',
								value: 'addNote',
								description: 'Add a note to the agent',
								action: 'Add agent note',
						},
						{
								name: 'Bulk Action',
								value: 'bulkAction',
								description: 'Perform bulk action on multiple agents',
								action: 'Bulk action on agents',
						},
						{
								name: 'Bulk Maintenance Mode',
								value: 'bulkMaintenanceMode',
								description: 'Set maintenance mode for multiple agents',
								action: 'Set bulk maintenance mode',
						},
						{
								name: 'Bulk Recovery',
								value: 'bulkRecovery',
								description: 'Get bulk agent recovery status',
								action: 'Get bulk recovery status',
						},
						{
								name: 'Bulk Update',
								value: 'bulkUpdate',
								description: 'Update multiple agents',
								action: 'Bulk update agents',
						},
						{
								name: 'Delete',
								value: 'deleteAgent',
								description: 'Delete an agent',
								action: 'Delete an agent',
						},
						{
								name: 'Delete Pending Actions',
								value: 'deletePendingActions',
								description: 'Clear pending actions for an agent',
								action: 'Delete pending actions',
						},
						{
								name: 'Get By Client',
								value: 'getByClient',
								description: 'Get agents by Client',
								action: 'Get agents by client',
						},
						{
								name: 'Get By ID',
								value: 'getById',
								description: 'Get a agent by ID',
								action: 'Get an agent by ID',
						},
						{
								name: 'Get Checks',
								value: 'getChecks',
								description: 'Get checks for agent',
								action: 'Get agent checks',
						},
						{
								name: 'Get Event Log',
								value: 'getEventLog',
								description: 'Get event log from agent',
								action: 'Get agent event log',
						},
						{
								name: 'Get History',
								value: 'getHistory',
								description: 'Get agent history',
								action: 'Get agent history',
						},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Retrieve many agents',
						action: 'Get many agents',
					},
					{
						name: 'Get Notes',
						value: 'getNotes',
						description: 'Get notes for agent',
						action: 'Get agent notes',
					},
					{
						name: 'Get Pending Actions',
						value: 'getPendingActions',
						description: 'Get pending actions for an agent',
						action: 'Get pending actions',
					},
						{
								name: 'Get Processes',
								value: 'getProcesses',
								description: 'Get running processes on agent',
								action: 'Get agent processes',
						},
						{
								name: 'Get Script History',
								value: 'getScriptHistory',
								description: 'Get script execution history',
								action: 'Get script history',
						},
						{
								name: 'Get Tasks',
								value: 'getTasks',
								description: 'Get scheduled tasks for agent',
								action: 'Get agent tasks',
						},
						{
								name: 'Get Versions',
								value: 'getVersions',
								description: 'Get agent software versions',
								action: 'Get agent versions',
						},
						{
								name: 'Ping',
								value: 'ping',
								description: 'Ping the agent',
								action: 'Ping agent',
						},
						{
								name: 'Reboot',
								value: 'reboot',
								description: 'Reboot an agent',
								action: 'Reboot an agent',
						},
						{
								name: 'Recover',
								value: 'recover',
								description: 'Recover a disconnected agent',
								action: 'Recover agent',
						},
						{
								name: 'Run Command',
								value: 'runCommand',
								description: 'Execute a command on agent',
								action: 'Run command on agent',
						},
						{
								name: 'Run Script',
								value: 'runScript',
								description: 'Run a script on agent',
								action: 'Run script on agent',
						},
						{
								name: 'Shutdown',
								value: 'shutdown',
								description: 'Shutdown an agent',
								action: 'Shutdown an agent',
						},
						{
								name: 'Update',
								value: 'update',
								description: 'Update an agent',
								action: 'Update an agent',
						},
						{
								name: 'Wake On LAN',
								value: 'wakeOnLan',
								description: 'Wake an agent via Wake-on-LAN',
								action: 'Wake agent',
						},
				],
				default: 'getAll',
		},
		...getAll.description,
		...getById.description,
		...getByClient.description,
		...update.description,
		...deleteAgent.description,
		...runCommand.description,
		...reboot.description,
		...getProcesses.description,
		...getChecks.description,
		...shutdown.description,
		...runScript.description,
		...getTasks.description,
		...ping.description,
		...getNotes.description,
		...addNote.description,
		...getEventLog.description,
		...getHistory.description,
		...bulkAction.description,
		...wakeOnLan.description,
		...recover.description,
		...getPendingActions.description,
		...deletePendingActions.description,
		...getScriptHistory.description,
		...getVersions.description,
		...bulkRecovery.description,
		...bulkMaintenanceMode.description,
		...bulkUpdate.description,
];
