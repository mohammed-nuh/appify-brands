# Fix MinimalCardImage Invalid URL Error

## Steps to Complete:
- [x] Analyze the error and understand the issue
- [x] Examine the MinimalCardImage component and usage
- [x] Create a plan for the fix
- [ ] Modify MinimalCardImage component to handle relative paths
- [ ] Test the fix by running development server
- [ ] Verify images load correctly

## Issue Details:
- Error: "Failed to construct 'URL': Invalid URL" in MinimalCardImage component
- Cause: Next.js Image component expects absolute paths for public directory images
- Solution: Modify component to convert relative paths to absolute paths
