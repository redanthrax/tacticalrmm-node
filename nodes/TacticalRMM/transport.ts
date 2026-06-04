import {
	GenericValue,
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';

import { ensureTrailingSlash } from './urlUtils';

export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	qs: IDataObject = {},
) {
	const creds = await this.getCredentials('tacticalRMMApi');
	const path = ensureTrailingSlash(endpoint);

	const options: IHttpRequestOptions = {
		method,
		body,
		qs,
		url: `${creds.baseUrl}${path}`,
		headers: {
			'content-type': 'application/json',
		},
	};

	return this.helpers.httpRequestWithAuthentication.call(this, 'tacticalRMMApi', options);
}

export { apiRequest as tacticalApiRequest };
