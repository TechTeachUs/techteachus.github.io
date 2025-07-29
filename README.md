# TechTeach - Lesson Plan Selector

An interactive lesson plan management system for Mrs. Ramirez's 10th Grade Game Development course.

## 🚀 GitHub Pages Deployment

This project is **GitHub Pages compatible**! Here's what works and how to deploy:

### ✅ What Works on GitHub Pages:

1. **LPS-github.html** - Main lesson plan selector (fully functional)
2. **lesson-editor-github.html** - Lesson data editor (fully functional)
3. **index.html** - Landing page
4. **All static assets** (CSS, JS, icons)

### 🛠️ How to Deploy:

1. **Push to GitHub repository**
2. **Enable GitHub Pages** in repository settings
3. **Choose source**: Deploy from main branch
4. **Access your site** at: `https://yourusername.github.io/TechTeach`

### 📁 File Structure for GitHub Pages:

```
TechTeach/
├── index.html               # ✅ Landing page
├── LPS-github.html          # ✅ Main lesson selector (GitHub compatible)
├── LPS.html                 # ⚠️  Requires local server
├── assets/                  # ✅ All static resources
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   └── images/              # Icons and images
├── data/                    # ✅ Lesson data
├── tools/                   # ✅ lesson-editor-github.html works on GitHub Pages
│   ├── lesson-editor-github.html  # ✅ GitHub Pages compatible
│   ├── lesson-editor.html         # ⚠️  Requires local server
│   ├── validation-tool.html       # ⚠️  Requires local server
│   └── missing-lessons-report.html # ⚠️  Requires local server
├── templates/               # ✅ Reference materials
└── docs/                    # ✅ Documentation and archives
```

### 🔄 Local vs GitHub Pages Versions:

| Feature | Local (LPS.html) | GitHub (LPS-github.html) |
|---------|------------------|--------------------------|
| Lesson Plan Selector | ✅ | ✅ |
| Dynamic Data Loading | ✅ | ✅ (embedded) |
| All Lesson Content | ✅ | ✅ |
| Lesson Data Editor | ✅ | ✅ (lesson-editor-github.html) |
| Validation Tools | ✅ | ❌ (requires server) |
| JSON File Updates | ✅ | ❌ (data is embedded) |

### 📝 GitHub Pages Setup Steps:

1. **Repository Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: main
4. **Folder**: / (root)
5. **Save**

Your site will be available at: `https://[username].github.io/[repository-name]`

### 🎯 Direct Links:

- **Main Selector**: `/LPS-github.html`
- **Landing Page**: `/index.html` 
- **Template Reference**: `/templates/lesson-template.json`
- **Validation Tools**: `/tools/` (requires local server)

### 🔧 For Development:

If you want to modify lesson data or use validation tools:

1. **Run locally** with: `python3 -m http.server 3000`
2. **Access**: http://localhost:3000
3. **Use**: `LPS.html` and validation tools

### 💡 Tips:

- **LPS-github.html** has all lesson data embedded for GitHub Pages
- **LPS.html** loads data dynamically (requires server)
- **Validation tools** need a server to load JSON files
- **All core functionality** works on GitHub Pages!

## 🎓 Features

- Interactive lesson plan selection by unit and day
- Complete curriculum for 10th Grade Game Development
- Responsive design for classroom use
- Professional lesson plan formatting
- GitHub Pages compatible version

## 📚 Course Content

- **Unit 1**: Introduction to Python & Computational Thinking
- **Unit 2**: Loops and Functions  
- **Unit 3**: Data Structures - Lists & Dictionaries
- **Unit 4**: File I/O
- **Unit 5**: Intro to OOP with Unity & C#
- **Unit 6**: Data Structures in C#

---

**Ready for GitHub Pages! 🚀**
