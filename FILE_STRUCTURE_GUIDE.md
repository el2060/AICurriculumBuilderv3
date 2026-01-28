# File Structure & Setup Explanation

## 📁 Your Two Entry Points

### 1. **`index-original-mockup.html`** (UI/UX Reference)
- **Purpose**: Original wireframe/mockup for reference only
- **Size**: 1,912 lines of static HTML + inline CSS
- **Use**: Open in browser to see the original design mockup
- **NOT used by** the React app
- **How to view**: Simply open in browser or VS Code preview

```bash
# To view the mockup (as static HTML)
Open index-original-mockup.html in your browser
```

---

### 2. **`index.html`** (React App Entry Point)
- **Purpose**: Actual entry point for the React/Vite application
- **Size**: 343 bytes (minimal)
- **Content**: 
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AI Curriculum Builder - Ngee Ann Polytechnic</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  ```
- **How it works**:
  1. Browser loads `index.html`
  2. Script loads `/src/main.tsx` (React app entry point)
  3. React mounts to `<div id="root"></div>`
  4. All 7 components render with brutalist design

---

## 🚀 Running Your Application

### Development Mode
```bash
cd AICurriculumBuilderv3
npm run dev
```
- ✅ Runs on `http://localhost:5173/`
- ✅ Hot reload enabled (auto-refresh on code changes)
- ✅ Source maps for debugging
- ✅ Currently running successfully!

### Production Build
```bash
npm run build
```
- ✅ Creates optimized `dist/` folder
- ✅ File size: 91.60 kB (gzipped: 11.73 kB)
- ✅ Ready to deploy to web server

---

## 📋 File Overview

| File | Purpose | Size | Status |
|------|---------|------|--------|
| **index.html** | React app entry point | 343 B | ✅ Active |
| **index-original-mockup.html** | UI/UX reference | 1,912 L | 📚 Reference only |
| **src/main.tsx** | React app bootstrap | 150 L | ✅ Working |
| **src/App.tsx** | Main component router | 100+ L | ✅ Working |
| **src/components/** | 7 brutalist components | 1,000+ L | ✅ All 7 updated |
| **src/index.css** | Global brutalist styles | 170 L | ✅ Complete |
| **tailwind.config.js** | Tailwind configuration | 50 L | ✅ Configured |
| **vite.config.ts** | Vite build config | 20 L | ✅ Correct |

---

## 🔗 How They're Connected

```
Browser loads index.html
    ↓
Vite loads /src/main.tsx
    ↓
React renders App.tsx
    ↓
Routes to 7 components (Dashboard, CurriculumBuilder, etc.)
    ↓
Styled with src/index.css + Tailwind CSS
    ↓
BRUTALIST DESIGN INTERFACE
```

---

## ✅ Verification Checklist

- [x] Original mockup preserved as `index-original-mockup.html`
- [x] React app entry point is `index.html`
- [x] Dev server running successfully on port 5173
- [x] All 7 components with brutalist design
- [x] CSS fully applied and rendering
- [x] Build succeeds with no errors
- [x] Hot reload working (live updates)

---

## 🎯 What to Do Now

### To View the Original Mockup
```
Open: index-original-mockup.html in your browser
(This is static HTML, no server needed)
```

### To Run the React App
```
Terminal: npm run dev
Browser: http://localhost:5173/
```

### To Deploy to Production
```
npm run build
Upload dist/ folder to your web server
```

---

## 📝 Notes

- **The React app is fully functional** - all 7 components render correctly
- **The mockup is preserved** - safe to reference at any time
- **No conflicts** - they have separate filenames now
- **Dev server is running** - you can visit http://localhost:5173/ right now
- **All styling is applied** - brutalist design throughout
- **Ready to add API keys** - configure in Settings section

---

**Status**: ✅ COMPLETE AND RUNNING  
**Date**: January 28, 2026  
**Access**: 
- React app: http://localhost:5173/
- Original mockup: Open `index-original-mockup.html` in browser
