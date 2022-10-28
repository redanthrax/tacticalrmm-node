import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type TacticalRMMMap = {
    agent: 'getAll' | 'getById' | 'getByClient';
    alerts: 'getAll';
    client: 'getAll' | 'getById';
    sites: 'getAll';
}

export type TacticalRMM = AllEntities<TacticalRMMMap>;

export type TacticalRMMAgent = Entity<TacticalRMMMap, 'agent'>;
export type TacticalRMMClient = Entity<TacticalRMMMap, 'client'>;
export type TacticalRMMAlerts = Entity<TacticalRMMMap, 'alerts'>;
export type TacticalRMMSites = Entity<TacticalRMMMap, 'sites'>;

export type AgentProperties = PropertiesOf<TacticalRMMAgent>;
export type ClientProperties = PropertiesOf<TacticalRMMClient>;
export type AlertsProperties = PropertiesOf<TacticalRMMAlerts>;
export type SitesProperties = PropertiesOf<TacticalRMMSites>;
