# PDF Export & Print Features

## 🆕 New Features Added to Lesson Editor

The lesson editor now includes two new export options for individual lessons:

### 📄 **PDF Export**
- **Button:** "📄 Export PDF"
- **What it does:** Creates a professionally formatted PDF of the current lesson
- **Features:**
  - Clean, structured layout with proper headers
  - Automatic page breaks when content is long
  - Includes all lesson components (objectives, agenda, materials, etc.)
  - Auto-generated filename: `Unit_X_Day_Y_LessonTitle.pdf`
  - Page numbers and generation timestamp

### 🖨️ **Print Lesson**
- **Button:** "🖨️ Print Lesson"
- **What it does:** Opens a formatted print preview in a new window
- **Features:**
  - Professional classroom-ready formatting
  - Print-optimized styling (clean fonts, proper margins)
  - Color-coded sections for easy reading
  - Highlights time markers in agenda (e.g., **(5m)**, **(20m)**)
  - Automatically opens print dialog

## 📋 **PDF Content Structure**

Each exported PDF includes:

1. **Header Section**
   - Unit title
   - Day number and lesson title
   - Date
   - Course and school year information

2. **Core Content**
   - Enduring Understanding
   - Essential Question
   - Learning Objectives (numbered list)
   - Lesson Agenda
   - Materials (Teacher, Student, Links)
   - Assessment (Formative, Summative)
   - Differentiation strategies

3. **Footer**
   - Generation date and page numbers

## 🎯 **Use Cases**

### For Teachers:
- **Substitute Plans:** Quick PDF export for substitute teachers
- **Lesson Binders:** Print and organize in physical binders
- **Sharing:** Email PDF lessons to co-teachers or administrators
- **Backup:** Physical copies as backup to digital plans

### For Administration:
- **Observation Forms:** Print for classroom observations
- **Curriculum Review:** PDF collection for curriculum audits
- **Documentation:** Permanent records of lesson plans

## 🔧 **Technical Details**

- **PDF Library:** Uses jsPDF for client-side PDF generation
- **No Server Required:** Works entirely in the browser
- **GitHub Pages Compatible:** Both features work on GitHub Pages hosting
- **Automatic Saving:** Saves current edits before export/print
- **Error Handling:** User-friendly error messages if export fails

## 💡 **Tips for Best Results**

1. **Complete Data:** Fill in all sections for best-formatted output
2. **Save First:** Features automatically save before exporting
3. **Browser Support:** Works in all modern browsers
4. **File Names:** PDF files are auto-named based on unit/day/lesson title
5. **Print Settings:** Use landscape orientation for agenda-heavy lessons

---

**Result:** You can now easily export any lesson as a PDF for download or print it directly with professional formatting - perfect for classroom use, substitute plans, or administrative documentation!
