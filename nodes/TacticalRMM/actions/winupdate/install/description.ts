import { INodeProperties } from 'n8n-workflow';

export const winupdateInstallDescription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['winupdate'],
				operation: ['install'],
			},
		},
		required: true,
		default: '',
		description: 'ID of the agent to install Windows updates on',
	},
	{
		displayName: 'Update GUIDs',
		name: 'guids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['winupdate'],
				operation: ['install'],
			},
		},
		required: true,
		default: '',
		description: 'Comma-separated list of Windows Update GUIDs to install',
	},
];
