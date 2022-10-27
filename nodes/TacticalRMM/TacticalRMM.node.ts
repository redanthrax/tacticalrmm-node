import { IExecuteFunctions } from 'n8n-core';

import {
    INodeType,
    INodeTypeBaseDescription,
    INodeTypeDescription,
} from 'n8n-workflow';

import { description } from './actions/description'
import { loadOptions } from './methods';

export class TacticalRMM implements INodeType {
    description: INodeTypeDescription;

    constructor(baseDescription: INodeTypeBaseDescription) {
        this.description = {
            ...baseDescription,
            ...description,
        };
    }

    methods = { loadOptions };
    
    async execute(this: IExecuteFunctions) {
        return await router.call(this);
    };
}
