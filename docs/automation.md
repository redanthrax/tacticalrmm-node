# Automation Operations

## Get Many

Retrieve all automation policies from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of automation policies to return (default: 50)

## Get By ID

Retrieve detailed information about a specific automation policy.

**Parameters:**
- **Automation Policy ID**: The unique ID of the automation policy

## Create

Create a new automation policy with associated checks, tasks, and scripts.

**Parameters:**
- **Name**: Name of the automation policy
- **Additional Fields**: Optional configuration including:
  - **Description**: Policy description
  - **Alert on Failure**: Alert when policy checks fail
  - **Excluded Agents**: List of agent IDs to exclude from this policy
  - **Excluded Clients**: List of client IDs to exclude
  - **Excluded Sites**: List of site IDs to exclude

## Update

Update an existing automation policy configuration.

**Parameters:**
- **Automation Policy ID**: The ID of the policy to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated policy name
  - **Description**: Updated description
  - **Alert on Failure**: Updated alert setting
  - **Excluded Agents/Clients/Sites**: Updated exclusion lists

## Delete

Remove an automation policy from TacticalRMM.

**Parameters:**
- **Automation Policy ID**: The ID of the policy to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage automation policies

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Automation policy ID does not exist
- **409 Conflict**: Policy name already exists

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify policy IDs exist before updating or deleting
2. Ensure excluded agent/client/site IDs are valid
3. Check that policy names are unique
4. Note that deleting a policy may affect applied agents
5. Test policies on a small group before wide deployment
