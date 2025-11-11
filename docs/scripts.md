# Script Operations

## Get Many

Retrieve all scripts from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of scripts to return (default: 50)

## Get By ID

Retrieve detailed information about a specific script.

**Parameters:**
- **Script ID**: The unique ID of the script

## Create

Create a new script for execution on agents.

**Parameters:**
- **Name**: Name of the script
- **Script Type**: Type of script (PowerShell, Python, Batch, Shell)
- **Script Content**: The actual script code
- **Additional Fields**: Optional configuration including:
  - **Description**: Script description
  - **Category**: Script category for organization
  - **Default Timeout**: Default execution timeout in seconds
  - **Favorite**: Mark as favorite
  - **Arguments**: Default script arguments

## Update

Update an existing script configuration or content.

**Parameters:**
- **Script ID**: The ID of the script to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated script name
  - **Script Content**: Updated script code
  - **Description**: Updated description
  - **Timeout**: Updated timeout value
  - **Arguments**: Updated default arguments

## Delete

Remove a script from TacticalRMM.

**Parameters:**
- **Script ID**: The ID of the script to delete

## Download

Download the content of a script.

**Parameters:**
- **Script ID**: The ID of the script to download

**Returns:**
- Script file content

## Test

Execute a script on an agent for testing purposes.

**Parameters:**
- **Script ID**: The ID of the script to test
- **Agent ID**: The agent to run the test on
- **Additional Options**: Optional configuration including:
  - **Arguments**: Script arguments for this test run
  - **Timeout**: Override timeout for this test
  - **Environment Variables**: Environment variables to set

## Get Snippets

Retrieve all code snippets from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of snippets to return (default: 50)

## Get Snippet By ID

Retrieve a specific code snippet by ID.

**Parameters:**
- **Snippet ID**: The unique ID of the code snippet

## Create Snippet

Create a new reusable code snippet.

**Parameters:**
- **Name**: Name of the snippet
- **Code**: The snippet code content
- **Additional Fields**: Optional configuration including:
  - **Description**: Snippet description
  - **Language**: Programming language

## Update Snippet

Update an existing code snippet.

**Parameters:**
- **Snippet ID**: The ID of the snippet to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated snippet name
  - **Code**: Updated snippet code
  - **Description**: Updated description

## Delete Snippet

Remove a code snippet from TacticalRMM.

**Parameters:**
- **Snippet ID**: The ID of the snippet to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to manage scripts

### Validation Errors
- **400 Bad Request**: Invalid parameters or script syntax errors
- **404 Not Found**: Script ID or Agent ID does not exist
- **422 Unprocessable Entity**: Invalid script content or configuration

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify script IDs exist before updating, deleting, or downloading
2. Test scripts on a single agent before deploying widely
3. Check script syntax before uploading
4. Ensure timeout values are appropriate for script execution time
5. Use snippets to store reusable code blocks
6. Review test execution output to identify script issues
7. Note that deleted scripts cannot be recovered
8. Verify agent compatibility with script type (PowerShell on Windows, Shell on Linux)
