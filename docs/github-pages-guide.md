# GitHub Pages Deployment Guide

## Will the Lesson Editor Work on GitHub Pages?

**Yes!** The lesson editor has been specifically designed to work on GitHub Pages with the following considerations:

## Files for GitHub Pages

### 1. **lesson-editor-github.html** (GitHub Pages Ready)
- Contains embedded lesson data directly in the HTML
- No external file dependencies
- Ready to deploy on GitHub Pages immediately
- Automatically falls back to embedded data if external files aren't accessible

### 2. **lesson-editor.html** (Local Development)
- Loads data from external JSON file
- Better for local development and testing
- Requires a local server to work properly

## How to Deploy on GitHub Pages

### Option 1: Simple Upload
1. Upload `lesson-editor-github.html` to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Access the editor at: `https://yourusername.github.io/yourrepo/tools/lesson-editor-github.html`

### Option 2: Rename for Easy Access
1. Rename `lesson-editor-github.html` to `index.html` in a dedicated folder
2. Access directly at: `https://yourusername.github.io/yourrepo/`

## Key Differences: Local vs GitHub Pages

| Feature | Local Version | GitHub Pages Version |
|---------|---------------|---------------------|
| Data Loading | External JSON file | Embedded in HTML |
| File Size | Smaller HTML file | Larger (includes data) |
| Updates | Edit JSON separately | Need to rebuild HTML |
| Dependencies | Requires local server | None - works anywhere |
| Offline | No (needs server) | Yes (self-contained) |

## GitHub Pages Advantages

✅ **No Server Required**: Works directly from GitHub hosting  
✅ **Self-Contained**: All data embedded, no external dependencies  
✅ **Instant Access**: Available immediately after push to GitHub  
✅ **Reliable**: No CORS or file loading issues  
✅ **Shareable**: Easy to share with colleagues via URL  

## GitHub Pages Limitations

⚠️ **File Size**: Larger file due to embedded data  
⚠️ **Updates**: Need to regenerate HTML when lesson data changes  
⚠️ **Version Control**: Data and interface are in same file  

## Best Practices for GitHub Pages

1. **Use the GitHub Version**: Always use `lesson-editor-github.html` for GitHub Pages
2. **Regular Backups**: Download updated JSON files regularly
3. **Version Control**: Commit changes to both data and HTML files
4. **Testing**: Test locally before deploying to GitHub Pages

## Updating Data on GitHub Pages

When you make changes using the GitHub Pages editor:

1. **Edit lessons** in the web interface
2. **Download** the updated JSON file
3. **Update** your local `complete_lesson_plan.json`
4. **Regenerate** the GitHub version with new data
5. **Push** to GitHub to update the live version

## Security Note

The GitHub Pages version includes all your lesson data in the HTML file. If your repository is public, the lesson data will be publicly visible. Make sure you're comfortable with this before deploying.

---

**Summary**: Yes, the lesson editor will work perfectly on GitHub Pages! Use the `lesson-editor-github.html` version for deployment - it's specifically designed for GitHub Pages hosting with embedded data and no external dependencies.
