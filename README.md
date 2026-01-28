# AI Curriculum Builder - React Application

A modern, AI-assisted curriculum design tool for Ngee Ann Polytechnic lecturers to create and manage curricula for Short Courses, PET (Professional Education & Training), CET (Continuing Education & Training), and full Programmes.

## Features

- 📊 **Dashboard**: Overview of your curricula and AI-powered recommendations
- 📚 **My Curricula**: Manage all your curriculum projects with progress tracking
- ✨ **AI Assistant**: Chat interface for curriculum design assistance
- 📋 **Templates**: Ready-to-use curriculum templates for quick start
- 🎯 **Curriculum Builder**: Step-by-step wizard to create new curricula with AI guidance
- ⚙️ **Settings**: Configure AI API keys and preferences

## Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern styling
- **Vite**: Fast build tool and dev server

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Header, Sidebar, Card components
│   ├── Dashboard.tsx       # Main dashboard view
│   ├── MyCurricula.tsx    # Curricula management
│   ├── CurriculumBuilder.tsx # Create new curriculum wizard
│   ├── AIAssistant.tsx     # AI chat interface
│   ├── Templates.tsx       # Curriculum templates
│   └── Settings.tsx        # Configuration & API keys
├── App.tsx                 # Main app component with routing
├── main.tsx                # React entry point
└── index.css               # Global styles
```

## Configuration

### API Key Setup

1. Go to **Settings** → **API Configuration**
2. Select your LLM provider (OpenAI, Claude, Google Gemini, etc.)
3. Enter your API key
4. Choose your preferred AI model
5. Save configuration

Supported providers:
- OpenAI (GPT-4, GPT-4 Turbo, GPT-3.5)
- Anthropic (Claude)
- Google Gemini
- Azure OpenAI

## Usage Guide

### Creating a New Curriculum

1. Click **"Create New Curriculum"** on the dashboard
2. Fill in curriculum details (name, type, description)
3. Follow the 4-step wizard with AI suggestions
4. Review and confirm
5. Start building modules and content

### Using AI Assistant

- Click **AI Assistant** in the sidebar
- Use quick actions or type custom requests
- Get suggestions for:
  - Learning outcomes
  - Assessment design
  - Module structure
  - Content recommendations
  - Standards alignment

### Using Templates

- Browse available templates in **Templates** section
- Preview template structure and included materials
- Use a template to quickly start a new curriculum
- Customize with AI assistance

## Features Enabled by AI

- **Learning Outcome Generation**: Create SMART learning outcomes aligned with standards
- **Assessment Design**: Generate rubrics and assessment methods
- **Content Suggestions**: AI-powered course content recommendations
- **Standards Alignment**: Map curriculum to NQF standards and industry competencies
- **Curriculum Review**: Validate coherence and completeness
- **Module Creation**: Auto-generate module descriptions and structures

## Notes

- This is a frontend application. Backend API integration will be configured separately.
- All curriculum data is managed locally in the browser (for demo purposes).
- For production, connect to a backend database and LLM API services.
- AI features require valid API keys from your chosen LLM provider.

## Future Enhancements

- [ ] Export curricula to PDF/Word
- [ ] Collaborative editing with colleagues
- [ ] Version control for curriculum changes
- [ ] Student engagement analytics
- [ ] Integration with learning management systems (LMS)
- [ ] Advanced curriculum validation and compliance checking
- [ ] Mobile app support

## Support

For issues, feature requests, or feedback, contact the development team.

---

**Version**: 1.0.0  
**Last Updated**: January 28, 2026
