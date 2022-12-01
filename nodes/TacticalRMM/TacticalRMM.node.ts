import { IExecuteFunctions } from 'n8n-core';
import * as agent from './actions/agent';
import * as client from './actions/client';
import * as alert from './actions/alert';
import * as software from './actions/software';

import {
		INodeType,
		INodeTypeDescription,
} from 'n8n-workflow';

import { loadOptions } from './methods';
import { router } from './actions/router';

export class TacticalRMM implements INodeType {
		description: INodeTypeDescription = {
				displayName: 'Tactical RMM',
				name: 'TacticalRMM',
				icon: 'file:trmm.svg',
				group: ['transorm'],
				version: 1,
				subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
				description: 'Get data from the TacticalRMM API',
				defaults: {
						name: 'Tactical RMM',
				},
				inputs: ['main'],
				outputs: ['main'],
				credentials: [
						{
								name: 'tacticalRMMApi',
								required: true,
						},
				],
				requestDefaults: {
						headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
						},
				},
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

		methods = { loadOptions };

		async execute(this: IExecuteFunctions) {
				return await router.call(this);
		}
}
