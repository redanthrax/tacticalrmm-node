import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type TacticalRMMMap = {
    agents: 'getAll';
}

export type TacticalRMM = AllEntities<TacticalRMMMap>;

export type TacticalRMMAgents = Entity<TacticalRMMMap, 'agents'>;

export type AgentsProperties = PropertiesOf<TacticalRMMAgents>;
