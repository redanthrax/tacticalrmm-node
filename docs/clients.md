# Clients Operations

## Get Many

Retrieve multiple clients from TacticalRMM with optional filtering.

**Parameters:**
- **Limit**: Maximum number of clients to return (default: 50, max: configurable)

## Get by ID

Retrieve a specific client by their ID with detailed information.

**Parameters:**
- **Client ID**: The ID of the client to retrieve

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access client data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Client ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that client IDs exist and are accessible
2. Verify permissions for client operations
3. Ensure the client management system is properly configured

## Response Format

### Get Many Response
Returns a collection of clients with details including client ID, name, sites, agent count, and organizational information.

### Get by ID Response
Returns a single client object with comprehensive details including client information, associated sites, agent relationships, and configuration settings.