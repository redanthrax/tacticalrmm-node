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
                resource: ['agents'],
            },
        },
        options: [
            {
                name: 'Get All Agents',
                value: 'getAll',
                description: 'Retrieve all agents',
                action: 'Get all agents',
            },
        ],
        default: '',
    },
    ...getAll.description,
];
