import { INodePropertyOptions } from 'n8n-workflow';

export interface ResourceGroupDefinition {
	key: string;
	name: string;
	resources: INodePropertyOptions[];
}

export const RESOURCE_GROUPS: ResourceGroupDefinition[] = [
	{
		key: 'agents',
		name: 'Agents',
		resources: [
			{ name: 'Agent', value: 'agent' },
			{ name: 'Check', value: 'check' },
			{ name: 'Service', value: 'service' },
			{ name: 'Software', value: 'software' },
			{ name: 'Task', value: 'task' },
			{ name: 'Windows Update', value: 'winupdate' },
		],
	},
	{
		key: 'organization',
		name: 'Organization',
		resources: [
			{ name: 'Client', value: 'client' },
			{ name: 'Site', value: 'site' },
			{ name: 'Deployment', value: 'deployment' },
		],
	},
	{
		key: 'monitoring',
		name: 'Monitoring',
		resources: [
			{ name: 'Alert', value: 'alert' },
			{ name: 'Alert Template', value: 'alertTemplate' },
		],
	},
	{
		key: 'automation',
		name: 'Automation',
		resources: [
			{ name: 'Automation Policy', value: 'automation' },
			{ name: 'Script', value: 'script' },
		],
	},
	{
		key: 'administration',
		name: 'Administration',
		resources: [
			{ name: 'API Key', value: 'apiKey' },
			{ name: 'Core', value: 'core' },
			{ name: 'Log', value: 'logs' },
			{ name: 'Role', value: 'role' },
			{ name: 'User', value: 'user' },
		],
	},
	{
		key: 'reporting',
		name: 'Reporting',
		resources: [{ name: 'Reporting', value: 'reporting' }],
	},
	{
		key: 'advanced',
		name: 'Advanced',
		resources: [{ name: 'Custom API', value: 'customApi' }],
	},
];

export const RESOURCE_GROUP_OPTIONS: INodePropertyOptions[] = RESOURCE_GROUPS.map((group) => ({
	name: group.name,
	value: group.key,
}));

export function getResourcesForGroup(resourceGroup: string): INodePropertyOptions[] {
	const group = RESOURCE_GROUPS.find((entry) => entry.key === resourceGroup);
	return group?.resources ?? [];
}
