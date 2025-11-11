import { INodeProperties } from 'n8n-workflow';

export const serviceGetByNameDescription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['service'],
				operation: ['getByName'],
			},
		},
		required: true,
		default: '',
		description: 'ID of the agent',
	},
	{
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['service'],
				operation: ['getByName'],
			},
		},
		required: true,
		default: '',
		description: 'Name of the service to retrieve',
	},
];
