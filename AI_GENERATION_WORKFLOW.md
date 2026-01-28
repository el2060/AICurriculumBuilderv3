# 🎯 AI GENERATION FEATURES - COMPLETE WORKFLOW

## Overview

Your application now has **TWO AI generation pathways**:

1. **AIAssistant** - Free-form chat with AI
2. **ModuleDesigner** - Guided module design with structured AI outputs

---

## 📊 Complete AI Generation Flow

```
USER STARTS APP
  ↓
DASHBOARD
  ├─→ [■] Build Curriculum
  │     └─→ CurriculumBuilder (3-step form, basic structure)
  │
  └─→ [◆] Design Module ⭐ NEW
        └─→ ModuleDesigner (guided AI workflow)
```

---

## 🎓 MODULE DESIGNER - Step-by-Step Flow

### INPUT PHASE
```
User enters Module Information:
  1. Module Name (e.g., "React Fundamentals")
  2. Module Number (e.g., 1, 2, 3)
  3. Duration (1-8 weeks)
  4. Target Audience (e.g., "Beginners", "Advanced")
  5. Prerequisites (what students must know)
  6. Learning Outcomes ⭐ REQUIRED (defines what students will achieve)
```

### GENERATION PHASE
```
Four AI Generation Buttons (Click to Generate):

[⬚] MODULE OUTLINE
  Input: Module info + Learning outcomes
  AI Creates:
    - Main Topics (3-5 topics)
    - Subtopics under each
    - Time allocation per topic
    - Key resources needed
  Output: Hierarchical structure

[📋] LESSON PLAN
  Input: Module info + Duration
  AI Creates (for each lesson):
    - Learning Objectives (SMART)
    - Introduction/Hook (5 min)
    - Main Content sections
    - Engagement/Interaction points
    - Closure/Summary
    - Assessment method
    - Resources needed
  Output: Day-by-day/week-by-week plan

[✎] ACTIVITIES
  Input: Module info + Learning outcomes
  AI Creates (5-7 activities):
    - Activity name and type (individual/group/hands-on)
    - Time required
    - Addresses which learning objectives
    - Step-by-step instructions
    - Resources needed
    - Grading criteria
    - Differentiation for different learners
  Output: Practical activities list

[◆] ASSESSMENTS
  Input: Module info + Learning outcomes
  AI Creates:
    - Formative assessments (during learning)
      • Type, timing, feedback method
    - Summative assessment (end of module)
      • Type, format, rubric
    - Self-assessment tools
    - Peer assessment options
    - Accessibility/accommodations
  Output: Complete assessment strategy
```

### OUTPUT PHASE
```
Generated Content Displays in TABS:
  
  Each tab shows AI-generated content:
  ├─ [⬚] Outline tab (if generated)
  ├─ [📋] Lesson Plan tab (if generated)
  ├─ [✎] Activities tab (if generated)
  └─ [◆] Assessments tab (if generated)

Tab Actions:
  [📋] Copy   → Copy content to clipboard
  [💾] Download → Download as .txt file
```

### SAVE PHASE
```
User clicks [✓] Save Module
  ↓
Saves all module data + generated content
  ↓
Returns to Dashboard
```

---

## 💬 AI ASSISTANT - Free-Form Chat Flow

### INPUT
```
User types any curriculum question
  ↓
Can click Quick Actions for common tasks:
  [◆] Generate Learning Outcomes
  [✎] Create Assessment Rubric
  [⬚] Module Structure
  [≡] Alignment Check
  [📅] Timeline Builder
  [🔗] Resources
```

### PROCESSING
```
User Input/Question
  ↓
queryDanteAI(question, model, systemPrompt)
  ↓
API Call: POST /api/send-message
  ↓
Dante AI processes with Knowledge Base
  ↓
Response returned
```

### OUTPUT
```
AI Response Displays in Chat:
  ├─ Shows thinking indicator while processing
  ├─ Displays full response
  ├─ Auto-scrolls to latest message
  └─ Persists in conversation history (localStorage)

User can:
  └─ Ask follow-up questions
  └─ Use response as starting point
```

---

## 📝 MODULE DESIGNER DETAILED WORKFLOW

### Step 1: USER INPUTS
**In Left Sidebar Form:**
```
Module # (auto-number)
Module Name *REQUIRED
  Input: "React Fundamentals"

Duration *REQUIRED
  Choices: 1, 2, 3, 4, 6, 8 weeks

Target Audience
  Input: "Beginners with HTML/CSS knowledge"

Prerequisites
  Input: "HTML5, CSS3, JavaScript basics"

MAIN: Learning Outcomes *REQUIRED
  Input: "
  1. Understand React component architecture
  2. Build interactive UIs with hooks
  3. Manage state and props effectively
  4. Deploy React applications to production
  "
```

### Step 2: GENERATE OUTLINE
**Click [⬚] MODULE OUTLINE**

**AI Prompt Sent:**
```
"Create a detailed module outline for:
Module: React Fundamentals
Learning Outcomes: 
  1. Understand React component architecture
  2. Build interactive UIs with hooks
  3. Manage state and props effectively
  4. Deploy React applications to production
Duration: 4 weeks
Prerequisites: HTML5, CSS3, JavaScript basics

Format as:
- Main Topics (3-5 topics)
- Subtopics under each
- Time allocation per topic
- Key resources needed"
```

**AI Response Looks Like:**
```
Module Outline: React Fundamentals

Topic 1: React Fundamentals (Week 1, 6 hours)
  - What is React and why use it
  - Components: Functional vs Class
  - JSX syntax and templating
  - React Developer Tools
  Resources: Official docs, Code sandbox

Topic 2: Hooks & State Management (Week 2, 7 hours)
  - useState() hook deep dive
  - useEffect() lifecycle
  - Custom hooks
  - Context API basics
  Resources: Hooks guide, Practice exercises

Topic 3: Advanced Patterns (Week 3, 6 hours)
  - Performance optimization
  - Error boundaries
  - Code splitting
  - Testing React components
  Resources: Testing library, Performance guide

Topic 4: Real-World Application (Week 4, 5 hours)
  - Build capstone project
  - Deployment (Vercel, Netlify)
  - Best practices review
  - Career guidance
  Resources: Project templates, Host guides
```

### Step 3: GENERATE LESSON PLAN
**Click [📋] LESSON PLAN**

**AI Prompt Sent:**
```
"Create a comprehensive lesson plan for:
Module: React Fundamentals
Duration: 4 weeks
Learning Outcomes: [as above]
Target Audience: Beginners with HTML/CSS knowledge

Include for each lesson:
1. Learning Objectives (SMART)
2. Introduction/Hook (5 min)
3. Main Content (with sections)
4. Engagement/Interaction points
5. Closure/Summary
6. Assessment method
7. Resources needed"
```

**AI Response Looks Like:**
```
LESSON PLAN: React Fundamentals

WEEK 1: React Fundamentals
--------
Lesson 1.1: Introduction to React (2 hours)

Learning Objectives:
- Explain what React is and its benefits (L2)
- Identify component types (L2)
- Create first React app (L3)

Hook (5 min): "Have you ever wanted to make web apps that 
instantly update? That's React!"

Main Content:
  Section 1: What is React? (15 min)
    - Framework vs library distinction
    - Virtual DOM explanation
    - Why companies use React
    
  Section 2: Components (20 min)
    - Functional components
    - Component re-usability
    - Props introduction
    
  Section 3: JSX (20 min)
    - JSX syntax rules
    - Embedding expressions
    - Conditional rendering

Engagement (15 min):
  Interactive demo: "Build your first component"
  - Live coding: Display text, then add props
  - Students follow along

Closure (10 min):
  Summary: "React uses components + JSX to create UIs"
  Q&A session

Assessment:
  Formative: "Can you explain what JSX is?"
  Activity: Create a <Greeting/> component

Resources:
  - Official React documentation
  - CodeSandbox starter template
  - Video: React in 100 seconds

...continues for each lesson...
```

### Step 4: GENERATE ACTIVITIES
**Click [✎] ACTIVITIES**

**AI Prompt Sent:**
```
"Design practical learning activities for:
Module: React Fundamentals
Learning Outcomes: [as above]
Duration: 4 weeks
Target Audience: Beginners

Create 5-7 activities including:
- Activity name and type (individual/group/hands-on)
- Time required
- Learning objectives it addresses
- Instructions/steps
- Resources needed
- Assessment criteria
- Differentiation strategies"
```

**AI Response Looks Like:**
```
LEARNING ACTIVITIES: React Fundamentals

Activity 1: Component Gallery (Individual, 3 hours)
Type: Hands-on coding
Addresses: Objective 1 (component architecture)

Instructions:
  1. Create 5 React components
  2. Each component displays different types of data
  3. Use props to customize each
  4. Deploy to GitHub Pages

Resources:
  - Component template
  - Starter repository
  - Deploy guide

Assessment Criteria:
  ✓ All 5 components created
  ✓ Props used correctly
  ✓ Components are reusable
  ✓ Deployed successfully

Differentiation:
  Beginners: Use provided templates
  Advanced: Add styling with CSS-in-JS

Activity 2: State Management Challenge (Group, 4 hours)
Type: Group project
Addresses: Objectives 2 & 3

Instructions:
  1. Build a Todo app in groups of 2-3
  2. Must use useState() hooks
  3. Add, delete, mark complete functionality
  4. Present to class

Resources:
  - Starter files
  - Hook examples
  - Testing checklist

Assessment Criteria:
  ✓ All features working
  ✓ Clean code (follows React best practices)
  ✓ Group collaboration evident
  ✓ Presentation clear

Differentiation:
  Beginners: Provide component structure
  Advanced: Add local storage persistence

...continues for 5-7 activities...
```

### Step 5: GENERATE ASSESSMENTS
**Click [◆] ASSESSMENTS**

**AI Prompt Sent:**
```
"Design comprehensive assessment methods for:
Module: React Fundamentals
Learning Outcomes: [as above]

Create assessment strategy including:
1. Formative Assessments (during learning)
2. Summative Assessment (end of module)
3. Self-Assessment tools
4. Peer Assessment options
5. Accommodations"
```

**AI Response Looks Like:**
```
ASSESSMENT STRATEGY: React Fundamentals

FORMATIVE ASSESSMENTS (During Module)
--------
Week 1 - Quick Checks:
  Type: Code quizzes
  When: End of each lesson (5-10 min)
  How: Live coding challenges in IDE
  Feedback: Immediate automated feedback
  Example: "Fix this component"

Week 2 - Reflection Journal:
  Type: Written reflection
  When: Weekly on Friday
  How: Google Doc prompt
  Feedback: Teacher comments
  Prompt: "What was hardest to understand this week?"

Week 3 - Peer Code Review:
  Type: Peer feedback
  When: After activity submission
  How: GitHub comments
  Feedback: Structured feedback form
  Focus: Code quality, best practices

SUMMATIVE ASSESSMENT (End of Module)
--------
Capstone Project (Week 4):
  Type: Individual project
  Weight: 50%
  Rubric: 4-point scale
    Functionality (20%)
    Code Quality (20%)
    User Experience (10%)
  
Final Quiz:
  Type: Multiple choice + short answer
  Weight: 30%
  Topics: All module content
  Time: 60 minutes
  
Presentation:
  Type: 5-minute demo + Q&A
  Weight: 20%
  Evaluated by: Teacher + peer votes

SELF-ASSESSMENT
--------
Learning Checklist:
  Can you...
  ☐ Explain React component architecture
  ☐ Use useState() correctly
  ☐ Manage props between components
  ☐ Deploy a React app
  
Goal-Setting:
  "What's one React concept you want to master?"

PEER ASSESSMENT
--------
Code Review Form:
  1. Clarity: Code is easy to understand
  2. Functionality: Does it work as intended?
  3. Best Practices: Follows React conventions?

ACCOMMODATIONS
--------
For visual learners: Diagrams, video walkthroughs
For kinesthetic learners: More hands-on coding
For ESL students: Glossary of terms
For students with ADHD: Shorter activities, frequent breaks
For students with disabilities: Flexible deadlines, alternative formats
```

### Step 6: VIEW & DOWNLOAD
**Content displays in tabs with actions:**

```
Tabs show generated content:
[⬚] [📋] [✎] [◆]

For each tab:
  [📋] Copy Button → Copies to clipboard
  [💾] Download Button → Downloads as module-name-type.txt
```

### Step 7: SAVE MODULE
**Click [✓] Save Module**

```
Saves:
  ✓ Module information (name, number, duration, etc.)
  ✓ Learning outcomes
  ✓ All generated content (outline, lesson plan, activities, assessments)
  
Confirmation: "✓ MODULE DESIGN SAVED"

Returns to Dashboard
```

---

## 🔄 AI Generation Architecture

```
MODULE DESIGNER
    ↓
User Input Form
    ↓
Generate Button Clicked
    ↓
Build AI Prompt (formData → natural language)
    ↓
POST /api/send-message
    ↓
Dante AI Processing
    (Uses Knowledge Base for education-focused responses)
    ↓
Parse Response
    ↓
Display in Tab
    ↓
User can Copy/Download/Save
```

---

## 🎯 Key Differences: AIAssistant vs ModuleDesigner

| Feature | AIAssistant | ModuleDesigner |
|---------|-------------|----------------|
| **Input Type** | Free-form text | Structured form |
| **Workflow** | Chat-based | Linear steps |
| **Output** | Single text response | Multi-format (4 tabs) |
| **Persistence** | Message history | Module data saved |
| **Use Case** | Quick questions | Complete module design |
| **Structure** | Conversational | Professional/production |
| **Editing** | Not directly supported | Download & edit locally |

---

## 📌 Where AI Generation Happens

### 1. **MODULE DESIGNER** (Recommended for full modules)
```
File: src/components/ModuleDesigner.tsx
Functions:
  - generateOutline() → AI outline
  - generateLessonPlan() → AI lesson plan
  - generateActivities() → AI activities
  - generateAssessments() → AI assessment strategy
```

### 2. **AI ASSISTANT** (For quick help)
```
File: src/components/AIAssistant.tsx
Functions:
  - queryDanteAI() → Generic Q&A
  - handleQuickAction() → Pre-set prompts
Buttons:
  [◆] Generate Learning Outcomes
  [✎] Create Assessment Rubric
  [⬚] Module Structure
  [≡] Alignment Check
  [📅] Timeline Builder
  [🔗] Resources
```

---

## 🔌 API Flow

```
Frontend Button Click
    ↓
Build Prompt String
    ↓
queryDanteAI(prompt, model, systemPrompt)
    ↓
fetch('/api/send-message', {
  method: 'POST',
  body: { question, conversation_id, model }
})
    ↓
Vercel Serverless Function
    ↓
api/send-message.js
    ↓
fetch('https://api-v2.dante-ai.com/model/query', {
  query params: question, conversation_id, model, kb_id
  headers: x-api-key
})
    ↓
Dante AI Cloud
    ↓
Response with Knowledge Base context
    ↓
Parse response
    ↓
Return { answer: "..." }
    ↓
Display in UI
```

---

## ✅ Typical Module Design Workflow

### Complete Example: "Web Design Fundamentals"

```
STEP 1: User clicks [◆] Design Module
        Sees ModuleDesigner form

STEP 2: User fills in:
        Module Name: "Web Design Fundamentals"
        Duration: 4 weeks
        Audience: "Design students new to web"
        Prerequisites: "None"
        Outcomes: "
          1. Understand responsive web design
          2. Create accessible websites
          3. Use CSS Grid and Flexbox
          4. Optimize web performance
        "

STEP 3: User clicks [⬚] MODULE OUTLINE
        AI generates topics, subtopics, time allocation

STEP 4: User clicks [📋] LESSON PLAN
        AI creates detailed week-by-week plan with:
        - Learning objectives for each lesson
        - Content breakdown
        - Activities
        - Assessments

STEP 5: User clicks [✎] ACTIVITIES
        AI creates 6 hands-on activities:
        1. Responsive design project
        2. Accessibility audit
        3. CSS layout challenge
        4. Performance optimization task
        5. Design systems research
        6. Capstone website project

STEP 6: User clicks [◆] ASSESSMENTS
        AI creates:
        - Weekly quizzes
        - Code reviews
        - Final project rubric
        - Self-assessment checklist

STEP 7: User reviews all four outputs in tabs
        Downloads each one for reference

STEP 8: User clicks [✓] Save Module
        Module data saved with all AI outputs
```

---

## 🎓 Best Practices for Module Design

1. **Write Clear Learning Outcomes First**
   - These drive everything else
   - AI will generate more relevant content
   - Example: "Students will be able to CREATE a React component"
   - Not: "Learn about React"

2. **Specify Your Audience**
   - Beginners vs Advanced = different activities
   - Professional vs K-12 = different tone
   - AI will adjust difficulty accordingly

3. **Include Prerequisites**
   - AI won't repeat basic concepts
   - Can build on foundation knowledge

4. **Generate in Order**
   - Outline first (big picture)
   - Lesson plan next (day-to-day structure)
   - Activities third (practical work)
   - Assessments last (how to measure)

5. **Review & Customize**
   - AI is helpful starting point
   - Edit for your specific context
   - Add your own examples
   - Adjust activities for your students

---

## 🚀 Getting Started

1. **Click [◆] Design Module** on Dashboard
2. **Fill in module information** (form on left)
3. **Define learning outcomes** (most important!)
4. **Click generate buttons** one by one
5. **Review outputs** in tabs
6. **Download/Copy** what you need
7. **Click Save Module** when done

That's it! You now have a complete, AI-generated module design.

---

**Status:** ✅ **Complete & Ready to Use**
