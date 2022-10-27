import { IExecuteFunctions, IHookFunctions, ILoadOptionsFunctions } from 'n8n-core';

import {
    GenericValue,
    IDataObject,
    IHttpRequestMethods,
    IHttpRequestOptions,
    NodeOperationError,
} from 'n8n-workflow';

export async function apiRequest(
    this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
    method: IHttpRequestMethods,
    endpoint: string,
    body: IDataObject | GenericValue | GenericValue[] = {},
    qs: IDataObject = {},
) {
    const creds = await this.getCredentials('TacticalRMMApi');

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

    return this.helpers.httpRequestWithAuthentication.call(this, 'TacticalRMMApi', options);
}
