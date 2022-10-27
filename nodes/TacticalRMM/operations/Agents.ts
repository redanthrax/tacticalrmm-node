import { INodeProperties } from 'n8n-workflow';

export const agentOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'agents',
                ],
            },
        },
        options: [
            {
                name: 'Get All Agents',
                value: 'get',
                action: 'Get the Agents',
                description: 'Get all the Agents',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/agents/',
                    },
                },
            },
        ],
        default: 'get',
    },
    {
        displayName: 'Type',
        description: 'Agent Type',
        required: false,
        name: 'agentType',
        type: 'options',
        options: [
            { name: 'All', value: '' },
            { name: 'Servers', value: 'server' },
            { name: 'Workstations', value: 'workstation' },
        ],
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'agents',
                ],
            },
        },
        routing: {
            request: {
                qs: {
                    monitoring_type: '={{$value}}',
                },
            },
        },
    }
];
