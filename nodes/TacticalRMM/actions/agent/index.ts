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
								name: 'Delete',
								value: 'deleteAgent',
								description: 'Delete an agent',
								action: 'Delete an agent',
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
								name: 'Get Processes',
								value: 'getProcesses',
								description: 'Get running processes on agent',
								action: 'Get agent processes',
						},
						{
								name: 'Get Tasks',
								value: 'getTasks',
								description: 'Get scheduled tasks for agent',
								action: 'Get agent tasks',
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
];
