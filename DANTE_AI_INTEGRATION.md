# Dante AI Integration Guide

## 🚀 Overview

Your AI Curriculum Builder now integrates **Dante AI** for powerful, real-time AI responses. This replaces the simulated responses with live AI queries using the Dante AI API.

## 📁 New Files Created

### Backend Serverless Functions (Vercel Ready)
- **`api/create-conversation.js`** - Initializes conversation sessions
- **`api/send-message.js`** - Sends queries to Dante AI and returns responses

### Frontend Integration
- **`src/utils/danteAI.ts`** - Utility module for AI interactions
- **`vercel.json`** - Vercel deployment configuration

### Updated Components
- **`src/components/AIAssistant.tsx`** - Now uses real Dante AI responses

---

## 🔧 Configuration

### API Credentials (Already Set)
```
Base URL: https://api-v2.dante-ai.com
API Key: DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7
Model: gpt-5.1
Knowledge Base ID: 490b0d73-4800-441d-94bf-04ffcefb8650
```

### For Production Deployment (Vercel)
Add this environment variable in Vercel project settings:
```
DANTE_API_KEY = DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7
```

---

## 🏃 Running Locally

### Option 1: Development Mode (Simple)
```bash
npm install
npm run dev
```
- Vite dev server runs on http://localhost:5173
- API calls are proxied through Vite

### Option 2: Full Stack Development (Recommended)
```bash
# Terminal 1: Vercel Functions (requires Vercel CLI)
npm install -g vercel
vercel dev

# Terminal 2: Vite frontend
npm run dev
```

---

## 📚 Using the API

### Direct JavaScript Usage

```javascript
import { queryDanteAI, initConversation } from './utils/danteAI';

// Initialize conversation (happens automatically on page load)
const conversationId = await initConversation();

// Query the AI
const response = await queryDanteAI(
  'Generate learning outcomes for web development',
  'gpt-5.1'
);
console.log(response);
```

### Curriculum-Specific AI Functions

The `CurriculumAI` object provides specialized functions:

```javascript
import { CurriculumAI } from './utils/danteAI';

// Generate learning outcomes
const outcomes = await CurriculumAI.generateLearningOutcomes(
  'Senior Software Engineer job description',
  'Bachelor'
);

// Create assessment rubric
const rubric = await CurriculumAI.createAssessmentRubric(
  'Web Development Project',
  'Code quality, UX/UI, Documentation'
);

// Suggest teaching strategies
const strategies = await CurriculumAI.suggestTeachingStrategies(
  'React.js Fundamentals',
  'University students with JavaScript basics'
);

// Build module structure
const modules = await CurriculumAI.buildModuleStructure(
  'Data Science Bootcamp',
  '12 weeks',
  'Master Python, ML, Statistics'
);

// Align to framework
const alignment = await CurriculumAI.alignToFramework(
  'Your curriculum content here',
  'ACCE (Australian Computing Curricula)'
);

// Generate timeline
const timeline = await CurriculumAI.generateTimeline(
  16,  // weeks
  'Fundamentals, Core Concepts, Advanced Topics',
  'Weekly quizzes, Midterm, Final project'
);
```

---

## 🎯 Features

### ✅ Implemented Features
1. **Real-time AI Responses** - Live Dante AI integration
2. **Conversation Persistence** - Sessions saved in localStorage
3. **Error Handling** - Graceful error messages with fallbacks
4. **Loading States** - Visual feedback during AI processing
5. **Quick Actions** - Pre-built prompts for common curriculum tasks
6. **System Prompts** - Specialized context for curriculum design

### ✨ UI Enhancements
- Loading animation while AI is thinking
- Auto-scrolling to latest messages
- Disabled input while processing
- Error notifications
- Responsive design maintained

---

## 🌐 API Endpoints

### Create Conversation
```
POST /api/create-conversation

Response:
{
  "id": "conversation_uuid",
  "success": true
}
```

### Send Message
```
POST /api/send-message

Request:
{
  "question": "Your question here",
  "conversation_id": "uuid",
  "model": "gpt-5.1"
}

Response:
{
  "answer": "AI response text...",
  "success": true
}
```

---

## 🚀 Deployment to Vercel

### Step 1: Prepare for Deployment
```bash
npm run build
```

### Step 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Step 3: Set Environment Variable
In Vercel Dashboard → Project Settings → Environment Variables:
```
DANTE_API_KEY = DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7
```

### Step 4: Redeploy
```bash
vercel --prod
```

---

## 📋 Project Structure

```
ai-curriculum-builder/
├── api/
│   ├── create-conversation.js      ← New
│   └── send-message.js             ← New
├── src/
│   ├── components/
│   │   ├── AIAssistant.tsx         ← Updated
│   │   └── ...
│   ├── utils/
│   │   └── danteAI.ts              ← New
│   └── ...
├── vite.config.ts                  ← Updated
├── vercel.json                     ← New
├── package.json
└── ...
```

---

## 🔐 Security Notes

1. **API Key in Functions** - Currently hardcoded in serverless functions
2. **For Production** - Use environment variables (see Vercel deployment)
3. **CORS Handling** - Enabled in backend functions
4. **Input Validation** - Basic validation in serverless functions

---

## 🐛 Troubleshooting

### "Failed to initialize session"
- Check browser console for errors
- Verify Dante API credentials
- Check CORS headers in network tab

### "API 404 errors in development"
- Ensure you're running `vercel dev` or Vite is properly configured
- Check proxy settings in vite.config.ts

### "Empty or null responses"
- API might be rate-limited
- Check API key validity
- Verify knowledge base ID

### "Conversation ID not persisting"
- Check browser localStorage is enabled
- Clear storage and reinitialize: `localStorage.clear()`

---

## 📖 API Reference

### `queryDanteAI(question, model?, systemPrompt?)`
Sends a query to Dante AI and returns the response.

**Parameters:**
- `question` (string) - The user's question
- `model` (string) - AI model to use (default: 'gpt-5.1')
- `systemPrompt` (string) - Optional system context

**Returns:** `Promise<string | null>`

### `initConversation()`
Initializes a new conversation session.

**Returns:** `Promise<string | null>` - Conversation ID

### `CurriculumAI` Object
Specialized functions for curriculum design with built-in system prompts.

---

## 🎓 Example: Complete Workflow

```javascript
import { queryDanteAI, CurriculumAI } from './utils/danteAI';

async function buildCurriculumWithAI() {
  try {
    // Step 1: Generate learning outcomes
    const outcomes = await CurriculumAI.generateLearningOutcomes(
      'Full Stack Web Developer job description',
      'Diploma'
    );
    console.log('Learning Outcomes:', outcomes);

    // Step 2: Create assessment rubric
    const rubric = await CurriculumAI.createAssessmentRubric(
      'Final Capstone Project',
      'Code quality, creativity, documentation'
    );
    console.log('Assessment Rubric:', rubric);

    // Step 3: Build module structure
    const modules = await CurriculumAI.buildModuleStructure(
      'Full Stack Development Course',
      '20 weeks',
      outcomes
    );
    console.log('Module Structure:', modules);

    // Step 4: Generate timeline
    const timeline = await CurriculumAI.generateTimeline(
      20,
      modules,
      'Weekly exercises, 2 projects, 1 capstone'
    );
    console.log('Course Timeline:', timeline);

  } catch (error) {
    console.error('Curriculum building failed:', error);
  }
}

buildCurriculumWithAI();
```

---

## 💡 Tips & Best Practices

1. **System Prompts** - Use them to get specialized responses
2. **Conversation ID** - Reuse across multiple queries for context
3. **Error Handling** - Always wrap queries in try-catch
4. **Loading States** - Show visual feedback during API calls
5. **Rate Limiting** - Consider adding throttling for rapid queries

---

## 📞 Support

For issues with Dante AI API:
- Email: support@dante-ai.com
- Knowledge Base: https://docs.dante-ai.com

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- GitHub Issues: Check the project repository

---

**Last Updated:** January 28, 2026  
**Status:** Production Ready ✅
