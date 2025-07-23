# Vercel Deployment Debug Guide

## Current Setup Status ✅
- Package.json location: `/package.json` (repository root)
- Next.js version: 15.4.1 in dependencies
- Build command: `npm run build` (working locally)
- Static export: Enabled in next.config.ts

## Vercel Settings to Check

### 1. Root Directory Setting
**Most Important**: Go to your Vercel project:
1. Settings → General → Root Directory
2. **Leave it EMPTY** (or set to `.`)
3. Click Save

### 2. Build & Development Settings
- Framework Preset: `Next.js`
- Build Command: `npm run build` (or leave default)
- Output Directory: `out`
- Install Command: `npm install` (or leave default)

### 3. Environment Variables
- No custom environment variables needed for this project

## Troubleshooting Steps

### Step 1: Clear Vercel Cache
1. Go to your Vercel project
2. Settings → Functions → Clear Cache
3. Or use CLI: `vercel --prod --force`

### Step 2: Check Git Repository
Verify your GitHub repository has:
- `package.json` at root level
- `next.config.ts` at root level
- `src/` directory at root level

### Step 3: Manual Deployment Test
If still failing, try:
1. Delete the Vercel project
2. Create new Vercel project
3. Connect to GitHub repository
4. Use default settings (don't change root directory)

## Debug Commands (Local)
```bash
# Verify setup
pwd
ls -la package.json
npm run build

# Check Next.js detection
npx next info
```

## Expected Build Output
Should show: "Next.js 15.4.1" detected and build successfully.