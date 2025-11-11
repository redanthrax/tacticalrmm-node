# Reporting Operations

## Get Many

Retrieve all saved reports from TacticalRMM.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit
- **Limit**: Maximum number of reports to return (default: 50)

## Get By ID

Retrieve detailed information about a specific saved report.

**Parameters:**
- **Report ID**: The unique ID of the report

## Create

Create a new custom report configuration.

**Parameters:**
- **Name**: Name of the report
- **Additional Fields**: Configuration including:
  - **Report Type**: Type of report (Asset, Check Status, Agent List, etc.)
  - **Clients**: Client filter (all or specific clients)
  - **Sites**: Site filter (all or specific sites)
  - **Agents**: Agent filter (all or specific agents)
  - **Columns**: Data columns to include in the report
  - **Sort Order**: How to sort report results

## Update

Update an existing report configuration.

**Parameters:**
- **Report ID**: The ID of the report to update
- **Update Fields**: Fields to update including:
  - **Name**: Updated report name
  - **Report Type**: Updated report type
  - **Filters**: Updated client/site/agent filters
  - **Columns**: Updated column selection
  - **Sort Order**: Updated sorting

## Delete

Remove a saved report from TacticalRMM.

**Parameters:**
- **Report ID**: The ID of the report to delete

## Run Report

Execute a report and retrieve the results.

**Parameters:**
- **Report ID**: The ID of the report to run

**Returns:**
- Report data based on the configured filters and columns

## Email Report

Send a report to specified email recipients.

**Parameters:**
- **Report ID**: The ID of the report to email
- **Email Recipients**: List of email addresses to send the report to
- **Additional Options**: Optional configuration including:
  - **Subject**: Custom email subject
  - **Message**: Custom email message body
  - **Format**: Report format (PDF, CSV, HTML)

## Export Report

Export a report to a file format for download.

**Parameters:**
- **Report ID**: The ID of the report to export
- **Format**: Export format (PDF, CSV, Excel, JSON)

**Returns:**
- File download or file path

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access or manage reports

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Report ID does not exist
- **422 Unprocessable Entity**: Invalid report configuration or filters

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Verify report IDs exist before running, emailing, or exporting
2. Check that client/site/agent filters reference valid entities
3. Ensure email addresses are properly formatted
4. Verify email service is configured before using Email Report
5. Test reports with small datasets before running on large environments
6. Note that report generation may take time for large data sets
7. Use appropriate export formats for your use case (CSV for data processing, PDF for sharing)
