import * as getAll from './getAll';

import { INodeProperties } from 'n8n-workflow';

export { getAll };

export const descriptions: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['clients'],
            },
        },
        options: [
            {
                name: 'Get All Clients',
                value: 'getAll',
                description: 'Retrieve all clients',
                action: 'Get all clients',
            },
        ],
        default: '',
    },
    ...getAll.description,
];
