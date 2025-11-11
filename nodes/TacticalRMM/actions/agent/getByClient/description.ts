import { AgentProperties } from '../../Interfaces';

export const agentGetByClientDescription: AgentProperties = [
		{
				displayName: 'Client Name or ID',
				name: 'clientId',
				type: 'options',
				typeOptions: {
						loadOptionsMethod: 'getClients',
				},
				options: [],
				default: '',
				required: true,
				displayOptions: {
						show: {
								operation: ['getByClient'],
								resource: ['agent'],
						},
				},
			description: 'Choose from the list or specify an ID using an expression. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getByClient'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getByClient'],
				returnAll: [false],
			},
		},
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
	},
];
