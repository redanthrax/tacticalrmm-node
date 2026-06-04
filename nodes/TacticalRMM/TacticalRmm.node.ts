import { RESOURCE_GROUP_OPTIONS } from './resourceGroups';
import { loadOptions } from './methods';
import * as customApi from './actions/customApi';
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
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
} from 'n8n-workflow';

export class TacticalRmm implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Tactical RMM',
		name: 'tacticalRmm',
		icon: 'file:trmm.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from the Tactical RMM API',
		documentationUrl: 'https://github.com/redanthrax/tacticalrmm-node',
		defaults: {
			name: 'Tactical RMM',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'tacticalRMMApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource Group',
				name: 'resourceGroup',
				type: 'options',
				noDataExpression: true,
				options: RESOURCE_GROUP_OPTIONS,
				default: 'agents',
				description: 'The API area to operate on',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				typeOptions: {
					loadOptionsMethod: 'getResources',
					loadOptionsDependsOn: ['resourceGroup'],
				},
				default: 'agent',
				description: 'The resource within the selected group',
			},
			...customApi.description,
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
		loadOptions,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		try {
			const { router } = await import('./actions/router');
			return await router.call(this);
		} catch (error) {
			if (this.continueOnFail()) {
				return [this.helpers.returnJsonArray({ error: (error as Error).message })];
			}
			const { toNodeApiError } = await import('./errors');
			throw toNodeApiError(this, error);
		}
	}
}
