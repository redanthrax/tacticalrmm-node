import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type TacticalRMMMap = {
	agent: 'getAll' | 'getById' | 'getByClient' | 'update' | 'deleteAgent' | 'runCommand' | 'reboot' |
		'getProcesses' | 'getChecks' | 'shutdown' | 'runScript' | 'getTasks' | 'ping' | 'getNotes' |
		'addNote' | 'getEventLog' | 'getHistory' | 'bulkAction' | 'wakeOnLan' | 'recover' |
		'getPendingActions' | 'deletePendingActions' | 'getScriptHistory' | 'getVersions' |
		'bulkRecovery' | 'bulkMaintenanceMode' | 'bulkUpdate';
	alert: 'getAll' | 'getById' | 'update' | 'deleteAlert';
	automation: 'getAll' | 'getById' | 'create' | 'update' | 'deleteAutomation';
	check: 'getAll' | 'getById' | 'create' | 'update' | 'deleteCheck' | 'reset' | 'run';
	client: 'getAll' | 'getById' | 'create' | 'update' | 'deleteClient';
	script: 'getAll' | 'getById' | 'create' | 'update' | 'deleteScript' | 'download' | 'test' |
		'getSnippets' | 'getSnippetById' | 'createSnippet' | 'updateSnippet' | 'deleteSnippet';
	service: 'getMany' | 'getByName' | 'control';
	site: 'getAll' | 'getById' | 'create' | 'update' | 'deleteSite';
	task: 'getAll' | 'getById' | 'create' | 'update' | 'deleteTask' | 'run';
	software: 'getByAgent' | 'getAll' | 'getChocos' | 'install' | 'uninstall' | 'installGlobally';
	winupdate: 'getMany' | 'scan' | 'install';
	alertTemplate: 'getAll' | 'getById' | 'create' | 'update' | 'deleteTemplate';
	apiKey: 'getAll' | 'create' | 'update' | 'deleteApiKey';
	core: 'getDashInfo' | 'getVersion' | 'clearCache' | 'testEmail' | 'testSms';
	deployment: 'getAll' | 'getById' | 'create' | 'deleteDeployment' | 'generate';
	role: 'getAll' | 'getById' | 'create' | 'update' | 'deleteRole';
	user: 'getAll' | 'getById' | 'create' | 'update' | 'deleteUser';
	reporting: 'getAll' | 'getById' | 'create' | 'update' | 'deleteReport' | 'run' | 'email' | 'exportReport';
	logs: 'getPendingActions' | 'deleteAllPendingActions' | 'getPendingActionById' |
		'deletePendingActionById' | 'updateAuditSettings' | 'updateDebugSettings';
	customApi: 'request';
};

export type TacticalRMM = AllEntities<TacticalRMMMap>;

export type TacticalRMMAgent = Entity<TacticalRMMMap, 'agent'>;
export type TacticalRMMAlert = Entity<TacticalRMMMap, 'alert'>;
export type TacticalRMMAutomation = Entity<TacticalRMMMap, 'automation'>;
export type TacticalRMMCheck = Entity<TacticalRMMMap, 'check'>;
export type TacticalRMMClient = Entity<TacticalRMMMap, 'client'>;
export type TacticalRMMScript = Entity<TacticalRMMMap, 'script'>;
export type TacticalRMMService = Entity<TacticalRMMMap, 'service'>;
export type TacticalRMMSite = Entity<TacticalRMMMap, 'site'>;
export type TacticalRMMTask = Entity<TacticalRMMMap, 'task'>;
export type TacticalRMMSoftware = Entity<TacticalRMMMap, 'software'>;
export type TacticalRMMWinupdate = Entity<TacticalRMMMap, 'winupdate'>;
export type TacticalRMMAlertTemplate = Entity<TacticalRMMMap, 'alertTemplate'>;
export type TacticalRMMApiKey = Entity<TacticalRMMMap, 'apiKey'>;
export type TacticalRMMCore = Entity<TacticalRMMMap, 'core'>;
export type TacticalRMMDeployment = Entity<TacticalRMMMap, 'deployment'>;
export type TacticalRMMRole = Entity<TacticalRMMMap, 'role'>;
export type TacticalRMMUser = Entity<TacticalRMMMap, 'user'>;
export type TacticalRMMReporting = Entity<TacticalRMMMap, 'reporting'>;
export type TacticalRMMLogs = Entity<TacticalRMMMap, 'logs'>;
export type TacticalRMMCustomApi = Entity<TacticalRMMMap, 'customApi'>;

export type AgentProperties = PropertiesOf<TacticalRMMAgent>;
export type AlertProperties = PropertiesOf<TacticalRMMAlert>;
export type AutomationProperties = PropertiesOf<TacticalRMMAutomation>;
export type CheckProperties = PropertiesOf<TacticalRMMCheck>;
export type ClientProperties = PropertiesOf<TacticalRMMClient>;
export type ScriptProperties = PropertiesOf<TacticalRMMScript>;
export type ServiceProperties = PropertiesOf<TacticalRMMService>;
export type SiteProperties = PropertiesOf<TacticalRMMSite>;
export type TaskProperties = PropertiesOf<TacticalRMMTask>;
export type SoftwareProperties = PropertiesOf<TacticalRMMSoftware>;
export type WinupdateProperties = PropertiesOf<TacticalRMMWinupdate>;
export type AlertTemplateProperties = PropertiesOf<TacticalRMMAlertTemplate>;
export type ApiKeyProperties = PropertiesOf<TacticalRMMApiKey>;
export type CoreProperties = PropertiesOf<TacticalRMMCore>;
export type DeploymentProperties = PropertiesOf<TacticalRMMDeployment>;
export type RoleProperties = PropertiesOf<TacticalRMMRole>;
export type UserProperties = PropertiesOf<TacticalRMMUser>;
export type ReportingProperties = PropertiesOf<TacticalRMMReporting>;
export type LogsProperties = PropertiesOf<TacticalRMMLogs>;
export type CustomApiProperties = PropertiesOf<TacticalRMMCustomApi>;
