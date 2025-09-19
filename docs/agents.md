# Agents Operations

## Get Many

Retrieve multiple agents from TacticalRMM with optional filtering.

**Parameters:**
- **Limit**: Maximum number of agents to return (default: 50, max: configurable)

## Get by ID

Retrieve a specific agent by their ID with detailed information.

**Parameters:**
- **Agent ID**: The ID of the agent to retrieve

## Get by Client

Retrieve agents associated with a specific client.

**Parameters:**
- **Client Name or ID**: The client to filter agents by (dynamically loaded from available clients)
- **Limit**: Maximum number of agents to return (default: 50, max: configurable)

## Get Checks

Retrieve monitoring checks configured for a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to retrieve checks from
- **Limit**: Maximum number of checks to return (default: 50, max: configurable)

## Get Event Log

Retrieve Windows event log entries from a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to retrieve event logs from
- **Log Name**: The Windows event log to query:
  - Application
  - System
  - Security
- **Days**: Number of days to look back for events (default: 1)
- **Limit**: Maximum number of event log entries to return (default: 50, max: configurable)

## Get History

Retrieve agent history and activity logs.

**Parameters:**
- **Agent ID**: The ID of the agent to retrieve history for
- **Time Filter**: Time period for history retrieval:
  - Last 24 Hours
  - Last 7 Days
  - Last 30 Days
  - Last 90 Days
- **Limit**: Maximum number of history entries to return (default: 50, max: configurable)

## Get Notes

Retrieve notes associated with a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to retrieve notes for
- **Limit**: Maximum number of notes to return (default: 50, max: configurable)

## Get Processes

Retrieve currently running processes from a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to retrieve processes from
- **Limit**: Maximum number of processes to return (default: 50, max: configurable)

## Get Tasks

Retrieve scheduled tasks configured on a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to retrieve tasks from
- **Limit**: Maximum number of tasks to return (default: 50, max: configurable)

## Add Note

Add a note to a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to add a note to
- **Note**: The note content to add

## Update

Update agent configuration and settings.

**Parameters:**
- **Agent ID**: The ID of the agent to update
- **Update Fields**: Comprehensive collection of updateable fields including:
  - **Description**: Agent description
  - **Overdue Email Alert**: Whether to enable email alerts when agent is overdue
  - **Overdue Text Alert**: Whether to enable text alerts when agent is overdue
  - **Overdue Dashboard Alert**: Whether to show dashboard alerts when agent is overdue
  - **Offline Time (Seconds)**: Time in seconds after which agent is considered offline
  - **Overdue Time (Seconds)**: Time in seconds after which agent is considered overdue
  - **Check Interval (Seconds)**: Interval in seconds between checks
  - **Maintenance Mode**: Whether the agent is in maintenance mode
  - **Block Policy Inheritance**: Whether to block policy inheritance
  - **Alert Template ID**: Alert template ID to use for this agent
  - **Policy ID**: Policy ID to apply to this agent

## Delete

Remove an agent from TacticalRMM.

**Parameters:**
- **Agent ID**: The ID of the agent to delete

## Ping

Test connectivity to a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to ping

## Reboot

Reboot a specific agent system.

**Parameters:**
- **Agent ID**: The ID of the agent to reboot
- **Force Reboot**: Whether to force reboot without waiting for applications to close
- **Delay (Seconds)**: Delay in seconds before reboot (0-3600)

## Shutdown

Shutdown a specific agent system.

**Parameters:**
- **Agent ID**: The ID of the agent to shutdown

## Run Command

Execute a command on a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to run command on
- **Command**: Command to execute on the agent
- **Shell**: Shell to use for command execution:
  - CMD (Windows Command Prompt)
  - PowerShell (Windows PowerShell)
  - Bash (Bash shell for Linux/macOS)
  - Shell (Default shell for Linux/macOS)
- **Timeout (Seconds)**: Timeout in seconds for command execution (1-3600, default: 300)

## Run Script

Execute a script on a specific agent.

**Parameters:**
- **Agent ID**: The ID of the agent to run script on
- **Script ID**: The ID of the script to run
- **Arguments**: Arguments to pass to the script (space-separated)
- **Timeout (Seconds)**: Timeout in seconds for script execution (1-3600, default: 300)

## Bulk Action

Perform bulk actions on multiple agents.

**Parameters:**
- **Agent IDs**: Comma-separated list of agent IDs to perform bulk action on
- **Action**: The bulk action to perform:
  - Reboot an agent
  - Shutdown an agent
  - Update an agent
  - Ping an agent
- **Mode**: When to execute the bulk action:
  - Now
  - Schedule

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access agent data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Agent ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that agent IDs exist and are accessible
2. Verify permissions for agent operations
3. Ensure client IDs are valid when using client filtering
4. Validate command/script parameters are properly formatted
5. Check timeout values are within acceptable ranges

## Response Format

### Get Many Response
Returns a collection of agents with details including ID, hostname, client information, operating system, last seen status, and configuration settings.

### Get by ID Response
Returns a single agent object with comprehensive details including system information, monitoring status, and configuration.

### Command/Script Execution Response
Returns execution results including output, exit codes, and execution status.