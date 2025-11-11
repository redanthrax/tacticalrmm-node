# Check Operations

## Get Many

Retrieve all checks from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of checks to return (default: 50)

## Get By ID

Retrieve detailed information about a specific check.

**Parameters:**
- **Check ID**: The unique ID of the check

## Get By Agent

Retrieve all checks associated with a specific agent.

**Parameters:**
- **Agent ID**: The unique ID of the agent
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of checks to return (default: 50)

## Create

Create a new check for monitoring purposes.

**Parameters:**
- **Check Type**: Type of check (CPU Load, Disk Space, Event Log, Memory, Ping, Script, Service, Windows Updates)
- **Agent ID**: The agent to run this check on
- **Additional Fields**: Configuration specific to the check type including:
  - **Name**: Custom name for the check
  - **Alert Severity**: Severity level (info, warning, error)
  - **Failure Count**: Number of failures before alerting
  - **Pass Count**: Number of passes to clear alert
  - **Run Interval**: How often to run the check
  - Type-specific parameters (thresholds, paths, etc.)

## Update

Update an existing check configuration.

**Parameters:**
- **Check ID**: The ID of the check to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated check name
  - **Alert Severity**: Updated severity
  - **Enabled**: Enable or disable the check
  - Check-type specific parameters

## Delete

Remove a check from TacticalRMM.

**Parameters:**
- **Check ID**: The ID of the check to delete

## Run

Manually execute a check immediately instead of waiting for the scheduled interval.

**Parameters:**
- **Check ID**: The ID of the check to run

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage checks

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Check ID or Agent ID does not exist
- **422 Unprocessable Entity**: Invalid check configuration for the specified type

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify agent IDs exist before creating checks
2. Ensure check-type specific parameters are valid
3. Check that threshold values are appropriate for the metric type
4. Note that disabled checks will not run automatically
5. Use the Run operation to test check configurations immediately
6. Review check history to identify patterns in failures
