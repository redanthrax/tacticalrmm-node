import { AgentsProperties } from '../../Interfaces';

export const agentsGetByIdDescription: AgentsProperties = [
    {
        displayName: 'Agent ID',
        name: 'agentId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['agents'],
                operation: ['getById'],
            },
        },
        default: '',
        description: "Agent's ID",
    }
]
