# Windows Update Operations

## Get By Agent

Retrieve Windows update information for a specific agent.

**Parameters:**
- **Agent ID**: The unique ID of the agent
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of updates to return (default: 50)

**Returns:**
- Available updates
- Installed updates
- Update status and history

## Install

Install Windows updates on an agent.

**Parameters:**
- **Agent ID**: The agent to install updates on
- **Update Selection**: Which updates to install
  - **Install All**: Install all available updates
  - **Specific Updates**: Select specific update KBs to install
- **Additional Options**: Optional configuration including:
  - **Reboot After Install**: Whether to reboot after installation
  - **Schedule**: When to perform the installation

## Scan

Scan an agent for available Windows updates.

**Parameters:**
- **Agent ID**: The agent to scan for updates

**Note:** This triggers a manual scan instead of waiting for the scheduled scan interval.

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage Windows updates

### Validation Errors
- **400 Bad Request**: Invalid parameters or update selection
- **404 Not Found**: Agent ID does not exist
- **422 Unprocessable Entity**: Agent offline or Windows Update service unavailable

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify agent IDs exist and agents are online
2. Scan before attempting to install updates
3. Note that update installation may take significant time
4. Reboots may be required for certain updates to complete
5. Check Windows Update service status on the agent
6. Review Windows Update logs on the agent for detailed error information
7. Some updates may require multiple install cycles
8. Corporate WSUS policies may affect available updates
