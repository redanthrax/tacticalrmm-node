# API Key Operations

## Get Many

Retrieve all API keys from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of API keys to return (default: 50)

## Create

Create a new API key for TacticalRMM API access.

**Parameters:**
- **Name**: Name/description of the API key
- **Additional Fields**: Optional configuration including:
  - **Expiration**: Expiration date for the API key

## Update

Update an existing API key configuration.

**Parameters:**
- **API Key ID**: The ID of the API key to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated name/description
  - **Expiration**: Updated expiration date

## Delete

Remove an API key from TacticalRMM.

**Parameters:**
- **API Key ID**: The ID of the API key to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage API keys

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: API key ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify API key IDs exist before updating or deleting
2. Check that expiration dates are in the future
3. Ensure you have admin permissions to manage API keys
4. Note that deleting an API key will immediately revoke access
