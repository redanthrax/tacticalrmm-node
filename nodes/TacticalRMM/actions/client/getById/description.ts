import { ClientProperties } from '../../Interfaces';

export const clientGetByIdDescription: ClientProperties = [
    {
        displayName: 'Client ID',
        name: 'clientId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['client'],
                operation: ['getById'],
            },
        },
        default: '',
        description: "Client's ID",
    }
]
