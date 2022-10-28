import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

export const descriptions: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['client'],
            },
        },
        options: [
            {
                name: 'Get All Clients',
                value: 'getAll',
                description: 'Retrieve all clients',
                action: 'Get all clients',
            },
            {
                name: 'Get By ID',
                value: 'getById',
                description: 'Get a client by ID',
                action: 'Get an client by ID',
            },
        ],
        default: '',
    },
    ...getAll.description,
    ...getById.description,
];
