# Core Operations

## Get Dashboard Info

Retrieve dashboard statistics and overview information from TacticalRMM.

**Parameters:**
- None

**Returns:**
- Server statistics
- Agent counts
- Active alerts
- System health metrics

## Get Version

Retrieve the current TacticalRMM server version information.

**Parameters:**
- None

**Returns:**
- API version
- Server version
- Git commit information

## Clear Cache

Clear the TacticalRMM server cache to force refresh of cached data.

**Parameters:**
- None

**Note:** This operation may temporarily impact performance while the cache rebuilds.

## Test Email

Send a test email to verify email configuration and connectivity.

**Parameters:**
- **Email Address**: The recipient email address for the test message

## Test SMS

Send a test SMS to verify SMS/text message configuration and connectivity.

**Parameters:**
- **Phone Number**: The recipient phone number for the test message (include country code)

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access core operations

### Validation Errors
- **400 Bad Request**: Invalid email address or phone number format
- **503 Service Unavailable**: Email or SMS service not configured

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Dashboard info requires read permissions
2. Clear cache requires admin permissions
3. Test email/SMS requires properly configured SMTP/SMS providers
4. Verify email addresses and phone numbers are in correct format
5. Check server logs if test messages fail to send
6. Cache clearing is immediate but rebuilding may take time
