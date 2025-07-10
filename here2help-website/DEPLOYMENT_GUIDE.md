# GitHub Pages Deployment Guide

This guide will help you deploy your Here2help website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository `here2help-website` (or any name you prefer)
5. Make sure it's set to "Public"
6. Click "Create repository"

## Step 2: Update Configuration

Before deploying, you need to update the homepage URL in `package.json`:

1. Open `package.json`
2. Find the line: `"homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/here2help-website",`
3. Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username
4. Save the file

Example:
```json
"homepage": "https://johndoe.github.io/here2help-website",
```

## Step 3: Upload Your Code to GitHub

### Option A: Using GitHub Desktop (Recommended for beginners)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click "Clone a repository from the Internet"
4. Select your `here2help-website` repository
5. Choose a local folder to store the project
6. Copy all the project files into this folder
7. In GitHub Desktop, you'll see all the files listed as changes
8. Add a commit message like "Initial website upload"
9. Click "Commit to main"
10. Click "Push origin"

### Option B: Using Command Line

```bash
# Navigate to your project folder
cd /path/to/here2help-website

# Initialize git repository
git init

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/here2help-website.git

# Add all files
git add .

# Commit files
git commit -m "Initial website upload"

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will automatically run

## Step 5: Automatic Deployment

The website is configured with GitHub Actions for automatic deployment. Every time you push changes to the main branch:

1. GitHub will automatically build your website
2. Deploy it to GitHub Pages
3. Your website will be available at: `https://YOUR_USERNAME.github.io/here2help-website/`

## Manual Deployment (Alternative)

If you prefer manual deployment using the gh-pages package:

```bash
# Install dependencies
npm install

# Build the website
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Updating Your Website

To update your website content:

1. Edit the content in `src/data/content.js` (see CONTENT_EDITING_GUIDE.md)
2. Commit and push your changes to GitHub
3. GitHub Actions will automatically rebuild and deploy your site

## Troubleshooting

### Website not loading properly
- Check that your GitHub username is correct in `package.json`
- Ensure the repository name matches the one in the homepage URL
- Wait a few minutes after deployment for changes to appear

### Build fails
- Check the Actions tab in your GitHub repository for error details
- Ensure all dependencies are properly listed in `package.json`
- Make sure there are no syntax errors in your code

### 404 errors
- Verify the base path in `vite.config.js` matches your repository name
- Check that the homepage URL in `package.json` is correct

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the homepage URL in `package.json` to your custom domain

## Support

If you encounter issues:
1. Check the GitHub Actions logs in your repository
2. Refer to the [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)

Your website should be live at: `https://YOUR_USERNAME.github.io/here2help-website/`

