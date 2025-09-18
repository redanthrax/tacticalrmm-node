import { AgentProperties } from '../../Interfaces';

export const agentAddNoteDescription: AgentProperties = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['addNote'],
			},
		},
		default: '',
		description: 'ID of the agent to add note to',
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['agent'],
				operation: ['addNote'],
			},
		},
		default: '',
		description: 'The note content to add',
	},
];

export { agentAddNoteDescription as description };
