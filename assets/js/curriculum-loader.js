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
            "weekRange": "1-2",
            "topic": "Introduction to Computational Thinking",
            "keyConcepts": "Course overview, problem-solving strategies, introduction to Python",
            "projects": "PS Assignment 1: Silly Sentences, Group Challenge 1, Quiz #1, Test #1"
          },
          {
            "weekRange": "3-4",
            "topic": "Variables and Data Types",
            "keyConcepts": "Exploring variables, data types, and input/output in Python",
            "projects": "PS Assignment 2: Room Area, Test #2, Quiz #2"
          },
          {
            "weekRange": "5-6",
            "topic": "Control Flow: Conditionals and Loops",
            "keyConcepts": "If statements, loops, while loops, and for loops in Python",
            "projects": "PS Assignment 3: Chatbot, PS Assignment 4: Divisible by Three, Test #3, Test #4"
          },
          {
            "weekRange": "7-8",
            "topic": "Functions and Modular Programming",
            "keyConcepts": "Writing functions, passing arguments, and return values in Python",
            "projects": "PS Assignment 6: Animation,PS Assignment 7: Calendar, Test #6, Quiz #6, Test #7, Quiz #7"
          },
          {
            "weekRange": "9",
            "topic": "Data Structures: Lists and Dictionaries",
            "keyConcepts": "Introduction to lists, dictionaries, and sets in Python",
            "projects": "PS Assignment 8: Personal Organizer, Quiz #8"
          },
          {
            "weekRange": "10-11",
            "topic": "Algorithms and Problem Solving",
            "keyConcepts": "Sorting algorithms, searching algorithms, and time complexity",
            "projects": "PS Assignment 9: Flight Tracker, Test #9"
          },
         
          {
            "weekRange": "12",
            "topic": "G4C Challenge Preparation",
            "keyConcepts": "Understanding the app development process, project planning",
            "projects": "Game design documentation (GDD), G4C Challenge: Character Design, Table Top and Video Game Design"
          },
            {
            "weekRange": "13-14",
            "topic": "Web Development Basics",
            "keyConcepts": "Introduction to HTML, CSS, and Flask for web development",
            "projects": "My Python Portfolio On The Web"
          },
          {
            "weekRange": "15-16",
            "topic": " Foundations of Game Development & Unity",
            "keyConcepts": "Transition from Python to C#, Unity Engine interface (GameObjects, Components, Transforms), C# scripting basics (Start, Update, variables, input), physics (Rigidbody, Colliders), Prefabs, and core game design principles (MDA framework).",
            "projects": "Quiz 10, Test #10 Project: Solar System, Project: Physics Sandbox, Activity: Game Analysis"
        },
        {
            "weekRange": "17-24",
            "topic": " Building a 2D Platformer",
            "keyConcepts": "2D assets (Sprites, Tilemaps), player controllers, animation state machines, UI design (Canvas, HUD), game management, level mechanics (collectibles, enemies, checkpoints), sound integration, and publishing builds.",
            "projects": "Quiz 11-12, Test #11-12, Major Project: 2D Platformer Game, Activity: In-class Playtesting & Publishing"
        },
        {
            "weekRange": "25-29",
            "topic": " Capstone Project",
            "keyConcepts": "project scoping, rapid prototyping (MVP), asset integration, playtesting, iteration, bug fixing, and final presentation skills.",
            "projects": "Major Project: Capstone Game, Activity: Project Pitch, Activity: Final Showcase"
        },
          {
            "weekRange": "30",
            "topic": "Final Review",
            "keyConcepts": "Building final project & portfolio / presentations",
            "projects": "Final exam, Portfolio Sharing and Feedback"
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
    weekRange: "1-2",
    topic: "Introduction to 3D Game Development & Unity Basics",
    keyConcepts: "Course overview, Unity basics, setting up the 3D workspace",
    projects: "Lab: Unity setup and first 3D scene"
  },
  {
    weekRange: "3-4",
    topic: "Game Design Principles & Design Thinking",
    keyConcepts: "Design Thinking process, game mechanics, player engagement, storytelling",
    projects: "Project: Game pitch document using design thinking principles"
  },
  {
    weekRange: "5-6",
    topic: "3D Unity Basics",
    keyConcepts: "3D environment setup, importing assets, transforms, game objects, components",
    projects: "Lab: Create an interactive 3D scene with objects"
  },
  {
    weekRange: "7-8",
    topic: "Programming Fundamentals in C# (Part 1)",
    keyConcepts: "Variables, loops, conditionals for 3D game interactions",
    projects: "Lab: Simple interaction with C# scripts in a 3D space"
  },
  {
    weekRange: "9",
    topic: "Programming Fundamentals in C# (Part 2)",
    keyConcepts: "Functions, classes, and Object-Oriented Programming (OOP)",
    projects: "Quiz: C# basics"
  },
  {
    weekRange: "10-11",
    topic: "3D Game Physics & Materials",
    keyConcepts: "Physics, lighting, materials, and rendering in a 3D environment",
    projects: "Lab: Add physics and custom materials to a 3D object"
  },
  {
    weekRange: "12-13",
    topic: "AI, Pathfinding & Audio for 3D Games",
    keyConcepts: "Basic AI for enemies, pathfinding algorithms, adding sound FX",
    projects: "Project: Basic AI and audio integration. Lab: Audio integration"
  },
  {
    weekRange: "14-15",
    topic: "Fall Semester Review & 3D Project Presentation",
    keyConcepts: "Consolidation of 3D concepts, bug fixing, and polishing",
    projects: "Presentation: Playable 3D game prototype"
  },
  {
    weekRange: "16-17",
    topic: "3D Game Development (Part 1)",
    keyConcepts: "3D environment setup, importing assets",
    projects: "Lab: Create a 3D scene"
  },
  {
    weekRange: "18-19",
    topic: "3D Game Development (Part 2)",
    keyConcepts: "Physics, lighting, and materials",
    projects: "Lab: Add physics to a 3D object"
  },
  {
    weekRange: "20-21",
    topic: "Advanced Programming in C#",
    keyConcepts: "Object-oriented programming concepts",
    projects: "Quiz: Advanced C#"
  },
  {
    weekRange: "22",
    topic: "AI and Pathfinding",
    keyConcepts: "Basic AI for enemies and pathfinding algorithms",
    projects: "Project: AI implementation"
  },
  {
    weekRange: "23",
    topic: "Game UI Design",
    keyConcepts: "Menus, health bars, and HUDs",
    projects: "Lab: Interactive UI"
  },
  {
    weekRange: "24-26",
    topic: "Multiplayer Basics",
    keyConcepts: "Introduction to networking concepts",
    projects: "Lab: Local multiplayer"
  },
  {
    weekRange: "27",
    topic: "Game Testing and Feedback",
    keyConcepts: "Playtesting techniques and incorporating feedback",
    projects: "Lab: Peer game testing"
  },
  {
    weekRange: "28",
    topic: "Polishing and Publishing",
    keyConcepts: "Optimization, polishing, and building a game",
    projects: "Lab: Build and export a game"
  },
  {
    weekRange: "29",
    topic: "Portfolio Preparation",
    keyConcepts: "Preparing a game development portfolio",
    projects: "Assignment: Final portfolio submission"
  },
  {
    weekRange: "30",
    topic: "Spring Semester Review and Final Presentation",
    keyConcepts: "",
    projects: "Presentation: 3D or multiplayer game"
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
      "weekRange": "1-2",
      "topic": "Advanced HTML5 and CSS3",
      "keyConcepts": "Review of HTML5, CSS3, responsive design, flexbox, and grid",
      "projects": "Lab: Redesign a personal webpage using advanced CSS"
    },
    {
      "weekRange": "3-4",
      "topic": "Web Design Principles",
      "keyConcepts": "UI/UX principles, wireframing, prototyping in Figma",
      "projects": "Project: Design a high-fidelity website mockup"
    },
    {
      "weekRange": "5-6",
      "topic": "JavaScript Fundamentals",
      "keyConcepts": "DOM manipulation, event handling, and JavaScript functions",
      "projects": "Lab: Interactive webpage with JavaScript"
    },
    {
      "weekRange": "7-8",
      "topic": "Advanced CSS3",
      "keyConcepts": "Animations, transitions, and custom properties",
      "projects": "Project: Advanced CSS animation demo"
    },
    {
      "weekRange": "9-10",
      "topic": "Introduction to Game Development (Unity)",
      "keyConcepts": "Unity interface, game objects, and simple physics",
      "projects": "Lab: Create a basic 2D game in Unity"
    },
    {
      "weekRange": "11-12",
      "topic": "Intermediate Unity Development",
      "keyConcepts": "Scripting in C# for Unity, controlling player input and movement",
      "projects": "Lab: Build a character controller in Unity"
    },
    {
      "weekRange": "13-14",
      "topic": "Advanced Game Mechanics",
      "keyConcepts": "Physics, collisions, and advanced Unity features",
      "projects": "Project: Create a level with physics interactions"
    },
    {
      "weekRange": "15-16",
      "topic": "Integrating HTML5 Games with Unity",
      "keyConcepts": "Embedding Unity games into websites",
      "projects": "Lab: Publish a Unity game to a website"
    },
    {
      "weekRange": "17-18",
      "topic": "Portfolio Building and Web Development",
      "keyConcepts": "Developing a personal portfolio site, showcasing projects",
      "projects": "Project: Build and publish your personal portfolio site"
    },
    {
      "weekRange": "19-20",
      "topic": "Capstone Project Overview",
      "keyConcepts": "Project planning, timeline, and milestones",
      "projects": "Group: Brainstorm and outline Capstone Project"
    },
    {
      "weekRange": "21-22",
      "topic": "Game Design and Development",
      "keyConcepts": "Final game design document, user stories, and prototyping",
      "projects": "Project: Finalize game concept for Capstone project"
    },
    {
      "weekRange": "23-24",
      "topic": "Unity Advanced Development",
      "keyConcepts": "Advanced features (AI, multiplayer, lighting, shaders)",
      "projects": "Lab: Implement AI for enemies in your game"
    },
    {
      "weekRange": "25-26",
      "topic": "Game Testing and Debugging",
      "keyConcepts": "Playtesting, debugging, and refining the game",
      "projects": "Lab: Conduct playtests and debug the game"
    },
    {
      "weekRange": "27-28",
      "topic": "Game Marketing and Publishing",
      "keyConcepts": "Marketing strategies, building promotional materials, game publishing",
      "projects": "Project: Prepare a promotional website for your game"
    },
    {
      "weekRange": "29-30",
      "topic": "Capstone Project Presentation",
      "keyConcepts": "Final touches on Capstone projects, portfolio review",
      "projects": "Final Project: Capstone Game Presentation and Website"
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
                    <td class="p-4 ${isLastRow ? 'rounded-br-lg' : 'border-b border-gray-600'}" data-label="Major Projects/Activities">${week.projects}</td>
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
                    <span class="card-label">Major Projects/Activities:</span>
                    <span class="card-value">${week.projects}</span>
                </div>
            </div>
        `).join('');

        const carouselPrefix = curriculum.carouselId.replace('-cards', '');

        // Determine logos based on curriculum grade/type
        let leftLogo, leftAlt, leftError, rightLogo, rightAlt, rightError;
        
        if (curriculum.grade === "10th Grade") {
            leftLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
            leftAlt = "Python Logo";
            leftError = "https://placehold.co/48x48/6366F1/FFFFFF?text=Py";
            rightLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg";
            rightAlt = "Unity Logo";
            rightError = "https://placehold.co/48x48/6366F1/FFFFFF?text=U";
        } else if (curriculum.grade === "11th Grade") {
            leftLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg";
            leftAlt = "Unity Logo";
            leftError = "https://placehold.co/48x48/6366F1/FFFFFF?text=U";
            rightLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";
            rightAlt = "Figma Logo";
            rightError = "https://placehold.co/48x48/6366F1/FFFFFF?text=F";
        } else {
            // 12th Grade - Advanced
            leftLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
            leftAlt = "HTML5 Logo";
            leftError = "https://placehold.co/48x48/6366F1/FFFFFF?text=H5";
            rightLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
            rightAlt = "JavaScript Logo";
            rightError = "https://placehold.co/48x48/6366F1/FFFFFF?text=JS";
        }

        return `
    <div class="curriculum-section mb-10">
        <div class="curriculum-header flex items-center justify-center mb-4" tabindex="0">
            <img loading="lazy" src="${leftLogo}" alt="${leftAlt}" class="w-12 h-12 mr-4 rounded-full p-2 bg-purple-100" onerror="this.onerror=null;this.src='${leftError}';">
            <h3 class="text-3xl font-semibold text-center">${curriculum.grade}: ${curriculum.title}</h3>
            <img loading="lazy" src="${rightLogo}" alt="${rightAlt}" class="w-12 h-12 ml-4 rounded-full p-2 bg-pink-100" onerror="this.onerror=null;this.src='${rightError}';">
        </div>
        <div class="table-wrapper overflow-x-auto">
            <table class="curriculum-table w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-700">
                        <th class="p-4 border-b border-gray-600 rounded-tl-lg">Weeks</th>
                        <th class="p-4 border-b border-gray-600">Topics</th>
                        <th class="p-4 border-b border-gray-600">Key Concepts</th>
                        <th class="p-4 border-b border-gray-600 rounded-tr-lg">Major Projects/Activities</th>
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
