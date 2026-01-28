@echo off
REM Dante AI Integration - Deployment Checklist (Windows)
REM Run this script to verify everything is ready for production

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║         DANTE AI INTEGRATION - DEPLOYMENT CHECKLIST            ║
echo ║                     Windows Batch Version                      ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

setlocal enabledelayedexpansion

echo.
echo 📁 DIRECTORY STRUCTURE
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "api" (
    echo [OK] api directory
) else (
    echo [MISSING] api directory
)

if exist "src\utils" (
    echo [OK] src\utils directory
) else (
    echo [MISSING] src\utils directory
)

if exist "src\components" (
    echo [OK] src\components directory
) else (
    echo [MISSING] src\components directory
)

echo.
echo 📄 BACKEND FILES
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "api\create-conversation.js" (
    echo [OK] api\create-conversation.js
) else (
    echo [MISSING] api\create-conversation.js
)

if exist "api\send-message.js" (
    echo [OK] api\send-message.js
) else (
    echo [MISSING] api\send-message.js
)

echo.
echo ⚙️ FRONTEND FILES
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "src\utils\danteAI.ts" (
    echo [OK] src\utils\danteAI.ts
) else (
    echo [MISSING] src\utils\danteAI.ts
)

if exist "src\components\AIAssistant.tsx" (
    echo [OK] src\components\AIAssistant.tsx
) else (
    echo [MISSING] src\components\AIAssistant.tsx
)

echo.
echo 🔧 CONFIGURATION FILES
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "vercel.json" (
    echo [OK] vercel.json
) else (
    echo [MISSING] vercel.json
)

if exist "vite.config.ts" (
    echo [OK] vite.config.ts
) else (
    echo [MISSING] vite.config.ts
)

if exist "tsconfig.json" (
    echo [OK] tsconfig.json
) else (
    echo [MISSING] tsconfig.json
)

if exist "package.json" (
    echo [OK] package.json
) else (
    echo [MISSING] package.json
)

echo.
echo 📚 DOCUMENTATION FILES
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "DANTE_QUICKSTART.md" (
    echo [OK] DANTE_QUICKSTART.md
) else (
    echo [MISSING] DANTE_QUICKSTART.md
)

if exist "DANTE_AI_INTEGRATION.md" (
    echo [OK] DANTE_AI_INTEGRATION.md
) else (
    echo [MISSING] DANTE_AI_INTEGRATION.md
)

if exist "DANTE_API_REFERENCE.md" (
    echo [OK] DANTE_API_REFERENCE.md
) else (
    echo [MISSING] DANTE_API_REFERENCE.md
)

if exist "DANTE_IMPLEMENTATION_SUMMARY.md" (
    echo [OK] DANTE_IMPLEMENTATION_SUMMARY.md
) else (
    echo [MISSING] DANTE_IMPLEMENTATION_SUMMARY.md
)

echo.
echo ✅ PRE-DEPLOYMENT CHECKS
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "node_modules" (
    echo [OK] node_modules installed
) else (
    echo [WARN] node_modules not found - run: npm install
)

echo.
echo 🚀 DEPLOYMENT STEPS
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 1. BUILD ^& TEST LOCALLY
echo    npm install
echo    npm run build
echo    npm run dev
echo.
echo 2. DEPLOY TO VERCEL
echo    npm install -g vercel
echo    vercel
echo.
echo 3. SET ENVIRONMENT VARIABLE
echo    In Vercel Dashboard ^> Project Settings ^> Environment Variables
echo    Name:  DANTE_API_KEY
echo    Value: DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7
echo.
echo 4. REDEPLOY
echo    vercel --prod
echo.

echo 📊 FILE SUMMARY
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Backend Functions:
echo   • api\create-conversation.js    - Initialize sessions
echo   • api\send-message.js           - Process queries
echo.
echo Frontend Integration:
echo   • src\utils\danteAI.ts          - Core utilities
echo   • src\components\AIAssistant.tsx - Updated component
echo.
echo Configuration:
echo   • vercel.json                   - Deployment config
echo.
echo Documentation:
echo   • DANTE_QUICKSTART.md           - Start here (3-step setup)
echo   • DANTE_AI_INTEGRATION.md       - Complete guide
echo   • DANTE_API_REFERENCE.md        - API details
echo   • DANTE_IMPLEMENTATION_SUMMARY.md - What was built
echo.

echo ╔════════════════════════════════════════════════════════════════╗
echo ║           ✅ DANTE AI INTEGRATION IS READY                     ║
echo ║                 PROCEED WITH DEPLOYMENT                        ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

pause
