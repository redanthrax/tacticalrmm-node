import { IExecuteFunctions } from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
} from 'n8n-workflow';

import * as agents from './agents';
import * as alerts from './alerts';
import * as clients from './clients';
import * as sites from './sites';
import { TacticalRMM } from './Interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const operationResult: INodeExecutionData[] = [];
    let responseData: IDataObject | IDataObject[] = [];

    for (let i = 0; i < items.length; i++) {
        const resource = this.getNodeParameter<TacticalRMM>('resource', i)
        let operation = this.getNodeParameter('operation', i);

        const tacticalrmm = {
            resource,
            operation,
        } as TacticalRMM;

        try {
            switch(tacticalrmm.resource) {
                case 'agents':
                    responseData = await agents[tacticalrmm.operation].execute.call(this, i);
                    break;
                case 'alerts':
                    responseData = await alerts[tacticalrmm.operation].execute.call(this, i);
                    break;
                case 'clients':
                    responseData = await clients[tacticalrmm.operation].execute.call(this, i);
                    break;
                case 'sites':
                    responseData = await sites[tacticalrmm.operation].execute.call(this, i);
                    break;
                default:
                    break;
            }

            const executionData = this.helpers.returnJsonArray(responseData);
            operationResult.push(...executionData);
        } catch (err) {
            if (this.continueOnFail()) {
                operationResult.push({ json: this.getInputData(i)[0].json, error: err });
            } else {
                if (err.context) err.context.itemIndex = i;
                throw err;
            }
        }
    }

    return [operationResult];
}
