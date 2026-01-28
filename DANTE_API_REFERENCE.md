# Dante AI - Complete API Reference

## Table of Contents
1. [Serverless Functions](#serverless-functions)
2. [Client-Side Utilities](#client-side-utilities)
3. [Curriculum AI Functions](#curriculum-ai-functions)
4. [Configuration](#configuration)
5. [Error Handling](#error-handling)

---

## Serverless Functions

These run on Vercel (or any Node.js environment) and handle communication with Dante AI.

### POST `/api/create-conversation`

Creates a new conversation session with Dante AI.

**Request:**
```bash
curl -X POST http://localhost:5173/api/create-conversation \
  -H "Content-Type: application/json"
```

**Response (Success):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "success": true
}
```

**Response (Error):**
```json
{
  "error": "Failed to create conversation",
  "details": "..."
}
```

**Status Codes:**
- `200` - Conversation created successfully
- `405` - Method not allowed (use POST)
- `500` - Server error

**Notes:**
- Called automatically on page load
- ID is stored in localStorage as `dante_conversation_id`
- Required before sending messages

---

### POST `/api/send-message`

Sends a message/query to Dante AI and returns the response.

**Request:**
```bash
curl -X POST http://localhost:5173/api/send-message \
  -H "Content-Type: application/json" \
  -d '{
    "question": "Generate learning outcomes for web development",
    "conversation_id": "550e8400-e29b-41d4-a716-446655440000",
    "model": "gpt-5.1"
  }'
```

**Request Body:**
```typescript
{
  question: string;           // Required: The user's question/prompt
  conversation_id: string;    // Required: From create-conversation
  model?: string;             // Optional: Model name (default: gpt-5.1)
}
```

**Response (Success):**
```json
{
  "answer": "Learning outcomes should be SMART: Specific, Measurable, Achievable...",
  "success": true,
  "raw": { /* Full API response */ }
}
```

**Response (Error):**
```json
{
  "error": "Failed to query AI",
  "message": "..."
}
```

**Status Codes:**
- `200` - Query processed successfully
- `400` - Missing or invalid parameters
- `405` - Method not allowed (use POST)
- `500` - Server error

**Validation:**
- `question` must be non-empty string
- `conversation_id` must be valid UUID from `create-conversation`
- `model` defaults to 'gpt-5.1' if not provided

---

## Client-Side Utilities

These are TypeScript/JavaScript utilities for frontend usage.

### `initConversation()`

Initializes a conversation session on page load.

```typescript
import { initConversation } from './utils/danteAI';

const conversationId = await initConversation();
// Returns: string | null
// Side effects: Sets localStorage['dante_conversation_id']
```

**Returns:**
- `string` - Conversation ID if successful
- `null` - If initialization failed

**Throws:** Nothing (errors are logged to console)

**When to use:**
- App startup (automatic)
- After user logout/login
- Manual session reset

---

### `queryDanteAI(question, model?, systemPrompt?)`

Sends a query to Dante AI with optional system context.

```typescript
import { queryDanteAI } from './utils/danteAI';

// Simple query
const response = await queryDanteAI('What are SMART learning outcomes?');

// With model specification
const response = await queryDanteAI(
  'Design a rubric for evaluating group projects',
  'gpt-5.1'
);

// With system prompt for specialized context
const response = await queryDanteAI(
  'Ruby on Rails course',
  'gpt-5.1',
  'You are an expert curriculum designer for technical bootcamps. Provide practical, industry-relevant advice.'
);
```

**Parameters:**
```typescript
question: string          // Required: The question/prompt
model?: string           // Optional: AI model (default: 'gpt-5.1')
systemPrompt?: string    // Optional: Context instruction for AI
```

**Returns:**
```typescript
Promise<string | null>   // AI response text or null on error
```

**Throws:**
- `Error` with message if conversation not initialized
- API errors are returned as rejected promises

**Usage Example:**
```typescript
try {
  const answer = await queryDanteAI('Generate a course syllabus');
  console.log('AI Response:', answer);
} catch (error) {
  console.error('Query failed:', error.message);
}
```

---

### `getConversationId()`

Returns the current conversation ID without creating a new session.

```typescript
import { getConversationId } from './utils/danteAI';

const id = getConversationId();
if (id) {
  console.log('Current conversation:', id);
} else {
  console.log('No active conversation');
}
```

**Returns:**
- `string` - Current conversation ID
- `null` - If no conversation initialized

---

### `clearConversation()`

Clears the conversation session (useful for logout or reset).

```typescript
import { clearConversation } from './utils/danteAI';

clearConversation();
// Clears: conversationId variable + localStorage
```

**Side Effects:**
- Sets `conversationId` to `null`
- Removes `dante_conversation_id` from localStorage
- Logs "🔄 Conversation cleared"

---

## Curriculum AI Functions

Specialized functions with built-in system prompts for education use cases.

### `CurriculumAI.generateLearningOutcomes(jobDescription, level)`

Generates SMART learning outcomes from a job description.

```typescript
import { CurriculumAI } from './utils/danteAI';

const outcomes = await CurriculumAI.generateLearningOutcomes(
  'Senior Full Stack Engineer - 5+ years JavaScript/React/Node.js experience...',
  'Bachelor'
);

console.log(outcomes);
// Output:
// 1. Design and implement scalable REST APIs using Node.js
// 2. Build responsive web applications with React and modern tooling
// ...
```

**Parameters:**
```typescript
jobDescription: string    // Job posting or role requirements
level: string            // Education level (e.g., 'Diploma', 'Bachelor', 'Masters')
```

**Returns:**
```typescript
Promise<string | null>   // Formatted list of learning outcomes
```

**System Prompt Used:**
> "You are an expert curriculum designer for {level} level education. Generate clear, measurable learning outcomes (SMART objectives) based on the following job description. Format as a numbered list."

---

### `CurriculumAI.createAssessmentRubric(topic, criteria)`

Creates a detailed assessment rubric for evaluating student work.

```typescript
import { CurriculumAI } from './utils/danteAI';

const rubric = await CurriculumAI.createAssessmentRubric(
  'Web Development Final Project',
  'Code quality, UX/UI design, documentation, deployment'
);

console.log(rubric);
// Output:
// ASSESSMENT RUBRIC: Web Development Final Project
// 
// Criteria 1: Code Quality
// ├─ Excellent: Clean, well-organized, follows best practices
// ├─ Good: Mostly clean code with minor issues
// ...
```

**Parameters:**
```typescript
topic: string          // Course topic or assignment name
criteria: string       // What to assess (comma-separated or full description)
```

**Returns:**
```typescript
Promise<string | null>  // Detailed rubric with performance levels
```

---

### `CurriculumAI.suggestTeachingStrategies(topic, audience)`

Recommends evidence-based teaching methods for a topic and audience.

```typescript
import { CurriculumAI } from './utils/danteAI';

const strategies = await CurriculumAI.suggestTeachingStrategies(
  'Advanced React Hooks and State Management',
  'University third-year computer science students with basic React knowledge'
);

console.log(strategies);
// Output:
// 1. Hands-on coding labs (60% of time)
//    Rationale: Visual learners benefit from immediate practice
// 2. Peer code reviews
//    Rationale: Builds critical thinking and debugging skills
// ...
```

**Parameters:**
```typescript
topic: string        // Subject matter to teach
audience: string     // Student demographic and background
```

**Returns:**
```typescript
Promise<string | null>  // List of strategies with rationale
```

---

### `CurriculumAI.buildModuleStructure(courseTitle, duration, objectives)`

Creates a logical module structure for a course.

```typescript
import { CurriculumAI } from './utils/danteAI';

const modules = await CurriculumAI.buildModuleStructure(
  'Full Stack Web Development Bootcamp',
  '12 weeks',
  'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB'
);

console.log(modules);
// Output:
// Module 1: Web Fundamentals (Weeks 1-2)
// ├─ Topic 1.1: HTML5 Structure and Semantics
// ├─ Topic 1.2: CSS3 Styling and Layout
// ...
// Module 2: JavaScript Mastery (Weeks 3-4)
// ...
```

**Parameters:**
```typescript
courseTitle: string   // Name of the course
duration: string      // Course length (e.g., "12 weeks", "6 months")
objectives: string    // Learning objectives or skills to master
```

**Returns:**
```typescript
Promise<string | null>  // Module breakdown with topics and estimated durations
```

---

### `CurriculumAI.alignToFramework(curriculum, framework)`

Analyzes alignment between a curriculum and industry/educational framework.

```typescript
import { CurriculumAI } from './utils/danteAI';

const alignment = await CurriculumAI.alignToFramework(
  'Module 1: Variables and Data Types\nModule 2: Control Flow\n...',
  'Australian Computing Curricula (ACCE) Framework'
);

console.log(alignment);
// Output:
// ALIGNMENT ANALYSIS
// 
// ✓ Aligned with ACCE:
//   - Computational thinking (Data Types section)
//   - Algorithm design (Control Flow section)
//
// ✗ Gaps:
//   - No coverage of cybersecurity fundamentals
//   - Limited focus on ethics in computing
//
// Recommendations:
//   1. Add Week 8 module on cybersecurity basics
// ...
```

**Parameters:**
```typescript
curriculum: string   // Your curriculum content/outline
framework: string    // Framework name or standards to align with
```

**Returns:**
```typescript
Promise<string | null>  // Alignment analysis with gaps and recommendations
```

---

### `CurriculumAI.generateTimeline(numWeeks, modules, assessments)`

Creates a realistic course timeline with activities and assessments.

```typescript
import { CurriculumAI } from './utils/danteAI';

const timeline = await CurriculumAI.generateTimeline(
  16,
  'Fundamentals, Core Concepts, Advanced Topics, Capstone Project',
  'Weekly quizzes, Mid-term exam, Final project, Code reviews'
);

console.log(timeline);
// Output:
// COURSE TIMELINE: 16 Weeks
//
// Week 1-2: Fundamentals
// ├─ Activities: Introduction lecture, coding exercises
// ├─ Assessment: Quiz on basics
// ├─ Cognitive load: Light (foundational concepts)
//
// Week 3-6: Core Concepts
// ├─ Activities: Deep-dive lectures, labs, mini-projects
// ├─ Assessment: Mid-term exam
// ...
```

**Parameters:**
```typescript
numWeeks: number      // Total course duration in weeks
modules: string       // Module names/topics
assessments: string   // Assessment types and schedule
```

**Returns:**
```typescript
Promise<string | null>  // Detailed week-by-week timeline
```

---

## Configuration

### API Credentials

Set in environment or serverless function (currently in `api/send-message.js`):

```javascript
const API_KEY = process.env.DANTE_API_KEY || 'DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7';
const KB_ID = '490b0d73-4800-441d-94bf-04ffcefb8650';
const DANTE_BASE_URL = 'https://api-v2.dante-ai.com';
```

### Vercel Deployment

Add environment variable in Vercel dashboard:
```
DANTE_API_KEY=DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7
```

### Local Development

The Vite dev server proxies `/api` calls to `http://localhost:3000` (if running serverless locally) or to the actual API if deployed.

---

## Error Handling

### API Response Errors

```typescript
import { queryDanteAI } from './utils/danteAI';

try {
  const response = await queryDanteAI('Your question');
} catch (error) {
  console.error('Error type:', error.message);
  
  // Common errors:
  // "No conversation ID available" - Call initConversation() first
  // "HTTP 400: ..." - Invalid parameters
  // "HTTP 500: ..." - Server error (retry)
  // "Failed to query AI" - Network error
}
```

### Conversation Initialization Errors

```typescript
import { initConversation } from './utils/danteAI';

const id = await initConversation();
if (!id) {
  // Check:
  // 1. Browser console for detailed error
  // 2. Network tab in DevTools
  // 3. API credentials in serverless function
  // 4. Vercel environment variables
}
```

### Response Parsing

The `send-message.js` function handles response parsing:
```javascript
// Dante API returns Python-style dict strings
// This is converted to proper JSON:
const jsonStr = pythonDictString.replace(/'/g, '"');
const parsed = JSON.parse(jsonStr);
```

---

## Advanced Usage

### Custom System Prompts

```typescript
const customPrompt = `You are a curriculum designer specializing in STEM education.
Provide recommendations suitable for 6-12 grade students.
Use active, engaging language.`;

const response = await queryDanteAI(
  'Design a module on AI for middle school students',
  'gpt-5.1',
  customPrompt
);
```

### Batch Queries

```typescript
import { queryDanteAI } from './utils/danteAI';

const queries = [
  'Generate learning outcomes',
  'Create assessment rubric',
  'Suggest teaching strategies'
];

const responses = await Promise.all(
  queries.map(q => queryDanteAI(q))
);

console.log('Batch results:', responses);
```

### Context Chaining

```typescript
// Use previous response as context for next query
const outcomes = await queryDanteAI('Generate learning outcomes for web development');
const rubric = await queryDanteAI(
  `Based on these outcomes:\n${outcomes}\n\nCreate an assessment rubric`
);
```

---

## Rate Limiting

- No official rate limits documented
- Recommended: 1-2 second delay between queries
- Implement throttling for production apps

```typescript
let lastQueryTime = 0;
const MIN_DELAY = 1000; // 1 second

async function throttledQuery(question: string) {
  const now = Date.now();
  const timeSinceLastQuery = now - lastQueryTime;
  
  if (timeSinceLastQuery < MIN_DELAY) {
    await new Promise(resolve => 
      setTimeout(resolve, MIN_DELAY - timeSinceLastQuery)
    );
  }
  
  lastQueryTime = Date.now();
  return queryDanteAI(question);
}
```

---

## Debugging

### Check Conversation ID
```typescript
import { getConversationId } from './utils/danteAI';
console.log('Current conversation ID:', getConversationId());
```

### Enable Verbose Logging
Add to `danteAI.ts`:
```typescript
console.log('Calling Dante API:', url.toString());
console.log('Response:', data);
```

### Test API Directly
```bash
# Create conversation
curl -X POST http://localhost:3000/api/create-conversation

# Send message
curl -X POST http://localhost:3000/api/send-message \
  -H "Content-Type: application/json" \
  -d '{
    "question": "Test question",
    "conversation_id": "YOUR_CONVERSATION_ID"
  }'
```

---

## Support & Resources

- **Dante AI Documentation**: https://docs.dante-ai.com
- **API Status**: https://status.dante-ai.com
- **GitHub Issues**: (if applicable)
- **Email Support**: support@dante-ai.com

---

**Last Updated:** January 28, 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅
