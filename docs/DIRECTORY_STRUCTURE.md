# TechTeach - Directory Structure

## 📁 Organized File Structure

```
TechTeach/
├── 📄 index.html                    # Main landing page
├── 📄 LPS.html                      # Lesson Plan Selector (local server)
├── 📄 LPS-github.html               # Lesson Plan Selector (GitHub Pages)
├── 📄 README.md                     # Project documentation
│
├── 📂 assets/                       # Static assets
│   ├── 📂 css/                      # Stylesheets
│   │   ├── style.css               # Main styles
│   │   └── animate.css             # Animation styles
│   ├── 📂 js/                       # JavaScript files
│   │   ├── embedded-data.js        # Lesson data for GitHub Pages
│   │   ├── script.js               # Main JavaScript
│   │   ├── particles.js            # Particle effects
│   │   ├── jquery.js               # jQuery library
│   │   ├── scrollify.js            # Scrollify plugin
│   │   ├── app.js                  # Application logic
│   │   ├── curriculum-loader.js    # Curriculum loading utilities
│   │   ├── main.js                 # Main application entry
│   │   └── reset.js                # Reset utilities
│   └── 📂 images/                   # Icons and images
│       ├── contact-icon.svg        # Contact icon
│       ├── csharp-icon.svg         # C# programming icon
│       ├── database-icon.svg       # Database icon
│       ├── gamedev-icon.svg        # Game development icon
│       ├── html5-icon.svg          # HTML5 icon
│       ├── javascript-icon.svg     # JavaScript icon
│       ├── python-icon.svg         # Python icon
│       ├── unity-icon.svg          # Unity icon
│       └── [various image files]   # Profile and lesson images
│
├── 📂 data/                         # Lesson data
│   ├── complete_lesson_plan.json   # Full curriculum data
│   └── curriculum-data.json        # Additional curriculum data
│
├── 📂 tools/                        # Development and management tools
│   ├── validation-tool.html        # Data validation and template generator
│   └── missing-lessons-report.html # Missing lesson analysis
│
├── 📂 templates/                    # Reference templates
│   └── lesson-template.json        # Lesson plan template and examples
│
└── 📂 docs/                         # Documentation and archived files
    ├── LPS-fixed.html              # Previous version (archived)
    ├── debug.html                  # Debug version (archived)
    ├── simple-test.html            # Test file (archived)
    └── lesson-plans.json           # Original data file (archived)
```

## 🎯 Directory Purposes

### **Root Level**
- **Main application files** for immediate use
- **GitHub Pages compatible** versions clearly marked

### **assets/** 
- **All static resources** organized by type
- **Consistent naming** and structure
- **Easy to reference** in HTML files

### **data/**
- **Lesson plan data** in JSON format
- **Curriculum information** for the application

### **tools/**
- **Development utilities** for managing lesson data
- **Validation and analysis** tools for educators

### **templates/**
- **Reference materials** for creating new lessons
- **Examples and guidelines** for lesson structure

### **docs/**
- **Historical versions** and documentation
- **Test files** and development artifacts
- **Archived materials** for reference

## 🚀 Usage

### For GitHub Pages:
- Use **LPS-github.html** as main entry point
- All assets are properly referenced
- No server required

### For Local Development:
- Use **LPS.html** with local server
- Access tools in **tools/** directory
- Modify data in **data/** directory

### For Educators:
- Reference **templates/** for creating new lessons
- Use **tools/** for data validation and management
- Check **docs/** for additional resources

## 📱 Benefits of This Structure

✅ **Clean separation** of concerns  
✅ **Easy maintenance** and updates  
✅ **Clear file purposes** and locations  
✅ **GitHub Pages compatible**  
✅ **Professional organization**  
✅ **Scalable structure** for future growth
