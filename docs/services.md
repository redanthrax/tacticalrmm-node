# Service Operations

## Get By Agent

Retrieve all Windows services running on a specific agent.

**Parameters:**
- **Agent ID**: The unique ID of the agent
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of services to return (default: 50)

## Start

Start a Windows service on an agent.

**Parameters:**
- **Agent ID**: The agent to start the service on
- **Service Name**: The name of the service to start

## Stop

Stop a Windows service on an agent.

**Parameters:**
- **Agent ID**: The agent to stop the service on
- **Service Name**: The name of the service to stop

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage services

### Validation Errors
- **400 Bad Request**: Invalid parameters or service name
- **404 Not Found**: Agent ID or service name does not exist
- **422 Unprocessable Entity**: Service cannot be started or stopped (e.g., already in requested state)

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify agent IDs exist before querying or managing services
2. Check that service names are exact matches (case-sensitive)
3. Ensure the agent is online before attempting service operations
4. Note that some system services may require elevated permissions
5. Service start/stop operations may take time to complete
6. Verify service dependencies are met before starting
7. Check Windows Event Logs on the agent for detailed service failure information
