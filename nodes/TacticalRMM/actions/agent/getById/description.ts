import { AgentProperties } from '../../Interfaces';

export const agentGetByIdDescription: AgentProperties = [
    {
        displayName: 'Agent ID',
        name: 'agentId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['agent'],
                operation: ['getById'],
            },
        },
        default: '',
        description: "Agent's ID",
    }
]
