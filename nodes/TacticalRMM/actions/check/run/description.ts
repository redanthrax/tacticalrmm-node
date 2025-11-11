import { INodeProperties } from 'n8n-workflow';

export const checkRunDescription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['run'],
			},
		},
		required: true,
		default: '',
		description: 'The ID of the agent to run checks on',
	},
	{
		displayName: 'Check IDs',
		name: 'checkIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['check'],
				operation: ['run'],
			},
		},
		default: '',
		description: 'Comma-separated list of check IDs to run (leave empty to run all checks)',
	},
];
