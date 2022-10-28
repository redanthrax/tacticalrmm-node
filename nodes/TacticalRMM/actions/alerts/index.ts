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
                resource: ['alerts'],
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
        default: '',
    },
    ...getAll.description,
];
