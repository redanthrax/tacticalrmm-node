# Tactical RMM API catalog

Generated from [`swagger.yaml`](swagger.yaml) (OpenAPI 3.0.3, version 1.4.0).

Agent-facing `/api/v3/*` and `/api/v4/*` routes are omitted (not for API key automation).

Use the **Custom API** resource in the n8n node for any endpoint below, or the curated resources where available.

## accounts

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/accounts/apikeys/` | `accounts_apikeys_retrieve` |
| POST | `/accounts/apikeys/` | `accounts_apikeys_create` |
| DELETE | `/accounts/apikeys/{id}/` | `accounts_apikeys_destroy` |
| PUT | `/accounts/apikeys/{id}/` | `accounts_apikeys_update` |
| PUT | `/accounts/reset2fa/` | `accounts_reset2fa_update` |
| PUT | `/accounts/resetpw/` | `accounts_resetpw_update` |
| GET | `/accounts/roles/` | `accounts_roles_retrieve` |
| POST | `/accounts/roles/` | `accounts_roles_create` |
| DELETE | `/accounts/roles/{id}/` | `accounts_roles_destroy` |
| GET | `/accounts/roles/{id}/` | `accounts_roles_retrieve_2` |
| PUT | `/accounts/roles/{id}/` | `accounts_roles_update` |
| DELETE | `/accounts/sessions/{id}/` | `accounts_sessions_destroy` |
| GET | `/accounts/ssoproviders/` | `accounts_ssoproviders_retrieve` |
| POST | `/accounts/ssoproviders/` | `accounts_ssoproviders_create` |
| DELETE | `/accounts/ssoproviders/account/` | `accounts_ssoproviders_account_destroy` |
| GET | `/accounts/ssoproviders/settings/` | `accounts_ssoproviders_settings_retrieve` |
| POST | `/accounts/ssoproviders/settings/` | `accounts_ssoproviders_settings_create` |
| POST | `/accounts/ssoproviders/token/` | `accounts_ssoproviders_token_create` |
| DELETE | `/accounts/ssoproviders/{id}/` | `accounts_ssoproviders_destroy` |
| PUT | `/accounts/ssoproviders/{id}/` | `accounts_ssoproviders_update` |
| GET | `/accounts/users/` | `accounts_users_retrieve` |
| POST | `/accounts/users/` | `accounts_users_create` |
| POST | `/accounts/users/reset/` | `accounts_users_reset_create` |
| PUT | `/accounts/users/reset/` | `accounts_users_reset_update` |
| POST | `/accounts/users/reset_totp/` | `accounts_users_reset_totp_create` |
| PUT | `/accounts/users/reset_totp/` | `accounts_users_reset_totp_update` |
| POST | `/accounts/users/setup_totp/` | `accounts_users_setup_totp_create` |
| PATCH | `/accounts/users/ui/` | `accounts_users_ui_partial_update` |
| DELETE | `/accounts/users/{id}/sessions/` | `accounts_users_sessions_destroy` |
| GET | `/accounts/users/{id}/sessions/` | `accounts_users_sessions_retrieve` |
| DELETE | `/accounts/{id}/users/` | `accounts_users_destroy` |
| GET | `/accounts/{id}/users/` | `accounts_users_retrieve_2` |
| PUT | `/accounts/{id}/users/` | `accounts_users_update` |

## agents

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/agents/` | `agents_retrieve` |
| POST | `/agents/actions/bulk/` | `agents_actions_bulk_create` |
| GET | `/agents/bulkrecovery/` | `agents_bulkrecovery_retrieve` |
| GET | `/agents/history/` | `agents_history_retrieve` |
| POST | `/agents/installer/` | `agents_installer_create` |
| POST | `/agents/maintenance/bulk/` | `agents_maintenance_bulk_create` |
| GET | `/agents/notes/` | `agents_notes_retrieve` |
| POST | `/agents/notes/` | `agents_notes_create` |
| DELETE | `/agents/notes/{id}/` | `agents_notes_destroy` |
| GET | `/agents/notes/{id}/` | `agents_notes_retrieve_2` |
| PUT | `/agents/notes/{id}/` | `agents_notes_update` |
| GET | `/agents/scripthistory/` | `agents_scripthistory_retrieve` |
| POST | `/agents/update/` | `agents_update_create` |
| GET | `/agents/versions/` | `agents_versions_retrieve` |
| DELETE | `/agents/{agent_id}/` | `agents_destroy` |
| GET | `/agents/{agent_id}/` | `agents_retrieve_2` |
| PUT | `/agents/{agent_id}/` | `agents_update` |
| GET | `/agents/{agent_id}/checks/` | `agents_checks_retrieve` |
| POST | `/agents/{agent_id}/checks/` | `agents_checks_create` |
| POST | `/agents/{agent_id}/cmd/` | `agents_cmd_create` |
| GET | `/agents/{agent_id}/eventlog/{logtype}/{days}/` | `agents_eventlog_retrieve` |
| GET | `/agents/{agent_id}/history/` | `agents_history_retrieve_2` |
| GET | `/agents/{agent_id}/meshcentral/` | `agents_meshcentral_retrieve` |
| POST | `/agents/{agent_id}/meshcentral/` | `agents_meshcentral_create` |
| GET | `/agents/{agent_id}/meshcentral/recover/` | `agents_meshcentral_recover_retrieve` |
| POST | `/agents/{agent_id}/meshcentral/recover/` | `agents_meshcentral_recover_create` |
| GET | `/agents/{agent_id}/notes/` | `agents_notes_retrieve_3` |
| POST | `/agents/{agent_id}/notes/` | `agents_notes_create_2` |
| DELETE | `/agents/{agent_id}/pendingactions/` | `agents_pendingactions_destroy` |
| GET | `/agents/{agent_id}/pendingactions/` | `agents_pendingactions_retrieve` |
| GET | `/agents/{agent_id}/ping/` | `agents_ping_retrieve` |
| DELETE | `/agents/{agent_id}/processes/` | `agents_processes_destroy` |
| GET | `/agents/{agent_id}/processes/` | `agents_processes_retrieve` |
| DELETE | `/agents/{agent_id}/processes/{pid}/` | `agents_processes_destroy_2` |
| GET | `/agents/{agent_id}/processes/{pid}/` | `agents_processes_retrieve_2` |
| PATCH | `/agents/{agent_id}/reboot/` | `agents_reboot_partial_update` |
| POST | `/agents/{agent_id}/reboot/` | `agents_reboot_create` |
| POST | `/agents/{agent_id}/recover/` | `agents_recover_create` |
| GET | `/agents/{agent_id}/registry/` | `agents_registry_retrieve` |
| POST | `/agents/{agent_id}/registry/create-key/` | `agents_registry_create_key_create` |
| POST | `/agents/{agent_id}/registry/create-value/` | `agents_registry_create_value_create` |
| DELETE | `/agents/{agent_id}/registry/delete-key/` | `agents_registry_delete_key_destroy` |
| DELETE | `/agents/{agent_id}/registry/delete-value/` | `agents_registry_delete_value_destroy` |
| POST | `/agents/{agent_id}/registry/modify-value/` | `agents_registry_modify_value_create` |
| POST | `/agents/{agent_id}/registry/rename-key/` | `agents_registry_rename_key_create` |
| POST | `/agents/{agent_id}/registry/rename-value/` | `agents_registry_rename_value_create` |
| POST | `/agents/{agent_id}/runscript/` | `agents_runscript_create` |
| POST | `/agents/{agent_id}/shutdown/` | `agents_shutdown_create` |
| GET | `/agents/{agent_id}/tasks/` | `agents_tasks_retrieve` |
| POST | `/agents/{agent_id}/tasks/` | `agents_tasks_create` |
| POST | `/agents/{agent_id}/wmi/` | `agents_wmi_create` |
| POST | `/agents/{agent_id}/wol/` | `agents_wol_create` |
| GET | `/agents/{agent_id}/{port}/webvnc/` | `agents_webvnc_retrieve` |

## alerts

| Method | Path | Operation ID |
| --- | --- | --- |
| PATCH | `/alerts/` | `alerts_partial_update` |
| POST | `/alerts/` | `alerts_create` |
| POST | `/alerts/bulk/` | `alerts_bulk_create` |
| GET | `/alerts/templates/` | `alerts_templates_retrieve` |
| POST | `/alerts/templates/` | `alerts_templates_create` |
| DELETE | `/alerts/templates/{id}/` | `alerts_templates_destroy` |
| GET | `/alerts/templates/{id}/` | `alerts_templates_retrieve_2` |
| PUT | `/alerts/templates/{id}/` | `alerts_templates_update` |
| GET | `/alerts/templates/{id}/related/` | `alerts_templates_related_retrieve` |
| DELETE | `/alerts/{id}/` | `alerts_destroy` |
| GET | `/alerts/{id}/` | `alerts_retrieve` |
| PUT | `/alerts/{id}/` | `alerts_update` |

## automation

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/automation/checks/{check}/status/` | `automation_checks_status_retrieve` |
| DELETE | `/automation/patchpolicy/` | `automation_patchpolicy_destroy` |
| POST | `/automation/patchpolicy/` | `automation_patchpolicy_create` |
| PUT | `/automation/patchpolicy/` | `automation_patchpolicy_update` |
| POST | `/automation/patchpolicy/reset/` | `automation_patchpolicy_reset_create` |
| DELETE | `/automation/patchpolicy/{id}/` | `automation_patchpolicy_destroy_2` |
| POST | `/automation/patchpolicy/{id}/` | `automation_patchpolicy_create_2` |
| PUT | `/automation/patchpolicy/{id}/` | `automation_patchpolicy_update_2` |
| GET | `/automation/policies/` | `automation_policies_retrieve` |
| POST | `/automation/policies/` | `automation_policies_create` |
| GET | `/automation/policies/overview/` | `automation_policies_overview_retrieve` |
| DELETE | `/automation/policies/{id}/` | `automation_policies_destroy` |
| GET | `/automation/policies/{id}/` | `automation_policies_retrieve_2` |
| PUT | `/automation/policies/{id}/` | `automation_policies_update` |
| GET | `/automation/policies/{id}/related/` | `automation_policies_related_retrieve` |
| GET | `/automation/policies/{policy}/checks/` | `automation_policies_checks_retrieve` |
| POST | `/automation/policies/{policy}/checks/` | `automation_policies_checks_create` |
| GET | `/automation/policies/{policy}/tasks/` | `automation_policies_tasks_retrieve` |
| POST | `/automation/policies/{policy}/tasks/` | `automation_policies_tasks_create` |
| GET | `/automation/tasks/{task}/run/` | `automation_tasks_run_retrieve` |
| POST | `/automation/tasks/{task}/run/` | `automation_tasks_run_create` |
| GET | `/automation/tasks/{task}/status/` | `automation_tasks_status_retrieve` |
| POST | `/automation/tasks/{task}/status/` | `automation_tasks_status_create` |

## beta

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/beta/v1/agent/` | `beta_v1_agent_list` |
| GET | `/beta/v1/agent/{id}/` | `beta_v1_agent_retrieve` |
| PUT | `/beta/v1/agent/{id}/` | `beta_v1_agent_update` |
| GET | `/beta/v1/client/` | `beta_v1_client_list` |
| GET | `/beta/v1/client/{id}/` | `beta_v1_client_retrieve` |
| PUT | `/beta/v1/client/{id}/` | `beta_v1_client_update` |
| GET | `/beta/v1/site/` | `beta_v1_site_list` |
| GET | `/beta/v1/site/{id}/` | `beta_v1_site_retrieve` |
| PUT | `/beta/v1/site/{id}/` | `beta_v1_site_update` |

## checks

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/checks/` | `checks_retrieve` |
| POST | `/checks/` | `checks_create` |
| POST | `/checks/{agent_id}/resetall/` | `checks_resetall_create` |
| POST | `/checks/{agent_id}/run/` | `checks_run_create` |
| DELETE | `/checks/{id}/` | `checks_destroy` |
| GET | `/checks/{id}/` | `checks_retrieve_2` |
| PUT | `/checks/{id}/` | `checks_update` |
| PATCH | `/checks/{id}/history/` | `checks_history_partial_update` |
| POST | `/checks/{id}/reset/` | `checks_reset_create` |
| POST | `/checks/{target}/{id}/csbulkrun/` | `checks_csbulkrun_create` |

## clients

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/clients/` | `clients_retrieve` |
| POST | `/clients/` | `clients_create` |
| DELETE | `/clients/deployments/` | `clients_deployments_destroy` |
| GET | `/clients/deployments/` | `clients_deployments_retrieve` |
| POST | `/clients/deployments/` | `clients_deployments_create` |
| DELETE | `/clients/deployments/{id}/` | `clients_deployments_destroy_2` |
| GET | `/clients/deployments/{id}/` | `clients_deployments_retrieve_2` |
| POST | `/clients/deployments/{id}/` | `clients_deployments_create_2` |
| GET | `/clients/sites/` | `clients_sites_retrieve` |
| POST | `/clients/sites/` | `clients_sites_create` |
| DELETE | `/clients/sites/{id}/` | `clients_sites_destroy` |
| GET | `/clients/sites/{id}/` | `clients_sites_retrieve_2` |
| PUT | `/clients/sites/{id}/` | `clients_sites_update` |
| DELETE | `/clients/{id}/` | `clients_destroy` |
| GET | `/clients/{id}/` | `clients_retrieve_2` |
| PUT | `/clients/{id}/` | `clients_update` |
| GET | `/clients/{uid}/deploy/` | `clients_deploy_retrieve` |

## core

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/core/clearcache/` | `core_clearcache_retrieve` |
| DELETE | `/core/codesign/` | `core_codesign_destroy` |
| GET | `/core/codesign/` | `core_codesign_retrieve` |
| PATCH | `/core/codesign/` | `core_codesign_partial_update` |
| POST | `/core/codesign/` | `core_codesign_create` |
| GET | `/core/customfields/` | `core_customfields_retrieve` |
| PATCH | `/core/customfields/` | `core_customfields_partial_update` |
| POST | `/core/customfields/` | `core_customfields_create` |
| DELETE | `/core/customfields/{id}/` | `core_customfields_destroy` |
| GET | `/core/customfields/{id}/` | `core_customfields_retrieve_2` |
| PUT | `/core/customfields/{id}/` | `core_customfields_update` |
| GET | `/core/dashinfo/` | `core_dashinfo_retrieve` |
| POST | `/core/emailtest/` | `core_emailtest_create` |
| GET | `/core/keystore/` | `core_keystore_retrieve` |
| POST | `/core/keystore/` | `core_keystore_create` |
| DELETE | `/core/keystore/{id}/` | `core_keystore_destroy` |
| PUT | `/core/keystore/{id}/` | `core_keystore_update` |
| POST | `/core/openai/generate/` | `core_openai_generate_create` |
| GET | `/core/schedules/` | `core_schedules_retrieve` |
| POST | `/core/schedules/` | `core_schedules_create` |
| DELETE | `/core/schedules/{id}/` | `core_schedules_destroy` |
| PUT | `/core/schedules/{id}/` | `core_schedules_update` |
| POST | `/core/servermaintenance/` | `core_servermaintenance_create` |
| POST | `/core/serverscript/test/` | `core_serverscript_test_create` |
| GET | `/core/settings/` | `core_settings_retrieve` |
| PUT | `/core/settings/` | `core_settings_update` |
| POST | `/core/smstest/` | `core_smstest_create` |
| GET | `/core/urlaction/` | `core_urlaction_retrieve` |
| POST | `/core/urlaction/` | `core_urlaction_create` |
| PATCH | `/core/urlaction/run/` | `core_urlaction_run_partial_update` |
| POST | `/core/urlaction/run/test/` | `core_urlaction_run_test_create` |
| DELETE | `/core/urlaction/{id}/` | `core_urlaction_destroy` |
| PUT | `/core/urlaction/{id}/` | `core_urlaction_update` |
| GET | `/core/version/` | `core_version_retrieve` |
| POST | `/core/webtermperms/` | `core_webtermperms_create` |

## logout

| Method | Path | Operation ID |
| --- | --- | --- |
| POST | `/logout/` | `logout_create` |

## logoutall

| Method | Path | Operation ID |
| --- | --- | --- |
| POST | `/logoutall/` | `logoutall_create` |

## logs

| Method | Path | Operation ID |
| --- | --- | --- |
| PATCH | `/logs/audit/` | `logs_audit_partial_update` |
| PATCH | `/logs/debug/` | `logs_debug_partial_update` |
| DELETE | `/logs/pendingactions/` | `logs_pendingactions_destroy` |
| GET | `/logs/pendingactions/` | `logs_pendingactions_retrieve` |
| DELETE | `/logs/pendingactions/{id}/` | `logs_pendingactions_destroy_2` |
| GET | `/logs/pendingactions/{id}/` | `logs_pendingactions_retrieve_2` |

## other

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/` | `root_retrieve` |

## reporting

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/reporting/assets/` | `reporting_assets_retrieve` |
| GET | `/reporting/assets/all/` | `reporting_assets_all_retrieve` |
| POST | `/reporting/assets/delete/` | `reporting_assets_delete_create` |
| GET | `/reporting/assets/download/` | `reporting_assets_download_retrieve` |
| POST | `/reporting/assets/newfolder/` | `reporting_assets_newfolder_create` |
| PUT | `/reporting/assets/rename/` | `reporting_assets_rename_update` |
| POST | `/reporting/assets/upload/` | `reporting_assets_upload_create` |
| GET | `/reporting/assets/{path}` | `reporting_assets_retrieve_2` |
| GET | `/reporting/dataqueries/` | `reporting_dataqueries_retrieve` |
| POST | `/reporting/dataqueries/` | `reporting_dataqueries_create` |
| DELETE | `/reporting/dataqueries/{id}/` | `reporting_dataqueries_destroy` |
| GET | `/reporting/dataqueries/{id}/` | `reporting_dataqueries_retrieve_2` |
| PUT | `/reporting/dataqueries/{id}/` | `reporting_dataqueries_update` |
| GET | `/reporting/history/` | `reporting_history_retrieve` |
| DELETE | `/reporting/history/{id}/` | `reporting_history_destroy` |
| POST | `/reporting/history/{id}/run/` | `reporting_history_run_create` |
| GET | `/reporting/htmltemplates/` | `reporting_htmltemplates_retrieve` |
| POST | `/reporting/htmltemplates/` | `reporting_htmltemplates_create` |
| DELETE | `/reporting/htmltemplates/{id}/` | `reporting_htmltemplates_destroy` |
| GET | `/reporting/htmltemplates/{id}/` | `reporting_htmltemplates_retrieve_2` |
| PUT | `/reporting/htmltemplates/{id}/` | `reporting_htmltemplates_update` |
| GET | `/reporting/queryschema/` | `reporting_queryschema_retrieve` |
| GET | `/reporting/schedules/` | `reporting_schedules_retrieve` |
| POST | `/reporting/schedules/` | `reporting_schedules_create` |
| DELETE | `/reporting/schedules/{id}/` | `reporting_schedules_destroy` |
| GET | `/reporting/schedules/{id}/` | `reporting_schedules_retrieve_2` |
| PUT | `/reporting/schedules/{id}/` | `reporting_schedules_update` |
| POST | `/reporting/schedules/{id}/run/` | `reporting_schedules_run_create` |
| GET | `/reporting/templates/` | `reporting_templates_retrieve` |
| POST | `/reporting/templates/` | `reporting_templates_create` |
| POST | `/reporting/templates/import/` | `reporting_templates_import_create` |
| POST | `/reporting/templates/preview/` | `reporting_templates_preview_create` |
| POST | `/reporting/templates/preview/analysis/` | `reporting_templates_preview_analysis_create` |
| GET | `/reporting/templates/shared/` | `reporting_templates_shared_retrieve` |
| POST | `/reporting/templates/shared/` | `reporting_templates_shared_create` |
| DELETE | `/reporting/templates/{id}/` | `reporting_templates_destroy` |
| GET | `/reporting/templates/{id}/` | `reporting_templates_retrieve_2` |
| PUT | `/reporting/templates/{id}/` | `reporting_templates_update` |
| POST | `/reporting/templates/{id}/email/` | `reporting_templates_email_create` |
| POST | `/reporting/templates/{id}/export/` | `reporting_templates_export_create` |
| POST | `/reporting/templates/{id}/run/` | `reporting_templates_run_create` |

## scripts

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/scripts/` | `scripts_retrieve` |
| POST | `/scripts/` | `scripts_create` |
| GET | `/scripts/snippets/` | `scripts_snippets_retrieve` |
| POST | `/scripts/snippets/` | `scripts_snippets_create` |
| DELETE | `/scripts/snippets/{id}/` | `scripts_snippets_destroy` |
| GET | `/scripts/snippets/{id}/` | `scripts_snippets_retrieve_2` |
| PUT | `/scripts/snippets/{id}/` | `scripts_snippets_update` |
| POST | `/scripts/{agent_id}/test/` | `scripts_test_create` |
| DELETE | `/scripts/{id}/` | `scripts_destroy` |
| GET | `/scripts/{id}/` | `scripts_retrieve_2` |
| PUT | `/scripts/{id}/` | `scripts_update` |
| GET | `/scripts/{id}/download/` | `scripts_download_retrieve` |

## services

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/services/{agent_id}/` | `services_retrieve` |
| GET | `/services/{agent_id}/{svcname}/` | `services_retrieve_2` |
| POST | `/services/{agent_id}/{svcname}/` | `services_create` |
| PUT | `/services/{agent_id}/{svcname}/` | `services_update` |

## software

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/software/` | `software_retrieve` |
| POST | `/software/` | `software_create` |
| PUT | `/software/` | `software_update` |
| GET | `/software/chocos/` | `software_chocos_retrieve` |
| GET | `/software/{agent_id}/` | `software_retrieve_2` |
| POST | `/software/{agent_id}/` | `software_create_2` |
| PUT | `/software/{agent_id}/` | `software_update_2` |
| POST | `/software/{agent_id}/uninstall/` | `software_uninstall_create` |

## tasks

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/tasks/` | `tasks_retrieve` |
| POST | `/tasks/` | `tasks_create` |
| DELETE | `/tasks/{id}/` | `tasks_destroy` |
| GET | `/tasks/{id}/` | `tasks_retrieve_2` |
| PUT | `/tasks/{id}/` | `tasks_update` |
| POST | `/tasks/{id}/run/` | `tasks_run_create` |

## v2

| Method | Path | Operation ID |
| --- | --- | --- |
| POST | `/v2/checkcreds/` | `v2_checkcreds_create` |
| POST | `/v2/login/` | `v2_login_create` |

## winupdate

| Method | Path | Operation ID |
| --- | --- | --- |
| GET | `/winupdate/{agent_id}/` | `winupdate_retrieve` |
| POST | `/winupdate/{agent_id}/install/` | `winupdate_install_create` |
| POST | `/winupdate/{agent_id}/scan/` | `winupdate_scan_create` |
| PUT | `/winupdate/{id}/` | `winupdate_update` |

**278** documented automation endpoints across **19** tags.
