# Component Directory & Quick Reference

## 📁 File Structure with Details

### Configuration Files

```
package.json
  └─ npm dependencies and scripts
     Dependencies: react, react-dom, axios
     DevDeps: @vitejs/plugin-react, tailwindcss, typescript, etc.
     Scripts: dev, build, preview, lint

tsconfig.json & tsconfig.node.json
  └─ TypeScript configuration for strict type checking

vite.config.ts
  └─ Vite development server configuration (port 5173)

tailwind.config.js
  └─ Tailwind CSS theme configuration
     Colors: dark (#000), light (#fff), primary-blue (#0066CC)
     Extends: color schemes for AI features

postcss.config.js
  └─ PostCSS plugins for CSS processing

.env.example
  └─ Environment variables template (copy to .env to use)

.gitignore
  └─ Git ignore rules (node_modules, dist, .env, etc.)
```

### Source Code Files

```
src/main.tsx
  └─ React application entry point
     Mounts React app to DOM root element
     Imports and renders App component

src/index.css
  └─ Global styles and Tailwind CSS
     Imports Tailwind directives
     Custom classes for buttons, cards, sections
     AI-themed styling

src/App.tsx
  └─ Main application component
     State: activeSection (dashboard, curricula, etc.)
     Renders: Header, Sidebar, MainLayout, and content
     Handles navigation between sections
```

### React Components

```
src/components/Layout.tsx (REUSABLE COMPONENTS)
  ├─ Header
  │   └─ Props: userName, schoolName, role
  │   └─ Displays: Logo, user info, last updated date
  │   └─ Features: Sticky positioning, responsive layout
  │
  ├─ Sidebar
  │   └─ Props: activeSection, onSectionChange
  │   └─ Displays: Navigation menu with 5 main sections
  │   └─ Features: Active state styling, sticky positioning
  │
  ├─ SidebarItem (internal)
  │   └─ Props: icon, label, isActive, onClick
  │   └─ Used by: Sidebar component
  │
  ├─ MainLayout
  │   └─ Props: children, sidebarOpen
  │   └─ Displays: Main content area with max-width container
  │
  ├─ Card
  │   └─ Props: title, children, className, highlight
  │   └─ Features: Optional title, border styling, highlight modes
  │   └─ Highlight modes: 'ai' (blue), 'none' (dark)
  │
  └─ AIRecommendation
      └─ Props: title, items (string[])
      └─ Displays: AI-powered suggestions in blue box
      └─ Features: "AI Powered" badge, list of items

src/components/Dashboard.tsx
  ├─ Welcome section with personalized greeting
  ├─ AI Smart Start Recommendations (4 items)
  ├─ Statistics grid (4 stat cards)
  ├─ "Create New Curriculum" button
  ├─ Recent Curricula list with status badges
  │
  └─ Props:
      └─ onCreateNew: Navigate to curriculum builder
  
  State:
    └─ curricula: Sample curriculum data (3 examples)

src/components/MyCurricula.tsx
  ├─ Search and filter functionality
  ├─ Curriculum list with detailed cards
  │   └─ Title, type badge, status badge
  │   └─ Progress bar with percentage
  │   └─ Last modified date
  │   └─ Edit/View buttons
  │
  ├─ Statistics dashboard (4 stats)
  │   └─ Total curricula, completed, in progress, students
  │
  └─ State:
      └─ curricula: Curriculum data (4 examples)

src/components/CurriculumBuilder.tsx
  ├─ 4-Step Wizard:
  │
  │  Step 1: Curriculum Details
  │    └─ Inputs: Name, Type, Description
  │    └─ AI Suggestions: 3 recommendations
  │
  │  Step 2: Structure & Duration
  │    └─ Inputs: Discipline, Level, Duration
  │    └─ AI Suggestions: Module structure
  │
  │  Step 3: Assessment Plan
  │    └─ Inputs: Assessment methods (checkboxes)
  │    └─ Inputs: Pass mark percentage
  │    └─ AI Suggestions: Assessment recommendations
  │
  │  Step 4: Review & Confirm
  │    └─ Display: Summary of all inputs
  │    └─ Display: Next steps guidance
  │
  ├─ Step indicator with progress
  ├─ Back/Next navigation
  ├─ Cancel button
  ├─ Create Curriculum button (final step)
  │
  └─ Props:
      └─ onCancel: Callback to go back to dashboard
  
  State:
    └─ formData: Form inputs across all steps
    └─ step: Current step (1-4)

src/components/AIAssistant.tsx
  ├─ Quick action buttons (6 predefined):
  │   ├─ Generate Learning Outcomes
  │   ├─ Design Assessments
  │   ├─ Create Module Outlines
  │   ├─ Align with Standards
  │   ├─ Generate Rubrics
  │   └─ Create Lesson Plans
  │
  ├─ Chat Interface:
  │   ├─ Message display area
  │   ├─ User input field
  │   ├─ Send button
  │   └─ Role-based message styling
  │
  ├─ AI Capabilities overview (6 cards)
  │
  ├─ Configuration instructions
  │
  └─ State:
      └─ messages: Chat history
      └─ input: Current user input

src/components/Templates.tsx
  ├─ Search and filter functionality
  ├─ Template grid (2 columns)
  │   └─ Each template card shows:
  │       └─ Name, type badge, description
  │       └─ Module count, duration
  │       └─ Hover effects
  │
  ├─ Template preview (conditional):
  │   ├─ Module structure listing
  │   ├─ Included materials list
  │   ├─ AI customization guidance
  │   └─ "Use This Template" button
  │
  ├─ 6 Pre-built Templates:
  │   ├─ Healthcare Diploma Programme
  │   ├─ Advanced Clinical Skills (PET)
  │   ├─ Infection Control (Short Course)
  │   ├─ Patient Communication (CET)
  │   ├─ Digital Health Integration (PET)
  │   └─ Leadership in Healthcare (Programme)
  │
  └─ State:
      └─ templates: Template data
      └─ selectedTemplate: Currently selected template ID

src/components/Settings.tsx
  ├─ Profile Settings:
  │   ├─ Name (disabled)
  │   ├─ Email (editable)
  │   ├─ Institution (editable)
  │   └─ Role (dropdown)
  │
  ├─ API Configuration:
  │   ├─ LLM Provider selection
  │   ├─ API Key input (with show/hide)
  │   ├─ Model selection dropdown
  │   └─ Test connection button
  │   └─ HIGHLIGHTED as AI feature
  │
  ├─ Feature Preferences (toggles):
  │   ├─ Enable AI Assistance
  │   ├─ Auto-Save
  │   ├─ Enable Notifications
  │   └─ Dark Mode
  │
  ├─ Data & Privacy:
  │   ├─ Data retention policy
  │   ├─ Privacy information
  │   └─ Download data button
  │
  ├─ Support & About:
  │   ├─ Version number
  │   ├─ Last updated date
  │   └─ Support links
  │
  └─ State:
      └─ apiKey: API key input
      └─ apiModel: Selected model
      └─ showApiKey: Toggle show/hide
      └─ settings: User preferences
```

### Documentation Files

```
START_HERE.md (📍 READ THIS FIRST)
  └─ Quick orientation and how to get started
  └─ 5-minute overview of the project

QUICKSTART.md
  └─ Step-by-step setup instructions
  └─ Configuration guide
  └─ Tips for using the app

README.md
  └─ Complete feature documentation
  └─ Technology stack details
  └─ Project structure
  └─ Usage guide for each feature

ARCHITECTURE.md
  └─ Component hierarchy and structure
  └─ Detailed component descriptions
  └─ Data structures and interfaces
  └─ Type definitions
  └─ Performance considerations

SETUP_SUMMARY.md
  └─ What's been created
  └─ Technology choices
  └─ What's ready vs. what needs backend
  └─ Next steps for integration

DELIVERABLES.md
  └─ Complete checklist of what's included
  └─ Feature status matrix
  └─ Code statistics
  └─ Deployment information

PROJECT_COMPLETE.txt
  └─ ASCII art summary of completion
  └─ Quick reference guide
```

### Utility Scripts

```
run.bat (Windows)
  └─ Automated setup and launch script
  └─ Checks for Node.js
  └─ Installs dependencies
  └─ Starts dev server

run.sh (Mac/Linux)
  └─ Bash version of startup script
  └─ Same functionality as run.bat
```

---

## 🎯 Component Usage Guide

### Using Layout Components

```typescript
// In App.tsx or any parent component:
import { Header, Sidebar, MainLayout, Card, AIRecommendation } from './components/Layout';

// Use Header
<Header 
  userName="Dr. Clarissa Lee" 
  schoolName="Ngee Ann Polytechnic"
  role="Programme Lead"
/>

// Use Sidebar
<Sidebar 
  activeSection="dashboard" 
  onSectionChange={(section) => setActiveSection(section)}
/>

// Use MainLayout
<MainLayout>
  {/* Your content here */}
</MainLayout>

// Use Card
<Card title="My Title" highlight="ai">
  {/* Card content */}
</Card>

// Use AIRecommendation
<AIRecommendation 
  title="AI Suggestions"
  items={['Suggestion 1', 'Suggestion 2', 'Suggestion 3']}
/>
```

### Using Feature Components

```typescript
// In App.tsx:
import Dashboard from './components/Dashboard';
import CurriculumBuilder from './components/CurriculumBuilder';
import MyCurricula from './components/MyCurricula';
import AIAssistant from './components/AIAssistant';
import Templates from './components/Templates';
import Settings from './components/Settings';

// Conditional rendering based on activeSection
{activeSection === 'dashboard' && <Dashboard onCreateNew={handleCreate} />}
{activeSection === 'create' && <CurriculumBuilder onCancel={handleCancel} />}
// ... etc
```

---

## 📊 Data Structures

### Curriculum Data
```typescript
interface Curriculum {
  id: string;
  title: string;
  type: 'Short Course' | 'PET' | 'CET' | 'Programme';
  status: 'Draft' | 'In Progress' | 'Completed';
  lastModified: string;
  description?: string;
  progress?: number;      // 0-100
  modules?: number;
  students?: number;
}
```

### Template Data
```typescript
interface Template {
  id: string;
  name: string;
  type: string;
  description: string;
  modulesCount: number;
  estimatedDuration: string;
}
```

### Form Data (CurriculumBuilder)
```typescript
interface FormData {
  curriculumName: string;
  curriculumType: string;
  description: string;
  discipline: string;
  level: string;
  duration: string;
}
```

---

## 🎨 Styling System

### Tailwind CSS Classes Used
- **Spacing**: p-6, m-4, gap-4, etc.
- **Colors**: bg-dark, text-white, border-dark, etc.
- **Grids**: grid, grid-cols-*, gap-*
- **Flexbox**: flex, flex-1, justify-between, items-center
- **Typography**: text-*, font-*, uppercase, tracking-wider
- **Effects**: hover:*, focus:*, transition-*
- **Responsive**: md:*, lg:*

### Custom CSS Classes (in src/index.css)
- `.ai-badge` - AI feature badge
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card-bordered` - Bordered card
- `.section-title` - Section heading
- `.ai-section` - AI-highlighted section

---

## 🔄 Data Flow

```
User Action (button click, form input)
    ↓
Event Handler (onClick, onChange)
    ↓
State Update (useState)
    ↓
Component Re-render
    ↓
UI Update (user sees changes)
```

Example in CurriculumBuilder:
```typescript
// User types in input
<input onChange={handleInputChange} />

// Handler updates state
const handleInputChange = (e) => {
  setFormData(prev => ({ ...prev, [name]: value }));
}

// Component re-renders with new data
// UI shows updated input value
```

---

## 📱 Responsive Breakpoints

- **Mobile**: Default (375px+)
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

Grid examples:
- `grid-cols-1` mobile
- `md:grid-cols-2` tablet  
- `lg:grid-cols-4` desktop

---

## 🔒 Type Safety

All components use TypeScript interfaces:

```typescript
interface ComponentProps {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4?: string; // Optional
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2, ... }) => {
  // TypeScript ensures all props are correctly typed
}
```

---

## ✨ Key Features by Component

| Component | Purpose | Key Features |
|-----------|---------|-------------|
| Layout | Reusable UI components | Header, Sidebar, Cards |
| Dashboard | Main landing page | Welcome, recommendations, stats |
| MyCurricula | Manage curricula | List, filter, progress tracking |
| CurriculumBuilder | Create new curriculum | 4-step wizard, AI suggestions |
| AIAssistant | Chat interface | Quick actions, message history |
| Templates | Template browser | Search, preview, quick start |
| Settings | Configuration | API keys, preferences |

---

## 🚀 Next Steps for Developers

1. Understand the component structure (see Component Hierarchy above)
2. Familiarize yourself with Layout components (reusable)
3. Study one feature component (e.g., Dashboard)
4. Connect to backend APIs
5. Replace mock data with real API data
6. Add form validation
7. Implement authentication (if needed)
8. Deploy to production

---

**Happy coding! 🎓✨**
