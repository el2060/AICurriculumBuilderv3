# Quick Start Guide - AI Curriculum Builder

## Prerequisites

- Node.js 16+ and npm/yarn installed
- A valid API key from an LLM provider (OpenAI, Claude, etc.)

## Installation & Setup (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 3. Configure AI (Optional but Recommended)

1. Click the **⚙️ Settings** icon in the left sidebar
2. Scroll to "API Configuration"
3. Select your LLM provider:
   - **OpenAI**: Get key from https://platform.openai.com/api-keys
   - **Claude**: Get key from https://console.anthropic.com/
   - **Google Gemini**: Get key from https://makersuite.google.com/app/apikey
   - **Azure OpenAI**: Use your Azure subscription
4. Paste your API key
5. Select your preferred model (GPT-4 Turbo recommended)
6. Click **"Save API Configuration"**

## Using the App

### Main Sections

**Dashboard** 📊
- Overview of your curricula
- AI-powered recommendations based on your profile
- Quick access to recent curricula
- Create new curriculum button

**My Curricula** 📚
- View all your curriculum projects
- Track progress percentage
- Filter by status (Draft, In Progress, Completed)
- Quick edit/view access

**Create Curriculum** ✨
- Step-by-step wizard with AI suggestions:
  1. Curriculum details (name, type, description)
  2. Structure & duration (discipline, level, weeks)
  3. Assessment plan (methods, pass marks)
  4. Review & confirm
- AI provides contextual suggestions at each step
- Creates curriculum ready for content building

**AI Assistant** 💬
- Chat interface with AI
- Quick action buttons for common tasks:
  - Generate Learning Outcomes
  - Design Assessments
  - Create Module Outlines
  - Align with Standards
  - Generate Rubrics
  - Create Lesson Plans
- Type custom requests for specific help

**Templates** 📋
- Pre-built curriculum templates:
  - Healthcare Diploma Programme
  - Advanced Clinical Skills (PET)
  - Infection Control (Short Course)
  - Patient Communication (CET)
  - Digital Health Integration (PET)
  - Leadership in Healthcare (Full Programme)
- Use templates as starting point for new curricula
- Customize with AI assistance

**Settings** ⚙️
- Profile configuration
- API key management
- Feature preferences
- Data & privacy controls

## What the App Does (Without Backend)

This is a **frontend-only demo** that showcases:

✅ Modern, responsive UI based on your wireframes  
✅ Navigation between sections  
✅ Form inputs for curriculum creation  
✅ Chat interface skeleton (simulated responses)  
✅ Template browsing  
✅ Settings configuration interface  

## Next Steps (Backend Integration)

When ready to connect to a real backend:

1. **Create Backend APIs** for:
   - `/api/curricula` - Create, read, update, delete
   - `/api/llm/chat` - Send messages to LLM
   - `/api/templates` - Fetch curriculum templates
   - `/api/auth` - User authentication (if needed)

2. **Update API Configuration**:
   - Create `src/services/api.ts` for API calls
   - Use `axios` (already in package.json)
   - Store API base URL in `.env`

3. **Add Real AI Integration**:
   - Server-side API calls to LLM providers
   - Stream responses for better UX
   - Cache AI suggestions

4. **Add Database**:
   - Store curricula in database
   - Track user history and preferences
   - Save drafts and versions

## File Structure

```
AICurriculumBuilderv3/
├── src/
│   ├── components/          # React components
│   │   ├── Layout.tsx       # Header, Sidebar, Cards
│   │   ├── Dashboard.tsx    # Main dashboard
│   │   ├── MyCurricula.tsx  # Curricula list
│   │   ├── CurriculumBuilder.tsx  # Create wizard
│   │   ├── AIAssistant.tsx  # Chat interface
│   │   ├── Templates.tsx    # Template browser
│   │   └── Settings.tsx     # Configuration
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   └── index.css            # Tailwind styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── .env.example             # Environment template
├── README.md                # Full documentation
└── QUICKSTART.md            # This file
```

## Troubleshooting

**App won't start?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Styles look broken?**
- Make sure Tailwind CSS is compiled
- Check that `src/index.css` is imported in `src/main.tsx`
- Run `npm run build` to verify production build works

**Need to modify the wireframes?**
- The original HTML mockup is in `index-old.html` (or backup)
- Component designs are in React components in `src/components/`

## Tips for Lecturers

1. **Start with Templates**: Use existing templates to save time
2. **Use AI for Brainstorming**: Ask AI for learning outcomes, assessments
3. **Build Iteratively**: Create curriculum in sections, not all at once
4. **Leverage Suggestions**: Review AI recommendations and adapt for your context
5. **Save Regularly**: Curricula are auto-saved (in production)

## Support & Feedback

- 📚 Full documentation: See [README.md](README.md)
- 💬 Chat with AI Assistant in the app
- 📧 Feedback button in Settings (when backend ready)

---

**Happy curriculum building! 🎓**
