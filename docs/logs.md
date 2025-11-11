# Log Operations

## Get Pending Actions

Retrieve all pending actions waiting to be executed by agents.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of pending actions to return (default: 50)

## Cancel Pending Action

Cancel a specific pending action before it executes.

**Parameters:**
- **Pending Action ID**: The ID of the pending action to cancel

## Delete Pending Action

Remove a pending action from the queue.

**Parameters:**
- **Pending Action ID**: The ID of the pending action to delete

## Get Log Retention Settings

Retrieve the current log retention configuration.

**Parameters:**
- None

**Returns:**
- Audit log retention period
- Debug log retention period
- Agent history retention period

## Update Log Retention Settings

Update the log retention configuration to control how long logs are kept.

**Parameters:**
- **Retention Settings**: Configuration including:
  - **Audit Log Days**: Days to retain audit logs (default: 365)
  - **Debug Log Days**: Days to retain debug logs (default: 30)
  - **Agent History Days**: Days to retain agent history (default: 60)

## Get Audit Logs

Retrieve audit logs showing user actions and system events.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of audit log entries to return (default: 50)
- **Additional Filters**: Optional filters including:
  - **Agent ID**: Filter by specific agent
  - **User**: Filter by username
  - **Action Type**: Filter by action type
  - **Date Range**: Filter by date range

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access logs or manage pending actions

### Validation Errors
- **400 Bad Request**: Invalid parameters or retention period values
- **404 Not Found**: Pending action ID does not exist
- **422 Unprocessable Entity**: Invalid retention settings (e.g., negative days)

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify pending action IDs exist before canceling or deleting
2. Check that retention periods are reasonable (not too short or too long)
3. Note that canceled actions cannot be restarted
4. Audit logs require appropriate permissions to view
5. Use filters to narrow down large audit log results
6. Shorter retention periods reduce storage but lose historical data
