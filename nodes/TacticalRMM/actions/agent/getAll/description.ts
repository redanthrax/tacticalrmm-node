import { AgentProperties } from '../../Interfaces';

export const agentGetAllDescription: AgentProperties = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getAll'],
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
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Client Name or ID',
				name: 'client',
				type: 'options',
				default: '',
				description: 'Filter by client. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
				typeOptions: {
					loadOptionsMethod: 'getClients',
				},
				options: [],
			},
			{
				displayName: 'Monitoring Type',
				name: 'monitoring_type',
				type: 'options',
				options: [
					{
						name: 'All',
						value: '',
					},
					{
						name: 'Server',
						value: 'server',
					},
					{
						name: 'Workstation',
						value: 'workstation',
					},
				],
				default: '',
				description: 'Filter by monitoring type',
			},
			{
				displayName: 'Online Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'All',
						value: '',
					},
					{
						name: 'Offline',
						value: 'offline',
					},
					{
						name: 'Online',
						value: 'online',
					},
					{
						name: 'Overdue',
						value: 'overdue',
					},
				],
				default: '',
				description: 'Filter by online status',
			},
			{
				displayName: 'Platform',
				name: 'plat',
				type: 'options',
				options: [
					{
						name: 'All',
						value: '',
					},
					{
						name: 'Linux',
						value: 'linux',
					},
					{
						name: 'Windows',
						value: 'windows',
					},
				],
				default: '',
				description: 'Filter by platform',
			},
			{
				displayName: 'Site ID',
				name: 'site',
				type: 'number',
				default: 0,
				description: 'Filter by site ID',
			},
		],
	},
];
