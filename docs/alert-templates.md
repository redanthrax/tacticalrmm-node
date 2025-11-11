# Alert Template Operations

## Get Many

Retrieve multiple alert templates from TacticalRMM with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of alert templates to return (default: 50)

## Get by ID

Retrieve a specific alert template by its ID with detailed configuration.

**Parameters:**
- **Template ID**: The ID of the alert template to retrieve

## Create

Create a new alert template with email, SMS, and dashboard configurations.

**Parameters:**
- **Name**: Name of the alert template
- **Additional Fields**: Optional configuration including:
  - **Action**: Action to execute on alert
  - **Action Args**: Arguments for the action
  - **Action Timeout**: Timeout for action execution
  - **Agent Email on Resolved**: Email agents when alert is resolved
  - **Agent Email Alert**: Enable email alerts to agents
  - **Agent Periodic Notification**: Send periodic notifications to agents
  - **Agent Text on Resolved**: Text agents when alert is resolved
  - **Agent Text Alert**: Enable text alerts to agents
  - **Dashboard Alert**: Enable dashboard alerts
  - **Email Recipients**: Email addresses to notify
  - **Exclude Workstations**: Exclude workstation agents from alerts
  - **Failure Action**: Action to execute on check failure
  - **Failure Action Args**: Arguments for failure action
  - **Failure Action Timeout**: Timeout for failure action
  - **Is Default**: Whether this is the default template
  - **Periodic Notification Days/Hours**: Notification frequency
  - **Resolved Action**: Action to execute when resolved
  - **SMS Recipients**: Phone numbers to notify

## Update

Update an existing alert template configuration.

**Parameters:**
- **Template ID**: The ID of the alert template to update
- **Update Fields**: Fields to update (same options as Create)

## Delete

Remove an alert template from TacticalRMM.

**Parameters:**
- **Template ID**: The ID of the alert template to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage alert templates

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Alert template ID does not exist
- **409 Conflict**: Cannot delete default alert template

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify alert template IDs exist before updating or deleting
2. Check that email and SMS recipients are properly formatted
3. Ensure action scripts exist if using actions
4. Validate timeout values are within acceptable ranges
5. Confirm permissions for alert template management
