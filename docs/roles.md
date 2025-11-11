# Role Operations

## Get Many

Retrieve all user roles from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of roles to return (default: 50)

## Get By ID

Retrieve detailed information about a specific role including permissions.

**Parameters:**
- **Role ID**: The unique ID of the role

## Create

Create a new user role with specific permissions.

**Parameters:**
- **Name**: Name of the role
- **Additional Fields**: Configuration including:
  - **Permissions**: Set of permissions for this role
  - **Is Superuser**: Whether this role has full admin access
  - **Can View Clients**: Client visibility permissions
  - **Can Manage Clients**: Client management permissions
  - **Can View Sites**: Site visibility permissions
  - **Can Manage Sites**: Site management permissions

## Update

Update an existing role configuration and permissions.

**Parameters:**
- **Role ID**: The ID of the role to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated role name
  - **Permissions**: Updated permission set
  - **Access Levels**: Updated access control settings

## Delete

Remove a role from TacticalRMM.

**Parameters:**
- **Role ID**: The ID of the role to delete

**Note:** Cannot delete roles that are currently assigned to users.

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage roles

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Role ID does not exist
- **409 Conflict**: Role name already exists or role is assigned to users

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify role IDs exist before updating or deleting
2. Check that role names are unique
3. Ensure permissions are valid for the TacticalRMM version
4. Note that deleting a role requires it to be unassigned from all users first
5. Superuser roles bypass most permission restrictions
6. Test role permissions with a non-admin account before deployment
