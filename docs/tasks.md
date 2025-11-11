# Task Operations

## Get Many

Retrieve all automated tasks from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of tasks to return (default: 50)

## Get By ID

Retrieve detailed information about a specific task.

**Parameters:**
- **Task ID**: The unique ID of the task

## Create

Create a new scheduled or automated task to run on agents.

**Parameters:**
- **Agent ID**: The agent to run this task on
- **Script ID**: The script to execute
- **Task Type**: Type of task (Manual, Daily, Weekly, Monthly, Run Once, Check Failure, On Startup)
- **Additional Fields**: Configuration including:
  - **Name**: Custom task name
  - **Enabled**: Whether the task is enabled
  - **Run As User**: User account to run the task as
  - **Timeout**: Task execution timeout
  - **Schedule**: Schedule configuration (time, days, etc.)
  - **Arguments**: Script arguments

## Update

Update an existing task configuration.

**Parameters:**
- **Task ID**: The ID of the task to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated task name
  - **Enabled**: Enable or disable the task
  - **Schedule**: Updated schedule configuration
  - **Timeout**: Updated timeout value
  - **Arguments**: Updated script arguments

## Delete

Remove a task from TacticalRMM.

**Parameters:**
- **Task ID**: The ID of the task to delete

## Run

Manually execute a task immediately instead of waiting for the schedule.

**Parameters:**
- **Task ID**: The ID of the task to run

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage tasks

### Validation Errors
- **400 Bad Request**: Invalid parameters or schedule configuration
- **404 Not Found**: Task ID, Agent ID, or Script ID does not exist
- **422 Unprocessable Entity**: Invalid task configuration for the specified type

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify agent and script IDs exist before creating tasks
2. Check that schedule configuration is valid for the task type
3. Ensure timeout values are appropriate for script execution time
4. Note that disabled tasks will not run automatically
5. Use the Run operation to test task configurations immediately
6. Review task history to identify patterns in failures
7. Verify the Run As User account has necessary permissions
8. Check agent time zone settings for scheduled tasks
