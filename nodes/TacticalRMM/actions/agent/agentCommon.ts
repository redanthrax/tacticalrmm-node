import { AgentProperties } from '../Interfaces';

export const agentCommon : AgentProperties = [
    {
        displayOptions: {
                show: {
                        resource: ['agent'],
                        operation: ['getAll', 'getById', 'getByClient'],
                },
        },
        displayName: 'Optional Data',
        name: 'optionalData',
        type: 'collection',
        default: {},
        options: [
            {
                displayName: 'Include Software',
                name: 'includeSoftware',
                type: 'boolean',
                default: 'false',
            },
        ]
    }
];
