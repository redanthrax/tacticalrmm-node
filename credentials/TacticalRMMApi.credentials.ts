import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class TacticalRMMApi implements ICredentialType {
	name = 'tacticalRMMApi';
	displayName = 'Tactical RMM API';
	documentationUrl = 'https://github.com/redanthrax/tacticalrmm-node';
	icon = 'file:../nodes/TacticalRMM/trmm.svg' as Icon;
	properties: INodeProperties[] = [
		{
			displayName: 'Base API URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			placeholder: 'https://api.example.com',
			required: true,
			description: 'Your Tactical RMM server URL (include https://)',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description:
				'API key for a dedicated integration user (Settings → Global Settings → API Keys). Use an integration role with least privilege—not a personal admin account.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/agents/',
			method: 'GET',
		},
	};
}
