import * as agent from './actions/agent';
import * as alert from './actions/alert';
import * as automation from './actions/automation';
import * as check from './actions/check';
import * as client from './actions/client';
import * as script from './actions/script';
import * as service from './actions/service';
import * as site from './actions/site';
import * as task from './actions/task';
import * as software from './actions/software';
import * as winupdate from './actions/winupdate';
import * as alertTemplate from './actions/alertTemplate';
import * as apiKey from './actions/apiKey';
import * as core from './actions/core';
import * as deployment from './actions/deployment';
import * as role from './actions/role';
import * as user from './actions/user';
import * as reporting from './actions/reporting';
import * as logs from './actions/logs';

import {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	LoggerProxy as Logger,
	NodeConnectionType,
} from 'n8n-workflow';

export class TacticalRmm implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Tactical RMM',
		name: 'tacticalRmm',
		icon: 'file:trmm.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from the TacticalRMM API',
		documentationUrl: 'https://github.com/redanthrax/tacticalrmm-node',
		defaults: {
			name: 'Tactical RMM',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'tacticalRMMApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Agent',
						value: 'agent',
					},
					{
						name: 'Alert',
						value: 'alert',
					},
					{
						name: 'Alert Template',
						value: 'alertTemplate',
					},
					{
						name: 'API Key',
						value: 'apiKey',
					},
					{
						name: 'Automation',
						value: 'automation',
					},
					{
						name: 'Check',
						value: 'check',
					},
					{
						name: 'Client',
						value: 'client',
					},
					{
						name: 'Core',
						value: 'core',
					},
					{
						name: 'Deployment',
						value: 'deployment',
					},
					{
						name: 'Logs',
						value: 'logs',
					},
					{
						name: 'Reporting',
						value: 'reporting',
					},
					{
						name: 'Role',
						value: 'role',
					},
					{
						name: 'Script',
						value: 'script',
					},
					{
						name: 'Service',
						value: 'service',
					},
					{
						name: 'Site',
						value: 'site',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Software',
						value: 'software',
					},
					{
						name: 'Windows Updates',
						value: 'winupdate',
					},
				],
				default: 'agent',
			},
			...agent.description,
			...alert.description,
			...automation.description,
			...check.description,
			...client.description,
			...script.description,
			...service.description,
			...site.description,
			...task.description,
			...software.description,
			...winupdate.description,
			...alertTemplate.description,
			...apiKey.description,
			...core.description,
			...deployment.description,
			...role.description,
			...user.description,
			...reporting.description,
			...logs.description,
		],
	};

	methods = {
		loadOptions: {
			getClients: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				Logger.debug('Loading clients for TacticalRMM node', { node: this.getNode().name });
				const { apiRequest } = await import('./transport');
				try {
					const requestMethod = 'GET';
					const endpoint = '/clients/';
					const body = {};
					const qs = {};

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (Array.isArray(responseData)) {
						for (const client of responseData) {
							if (client.id && client.name) {
								options.push({
									name: client.name,
									value: client.id.toString(),
									description: client.name || '',
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
			getCustomFields: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				Logger.debug('Loading custom fields for TacticalRMM node', { node: this.getNode().name });
				const { apiRequest } = await import('./transport');
				const resource = this.getCurrentNodeParameter('resource') as string;

				const modelMapping: Record<string, string> = {
					agent: 'agent',
					client: 'client',
					site: 'site',
				};

				const model = modelMapping[resource];
				if (!model) {
					return [];
				}

				try {
					const requestMethod = 'GET';
					const endpoint = '/core/customfields/';
					const body = {};
					const qs = { model };

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (Array.isArray(responseData)) {
						for (const field of responseData) {
							if (field.id && field.name) {
								options.push({
									name: field.name,
									value: field.name,
									description: field.type || '',
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const { router } = await import('./actions/router');
		return await router.call(this);
	}
}