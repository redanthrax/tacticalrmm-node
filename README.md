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

### [Agents](./docs/agents.md)
Complete agent management with CRUD operations, comprehensive filtering, and advanced control capabilities including remote commands, scripts, and system operations.

### [Alerts](./docs/alerts.md)
Retrieve and manage system alerts with filtering capabilities.

### [Clients](./docs/clients.md)
Manage client records with retrieval operations and organizational structure.

### [Software](./docs/software.md)
Retrieve software inventory information from agents with comprehensive filtering options.

## Resources

- [TacticalRMM API Documentation](https://docs.tacticalrmm.com/)
- [n8n Documentation](https://docs.n8n.io)
- [Repository](https://github.com/redanthrax/tacticalrmm-node)

## Compatibility

- n8n Version 0.199.0+
- TacticalRMM Version 0.15.2+

## License

MIT
