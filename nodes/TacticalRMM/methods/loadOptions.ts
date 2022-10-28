import {
    ILoadOptionsFunctions,
    INodePropertyOptions,
    NodeOperationError,
} from 'n8n-workflow';

import { apiRequest } from '../transport';

export async function getAgents(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
    const endpoint = 'agents';
    const responseData = await apiRequest.call(this, 'GET', endpoint, {});

    if (responseData === undefined) {
        throw new NodeOperationError(this.getNode(), 'No data returned');
    }

    const returnData: INodePropertyOptions[] = [];
    for (const data of responseData) {
        returnData.push(data);
    }

    return returnData;
}

export async function getClients(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
    const endpoint = 'clients';
    const responseData = await apiRequest.call(this, 'GET', endpoint, {});

    if (responseData === undefined) {
        throw new NodeOperationError(this.getNode(), 'No data returned');
    }

    const returnData: INodePropertyOptions[] = [];
    for (const data of responseData) {
        returnData.push(data);
    }

    return returnData;
}
