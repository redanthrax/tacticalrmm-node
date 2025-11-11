# n8n-nodes-tacticalrmm

An n8n community node for integrating with TacticalRMM API.

Tactical RMM is a remote monitoring & management tool, built with Django and Vue.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

```bash
npm install n8n-nodes-tacticalrmm
```

## Prerequisites

- TacticalRMM instance with API access
- API Key from TacticalRMM
- Your TacticalRMM base URL (e.g., https://your-domain.example.com)

## Setup

### Setting up API Key in TacticalRMM

1. Log into your TacticalRMM instance
2. Navigate to Settings > Global Settings > API Keys
3. Create a new API key
4. Note down the API Key for use in n8n

### Configuring Credentials in n8n

1. **Base API URL**: Your TacticalRMM instance URL (e.g., https://your-domain.example.com)
2. **API Key**: The API key from TacticalRMM

## Supported Operations

**128 operations across 19 resources:**

### [Agent](./docs/agents.md) (27 operations)
Complete agent lifecycle management, monitoring, and control including remote commands, scripts, bulk operations, maintenance mode, recovery, and version management.

### [Alert](./docs/alerts.md) (4 operations)
Alert management with filtering and status updates.

### [Alert Template](./docs/alert-templates.md) (5 operations)
Full CRUD operations for alert templates with email, SMS, and dashboard configurations.

### [API Key](./docs/api-keys.md) (4 operations)
API key lifecycle management with creation, updates, and expiration support.

### [Automation](./docs/automation.md) (5 operations)
Policy management with alert templates and exclusions support.

### [Check](./docs/checks.md) (7 operations)
Health monitoring with multiple check types (CPU, disk, memory, ping, script, service, event log).

### [Client](./docs/clients.md) (5 operations)
Full CRUD operations with custom fields support.

### [Core](./docs/core.md) (5 operations)
System monitoring, diagnostics, cache management, and configuration testing.

### [Deployment](./docs/deployments.md) (5 operations)
Agent deployment and installer generation management.

### [Log](./docs/logs.md) (6 operations)
Pending actions management and log retention configuration.

### [Reporting](./docs/reporting.md) (8 operations)
Report template management, execution, and distribution (run, email, export).

### [Role](./docs/roles.md) (5 operations)
Role-based access control with superuser privileges.

### [Script](./docs/scripts.md) (12 operations)
Script management, execution, testing, and code snippets (PowerShell, Batch, Python, Shell).

### [Service](./docs/services.md) (3 operations)
Windows service control (start/stop/restart) and monitoring.

### [Site](./docs/sites.md) (5 operations)
Full CRUD operations with client association and custom fields.

### [Software](./docs/software.md) (6 operations)
Software deployment, Chocolatey package management, installation and uninstallation.

### [Task](./docs/tasks.md) (6 operations)
Task scheduling and execution with multiple task types.

### [User](./docs/users.md) (5 operations)
User account management with password and profile fields.

### [Windows Update](./docs/windows-updates.md) (3 operations)
Update management with scanning and installation capabilities.

## Resources

- [TacticalRMM API Documentation](https://docs.tacticalrmm.com/)
- [n8n Documentation](https://docs.n8n.io)
- [Repository](https://github.com/redanthrax/tacticalrmm-node)

## Compatibility

- n8n Version 0.199.0+
- TacticalRMM Version 0.15.2+

## License

MIT
