# Brutalist Design Implementation Guide

## Overview
The AI Curriculum Builder for Ngee Ann Polytechnic has been redesigned with **brutalist design principles** - creating a raw, honest, and functional interface that prioritizes clarity and usability while avoiding visual overwhelm.

## Design Philosophy
Brutalism in web design emphasizes:
- ✓ **Raw and Honest**: No decorative elements, pure function
- ✓ **Bold Typography**: Large, heavy fonts that command attention
- ✓ **High Contrast**: Pure black on white, maximum readability
- ✓ **Thick Borders**: 3-4px borders throughout for visual weight
- ✓ **Monospace Fonts**: Used strategically for forms and data
- ✓ **No Rounded Corners**: Sharp, angular edges
- ✓ **Uppercase Text**: All headings and labels in capitals
- ✓ **Generous Spacing**: Breathing room between elements
- ✓ **Minimal Color**: Black, white, grays only

## Implementation Details

### 1. **Global Styles** (`src/index.css`)
```css
/* Monospace font foundation */
@font-face {
  font-family: 'Courier New', monospace;
}

/* Custom CSS classes for brutalist components */
.ai-badge - Brutalist badge styling
.btn-primary - Black bg, white text, 3px border
.btn-secondary - White bg, black text, 3px border
.card-bordered - 3-4px black borders
.section-title - Bold, large, bordered text
.ai-section - Black bg with white text and 4px border
```

**All custom form elements, toggles, progress bars, and tables use:**
- Monospace font-family
- 3-4px `border-black`
- UPPERCASE `tracking-wider` text
- No rounded corners (`rounded: 0`)
- Bold typography (`font-black`, `font-bold`)

### 2. **Layout Components** (`src/components/Layout.tsx`)

#### Header
- `text-4xl font-black` - Massive, bold text
- `tracking-widest` - Widest letter spacing
- `border-b-4 border-black` - Heavy bottom border
- Padding increased to `py-6 px-8` for breathing room

#### Sidebar Navigation
- `w-72` fixed width
- `border-r-4 border-black` - Thick right border
- Grid layout with `gap-4`
- Active items: `bg-black text-white`
- Buttons with `border-b-4` underline effect

#### Card Component
- `border-3 border-black` or `border-4 border-black`
- `bg-white` with high contrast
- No rounded corners
- Generous padding `p-6` to `p-8`

#### AIRecommendation Component
- `bg-black text-white`
- `border-4 border-black` with padding
- List items with `border-l-4 border-white` accent bars
- Bold uppercase labels

### 3. **Updated Components**

#### Dashboard (`src/components/Dashboard.tsx`)
- **Stats Cards**: `border-4 border-black bg-black text-white`
- **Typography**: `text-4xl font-black` for main heading
- **List Items**: `border-b-3 border-black` dividers
- **Recommendations**: AIRecommendation component integrated

#### CurriculumBuilder (`src/components/CurriculumBuilder.tsx`)
- **Step Indicator**: 4 boxes showing progress, alternating black/white
- **Forms**: `border-3 border-black` inputs and textareas
- **Buttons**: Bold uppercase text, large `py-4 px-8` sizing
- **AI Insights**: Black bg with white text and 4px border

#### AIAssistant (`src/components/AIAssistant.tsx`)
- **Chat Area**: `border-3 border-black` container
- **Messages**: Black for user, white for AI, 3px borders
- **Action Buttons**: Grid of bordered buttons with hover effects
- **Configuration Box**: Bold uppercase borders and text

#### Templates (`src/components/Templates.tsx`)
- **Template Cards**: `border-4 border-black`, hover state changes bg
- **Type Badges**: Bordered labels with `border-2 border-current`
- **Module Structure**: `border-b-3 border-black` dividers
- **Details Section**: AIRecommendation component for materials

#### Settings (`src/components/Settings.tsx`)
- **Form Sections**: Clear card borders, uppercase labels
- **API Configuration**: Warning box with `border-3 border-black`
- **Toggles**: Custom toggle with black/white states, `border-3`
- **Privacy Section**: Large black box with white text

#### MyCurricula (`src/components/MyCurricula.tsx`)
- **Curriculum Items**: `border-4 border-black`, hover state
- **Status Badges**: Brutalist borders matching states
- **Progress Bar**: `border-3 border-black` container, solid black fill
- **Statistics**: Grid with `border-r-3` vertical dividers

## Typography System

### Headings
- **Page Titles**: `text-4xl font-black tracking-widest`
- **Section Titles**: `text-2xl font-black tracking-widest`
- **Labels**: `text-sm font-black uppercase tracking-wider`

### Body Text
- **Regular**: `text-sm font-bold uppercase tracking-wider`
- **Small**: `text-xs font-bold uppercase tracking-widest`
- **Monospace**: `font-mono` for data/code

## Spacing System

### Borders
- **Heavy Section Dividers**: `border-b-4 border-black`
- **Component Borders**: `border-3` or `border-4`
- **List Dividers**: `border-b-3 border-black`
- **Vertical Dividers**: `border-r-3 border-black`

### Padding
- **Cards**: `p-6` to `p-8`
- **Buttons**: `px-6 py-3` to `px-8 py-4`
- **Sections**: `space-y-8` between major sections
- **List Items**: `space-y-3` to `space-y-4` between items

### Margins
- **Section Spacing**: `mb-6` to `mb-8` between sections
- **Label Spacing**: `mb-2` to `mb-4` above inputs
- **Component Gaps**: `gap-3` to `gap-6` between grid items

## Color Palette
- **Primary**: `#000000` (Black) - Text, borders, active states
- **Secondary**: `#FFFFFF` (White) - Backgrounds, text on dark
- **Neutral**: `#F3F4F6` to `#9CA3AF` (Gray) - Hover states, disabled
- **No colors**: Red, blue, green, etc. → Only black/white/gray

## Button States

### Primary Button
```
Default: bg-black text-white border-3 border-black
Hover: bg-gray-900
Active: bg-gray-950
Focus: border-4 border-black
```

### Secondary Button
```
Default: bg-white text-black border-3 border-black
Hover: bg-gray-100
Active: bg-gray-200
Focus: border-4 border-black
```

## Form Elements

### Inputs & Selects
```
border-3 border-black
bg-white text-black
p-4 font-bold uppercase tracking-wider
Focus: outline-none (Tailwind default)
Disabled: border-gray-300 bg-gray-100
```

### Textareas
```
border-3 border-black
bg-white text-black
p-3 font-mono text-sm uppercase tracking-wider
```

### Toggles
```
w-14 h-8 border-3 border-black
Unchecked: bg-white with black handle
Checked: bg-black with white handle
```

## Visual Hierarchy

1. **Maximum Impact**: `text-4xl font-black` page titles with 4px border
2. **High Impact**: `text-2xl font-black` section titles
3. **Medium Impact**: `text-lg font-black` subsection headers  
4. **Normal**: `text-sm font-bold` regular labels
5. **Low Impact**: `text-xs font-bold` secondary information

## Accessibility Considerations

✓ **High Contrast**: Pure black on white = WCAG AAA compliant
✓ **Large Type**: 4xl minimum for titles ensures readability
✓ **Bold Fonts**: Heavy font weight aids readability
✓ **Clear Borders**: Physical separation aids comprehension
✓ **Uppercase Labels**: Emphasis on important form fields
✓ **Spacing**: Generous padding prevents cognitive overload

## Build & Development

### Build with Tailwind
```bash
npm run build
```

The build successfully compiles all components with:
- Tailwind CSS (with @apply directives)
- Custom CSS classes for brutalist styling
- No JavaScript transpilation issues
- Production-ready output in `dist/`

### Development Server
```bash
npm run dev
```

Starts Vite dev server with hot reload.

## Component Updates Summary

| Component | Status | Key Changes |
|-----------|--------|------------|
| Layout.tsx | ✅ Complete | Header 4px border, Sidebar brutalist styling, Card borders 3-4px |
| Dashboard.tsx | ✅ Complete | Stats cards black/white, 4px borders, large typography |
| CurriculumBuilder.tsx | ✅ Complete | Step indicator boxes, form 3px borders, large buttons |
| AIAssistant.tsx | ✅ Complete | Chat messages 3px borders, action buttons grid, config box |
| Templates.tsx | ✅ Complete | Template cards 4px borders, type badges, dividers |
| Settings.tsx | ✅ Complete | Form sections with borders, custom toggles, black sections |
| MyCurricula.tsx | ✅ Complete | Curriculum items 4px borders, progress bar 3px, dividers |
| index.css | ✅ Complete | Global brutalist styles, custom classes, Tailwind integration |

## Design Consistency Checklist

- [x] All page headings use `text-4xl font-black`
- [x] All form inputs use `border-3 border-black`
- [x] All buttons use uppercase text
- [x] All section dividers use `border-b-4` or `border-b-3`
- [x] All cards use `border-3` or `border-4`
- [x] No rounded corners throughout
- [x] Black and white only (no colors)
- [x] Generous padding and spacing
- [x] Bold typography everywhere
- [x] Monospace fonts for forms and data
- [x] High contrast for accessibility

## Future Enhancements

1. **Dark Mode Variant**: Option to invert colors (white on black)
2. **Animation**: Subtle transitions that respect brutalist principles
3. **Print Styles**: Brutalist design translates well to print
4. **Responsive**: Media queries maintain brutalist aesthetic on mobile

---

**Design System Version**: 1.0.0  
**Last Updated**: January 28, 2026  
**Framework**: React 18 + TypeScript + Tailwind CSS + Vite
