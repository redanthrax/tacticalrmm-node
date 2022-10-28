import * as getAll from './getAll';
import * as getById from './getById';
import * as getByClient from './getByClient';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, getByClient };

export const descriptions: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['agent'],
            },
        },
        options: [
            {
                name: 'Get All Agents',
                value: 'getAll',
                description: 'Retrieve all agents',
                action: 'Get all agents',
            },
            {
                name: 'Get By ID',
                value: 'getById',
                description: 'Get a agent by ID',
                action: 'Get an agent by ID',
            },
            {
                name: 'Get By Client',
                value: 'getByClient',
                description: 'Get agents by Client',
                action: 'Get agents by Client',
            },
        ],
        default: '',
    },
    ...getAll.description,
    ...getById.description,
    ...getByClient.description,
];
