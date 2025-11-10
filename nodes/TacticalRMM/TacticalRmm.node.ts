import * as agent from './actions/agent';
import * as alert from './actions/alert';
import * as client from './actions/client';
import * as software from './actions/software';

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
						name: 'Client',
						value: 'client',
					},
					{
						name: 'Software',
						value: 'software',
					},
				],
				default: 'agent',
			},
			...agent.description,
			...alert.description,
			...client.description,
			...software.description,
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
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const { router } = await import('./actions/router');
		return await router.call(this);
	}
}