# User Operations

## Get Many

Retrieve all users from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of users to return (default: 50)

## Get By ID

Retrieve detailed information about a specific user account.

**Parameters:**
- **User ID**: The unique ID of the user

## Create

Create a new user account for TacticalRMM access.

**Parameters:**
- **Username**: Login username
- **Password**: Initial password
- **Additional Fields**: Optional configuration including:
  - **Email**: User email address
  - **First Name**: User's first name
  - **Last Name**: User's last name
  - **Role**: Assigned role ID
  - **Is Active**: Whether the account is active
  - **Is Superuser**: Whether the user has full admin access

## Update

Update an existing user account configuration.

**Parameters:**
- **User ID**: The ID of the user to update
- **Update Fields**: Fields to update including:
  - **Username**: Updated username
  - **Email**: Updated email address
  - **First Name**: Updated first name
  - **Last Name**: Updated last name
  - **Role**: Updated role assignment
  - **Is Active**: Updated active status
  - **Password**: New password (if changing)

## Delete

Remove a user account from TacticalRMM.

**Parameters:**
- **User ID**: The ID of the user to delete

**Note:** Cannot delete your own user account.

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage users

### Validation Errors
- **400 Bad Request**: Invalid parameters or weak password
- **404 Not Found**: User ID or Role ID does not exist
- **409 Conflict**: Username or email already exists

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify user IDs exist before updating or deleting
2. Check that usernames and emails are unique
3. Ensure passwords meet minimum security requirements
4. Note that you cannot delete your own account
5. Verify role IDs exist before assigning
6. Inactive users cannot log in but are retained in the system
7. Superuser accounts bypass role-based permissions
8. Review audit logs to track user actions and account changes
