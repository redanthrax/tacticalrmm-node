import {
    ILoadOptionsFunctions,
    INodePropertyOptions,
    NodeOperationError,
} from 'n8n-workflow';

import { apiRequest } from '../transport';

export async function getClients(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
    const endpoint = '/clients';
    const responseData = await apiRequest.call(this, 'GET', endpoint, {});

    if(responseData === undefined) {
        throw new NodeOperationError(this.getNode(), 'No data returned');
    }

    const returnData: INodePropertyOptions[] = [];
    let name: string;
    for(const data of responseData) {
        returnData.push({
            name: data.name,
            value: data.id
        });
    }

    returnData.sort((a, b) => {
        if(a.name < b.name) {
            return -1;
        }
        if(a.name > b.name) {
            return 1;
        }
        
        return 0;
    });

    return returnData;
}
