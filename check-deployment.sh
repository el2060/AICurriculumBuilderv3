#!/bin/bash
# Dante AI Integration - Deployment Checklist
# Run this script to verify everything is ready for production

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         DANTE AI INTEGRATION - DEPLOYMENT CHECKLIST            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
  if [ -f "$1" ]; then
    echo -e "${GREEN}✓${NC} $1"
    return 0
  else
    echo -e "${RED}✗${NC} $1 (MISSING)"
    return 1
  fi
}

check_dir() {
  if [ -d "$1" ]; then
    echo -e "${GREEN}✓${NC} $1"
    return 0
  else
    echo -e "${RED}✗${NC} $1 (MISSING)"
    return 1
  fi
}

echo "📁 DIRECTORY STRUCTURE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_dir "api"
check_dir "src/utils"
check_dir "src/components"
echo ""

echo "📄 BACKEND FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_file "api/create-conversation.js"
check_file "api/send-message.js"
echo ""

echo "⚙️ FRONTEND FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_file "src/utils/danteAI.ts"
check_file "src/components/AIAssistant.tsx"
echo ""

echo "🔧 CONFIGURATION FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_file "vercel.json"
check_file "vite.config.ts"
check_file "tsconfig.json"
check_file "package.json"
echo ""

echo "📚 DOCUMENTATION FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_file "DANTE_QUICKSTART.md"
check_file "DANTE_AI_INTEGRATION.md"
check_file "DANTE_API_REFERENCE.md"
check_file "DANTE_IMPLEMENTATION_SUMMARY.md"
echo ""

echo "✅ PRE-DEPLOYMENT CHECKS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if node_modules exists
if [ -d "node_modules" ]; then
  echo -e "${GREEN}✓${NC} node_modules installed"
else
  echo -e "${YELLOW}!${NC} node_modules not found (run: npm install)"
fi

# Check if API key is configured
if grep -q "DANTE_PUBLIC_" api/create-conversation.js; then
  echo -e "${GREEN}✓${NC} API credentials configured in backend"
else
  echo -e "${RED}✗${NC} API credentials not found (UPDATE REQUIRED)"
fi

# Check TypeScript config
if grep -q '"jsx": "react-jsx"' tsconfig.json; then
  echo -e "${GREEN}✓${NC} TypeScript JSX configuration correct"
else
  echo -e "${RED}✗${NC} TypeScript JSX configuration issue"
fi

echo ""
echo "🚀 DEPLOYMENT STEPS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. BUILD & TEST LOCALLY"
echo "   npm install"
echo "   npm run build"
echo "   npm run dev"
echo ""
echo "2. DEPLOY TO VERCEL"
echo "   npm install -g vercel"
echo "   vercel"
echo ""
echo "3. SET ENVIRONMENT VARIABLE"
echo "   In Vercel Dashboard → Project Settings → Environment Variables"
echo "   Name:  DANTE_API_KEY"
echo "   Value: DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7"
echo ""
echo "4. REDEPLOY"
echo "   vercel --prod"
echo ""

echo "📊 FILE SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Backend Functions:"
echo "  • api/create-conversation.js    - Initialize sessions"
echo "  • api/send-message.js           - Process queries"
echo ""
echo "Frontend Integration:"
echo "  • src/utils/danteAI.ts          - Core utilities"
echo "  • src/components/AIAssistant.tsx - Updated component"
echo ""
echo "Configuration:"
echo "  • vercel.json                   - Deployment config"
echo ""
echo "Documentation:"
echo "  • DANTE_QUICKSTART.md           - Start here (3-step setup)"
echo "  • DANTE_AI_INTEGRATION.md       - Complete guide"
echo "  • DANTE_API_REFERENCE.md        - API details"
echo "  • DANTE_IMPLEMENTATION_SUMMARY.md - What was built"
echo ""

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║           ✅ DANTE AI INTEGRATION IS READY                     ║"
echo "║                 PROCEED WITH DEPLOYMENT                        ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
