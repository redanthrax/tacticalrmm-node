import { IExecuteFunctions } from 'n8n-core';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getById(
    this: IExecuteFunctions,
    index: number,
): Promise<INodeExecutionData[]> {
    let clientId = this.getNodeParameter('clientId', index) as string;
    const qs = {} as IDataObject;
    const requestMethod = 'GET';
    const endpoint = `/clients/${clientId}`;
    const body = {} as IDataObject;

    let responseData;
    responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

    return this.helpers.returnJsonArray(responseData);
};
