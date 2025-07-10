# Content Editing Guide

This guide explains how to easily edit the website content without touching the component code.

## Quick Content Updates

All website content is centralized in the file: `src/data/content.js`

### Editing Text Content

1. Open `src/data/content.js`
2. Find the section you want to edit (hero, about, howItWorks, etc.)
3. Update the text values
4. Save the file
5. The changes will appear automatically when you rebuild the site

### Example: Changing the Hero Title

```javascript
// In src/data/content.js
hero: {
  title: "Your New Title Here", // Change this line
  subtitle: "Your new subtitle...",
  // ... rest of the content
}
```

### Example: Adding a New Feature

```javascript
// In src/data/content.js
hero: {
  features: [
    { icon: "MapPin", text: "Location-based" },
    { icon: "Heart", text: "Real-time help" },
    { icon: "Users", text: "Community driven" },
    { icon: "Star", text: "Your new feature" } // Add this line
  ]
}
```

## Available Icons

You can use these icons in features and other sections:
- MapPin
- Heart
- Users
- Star
- AlertTriangle
- ShoppingBag
- BookOpen
- ArrowRight

## Color Scheme

To change the website colors, edit the `colorScheme` object at the bottom of `src/data/content.js`:

```javascript
export const colorScheme = {
  primary: "#8B5CF6",    // Purple - main brand color
  secondary: "#F97316",  // Orange - accent color
  accent: "#10B981",     // Green - success/accent
  background: "#F8FAFC", // Light gray - background
  text: "#1F2937"        // Dark gray - text color
}
```

## Sections You Can Edit

### 1. Hero Section
- Main title and subtitle
- Feature badges
- Button text
- University project badge

### 2. About Section
- Title and description
- Feature cards (title and description)

### 3. How It Works Section
- Title and subtitle
- Step-by-step process

### 4. Technology Section
- Technology stack items
- Categories and descriptions

### 5. Use Cases Section
- Different use case scenarios
- Icons and descriptions

### 6. Team Section
- Team member information
- Roles and descriptions

### 7. Footer
- Links and copyright information

## Tips for Content Editing

1. **Keep it consistent**: Maintain similar length for similar content types
2. **Test your changes**: Always preview the website after making changes
3. **Backup first**: Keep a copy of the original content.js file
4. **Use proper formatting**: Ensure quotes and commas are properly placed
5. **Icons must match**: Only use icons from the available list above

## Rebuilding After Changes

After editing content:

1. Save your changes to `src/data/content.js`
2. Run `npm run build` to rebuild the site
3. The updated site will be in the `dist` folder
4. Deploy to GitHub Pages using `npm run deploy`

## Need Help?

If you encounter any issues:
1. Check that all quotes and commas are properly placed in the content.js file
2. Ensure you're only using available icons
3. Make sure the file structure remains intact
4. Test locally with `npm run dev` before deploying

