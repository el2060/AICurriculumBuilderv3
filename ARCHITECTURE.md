# AI Curriculum Builder - Component Architecture

## Component Hierarchy

```
App (Main Application)
└── Header
    ├── Logo
    ├── User Info
    └── Last Updated Badge
└── Sidebar
    ├── SidebarItem (Dashboard)
    ├── SidebarItem (My Curricula)
    ├── SidebarItem (AI Assistant)
    ├── SidebarItem (Templates)
    └── SidebarItem (Settings)
└── MainLayout
    └── Content (Dynamic based on activeSection)
        ├── Dashboard
        │   ├── Welcome Section
        │   ├── AIRecommendation
        │   ├── Stats Grid
        │   └── Card (Recent Curricula)
        │
        ├── MyCurricula
        │   ├── Search/Filter Bar
        │   ├── Curriculum Cards (List)
        │   └── Statistics Card
        │
        ├── CurriculumBuilder
        │   ├── Wizard Steps Indicator
        │   ├── AIRecommendation (Dynamic)
        │   ├── Card (Form Content - Step Dynamic)
        │   └── Navigation Buttons
        │
        ├── AIAssistant
        │   ├── Quick Actions Grid
        │   ├── Card (Chat Interface)
        │   └── Card (AI Capabilities)
        │
        ├── Templates
        │   ├── Search/Filter Bar
        │   ├── Template Grid (Cards)
        │   └── Card (Template Preview - Conditional)
        │
        └── Settings
            ├── Card (Profile Settings)
            ├── Card (API Configuration - Highlight)
            ├── Card (Feature Preferences)
            ├── Card (Data & Privacy)
            └── Card (Support & About)
```

## Reusable Components

### Layout.tsx
Located in: `src/components/Layout.tsx`

#### Components Exported:
1. **Header**
   - Props: `userName`, `schoolName`, `role`
   - Displays top navigation with user info and last updated date
   - Sticky positioning

2. **Sidebar**
   - Props: `activeSection`, `onSectionChange`
   - Navigation menu with 5 main sections
   - Active state highlighting
   - Sticky positioning on desktop

3. **SidebarItem** (Internal)
   - Props: `icon`, `label`, `isActive`, `onClick`
   - Individual sidebar menu items
   - Used internally by Sidebar

4. **MainLayout**
   - Props: `children`, `sidebarOpen`
   - Wrapper for main content area
   - Max-width container for readability

5. **Card**
   - Props: `title`, `children`, `className`, `highlight`
   - Reusable card component with optional border styling
   - Highlight modes: 'ai' (blue border) or 'none' (dark border)
   - Optional title with section styling

6. **AIRecommendation**
   - Props: `title`, `items` (string[])
   - Specialized card for AI suggestions
   - Blue background with "AI Powered" badge
   - List of recommendations

## Feature Components

### 1. Dashboard (`src/components/Dashboard.tsx`)
- Welcome message
- AI Smart Start Recommendations
- Statistics grid (4 columns)
- Recent curricula list with status badges
- Create New Curriculum button

**State Management:**
- `curricula` (useState): Sample curriculum data

**Props:**
- `onCreateNew`: Callback to navigate to CurriculumBuilder

### 2. MyCurricula (`src/components/MyCurricula.tsx`)
- Curriculum list with detailed information
- Search and filter functionality
- Progress tracking with visual bars
- Status indicators (Draft, In Progress, Completed)
- Statistics dashboard

**State Management:**
- `curricula` (useState): Local curriculum data

**No Props** (self-contained)

### 3. CurriculumBuilder (`src/components/CurriculumBuilder.tsx`)
- 4-step wizard for creating new curriculum
- AI suggestions change per step
- Form validation ready
- Progress indicator
- Navigation between steps

**State Management:**
- `formData` (useState): Form inputs across all steps
- `step` (useState): Current wizard step (1-4)

**Props:**
- `onCancel`: Callback to go back to Dashboard

**Steps:**
1. Curriculum Details (Name, Type, Description)
2. Structure & Duration (Discipline, Level, Duration)
3. Assessment Plan (Methods, Pass Marks)
4. Review & Confirm (Summary & Next Steps)

### 4. AIAssistant (`src/components/AIAssistant.tsx`)
- Chat interface with message history
- Quick action buttons (6 predefined actions)
- AI capabilities overview
- Configuration instructions

**State Management:**
- `messages` (useState): Chat message history
- `input` (useState): Current user input

**Features:**
- Send message on button click or Enter key
- Simulated AI responses with delay
- Clear message display with role-based styling

### 5. Templates (`src/components/Templates.tsx`)
- 6 curriculum templates
- Search and filter functionality
- Template preview with details
- Module structure information
- Included materials list

**State Management:**
- `templates` (useState): Template data
- `selectedTemplate` (useState): Currently selected template

**Template Types:**
- Full Programme
- PET (Professional Education & Training)
- CET (Continuing Education & Training)
- Short Course

### 6. Settings (`src/components/Settings.tsx`)
- Profile configuration
- API key management with security
- Feature preferences (toggles)
- Data & Privacy options
- Support & About section

**State Management:**
- `apiKey` (useState): Current API key input
- `apiModel` (useState): Selected LLM model
- `showApiKey` (useState): Toggle API key visibility
- `settings` (useState): User preferences

**Configuration Sections:**
- Profile Settings
- API Configuration (Highlighted as AI feature)
- Feature Preferences
- Data & Privacy
- Support & About

## Styling Approach

### Tailwind CSS Classes Used:
- **Layout**: `flex`, `grid`, `gap`, `w-full`, `max-w-*`
- **Spacing**: `p-*`, `m-*`, `pt-*`, `pb-*`, `mt-*`, `mb-*`
- **Colors**: `bg-*`, `text-*`, `border-*`
- **Typography**: `text-*`, `font-*`, `uppercase`, `tracking-wider`
- **States**: `hover:*`, `focus:*`, `active:*`, `disabled:*`
- **Responsive**: `md:*`, `lg:*`

### Custom CSS (in `src/index.css`):
- AI badge styling
- Button variants (primary, secondary)
- Card borders
- Section titles
- AI section highlighting
- Chat interface styling

## Color Scheme

- **Primary**: Dark black (#000) for main elements
- **AI Highlight**: Blue (#0066CC) for AI-powered features
- **Success**: Green for completed items
- **Warning**: Yellow for in-progress items
- **Background**: Light gray (#f8f9fa) for page
- **Neutral**: Grays for secondary text and borders

## Data Structures

### Curriculum Interface
```typescript
interface Curriculum {
  id: string;
  title: string;
  type: 'Short Course' | 'PET' | 'CET' | 'Programme';
  status: 'Draft' | 'In Progress' | 'Completed';
  progress?: number;
  modules?: number;
  students?: number;
  lastModified: string;
  description?: string;
}
```

### Template Interface
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

### FormData Interface (CurriculumBuilder)
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

## Type Safety

All components use:
- **TypeScript interfaces** for props
- **React.FC<Props>** for component typing
- **useState<Type>()** for state typing
- **Strict null checks** in tsconfig.json

## Responsive Design

Components use Tailwind's responsive classes:
- **Mobile**: Base styles apply to all
- **Tablet**: `md:` prefix for medium screens
- **Desktop**: `lg:` prefix for large screens

Grid layouts adapt:
- Dashboard stats: 4 cols → 2 cols → 1 col
- Template grid: Multiple cols → 1 col
- Wizard steps: Flex → Column

## Performance Considerations

1. **Component Size**: Each feature in separate component file
2. **State Locality**: State kept as close to usage as possible
3. **Memoization**: Ready for React.memo() optimization
4. **Lazy Loading**: Ready for React.lazy() code splitting

## Future Enhancement Points

1. **Add React Router**: Replace section state with URL routing
2. **Add Redux/Zustand**: For complex global state
3. **Add API Service Layer**: Abstract API calls
4. **Add Error Boundaries**: Error handling components
5. **Add Loading States**: Skeleton screens during data fetch
6. **Add Form Validation**: Zod or Yup schema validation
7. **Add Unit Tests**: Jest + React Testing Library

---

**Architecture Status**: ✅ Clean, Modular, and Extensible  
**Ready for**: Backend integration, additional features, team development
