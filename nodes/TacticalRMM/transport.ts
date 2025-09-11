import {
	GenericValue,
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';

export async function apiRequest(
		this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
		method: IHttpRequestMethods,
		endpoint: string,
		body: IDataObject | GenericValue | GenericValue[] = {},
		qs: IDataObject = {},
) {
		const creds = await this.getCredentials('tacticalRMMApi');

		const options: IHttpRequestOptions = {
				method,
				body,
				qs,
				url: `${creds.baseUrl}${endpoint}`,
				headers: {
						'content-type': 'application/json',
						'X-API-KEY': `${creds.apiKey}`,
				},
		};

		return this.helpers.httpRequestWithAuthentication.call(this, 'tacticalRMMApi', options);
}
