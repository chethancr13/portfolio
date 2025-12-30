# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: `portfolio` (or your preferred name)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### 2. Update package.json (Already Done!)

The `homepage` field in `package.json` is already set to:
```
"homepage": "https://chethancr13.github.io/portfolio"
```

**If you used a different repository name**, update it in `package.json`:
- Replace `portfolio` with your actual repository name

### 3. Initialize Git and Push to GitHub

Run these commands in your terminal:

```bash
# Navigate to your project directory
cd /Users/apple/Downloads/react-portfolio-template

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
# Replace 'portfolio' with your actual repo name if different
git remote add origin https://github.com/chethancr13/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

Once your code is on GitHub, run:

```bash
npm run deploy
```

This will:
- Build your React app
- Deploy it to the `gh-pages` branch
- Make it available at `https://chethancr13.github.io/portfolio`

### 5. Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **"gh-pages"** branch
5. Click **Save**

### 6. Access Your Live Website

Your portfolio will be live at:
**https://chethancr13.github.io/portfolio**

(Replace `portfolio` with your actual repository name if different)

---

## Updating Your Portfolio

Whenever you make changes:

1. Make your changes to the code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Deploy again:
   ```bash
   npm run deploy
   ```

---

## Adding Website to LinkedIn

1. Go to your LinkedIn profile: https://www.linkedin.com/in/chethancr13/
2. Click **"Add profile section"** or **"Edit"** on your profile
3. Scroll to **"Featured"** or **"Contact info"** section
4. Add your website URL: `https://chethancr13.github.io/portfolio`
5. You can also add it in the **"About"** section or as a **"Featured"** link

---

## Troubleshooting

- **404 Error**: Make sure GitHub Pages is enabled in repository settings
- **Build fails**: Check that all dependencies are installed (`npm install`)
- **Wrong URL**: Verify the `homepage` field in `package.json` matches your repo name

