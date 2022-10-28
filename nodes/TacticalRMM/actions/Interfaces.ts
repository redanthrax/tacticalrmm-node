import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type TacticalRMMMap = {
    agent: 'getAll' | 'getById' | 'getByClient';
    alert: 'getAll';
    client: 'getAll' | 'getById';
}

export type TacticalRMM = AllEntities<TacticalRMMMap>;

export type TacticalRMMAgent = Entity<TacticalRMMMap, 'agent'>;
export type TacticalRMMClient = Entity<TacticalRMMMap, 'client'>;
export type TacticalRMMAlert = Entity<TacticalRMMMap, 'alert'>;

export type AgentProperties = PropertiesOf<TacticalRMMAgent>;
export type ClientProperties = PropertiesOf<TacticalRMMClient>;
export type AlertProperties = PropertiesOf<TacticalRMMAlert>;
