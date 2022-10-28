import {
		IAuthenticateGeneric,
		ICredentialType,
		INodeProperties,
} from 'n8n-workflow';

export class TacticalRMMApi implements ICredentialType {
		name = 'tacticalRMMApi';
		displayName = 'Tactical RMM Api Credentials API';
		documentationUrl = 'https://github.com/redanthrax/tacticalrmm-node';
		properties: INodeProperties[] = [
				{
						displayName: 'Base API Url',
						name: 'baseUrl',
						type: 'string',
						default: '',
						placeholder: 'https://api.example.com',
				},
				{
						displayName: 'API Key',
						name: 'apiKey',
						type: 'string',
						typeOptions: {
								password: true,
						},
						default: '',
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
}
