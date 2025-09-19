# Alerts Operations

## Get Many

Retrieve multiple alerts from TacticalRMM with filtering options.

**Parameters:**
- **Limit**: Maximum number of alerts to return (default: 50, max: configurable)

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access alert data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that API credentials are valid and have appropriate permissions
2. Verify that the TacticalRMM instance is accessible
3. Ensure the alert system is properly configured in TacticalRMM

## Response Format

### Get Many Response
Returns a collection of alerts with details including alert ID, severity level, agent information, alert message, timestamp, and resolution status.