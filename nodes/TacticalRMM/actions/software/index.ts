import * as getByAgent from './getByAgent';
import * as getAll from './getAll';
import * as getChocos from './getChocos';
import * as install from './install';
import * as uninstall from './uninstall';
import * as installGlobally from './installGlobally';

import { INodeProperties } from 'n8n-workflow';

export { getByAgent, getAll, getChocos, install, uninstall, installGlobally };

export const description: INodeProperties[] = [
		{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
						show: {
								resource: ['software'],
						},
				},
	options: [
						{
								name: 'Get By Agent',
								value: 'getByAgent',
								description: 'Retrieve software by agent',
								action: 'Get software by agent',
						},
						{
								name: 'Get Chocolatey Packages',
								value: 'getChocos',
								description: 'List available Chocolatey packages',
								action: 'Get chocolatey packages',
						},
						{
								name: 'Get Many',
								value: 'getAll',
								description: 'Get many software across',
								action: 'Get many software',
						},
						{
								name: 'Install',
								value: 'install',
								description: 'Install software on an agent',
								action: 'Install software',
						},
						{
								name: 'Install Globally',
								value: 'installGlobally',
								description: 'Install software across multiple agents',
								action: 'Install software globally',
						},
						{
								name: 'Uninstall',
								value: 'uninstall',
								description: 'Uninstall software from an agent',
								action: 'Uninstall software',
						},
				],
				default: 'getAll',
		},
				...getByAgent.description,
				...getAll.description,
				...getChocos.description,
				...install.description,
				...uninstall.description,
				...installGlobally.description,
];
