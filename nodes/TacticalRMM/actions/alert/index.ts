import * as getAll from './getAll';

import { INodeProperties } from 'n8n-workflow';

export { getAll };

export const description: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['alert'],
            },
        },
        options: [
            {
                name: 'Get All Alerts',
                value: 'getAll',
                description: 'Retrieve all alerts',
                action: 'Get all alerts',
            },
        ],
        default: 'getAll',
    },
    ...getAll.description,
];
