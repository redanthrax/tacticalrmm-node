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
                resource: ['sites'],
            },
        },
        options: [
            {
                name: 'Get All Sites',
                value: 'getAll',
                description: 'Retrieve all Sites',
                action: 'Get all sites',
            },
        ],
        default: '',
    },
    ...getAll.description,
];
