// Curriculum Data Loader and Table Generator
class CurriculumLoader {
    constructor() {
        this.curriculumData = {
            "curricula": [
                {
                    "id": "python-curriculum",
                    "grade": "10th Grade",
                    "title": "CS Fundamentals with Python",
                    "icon": "https://placehold.co/64x64/6366F1/FFFFFF?text=Python",
                    "iconAlt": "Python Logo",
                    "iconError": "https://placehold.co/64x64/6366F1/FFFFFF?text=Error",
                    "carouselId": "python-cards",
                    "weeks": [
                        {
                            "weekRange": "1-8",
                            "topic": "Introduction to Python & Algorithms",
                            "keyConcepts": "Variables, Data Types, Control Flow, Functions, Basic Algorithms",
                            "projects": "Python Calculator, Number Guessing Game"
                        },
                        {
                            "weekRange": "9-16",
                            "topic": "Data Structures & Backend Programming",
                            "keyConcepts": "Lists, Dictionaries, File I/O, Introduction to Flask",
                            "projects": "Text-based Adventure Game, Simple Web App with Flask"
                        },
                        {
                            "weekRange": "17-24",
                            "topic": "UI/UX Design Fundamentals (Figma)",
                            "keyConcepts": "Wireframing, Prototyping, User-Centered Design",
                            "projects": "Emoticon Design League (Figma project)"
                        },
                        {
                            "weekRange": "25-32",
                            "topic": "Databases & SQL Basics",
                            "keyConcepts": "Relational Databases, SQL Queries, Database Integration",
                            "projects": "Queue Management System (Python + SQL)"
                        },
                        {
                            "weekRange": "33-36",
                            "topic": "Capstone Prep & Review",
                            "keyConcepts": "Project Planning, Debugging, Code Optimization",
                            "projects": "G4C Challenge preparation"
                        }
                    ]
                },
                {
                    "id": "unity-curriculum",
                    "grade": "11th Grade",
                    "title": "Game Development with Unity",
                    "icon": "https://placehold.co/64x64/6366F1/FFFFFF?text=Unity",
                    "iconAlt": "Unity Logo",
                    "iconError": "https://placehold.co/64x64/6366F1/FFFFFF?text=Error",
                    "carouselId": "unity-cards",
                    "weeks": [
                        {
                            "weekRange": "1-8",
                            "topic": "Introduction to Unity & C#",
                            "keyConcepts": "Unity Interface, Scripting Basics, Game Objects, Components",
                            "projects": "First 2D Game (basic movement, collisions)"
                        },
                        {
                            "weekRange": "9-16",
                            "topic": "2D Game Development",
                            "keyConcepts": "Sprites, Animations, Tilemaps, Physics, UI Elements",
                            "projects": "Platformer Game, Top-down Shooter"
                        },
                        {
                            "weekRange": "17-24",
                            "topic": "Game Debugging & Audio",
                            "keyConcepts": "Debugging Tools, Error Handling, Sound Effects, Background Music",
                            "projects": "Adding audio and debugging to existing games"
                        },
                        {
                            "weekRange": "25-32",
                            "topic": "Introduction to 3D Game Development",
                            "keyConcepts": "3D Models, Lighting, Materials, Basic 3D Physics",
                            "projects": "Simple 3D Maze Game"
                        },
                        {
                            "weekRange": "33-36",
                            "topic": "IT Specialist HTML5 Certification Prep & InfyApp Challenge",
                            "keyConcepts": "Review HTML5 concepts, Project-based learning for InfyApp",
                            "projects": "InfyApp Challenge participation"
                        }
                    ]
                },
                {
                    "id": "advanced-curriculum",
                    "grade": "12th Grade",
                    "title": "Advanced Game & Web Development",
                    "icon": "https://placehold.co/64x64/6366F1/FFFFFF?text=Advanced",
                    "iconAlt": "Advanced Dev Logo",
                    "iconError": "https://placehold.co/64x64/6366F1/FFFFFF?text=Error",
                    "carouselId": "advanced-cards",
                    "weeks": [
                        {
                            "weekRange": "1-8",
                            "topic": "Advanced Web Development (HTML5, CSS3, JavaScript)",
                            "keyConcepts": "Responsive Design, Flexbox, Grid, CSS Animations, DOM Manipulation",
                            "projects": "Personal Portfolio Website, Interactive Web Application"
                        },
                        {
                            "weekRange": "9-16",
                            "topic": "Advanced Unity Features",
                            "keyConcepts": "AI Pathfinding, Multiplayer Basics, Advanced Lighting & Shaders",
                            "projects": "AI-driven Enemy Behavior, Simple Multiplayer Prototype"
                        },
                        {
                            "weekRange": "17-36",
                            "topic": "Capstone Project: Game Development & Publishing",
                            "keyConcepts": "Full Game Development Cycle, Marketing, Publishing",
                            "projects": "Develop, market, and publish an original game"
                        }
                    ]
                }
            ]
        };
        this.generateAllCurricula();
    }

    // Generate all curriculum sections
    generateAllCurricula() {
        if (!this.curriculumData || !this.curriculumData.curricula) {
            console.error('No curriculum data available');
            return;
        }

        // Find the container where curriculum sections should be inserted
        const contentBlock = document.querySelector('#curriculum .content-block');
        if (!contentBlock) {
            console.error('Curriculum content block not found');
            return;
        }

        // Find the career management section to insert before it
        const careerSection = document.getElementById('career-management-section');
        if (!careerSection) {
            console.error('Career management section not found');
            return;
        }

        // Clear existing curriculum sections but keep the title
        const existingSections = contentBlock.querySelectorAll('.curriculum-section');
        existingSections.forEach(section => section.remove());

        // Generate each curriculum section and insert before career management
        this.curriculumData.curricula.forEach(curriculum => {
            const curriculumHTML = this.generateCurriculumSection(curriculum);
            careerSection.insertAdjacentHTML('beforebegin', curriculumHTML);
        });

        // Reinitialize carousels after generating content
        this.initializeCarousels();
        
        // Re-run table data labels script
        this.addTableDataLabels();
    }

    // Generate a single curriculum section
    generateCurriculumSection(curriculum) {
        const tableRows = curriculum.weeks.map((week, index) => {
            const isLastRow = index === curriculum.weeks.length - 1;
            return `
                <tr class="bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                    <td class="p-4 ${isLastRow ? 'rounded-bl-lg' : 'border-b border-gray-600'}" data-label="Weeks">${week.weekRange}</td>
                    <td class="p-4 ${isLastRow ? '' : 'border-b border-gray-600'}" data-label="Topics">${week.topic}</td>
                    <td class="p-4 ${isLastRow ? '' : 'border-b border-gray-600'}" data-label="Key Concepts">${week.keyConcepts}</td>
                    <td class="p-4 ${isLastRow ? 'rounded-br-lg' : 'border-b border-gray-600'}" data-label="Projects/Activities">${week.projects}</td>
                </tr>
            `;
        }).join('');

        const carouselCards = curriculum.weeks.map(week => `
            <div class="curriculum-card">
                <div class="card-header">Weeks ${week.weekRange}: ${week.topic}</div>
                <div class="card-row">
                    <span class="card-label">Key Concepts:</span>
                    <span class="card-value">${week.keyConcepts}</span>
                </div>
                <div class="card-row">
                    <span class="card-label">Projects/Activities:</span>
                    <span class="card-value">${week.projects}</span>
                </div>
            </div>
        `).join('');

        const carouselPrefix = curriculum.carouselId.replace('-cards', '');

        return `
            <div class="curriculum-section mb-10">
                <div class="curriculum-header flex items-center mb-4">
                    <img loading="lazy" data-src="${curriculum.icon}" alt="${curriculum.iconAlt}" class="lazy w-16 h-16 mr-4 rounded-full p-2 bg-indigo-600" onerror="this.onerror=null;this.src='${curriculum.iconError}';">
                    <h3 class="text-3xl font-semibold">${curriculum.grade}: ${curriculum.title}</h3>
                </div>
                <div class="table-wrapper overflow-x-auto">
                    <table class="curriculum-table w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-gray-700">
                                <th class="p-4 border-b border-gray-600 rounded-tl-lg">Weeks</th>
                                <th class="p-4 border-b border-gray-600">Topics</th>
                                <th class="p-4 border-b border-gray-600">Key Concepts</th>
                                <th class="p-4 border-b border-gray-600 rounded-tr-lg">Projects/Activities</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                    
                    <!-- Mobile Card Carousel -->
                    <div class="mobile-cards">
                        <div class="card-carousel">
                            <div class="cards-container" id="${curriculum.carouselId}">
                                ${carouselCards}
                            </div>
                        </div>
                        <div class="card-navigation">
                            <button class="card-nav-button" onclick="previousCard('${curriculum.carouselId}')" id="${carouselPrefix}-prev">‹ Prev</button>
                            <div class="card-indicator">
                                <span class="card-counter"><span id="${carouselPrefix}-current">1</span> / <span id="${carouselPrefix}-total">${curriculum.weeks.length}</span></span>
                            </div>
                            <button class="card-nav-button" onclick="nextCard('${curriculum.carouselId}')" id="${carouselPrefix}-next">Next ›</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize carousels after content is generated
    initializeCarousels() {
        if (!this.curriculumData) return;

        this.curriculumData.curricula.forEach(curriculum => {
            if (typeof initializeCarousel === 'function') {
                initializeCarousel(curriculum.carouselId);
            }
        });
    }

    // Add data labels to table cells for responsive design
    addTableDataLabels() {
        document.querySelectorAll('.curriculum-table').forEach(table => {
            const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent);
            table.querySelectorAll('tbody tr').forEach(row => {
                row.querySelectorAll('td').forEach((cell, index) => {
                    if (headers[index]) {
                        cell.setAttribute('data-label', headers[index]);
                    }
                });
            });
        });
    }

    // Method to update curriculum data dynamically
    updateCurriculum(newData) {
        this.curriculumData = newData;
        this.generateAllCurricula();
    }

    // Method to get specific curriculum by ID
    getCurriculumById(id) {
        if (!this.curriculumData) return null;
        return this.curriculumData.curricula.find(curriculum => curriculum.id === id);
    }

    // Method to add a new week to a curriculum
    addWeekToCurriculum(curriculumId, weekData) {
        const curriculum = this.getCurriculumById(curriculumId);
        if (curriculum) {
            curriculum.weeks.push(weekData);
            this.generateAllCurricula();
        }
    }

    // Method to update a specific week
    updateWeek(curriculumId, weekIndex, weekData) {
        const curriculum = this.getCurriculumById(curriculumId);
        if (curriculum && curriculum.weeks[weekIndex]) {
            curriculum.weeks[weekIndex] = { ...curriculum.weeks[weekIndex], ...weekData };
            this.generateAllCurricula();
        }
    }
}

// Initialize curriculum loader when DOM is ready
let curriculumLoader;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize curriculum loader
    curriculumLoader = new CurriculumLoader();
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CurriculumLoader;
}
