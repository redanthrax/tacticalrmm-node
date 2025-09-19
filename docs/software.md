# Software Operations

## Get by Agent

Retrieve software inventory information from a specific agent.

**Parameters:**
- **Agent**: The agent to retrieve software inventory from
- **Limit**: Maximum number of software items to return (default: 50, max: configurable)

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access software data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Agent ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that agent IDs exist and are accessible
2. Verify permissions for software inventory operations
3. Ensure the agent is online and reporting software inventory
4. Check that software inventory collection is enabled for the agent

## Response Format

### Get by Agent Response
Returns software inventory data with details including software name, version, publisher, install date, and agent ID. The software list is automatically sorted alphabetically by name for easier consumption.