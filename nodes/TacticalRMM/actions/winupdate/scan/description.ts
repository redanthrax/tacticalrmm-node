import { INodeProperties } from 'n8n-workflow';

export const winupdateScanDescription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['winupdate'],
				operation: ['scan'],
			},
		},
		required: true,
		default: '',
		description: 'ID of the agent to scan for Windows updates',
	},
];
