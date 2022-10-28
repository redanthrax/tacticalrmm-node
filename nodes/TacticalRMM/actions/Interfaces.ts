import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type TacticalRMMMap = {
    agents: 'getAll' | 'getById';
    alerts: 'getAll';
    clients: 'getAll';
    sites: 'getAll';
}

export type TacticalRMM = AllEntities<TacticalRMMMap>;

export type TacticalRMMAgents = Entity<TacticalRMMMap, 'agents'>;
export type TacticalRMMClients = Entity<TacticalRMMMap, 'clients'>;
export type TacticalRMMAlerts = Entity<TacticalRMMMap, 'alerts'>;
export type TacticalRMMSites = Entity<TacticalRMMMap, 'sites'>;

export type AgentsProperties = PropertiesOf<TacticalRMMAgents>;
export type ClientsProperties = PropertiesOf<TacticalRMMClients>;
export type AlertsProperties = PropertiesOf<TacticalRMMAlerts>;
export type SitesProperties = PropertiesOf<TacticalRMMSites>;
