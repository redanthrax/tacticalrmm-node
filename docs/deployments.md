# Deployment Operations

## Get Many

Retrieve all deployment configurations from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of deployments to return (default: 50)

## Get By ID

Retrieve detailed information about a specific deployment configuration.

**Parameters:**
- **Deployment ID**: The unique ID of the deployment

## Create

Create a new deployment configuration for agent installation.

**Parameters:**
- **Client ID**: The client to associate this deployment with
- **Site ID**: The site to associate this deployment with
- **Additional Fields**: Optional configuration including:
  - **Install Flags**: Custom installation flags
  - **Power Shell**: PowerShell script to run during installation
  - **Agent Type**: Type of agent (workstation, server)
  - **Expiry**: Deployment link expiration date

## Update

Update an existing deployment configuration.

**Parameters:**
- **Deployment ID**: The ID of the deployment to update
- **Update Fields**: Fields to update including:
  - **Client ID**: Updated client association
  - **Site ID**: Updated site association
  - **Install Flags**: Updated installation flags
  - **Agent Type**: Updated agent type
  - **Expiry**: Updated expiration date

## Delete

Remove a deployment configuration from TacticalRMM.

**Parameters:**
- **Deployment ID**: The ID of the deployment to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage deployments

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Deployment ID, Client ID, or Site ID does not exist
- **422 Unprocessable Entity**: Invalid deployment configuration

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify client and site IDs exist before creating deployments
2. Check that expiry dates are in the future
3. Ensure install flags are properly formatted
4. Note that expired deployments cannot be used for installation
5. Test deployment links before distributing to end users
6. Review deployment logs if agent installation fails
