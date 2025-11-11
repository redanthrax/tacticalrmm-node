# Site Operations

## Get Many

Retrieve all sites from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of sites to return (default: 50)

## Get By ID

Retrieve detailed information about a specific site.

**Parameters:**
- **Site ID**: The unique ID of the site

## Create

Create a new site under a client organization.

**Parameters:**
- **Client ID**: The parent client for this site
- **Name**: Name of the site
- **Additional Fields**: Optional configuration including:
  - **Custom Fields**: Site-specific custom field values
  - **Block Policy Inheritance**: Whether to block policy inheritance from client

## Update

Update an existing site configuration.

**Parameters:**
- **Site ID**: The ID of the site to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated site name
  - **Custom Fields**: Updated custom field values
  - **Block Policy Inheritance**: Updated policy inheritance setting

## Delete

Remove a site from TacticalRMM.

**Parameters:**
- **Site ID**: The ID of the site to delete

**Note:** Cannot delete sites that still have agents assigned.

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage sites

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Site ID or Client ID does not exist
- **409 Conflict**: Site name already exists under this client or site has assigned agents

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify site and client IDs exist before updating or deleting
2. Check that site names are unique within the client
3. Ensure all agents are moved before deleting a site
4. Note that blocking policy inheritance affects automation policies
5. Custom fields must match the configured custom field schema
6. Site deletion is permanent and cannot be undone
