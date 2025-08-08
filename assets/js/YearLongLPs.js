const COMBINED_CURRICULUM = {
  "curriculum": {
    "course": "10th Grade Computer Science & Game Development",
    "schoolYear": "2025-2026",
    "description": "A comprehensive curriculum that begins with Python fundamentals and branches into specialized topics before offering an advanced track in C# and Unity game development.",
    "units": [
      {
        "unitNumber": 1,
        "unitTitle": "Introduction to Python & Computational Thinking",
        "lessons": [
          {
            "day": 1,
            "date": "Thu, 09 04, 25",
            "lesson": "What is Computer Science?",
            "enduringUnderstanding": "Precise, logical instructions are required to make a computer perform any task.",
            "essentialQuestion": "How do we translate a human idea into a set of instructions a computer can understand?",
            "objectives": ["Write a clear definition of \"algorithm\"", "Author a set of at least 5 sequential instructions for a real-world task", "Log in to new Project STEM and GitHub accounts"],
            "agenda": "(5m) Do Now: \"Think about your favorite game. Write down the steps a computer might need to follow to make one action happen.\"(20m) Activity: Human Robot(20m) Mini-Lesson: Connect activity to \"Algorithm\" & \"Computational Thinking\"; Intro \"Games for Change\".(40m) Guided Practice: Account Setup (Project STEM, GitHub), Install Python/VSCode.(5m) Exit Ticket: \"What is an algorithm?\"",
            "materials": {
              "teacher": "Projector, whiteboard, stacking cups, paper, pens.",
              "student": "Computer, notebook/paper.",
              "links": "Python: python.org/downloadsVSCode: code.visualstudio.comGitHub: github.comG4C: gamesforchange.org/studentchallenge"
            },
            "assessment": {
              "formative": "Observe Human Robot activity; Review Exit Ticket definitions.",
              "summative": "Successful creation of Project STEM and GitHub accounts is required for all future assignments."
            },
            "differentiation": "Support: Provide a printed checklist for account setup. Pair students for the activity.Challenge: Have advanced students write a more complex algorithm or help peers with installation."
          },
          {
            "day": 2,
            "date": "Fri, 09 05, 25",
            "lesson": "Your First Program",
            "enduringUnderstanding": "All programs are built from simple, specific commands executed in order.",
            "essentialQuestion": "How do we write a command that a computer can understand and display output?",
            "objectives": ["Use the print() function to display a string", "Identify and correct at least one simple syntax error", "Save and run a Python file successfully"],
            "agenda": "(5m) Do Now: \"What's the human equivalent of a computer 'error'?\"(15m) Mini-Lesson: Introduce print() and strings.<br>(45m) Guided Practice: \"Hello, World!\" lab in VSCode.(20m) Independent Practice: Experiment with printing different messages.(5m) Exit Ticket: \"Write the code to print your favorite food.\"",
            "materials": {
              "teacher": "Projector, VSCode.",
              "student": "Computer with Python/VSCode installed.",
              "links": null
            },
            "assessment": {
              "formative": "Observe students running code; Review exit tickets for correct syntax.",
              "summative": "This lesson is the first step towards all future Python assignments."
            },
            "differentiation": "Support: Provide a \"common errors\" cheatsheet.Challenge: Have students print multi-line messages using multiple print() statements."
          },
          {
            "day": 3,
            "date": "Mon, 09 08, 25",
            "lesson": "Introduction to GitHub",
            "enduringUnderstanding": "Version control is a fundamental practice for tracking changes and collaborating.",
            "essentialQuestion": "Why is it important to save and track different versions of our code?",
            "objectives": ["Create a new, public repository on GitHub", "Use the git clone command to create a local copy", "Define \"repository,\" \"commit,\" and \"push\""],
            "agenda": "(5m) Do Now: \"Have you ever saved multiple versions of a school paper (e.g., Essay_v2)?\"(20m) Mini-Lesson: Introduce GitHub as \"Google Docs for code.\"(45m) Guided Practice: Create a new repo and git clone it.<br>(15m) Independent Practice: Move hello.py into the new local repo folder.<br>(5m) Exit Ticket: \"What's the command to copy a repo?\"",
            "materials": {
              "teacher": "Projector, GitHub.",
              "student": "Computer, GitHub account.",
              "links": null
            },
            "assessment": {
              "formative": "Circulate and verify all students have successfully cloned their repository; Check exit tickets.",
              "summative": "Successful creation of a repo is required for all project submissions."
            },
            "differentiation": "Challenge: Have students explore the GitHub interface (Settings, Insights)."
          },
          {
            "day": 4,
            "date": "Tue, 09 09, 25",
            "lesson": "Committing and Pushing Code",
            "enduringUnderstanding": "Version control allows developers to save \"snapshots\" and sync them to the cloud.",
            "essentialQuestion": "How do we save our local work and upload it to GitHub?",
            "objectives": ["Use git add to stage a file", "Use git commit -m \"message\" to create a commit", "Use git push to upload commits"],
            "agenda": "(5m) Do Now: \"What's a good, short message for saving your 'Hello, World!' program?\"(20m) Mini-Lesson: Introduce Add -> Commit -> Push workflow.(50m) Guided Practice: Students run the three commands to upload their hello.py file.<br>(10m) Discussion: \"What happens if two people push changes to the same file?\"(5m) Exit Ticket: \"List the 3 git commands, in order.\"",
            "materials": {
              "teacher": "Projector, VSCode.",
              "student": "Computer, local repository from Day 3.",
              "links": null
            },
            "assessment": {
              "formative": "Verify the hello.py file is visible on their online GitHub page.",
              "summative": "This workflow is required for submitting all projects."
            },
            "differentiation": "Challenge: Have students make a small change to their file and complete the add/commit/push cycle a second time with a new message."
          },
          {
            "day": 5,
            "date": "Wed, 09 10, 25",
            "lesson": "Variables & Data Types",
            "enduringUnderstanding": "Variables act as named containers for storing data.",
            "essentialQuestion": "How do we store and reuse pieces of information in our code?",
            "objectives": ["Declare a variable and assign a string value", "Use a variable inside a print() function", "Combine (concatenate) two or more strings"],
            "agenda": "(5m) Do Now: \"How would you print your name 100 times?\"(20m) Mini-Lesson: Introduce variables (labeled box analogy) and string concatenation.(45m) Guided Practice: \"Silly Sentences (Part 1)\" - create variables and combine them.(15m) Independent Practice: Begin Assignment 1.(5m) Exit Ticket: \"Write the code to create a variable school_name.\"",
            "materials": {
              "teacher": "Projector, Project STEM portal.",
              "student": "Computer, Project STEM account.",
              "links": "Project STEM course portal."
            },
            "assessment": {
              "formative": "Observe student code; Check for correct variable declaration and use.",
              "summative": "Assignment 1: Silly Sentences (Project STEM)."
            },
            "differentiation": "Support: Provide sentence templates for the activity.Challenge: Have students create a multi-sentence story using at least five variables."
          },
          {
            "day": 6,
            "date": "Thu, 09 11, 25",
            "lesson": "User Input & Numbers",
            "enduringUnderstanding": "Programs can be made interactive by accepting user input.",
            "essentialQuestion": "How can our programs get information from the user?",
            "objectives": ["Use the input() function to get user text", "Define integer and float data types", "Use int() and str() to convert data types"],
            "agenda": "(5m) Do Now: \"What's an app that asks you for info?\"(20m) Mini-Lesson: Introduce input() and type casting.<br>(45m) Guided Practice: Create a \"Greeter\" program that asks for name and age, requiring type conversion.(15m) Independent Practice: Continue \"Silly Sentences\" or start \"Room Area.\"(5m) Exit Ticket: \"What is wrong with this code? age = input(); print(age + 1)\"",
            "materials": {
              "teacher": "Projector, Project STEM portal.",
              "student": "Computer, Project STEM account.",
              "links": "Project STEM course portal."
            },
            "assessment": {
              "formative": "Review exit tickets to check for understanding of type conversion.",
              "summative": "This skill is required for Assignment 2: Room Area and Assignment 3: Chatbot."
            },
            "differentiation": "Support: Provide a visual chart showing how int(), float(), and str() work."
          },
          {
            "day": 7,
            "date": "Fri, 09 12, 25",
            "lesson": "Number Calculations",
            "enduringUnderstanding": "Computers can perform math using standard arithmetic operators.",
            "essentialQuestion": "How do we perform math in Python?",
            "objectives": ["Use arithmetic operators +, -, *, /", "Explain the difference between / and // division", "Structure a program with numerical input and calculations"],
            "agenda": "(5m) Do Now: \"Write a real-world math problem.\"(15m) Mini-Lesson: Review arithmetic operators.(50m) Guided Practice: Begin Assignment 2: Room Area.(15m) GitHub Workflow: add, commit, push recent work.<br>(5m) Exit Ticket: \"Write the code to calculate the area of a rectangle.\"",
            "materials": {
              "teacher": "Projector, Project STEM portal.",
              "student": "Computer, Project STEM account.",
              "links": "Project STEM course portal."
            },
            "assessment": {
              "formative": "Circulate and check that students convert input to numbers before calculations.",
              "summative": "Assignment 2: Room Area (Project STEM)."
            },
            "differentiation": "Challenge: Have students also calculate and print the perimeter of the room."
          },
          {
            "day": 8,
            "date": "Mon, 09 15, 25",
            "lesson": "Making Decisions: if-elif-else",
            "enduringUnderstanding": "Conditional statements allow a program to execute different code based on various conditions.",
            "essentialQuestion": "How can a program make a choice between many different options?",
            "objectives": ["Use comparison operators (==, !=, >, <) to create a boolean expression", "Construct a simple if statement", "Add an else block for an alternative path", "Use elif to check multiple conditions in sequence"],
            "agenda": "(5m) Do Now: \"Give an example of a choice you made today based on a condition (e.g., IF it's raining, THEN I'll take an umbrella).\"(20m) Mini-Lesson: Introduce Booleans, if, else, and elif.<br>(60m) Guided Practice: Create a program that gives different responses based on user input, using a full if-elif-else chain.",
            "materials": {
              "teacher": "Projector, VSCode.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Mini-challenge (\"Write an if-elif-else block that checks a grade and prints 'A', 'B', or 'C'.\").",
              "summative": "This skill is required for Assignment 3: Chatbot."
            },
            "differentiation": "Support: Use flowcharts to visually represent the logic of the conditional chain."
          },
          {
            "day": 9,
            "date": "Tue, 09 16, 25",
            "lesson": "Project Work Day: Chatbot",
            "enduringUnderstanding": "Applying new concepts to build a complete project is key to learning.",
            "essentialQuestion": "How do I translate a project description into a working program?",
            "objectives": ["Make significant progress on the \"Chatbot\" project", "Debug at least one error in their code", "Submit prior assignments"],
            "agenda": "(10m) Do Now / Q&A: \"What part of the Chatbot are you stuck on?\"(70m) Independent Work Time: Students work on Project STEM assignments.(10m) Teacher Check-ins: Circulate and provide individual support.",
            "materials": {
              "teacher": null,
              "student": "Computer, Project STEM account.",
              "links": "Project STEM course portal."
            },
            "assessment": {
              "formative": "One-on-one check-ins with the teacher during work time.",
              "summative": "Progress on Assignment 3: Chatbot."
            },
            "differentiation": "Support: Pair students who are struggling with those who understand a concept.Challenge: Encourage early finishers to add more complex conversational paths."
          }
        ]
      },
      {
        "unitNumber": 2,
        "unitTitle": "Python Loops & Functions",
        "lessons": [
          {
            "day": 10,
            "date": "Wed, 09 17, 25",
            "lesson": "The for Loop",
            "enduringUnderstanding": "Loops allow programmers to automate repetitive tasks by executing a block of code multiple times.",
            "essentialQuestion": "How can we command a computer to repeat an action a specific number of times?",
            "objectives": ["Use a for loop with the range() function to repeat a print() statement a set number of times", "Predict the output of a simple for loop before running it"],
            "agenda": "(10m) Do Now: \"How many lines of code would it take to print 'Hello' 5 times? 100 times? Is there a better way?\"(20m) Mini-Lesson: Introduce the for loop and range() syntax.<br>(55m) Guided Practice: \"The Counter.\" Students write loops to count from 0 to 10, count by 2s, and print a message multiple times.(5m) Exit Ticket: \"Write a for loop that prints the numbers 0, 1, and 2.\"",
            "materials": {
              "teacher": "Projector, VSCode.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Review student code during practice; Check exit tickets for correct for loop syntax.",
              "summative": "Required for Assignment 4: Divisible by Three."
            },
            "differentiation": "Support: Provide code templates for the for loop structure.<br>Challenge: Ask students to write a loop that counts down from 10 to 1."
          },
          {
            "day": 11,
            "date": "Thu, 09 18, 25",
            "lesson": "The while Loop",
            "enduringUnderstanding": "while loops repeat a block of code as long as a certain condition remains true.",
            "essentialQuestion": "How can we repeat an action an unknown number of times?",
            "objectives": ["Construct a while loop that continues as long as a condition is true", "Identify and fix a simple infinite loop", "Explain the difference between a for loop and a while loop"],
            "agenda": "(10m) Do Now: \"Think of a video game. What's something that happens over and over until something else happens (e.g., the player's health runs out)?\"(20m) Mini-Lesson: Introduce while loop syntax. Emphasize the need for a condition that will eventually become false. Discuss infinite loops.<br>(55m) Guided Practice: Create a simple number guessing game that loops until the correct answer is guessed.<br>(5m) Exit Ticket: \"When would you use a while loop instead of a for loop?\"",
            "materials": {
              "teacher": "Projector, VSCode.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Check that students' games don't have infinite loops. Review exit ticket responses.",
              "summative": "Quiz 4 will cover while loops."
            },
            "differentiation": "Support: Use a flowchart to visualize the logic of a while loop.<br>Challenge: Have students add a guess counter to their game."
          },
          {
            "day": 12,
            "date": "Fri, 09 19, 25",
            "lesson": "What is a Function?",
            "enduringUnderstanding": "Functions are named, reusable blocks of code that perform a specific task.",
            "essentialQuestion": "How can we organize and reuse our code to avoid repetition?",
            "objectives": ["Define a simple function using the def keyword", "Call a function by its name to execute its code", "Explain the \"Don't Repeat Yourself\" (DRY) principle"],
            "agenda": "(10m) Do Now: \"If you had a block of 10 lines of code that you needed to use in 5 different places in your program, what would you have to do?\"(20m) Mini-Lesson: Introduce functions as a way to package code. Use the analogy of a recipe.(60m) Guided Practice: Create a function that prints a greeting. Call it multiple times.",
            "materials": {
              "teacher": "Projector, VSCode.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Check student code for correct function definition and syntax.",
              "summative": "Required for Assignment 7: Calendar."
            },
            "differentiation": "Support: Provide a template for function syntax."
          },
          {
            "day": 13,
            "date": "Mon, 09 22, 25",
            "lesson": "Functions with Parameters & Return Values",
            "enduringUnderstanding": "Parameters make functions flexible, and return values allow functions to produce output that can be used elsewhere in the code.",
            "essentialQuestion": "How can we make our functions adaptable and get results from them?",
            "objectives": ["Define a function that accepts at least one parameter", "Use the return keyword to send a value back from a function", "Store the returned value in a variable", "Explain the difference between a function that prints a value and one that returns it"],
            "agenda": "(10m) Do Now: \"How could you write one greet() function that could say hello to any name?\"(20m) Mini-Lesson: Introduce parameters, arguments, and the return keyword.<br>(60m) Guided Practice: Write a function `add_numbers(num1, num2)` that takes two parameters and returns their sum. Call it and print the result.",
            "materials": {
              "teacher": "Projector, VSCode.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Check that students are capturing the returned value in a variable.",
              "summative": "Required for Assignment 7: Calendar."
            },
            "differentiation": "Challenge: Have students write a function `calculate_area(width, height)` that returns the area of a rectangle."
          }
        ]
      },
      {
        "unitNumber": 3,
        "unitTitle": "Project: Text-Based Adventure Game",
        "lessons": [
          {
            "day": 14,
            "date": "Tue, 09 23, 25",
            "lesson": "Project Kickoff: Adventure Game",
            "enduringUnderstanding": "Planning a larger project before coding helps to organize ideas and prevent major structural problems.",
            "essentialQuestion": "How do we plan a complex program?",
            "objectives": ["Create a design document or flowchart for a simple text-based adventure game", "Identify at least three distinct \"rooms\" or states for the game", "Outline the choices a player can make in each room"],
            "agenda": "(10m) Do Now: \"What are the basic parts of an adventure story? (e.g., a starting point, a goal, obstacles).\"(30m) Group Brainstorm: As a class, brainstorm ideas and core mechanics for a text-based adventure game.(50m) Independent Planning: Students use a template or flowchart software to design their own simple adventure game with a start, a goal, and choices.",
            "materials": {
              "teacher": "Projector, whiteboard, design document template (digital or paper).",
              "student": "Computer, notebook/paper.",
              "links": null
            },
            "assessment": {
              "formative": "Review student design documents for clarity and logical flow.",
              "summative": "This plan is the foundation for the project."
            },
            "differentiation": "Support: Provide a fill-in-the-blank design template.Challenge: Encourage students to design a simple puzzle for one of their rooms."
          },
          {
            "day": 15,
            "date": "Wed, 09 24, 25",
            "lesson": "Project Work: Functionalizing the Game",
            "enduringUnderstanding": "Decomposing a large problem into smaller functions makes the code more organized and easier to debug.",
            "essentialQuestion": "How can I break my large game down into smaller, manageable pieces?",
            "objectives": ["Decompose their game logic into at least three separate functions", "Create a main game loop that calls different functions based on player input"],
            "agenda": "(10m) Do Now / Q&A: \"Look at your adventure game plan. What are the main 'verbs' or actions? These are good candidates for functions.\"(75m) Independent Work Time: Students refactor their adventure game, putting the logic for each room or major action into its own function.(5m) GitHub Push.",
            "materials": {
              "teacher": null,
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Review student code structure. Is it well-organized with functions?",
              "summative": "This work directly supports the final project of the unit."
            },
            "differentiation": "Support: Provide a skeleton of the game structure with empty functions for students to fill in."
          },
          {
            "day": 16,
            "date": "Thu, 09 25, 25",
            "lesson": "Data Structures: Lists & Dictionaries",
            "enduringUnderstanding": "Data structures like lists and dictionaries provide powerful ways to organize and manage complex game data.",
            "essentialQuestion": "How can we manage a player's inventory or the connections between rooms efficiently?",
            "objectives": ["Use a list to manage a player's inventory", "Use a dictionary to store and access data about a room (description, exits)", "Explain when to use a dictionary instead of a list"],
            "agenda": "(10m) Do Now: \"How would you store a player's inventory of 10 items? What about a map of 20 connected rooms?\"(20m) Mini-Lesson: Intro to lists for inventories and dictionaries for room data.<br>(60m) Guided Practice: Refactor the adventure game to use a list for the player's inventory and a dictionary to define the current room.",
            "materials": {
              "teacher": "Projector, VSCode.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Observe students using list methods (`append`, `remove`) and dictionary access.",
              "summative": "The final project requires correct use of these data structures."
            },
            "differentiation": "Challenge: Have students create a nested dictionary to hold all the game's rooms, allowing for easy movement between them."
          },
          {
            "day": 17,
            "date": "Fri, 09 26, 25",
            "lesson": "Final Project Work & Showcase",
            "enduringUnderstanding": "Integrating all learned concepts is required to build a complete application.",
            "essentialQuestion": "How do all the pieces we've learned fit together?",
            "objectives": ["Implement a main game loop using a while loop", "Use conditional statements inside the loop to call different functions based on user input", "Create a 'win' and 'lose' state that ends the game", "Present their completed game to a small group of peers"],
            "agenda": "(40m) Independent Work Time: Finalize a playable version of the game.(40m) Peer Feedback & Showcase: Students playtest a partner's game and provide constructive feedback.(10m) Final Submission to GitHub.",
            "materials": {
              "teacher": "Feedback forms.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Observe peer feedback sessions.",
              "summative": "Final Adventure Game Submission."
            },
            "differentiation": "Support: Provide a submission checklist."
          }
        ]
      },
      {
        "unitNumber": 4,
        "unitTitle": "Specialized Unit: Python for Graphics & Animation",
        "lessons": [
          {
            "day": 18,
            "date": "Mon, 09 29, 25",
            "lesson": "Introduction to 2D Lists",
            "enduringUnderstanding": "Two-dimensional lists can be used to store information that is organized in a grid or a table, like a digital image.",
            "essentialQuestion": "How can we represent grid-based data in Python?",
            "objectives": ["Define a 2D list", "State the order of the row and column numbers in a 2D list address", "Declare and populate a 2D list with nested loops"],
            "agenda": "(15m) Intro to 2D Lists & Real-World Examples (spreadsheets, game boards). (20m) Guided Practice: Declaring a 2D list and accessing elements. (10m) Independent Practice: Create a simple 2D list representing a tic-tac-toe board.",
            "materials": {
              "teacher": "Projector, VSCode, examples of grids.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Whiteboard activity: Drawing a 2D list and labeling its indices.",
              "summative": "Assignment: Create a program that uses a 2D list to store and retrieve data."
            },
            "differentiation": "Use physical manipulatives (e.g., an ice cube tray) to represent a 2D list."
          },
          {
            "day": 19,
            "date": "Tue, 09 30, 25",
            "lesson": "Graphics and Animation with 2D Lists",
            "enduringUnderstanding": "Pixel data for an image can be stored and manipulated in a 2D list, and displaying a sequence of these images creates animation.",
            "essentialQuestion": "How can we 'draw' with code?",
            "objectives": ["Explain how pixel data for an image may be stored in a 2D list", "Write code that manipulates a simple image stored in a 2D list", "Trace code that uses a 2D list to create the effect of animation"],
            "agenda": "(15m) Representing images with 2D lists of color codes. (25m) Guided Practice: Create a simple image from a 2D list. (20m) Independent Practice: Animate the image by creating a sequence of 2D list 'frames'.",
            "materials": {
              "teacher": "Projector, VSCode, simple graphics library.",
              "student": "Computer.",
              "links": "HTML Color Picker site."
            },
            "assessment": {
              "formative": "Code Practice: Modify a 2D list to change an image.",
              "summative": "Project: Flight Tracker - Animate a simple object across a 2D grid."
            },
            "differentiation": "Provide a set of pre-made 2D list 'frames' for students to animate."
          }
        ]
      },
      {
        "unitNumber": 5,
        "unitTitle": "Specialized Unit: Creative Coding with EarSketch",
        "lessons": [
          {
            "day": 20,
            "date": "Wed, 10 01, 25",
            "lesson": "Making Music with Python",
            "enduringUnderstanding": "Core programming concepts like functions, loops, and data structures can be used for creative expression, such as composing music.",
            "essentialQuestion": "How can we use Python to make music?",
            "objectives": ["Explain how list operations are used in EarSketch to sequence audio clips", "Use algorithms and Booleans in an EarSketch script to make decisions", "Apply random functions to scripts in EarSketch to create generative music"],
            "agenda": "(10m) Intro to EarSketch. (25m) Guided Practice: Using fitMedia() and makeBeat() with lists to create a simple song. (25m) Independent Practice: Add conditional logic and randomness to the song.",
            "materials": {
              "teacher": "Projector, EarSketch accounts.",
              "student": "Computer with internet access.",
              "links": "EarSketch platform"
            },
            "assessment": {
              "formative": "Students create a simple project that changes based on user input or randomness.",
              "summative": "Assignment: Create a 'Song of the Summer' using at least one list, one conditional, and one random function."
            },
            "differentiation": "Provide starter lists of audio clips for students to work with."
          }
        ]
      },
      {
        "unitNumber": 6,
        "unitTitle": "Specialized Unit: The Internet and HTML",
        "lessons": [
          {
            "day": 21,
            "date": "Fri, 10 03, 25",
            "lesson": "Building a Web Page with HTML",
            "enduringUnderstanding": "HTML provides the fundamental structure for all pages on the World Wide Web.",
            "essentialQuestion": "How are web pages built?",
            "objectives": ["Write a simple web page using basic HTML tags (<html>, <head>, <body>, <h1>, <p>)", "Format content on a webpage using tags like <b> and <i>", "Explain how HTTP is used to send HTML documents across the internet"],
            "agenda": "(15m) Intro to the Internet, Packets, and Routers. (25m) Guided Practice: Create a simple 'About Me' webpage using a text editor. (20m) Independent Practice: Add more content and text formatting.",
            "materials": {
              "teacher": "Projector, text editor.",
              "student": "Computer with a text editor and web browser.",
              "links": "W3Schools HTML tutorials."
            },
            "assessment": {
              "formative": "Code Practice with HTML tags.",
              "summative": "Assignment: Build Your Own Webpage."
            },
            "differentiation": "Provide a template with the basic HTML document structure already in place."
          }
        ]
      },
      {
        "unitNumber": 7,
        "unitTitle": "Advanced Track: Intro to OOP with Unity & C#",
        "lessons": [
          {
            "day": 67,
            "date": "Mon, 01 05, 26",
            "lesson": "Intro to Unity & C#",
            "enduringUnderstanding": "Game engines like Unity provide a visual interface for creating interactive experiences.",
            "essentialQuestion": "How do we go from text-based code to a visual game?",
            "objectives": ["Identify the Hierarchy, Scene, Game, and Inspector windows", "Create a C# script, attach it, and use Debug.Log()"],
            "agenda": "(10m) Do Now: \"What's the difference between 2D and 3D?\"(30m) Mini-Lesson: Guided tour of Unity. Bridge concepts: print() vs Debug.Log().<br>(50m) Guided Practice: \"Hello, Unity!\"",
            "materials": {
              "teacher": "Projector, Unity Hub.",
              "student": "Computer with Unity.",
              "links": null
            },
            "assessment": {
              "formative": "Verify a message from each script appears in the Unity console.",
              "summative": "First step toward all Unity projects."
            },
            "differentiation": "Support: Provide a pre-configured Unity project to avoid installation issues."
          },
          {
            "day": 68,
            "date": "Tue, 01 06, 26",
            "lesson": "GameObjects & Components",
            "enduringUnderstanding": "Everything in Unity is a GameObject, with behavior defined by its Components.",
            "essentialQuestion": "What are the basic building blocks of a game in Unity?",
            "objectives": ["Create and position at least 3 GameObjects", "Explain that Transform controls position, rotation, scale", "Add a component (e.g., Rigidbody 2D)"],
            "agenda": "(10m) Do Now: \"List the things that make up a game character.\"(20m) Mini-Lesson: GameObject-Component relationship.(60m) Guided Practice: Start Solar System Assignment by creating and positioning GameObjects.",
            "materials": {
              "teacher": "Projector, Unity Editor.",
              "student": "Computer.",
              "links": "Link to Solar System Assignment."
            },
            "assessment": {
              "formative": "Check student scenes for correctly created and positioned GameObjects.",
              "summative": "Solar System Assignment."
            },
            "differentiation": "Support: Use simple shapes to keep the focus on components."
          },
          {
            "day": 69,
            "date": "Wed, 01 07, 26",
            "lesson": "Intro to C# Scripts",
            "enduringUnderstanding": "Every C# script in Unity is a Class, a blueprint for objects with properties and behaviors.",
            "essentialQuestion": "How do we give GameObjects custom behaviors?",
            "objectives": ["Define a public variable that can be changed in the Inspector", "Use the Update() method to change a transform every frame"],
            "agenda": "(10m) Do Now: \"What does a blueprint for a house do?\"(20m) Mini-Lesson: A C# script is a class. Start() vs Update().<br>(60m) Guided Practice: Create a Rotate script with a public speed variable to make a planet orbit.",
            "materials": {
              "teacher": "Projector, Unity, VSCode.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Check that students can change the public speed variable in the Inspector and see the effect.",
              "summative": "Solar System Assignment."
            },
            "differentiation": "Challenge: Create a second script for the planet to rotate on its own axis."
          },
          {
            "day": 72,
            "date": "Mon, 01 12, 26",
            "lesson": "User Input & Physics",
            "enduringUnderstanding": "Games become interactive by responding to user input, and physics components create realistic movement.",
            "essentialQuestion": "How do we make our game \"playable\"?",
            "objectives": ["Use Input.GetKey() to detect keyboard presses", "Apply a force to a Rigidbody 2D to move a character", "Explain kinematic vs. dynamic rigidbodies"],
            "agenda": "(10m) Do Now: \"How does a game know when you press a key?\"(20m) Mini-Lesson: Intro to Input and Rigidbody 2D.<br>(60m) Guided Practice: Flappy Bird Clone (Part 1). Create the bird, add a Rigidbody, and write a script to apply force on key press.",
            "materials": {
              "teacher": "Projector, Unity, VSCode.",
              "student": "Computer.",
              "links": null
            },
            "assessment": {
              "formative": "Verify the \"bird\" moves up when the spacebar is pressed and falls due to gravity.",
              "summative": "Flappy Bird Assignment."
            },
            "differentiation": "Support: Provide the bird sprite asset for students to use."
          }
        ]
      },
      {
        "unitNumber": 8,
        "unitTitle": "Advanced Track: G4C Final Production & Portfolio",
        "lessons": [
          {
            "day": 76,
            "date": "Fri, 01 16, 26",
            "lesson": "G4C Brainstorm & Planning",
            "enduringUnderstanding": "A successful project begins with a clear vision and a well-defined plan.",
            "essentialQuestion": "What kind of impactful game can I realistically create this semester?",
            "objectives": ["Select one of the \"Games for Change\" themes", "Write a High Concept Document for their proposed game", "Create a 30-second video pitch"],
            "agenda": "(Full Period) G4C Intro & Brainstorm: Deep dive into G4C themes. Students brainstorm ideas for their final project.",
            "materials": {
              "teacher": "Projector, High Concept Document template.",
              "student": "Computer, notebook.",
              "links": "gamesforchange.org/studentchallenge"
            },
            "assessment": {
              "formative": "Review brainstormed ideas for scope and connection to theme.",
              "summative": "Game Pitch & High Concept Document (Submission)."
            },
            "differentiation": "Support: Provide examples of past winning G4C projects."
          },
          {
            "day": 100,
            "date": "Fri, 03 06, 26",
            "lesson": "\"GAMES FOR CHANGE\" SUBMISSION DAY!",
            "enduringUnderstanding": "Launching a project requires attention to detail and deadlines.",
            "essentialQuestion": "How do we professionally present our finished work?",
            "objectives": ["Create a public project page on itch.io or Unity Play", "Upload a working build, screenshots, and trailer", "Complete the official G4C submission form"],
            "agenda": "(Full Period) Submission Workshop: Students follow a checklist to submit their games. Celebrate success.",
            "materials": {
              "teacher": "G4C submission checklist.",
              "student": "Computer.",
              "links": "gamesforchange.org/studentchallenge, itch.io"
            },
            "assessment": {
              "formative": "Teacher verification of each student's live submission page.",
              "summative": "Final G4C Project Submission."
            },
            "differentiation": "Support: A detailed, step-by-step checklist."
          },
          {
            "day": 114,
            "date": "Fri, 03 27, 26",
            "lesson": "Final Project: Portfolio Polish",
            "enduringUnderstanding": "A professional portfolio showcases your best work and is a key asset for future opportunities.",
            "essentialQuestion": "How can I best present the work I've done this year?",
            "objectives": ["Create a personal portfolio page", "Select their best 2-3 projects to feature", "Write a professional description for each project"],
            "agenda": "(15m) Mini-Lesson: What makes a good portfolio?(75m) Portfolio Workshop: Students design and build personal portfolio sites (Google Sites, etc.), embed their best games, and write descriptions.",
            "materials": {
              "teacher": "Google Sites or other portfolio builders.",
              "student": "Computer.",
              "links": "sites.google.com"
            },
            "assessment": {
              "formative": "Review portfolio pages for professionalism and clarity.",
              "summative": "The final portfolio is the summative assessment for the semester."
            },
            "differentiation": "Support: Provide a template and examples of professional developer portfolios."
          }
        ]
      }
    ]
  }
}