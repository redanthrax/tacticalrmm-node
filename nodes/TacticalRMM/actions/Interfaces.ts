import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type TacticalRMMMap = {
	agent: 'getAll' | 'getById' | 'getByClient' | 'update' | 'deleteAgent' | 'runCommand' | 'reboot' | 'getProcesses' | 'getChecks' | 'shutdown' | 'runScript' | 'getTasks' | 'ping' | 'getNotes' | 'addNote' | 'getEventLog' | 'getHistory' | 'bulkAction';
	alert: 'getAll';
	client: 'getAll' | 'getById';
			software: 'getByAgent';
};

export type TacticalRMM = AllEntities<TacticalRMMMap>;

export type TacticalRMMAgent = Entity<TacticalRMMMap, 'agent'>;
export type TacticalRMMClient = Entity<TacticalRMMMap, 'client'>;
export type TacticalRMMAlert = Entity<TacticalRMMMap, 'alert'>;
export type TacticalRMMSoftware = Entity<TacticalRMMMap, 'software'>;

export type AgentProperties = PropertiesOf<TacticalRMMAgent>;
export type ClientProperties = PropertiesOf<TacticalRMMClient>;
export type AlertProperties = PropertiesOf<TacticalRMMAlert>;
export type SoftwareProperties = PropertiesOf<TacticalRMMSoftware>;
