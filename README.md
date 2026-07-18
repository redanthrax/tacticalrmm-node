# @redanthrax/n8n-nodes-tacticalrmm

An n8n community node for integrating with the Tactical RMM API.

Tactical RMM is a remote monitoring and management tool, built with Django and Vue.

## Development

This repo uses **pnpm** with a committed lockfile and supply-chain controls in [`pnpm-workspace.yaml`](pnpm-workspace.yaml) (see [SECURITY.md](SECURITY.md)). After clone:

```bash
corepack enable && corepack prepare pnpm@11.14.0 --activate
pnpm install --frozen-lockfile
pnpm run audit:supply-chain
pnpm run build
```

Use **pnpm only** for installs in this repo. With Corepack enabled, `npm install` and `yarn install` are rejected. Do not commit `package-lock.json` or `yarn.lock` (see [SECURITY.md](SECURITY.md)).

### API spec and catalog

The OpenAPI spec lives at [`docs/swagger.yaml`](docs/swagger.yaml). Regenerate the endpoint catalog:

```bash
pnpm run generate
```

See [`docs/api-catalog.md`](docs/api-catalog.md) for every automation-facing endpoint. Use the **Custom API** resource for endpoints not covered by curated operations.

### Live preview with `n8n-node dev`

```bash
n8n-node dev
```

Requires **Node.js 22.22.3+**.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

```bash
npm install @redanthrax/n8n-nodes-tacticalrmm
```

## Prerequisites

- Tactical RMM instance with API access
- Your Tactical RMM base URL (e.g. `https://api.example.com`)
- A dedicated integration user, integration role, and API key (see setup below)

## Setup

### API access in Tactical RMM (recommended)

Do not reuse a personal admin account for n8n. Create a dedicated integration setup with least privilege:

1. **Integration role** — In Tactical RMM, create a role scoped only to the clients, sites, and actions your workflows need (read-only where possible).
2. **Integration user** — Create a service/integration user account and assign only that role.
3. **API key** — In **Settings → Global Settings → API Keys**, create a key for the integration user (not a day-to-day admin account).

Rotate or revoke the API key if the n8n credential is exposed. Tighten the role if you add workflows later.

### Configuring credentials in n8n

| Field | Example | Notes |
|-------|---------|-------|
| **Base API URL** | `https://api.example.com` | Your Tactical RMM server URL |
| **API Key** | *(from API Keys settings)* | Key for the integration user; sent as `X-API-KEY` |

## Supported operations

**129+ operations across 20 resources** (including Custom API for any path in the OpenAPI spec):

### Resource groups

| Group | Resources |
|-------|-----------|
| **Agents** | Agent, Check, Service, Software, Task, Windows Update |
| **Organization** | Client, Site, Deployment |
| **Monitoring** | Alert, Alert Template |
| **Automation** | Automation Policy, Script |
| **Administration** | API Key, Core, Log, Role, User |
| **Reporting** | Reporting |
| **Advanced** | Custom API |

### Curated resources

- [Agent](./docs/agents.md) (27 operations)
- [Alert](./docs/alerts.md)
- [Alert Template](./docs/alert-templates.md)
- [API Key](./docs/api-keys.md)
- [Automation](./docs/automation.md)
- [Check](./docs/checks.md)
- [Client](./docs/clients.md)
- [Core](./docs/core.md)
- [Deployment](./docs/deployments.md)
- [Log](./docs/logs.md)
- [Reporting](./docs/reporting.md)
- [Role](./docs/roles.md)
- [Script](./docs/scripts.md)
- [Service](./docs/services.md)
- [Site](./docs/sites.md)
- [Software](./docs/software.md)
- [Task](./docs/tasks.md)
- [User](./docs/users.md)
- [Windows Update](./docs/windows-updates.md)

### Custom API

Call any documented REST endpoint (method, path, query, body). Full path list: [`docs/api-catalog.md`](docs/api-catalog.md).

## Resources

- [Tactical RMM API documentation](https://docs.tacticalrmm.com/)
- [n8n documentation](https://docs.n8n.io)
- [Repository](https://github.com/redanthrax/tacticalrmm-node)

## Compatibility

- n8n 0.199.0+
- Tactical RMM 0.15.2+ (OpenAPI spec version 1.4.0 in `docs/swagger.yaml`)

## License

MIT
