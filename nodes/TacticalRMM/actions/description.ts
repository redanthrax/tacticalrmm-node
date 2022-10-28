import { INodeTypeDescription } from 'n8n-workflow';
import * as agent from './agent';
import * as client from './client';
import * as alert from './alert';

export const description: INodeTypeDescription = {
    displayName: 'Tactical RMM',
    name: 'TacticalRMM',
    icon: 'file:onit.png',
    group: ['transorm'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Get data from the TacticalRMM API',
    defaults: {
        name: 'Tactical RMM',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
        {
            name: 'TacticalRMMApi',
            required: true,
        },
    ],
    requestDefaults: {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    },
    properties: [
        {
            displayName: 'Resource',
            name: 'resource',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'Agent',
                    value: 'agent',
                },
                {
                    name: 'Alert',
                    value: 'alert',
                },
                {
                    name: 'Client',
                    value: 'client',
                },
            ],
            default: 'agent',
        },
        ...agent.description,
        ...alert.description,
        ...client.description,
    ],
}
