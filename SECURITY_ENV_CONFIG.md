# 🔐 Security Configuration - Dante AI Credentials

## Overview
All Dante AI API credentials are now properly secured as environment variables. No secrets are hardcoded in source code.

## Environment Variables Required

### For Local Development
Create `.env.local` in the project root (do NOT commit):

```env
DANTE_API_KEY=your-actual-dante-api-key-here
DANTE_KB_ID=490b0d73-4800-441d-94bf-04ffcefb8650
DANTE_BASE_URL=https://api-v2.dante-ai.com
VERCEL_URL=http://localhost:5173
```

### For Vercel Deployment
Set these in Vercel Dashboard > Settings > Environment Variables:

1. **DANTE_API_KEY** (Secret)
   - Get from: https://dante-ai.com/account/api-keys
   - Type: Secret (hidden value)
   - Availability: Production, Preview, Development

2. **DANTE_KB_ID** (Optional - has default)
   - Value: `490b0d73-4800-441d-94bf-04ffcefb8650`
   - Type: Plaintext
   - Availability: Production, Preview, Development

3. **DANTE_BASE_URL** (Optional - has default)
   - Value: `https://api-v2.dante-ai.com`
   - Type: Plaintext
   - Availability: Production, Preview, Development

## Configuration Files

### `.env.example` ✅
- **Purpose:** Template for environment variables
- **Status:** Tracked in Git
- **Contains:** Placeholder values (no secrets)
- **Usage:** Copy to `.env.local` and fill in real values

### `.env.local` ✅ 
- **Purpose:** Local development credentials
- **Status:** NOT tracked (in .gitignore)
- **Contains:** Real API keys for development
- **Usage:** Referenced by Vite dev server

### `vercel.json` ✅
- **Purpose:** Vercel deployment configuration
- **Status:** Tracked in Git
- **Contains:** Environment variable references (@dante_api_key)
- **Usage:** Tells Vercel which env vars are needed

## Secure Usage in API Functions

### Before (❌ INSECURE)
```javascript
const API_KEY = 'DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7';
// Hardcoded in source = exposed in GitHub!
```

### After (✅ SECURE)
```javascript
const API_KEY = process.env.DANTE_API_KEY;

if (!API_KEY) {
  throw new Error('DANTE_API_KEY environment variable is not set');
}
// Only reads from environment at runtime
```

## Protected Files

These files now read credentials from environment variables:

```
api/create-conversation.js  ✅ Uses process.env.DANTE_API_KEY
api/send-message.js         ✅ Uses process.env.DANTE_API_KEY
src/utils/danteAI.ts        ✅ Calls secure API endpoints
```

## How It Works

### Development Flow
```
1. npm run dev
   ↓
2. Vite loads .env.local
   ↓
3. Backend API functions use process.env.DANTE_API_KEY
   ↓
4. Secure Dante AI calls made with real credentials
```

### Production Flow (Vercel)
```
1. Deploy to Vercel
   ↓
2. Vercel injects environment variables from dashboard
   ↓
3. Backend API functions use process.env.DANTE_API_KEY
   ↓
4. Secure Dante AI calls made with real credentials
```

## .gitignore Entries

These files containing secrets are protected:

```gitignore
.env.local
.env
.env.*.local
```

Verify with: `git status` should NOT show `.env.local`

## Setup Instructions

### For Your Machine (Local Dev)

1. Create `.env.local` in project root:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your real Dante API key:
```env
DANTE_API_KEY=sk-your-real-key-here
```

3. Start development:
```bash
npm run dev
```

### For Vercel Deployment

1. Go to https://vercel.com/dashboard
2. Select your project: `AICurriculumBuilderv3`
3. Settings → Environment Variables
4. Add:
   - Name: `DANTE_API_KEY`
   - Value: `[paste your actual Dante API key]`
   - Environments: Production, Preview, Development
   - Click "Save"
5. Redeploy project

## Verification Checklist

- [ ] `.env.example` is in Git (no secrets)
- [ ] `.env.local` is NOT in Git (is in .gitignore)
- [ ] `api/create-conversation.js` uses `process.env.DANTE_API_KEY`
- [ ] `api/send-message.js` uses `process.env.DANTE_API_KEY`
- [ ] `vercel.json` references environment variables
- [ ] `.env.local` created locally with real API key
- [ ] `npm run dev` works with .env.local
- [ ] Vercel environment variables set in dashboard

## Security Best Practices

✅ **DO:**
- Store secrets in `.env.local` (never commit)
- Use environment variables in all backend code
- Mark secrets as "Secret" in Vercel dashboard
- Rotate API keys regularly
- Use `.env.example` as template

❌ **DON'T:**
- Hardcode API keys in source code
- Commit `.env.local` or `.env` to Git
- Share API keys in Slack, email, or chat
- Use same key for dev and production
- Log API keys to console in production

## Troubleshooting

### Error: "DANTE_API_KEY environment variable is not set"
**Solution:** Ensure `.env.local` exists with valid `DANTE_API_KEY`

### Error: "401 Unauthorized" from Dante AI
**Solution:** Check that API key is correct and not expired

### Local dev works but Vercel fails
**Solution:** Verify environment variables are set in Vercel dashboard (Settings → Environment Variables)

## Related Files

- [.env.example](.env.example) - Environment variable template
- [.env.local](.env.local) - Local development (not committed)
- [vercel.json](vercel.json) - Vercel deployment config
- [api/create-conversation.js](api/create-conversation.js) - API function
- [api/send-message.js](api/send-message.js) - API function

---

**Status:** ✅ All Dante AI credentials are now securely managed as environment variables.
