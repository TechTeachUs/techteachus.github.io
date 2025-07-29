// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // --- Loader Functionality ---
    const loader = document.querySelector('.loader');
    if (loader) {
        // Hide loader and show body content after a short delay
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('overflow-x-hidden'); // Allow scroll after load
        }, 1000); // Adjust delay as needed
    }

    // --- Initialize Card Carousels ---
    const carouselIds = ['python-cards', 'unity-cards', 'advanced-cards'];
    carouselIds.forEach(id => {
        if (document.getElementById(id)) {
            initializeCarousel(id);
        }
    });

    // --- Particles.js Initialization ---
    function initParticles() {
        console.log('Initializing particles...');
        
        const container = document.getElementById('particles-js');
        if (!container) {
            console.error('Particles container not found!');
            return;
        }
        
        if (typeof particlesJS === 'undefined') {
            console.error('Particles.js library not loaded!');
            return;
        }
        
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#01627f"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.8,
                    "random": false
                },
                "size": {
                    "value": 4,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#01627f",
                    "opacity": 0.6,
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
        
        console.log('Particles initialized successfully!');
    }

    // Initialize particles immediately
    initParticles();

    // --- Navigation Toggle for Mobile ---
    // Hamburger menu logic
    const navToggle = document.querySelector('.nav__toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = mobileMenu.querySelector('.fa-times').closest('button');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // Open mobile menu
    navToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-y-full');
    });

    // Close mobile menu
    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-y-full');
    });

    // Close menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Optional: smooth scroll to section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            mobileMenu.classList.add('-translate-y-full');
        });
    });

    // --- Smooth Scrolling for Desktop Navigation Links ---
    document.querySelectorAll('nav .nav__links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Scroll Bar Dot Activation ---
    const sections = document.querySelectorAll('.section');
    const scrollDots = document.querySelectorAll('.dots__circle');

    const updateScrollDots = () => {
        let currentActiveIndex = 0;
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            // A section is considered active if its top is within the viewport
            // and its bottom is below the top of the viewport.
            // Adjust threshold as needed for better UX.
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentActiveIndex = index;
            }
        });

        scrollDots.forEach((dot, index) => {
            if (index === currentActiveIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Initial update and on scroll
    window.addEventListener('scroll', updateScrollDots);
    updateScrollDots(); // Call on load to set initial active dot

    // Click handler for scroll dots
    scrollDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (sections[index]) {
                sections[index].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Lazy Loading Images with Intersection Observer ---
    const lazyImages = document.querySelectorAll('img.lazy');

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    };

    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(lazyLoad, {
            rootMargin: '0px 0px 100px 0px' // Load images when they are 100px from viewport
        });

        lazyImages.forEach(img => {
            lazyImageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }

    // --- Animation on Scroll with Intersection Observer ---
    const animatedElements = document.querySelectorAll('.animated');

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('in-view'); // Trigger CSS animation
                const delay = element.getAttribute('data-delay');
                if (delay) {
                    element.style.animationDelay = delay;
                }
                observer.unobserve(element); // Stop observing once animated
            }
        });
    };

    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver(animateOnScroll, {
            rootMargin: '0px 0px -50px 0px' // Trigger when 50px into view
        });

        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    } else {
        // Fallback: just show all animations immediately if no Intersection Observer
        animatedElements.forEach(element => {
            element.classList.add('in-view');
            const delay = element.getAttribute('data-delay');
            if (delay) {
                element.style.animationDelay = delay;
            }
        });
    }

    // --- Custom Modal Implementation (replacing alert/confirm) ---
    const customModal = document.getElementById('custom-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalInput = document.getElementById('modal-input');
    const modalOkButton = document.getElementById('modal-ok-button');
    const modalCancelButton = document.getElementById('modal-cancel-button');

    let resolveModalPromise;

    /**
     * Shows a custom alert-like modal.
     * @param {string} message - The message to display.
     */
    function showModal(message) {
        return new Promise(resolve => {
            modalMessage.textContent = message;
            modalInput.style.display = 'none';
            modalCancelButton.style.display = 'none';
            customModal.classList.remove('hidden');

            const handleOk = () => {
                modalOkButton.removeEventListener('click', handleOk);
                customModal.classList.add('hidden');
                resolve(true); // Always resolve true for an alert-like modal
            };

            modalOkButton.addEventListener('click', handleOk);
            resolveModalPromise = resolve; // Store resolve for external use if needed, though not strictly necessary for simple alerts
        });
    }

    /**
     * Shows a custom prompt-like modal.
     * @param {string} message - The message to display.
     * @param {string} defaultValue - The default value for the input field.
     * @returns {Promise<string|null>} - Resolves with the input value or null if cancelled.
     */
    function showPrompt(message, defaultValue = '') {
        return new Promise(resolve => {
            modalMessage.textContent = message;
            modalInput.value = defaultValue;
            modalInput.style.display = 'block';
            modalCancelButton.style.display = 'inline-block';
            customModal.classList.remove('hidden');

            const handleOk = () => {
                modalOkButton.removeEventListener('click', handleOk);
                modalCancelButton.removeEventListener('click', handleCancel);
                customModal.classList.add('hidden');
                resolve(modalInput.value);
            };

            const handleCancel = () => {
                modalOkButton.removeEventListener('click', handleOk);
                modalCancelButton.removeEventListener('click', handleCancel);
                customModal.classList.add('hidden');
                resolve(null);
            };

            modalOkButton.addEventListener('click', handleOk);
            modalCancelButton.addEventListener('click', handleCancel);
            resolveModalPromise = resolve; // Store resolve for external use
        });
    }

    // Example usage (uncomment to test):
    // setTimeout(() => {
    //     showModal("Welcome to Mrs. Ramirez's page!").then(() => {
    //         console.log("Modal closed.");
    //     });
    // }, 2000);

    // setTimeout(() => {
    //     showPrompt("What's your name?", "Guest").then(name => {
    //         if (name !== null) {
    //             console.log("User entered: " + name);
    //         } else {
    //             console.log("Prompt cancelled.");
    //         }
    //     });
    // }, 4000);

    // --- Scroll to Next Section Functionality (replaces $.scrollify.next()) ---
    document.querySelector('.arrow[data-scroll-next]')?.addEventListener('click', () => {
        const currentSection = document.getElementById('home'); // Assuming this arrow is only on home
        if (currentSection) {
            const nextSection = currentSection.nextElementSibling;
            if (nextSection && nextSection.tagName === 'SECTION') {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // --- Table Data Labels for Responsive Tables ---
    // This script adds data-label attributes to table cells for responsive design
    // on smaller screens, allowing CSS to display column headers.
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

    // --- Theme Toggle Functionality ---
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.querySelector('.theme-icon-light');
    const darkIcon = document.querySelector('.theme-icon-dark');
    const body = document.body;

    // Check for saved theme preference or default to light (since we redesigned for light theme)
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    // Theme toggle event listener
    themeToggle?.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
        
        console.log('Theme switched to:', newTheme); // Debug log
    });

    // Function to update theme icons
    function updateThemeIcons(theme) {
        console.log('Updating theme icons for:', theme); // Debug log
        if (theme === 'light') {
            lightIcon?.classList.remove('hidden');
            darkIcon?.classList.add('hidden');
        } else {
            lightIcon?.classList.add('hidden');
            darkIcon?.classList.remove('hidden');
        }
        
        // Update navigation text colors for revealed characters
        updateNavColors(theme);
    }
    
    // Function to update navigation colors based on theme
    function updateNavColors(theme) {
        const navNumbers = document.querySelectorAll('.nav-nbr.revealed');
        const newColor = theme === 'light' ? '#111' : '#ffffff';
        
        navNumbers.forEach(num => {
            num.style.color = newColor;
        });
    }

    // --- Navigation Typing Effect ---
    function animatedNavName() {
        const navName = "Mrs. Ramirez";
        const navNumbers = document.querySelectorAll('.nav-nbr');
        
        // Check if elements exist
        if (!navNumbers || navNumbers.length === 0) {
            console.log('No .nav-nbr elements found');
            return;
        }
        
        console.log(`Found ${navNumbers.length} nav number elements`);
        
        const navNameChars = navName.split('');
        
        // Ensure we have enough number elements
        if (navNumbers.length < navNameChars.length) {
            console.warn(`Not enough nav number elements. Need ${navNameChars.length}, found ${navNumbers.length}`);
        }
        
        // Get current theme for proper colors
        const currentTheme = document.body.getAttribute('data-theme') || 'light';
        const revealedColor = currentTheme === 'light' ? '#111' : '#ffffff';
        
        let currentIndex = 0;
        const animationSpeed = 100; // Faster for navigation
        const scrambleSpeed = 60; // Faster scramble
        let scrambleInterval;
        
        function scrambleNavNumbers() {
            navNumbers.forEach((num, index) => {
                if (index <= currentIndex) {
                    // Show the actual character for revealed positions
                    if (navNameChars[index]) {
                        num.textContent = navNameChars[index];
                        num.classList.add('revealed');
                        num.style.color = revealedColor;
                        num.style.fontWeight = 'bold';
                    }
                } else {
                    // Show random numbers for unrevealed positions
                    const randomNum = Math.floor(Math.random() * 10);
                    num.textContent = randomNum;
                    num.style.color = '#9ca3af'; // Gray for scrambling numbers
                    num.style.fontWeight = 'normal';
                }
            });
        }

        function revealNextNavCharacter() {
            if (currentIndex < navNameChars.length && currentIndex < navNumbers.length) {
                // Reveal the next character
                if (navNameChars[currentIndex] && navNumbers[currentIndex]) {
                    navNumbers[currentIndex].textContent = navNameChars[currentIndex];
                    navNumbers[currentIndex].classList.add('revealed');
                    navNumbers[currentIndex].style.color = revealedColor;
                    navNumbers[currentIndex].style.fontWeight = 'bold';
                    navNumbers[currentIndex].style.transform = 'scale(1.1)';
                    
                    // Reset scale after animation
                    setTimeout(() => {
                        if (navNumbers[currentIndex]) {
                            navNumbers[currentIndex].style.transform = 'scale(1)';
                        }
                    }, 150);
                }
                currentIndex++;
                
                if (currentIndex < navNameChars.length) {
                    setTimeout(revealNextNavCharacter, animationSpeed);
                } else {
                    // Animation complete, stop scrambling
                    if (scrambleInterval) {
                        clearInterval(scrambleInterval);
                    }
                    console.log('Navigation animation complete');
                }
            }
        }

        // Start the scrambling effect
        scrambleInterval = setInterval(scrambleNavNumbers, scrambleSpeed);
        
        // Start revealing characters after a short delay
        setTimeout(revealNextNavCharacter, 500);
        
        console.log('Navigation animation started');
    }

    // --- Animated Name Effect ---
    function animatedName() {
        const phrases = [
            "Mrs. Ramirez...",
            "Web_App Development!", 
            "Game Design!.........",
            "Software Engineering."
        ];
        const numbers = document.querySelectorAll('.nbr');
        
        // Check if elements exist
        if (!numbers || numbers.length === 0) {
            console.log('No .nbr elements found');
            return;
        }
        
        console.log(`Found ${numbers.length} number elements`);
        
        // Initialize all numbers with zeros
        numbers.forEach((num, index) => {
            if (index < 18) {
                num.textContent = '0';
                num.style.color = '#9ca3af'; // Gray for initial zeros
                num.style.fontWeight = 'normal';
                num.classList.remove('revealed');
                num.style.display = 'inline-block';
            } else {
                num.textContent = '0';
                num.style.color = '#9ca3af';
                num.style.fontWeight = 'normal';
                num.classList.remove('revealed');
                num.style.display = 'inline-block';
            }
        });
        
        let currentPhraseIndex = 0;
        let currentIndex = 0;
        let isDeleting = false;
        const typeSpeed = 120; // Speed for typing
        const deleteSpeed = 80; // Speed for deleting
        const phraseDelay = 2000; // Delay between phrases
        const scrambleSpeed = 60;
        let scrambleInterval;
        
        function getCurrentPhrase() {
            return phrases[currentPhraseIndex];
        }
        
        function clearAllNumbers() {
            numbers.forEach((num, index) => {
                if (index < 18) {
                    num.textContent = ''; // Clear instead of dots
                    num.style.color = 'transparent';
                    num.style.fontWeight = 'normal';
                    num.classList.remove('revealed');
                } else {
                    num.textContent = '';
                    num.style.color = 'transparent';
                    num.style.fontWeight = 'normal';
                    num.classList.remove('revealed');
                }
            });
        }
        
        function scrambleNumbers() {
            const currentPhrase = getCurrentPhrase();
            const words = currentPhrase.split(' ');
            let charIndex = 0;
            
            // Create a display string with proper word spacing and line breaks
            let displayText = '';
            let wordsOnFirstLine = 0;
            let firstLineLength = 0;
            
            // Determine how many words fit on first line (adjusted for specific phrases)
            for (let word of words) {
                // Special handling for "Mrs. Ramirez..." - only "Mrs." on first line
                if (currentPhrase === "Mrs. Ramirez..." && wordsOnFirstLine === 1) {
                    break;
                }
                // Special handling for "Web_App Development!" - only "Web_App" on first line
                if (currentPhrase === "Web_App Development!" && wordsOnFirstLine === 1) {
                    break;
                }
                // General rule for other phrases
                if (firstLineLength + word.length + (wordsOnFirstLine > 0 ? 1 : 0) <= 9) {
                    if (wordsOnFirstLine > 0) firstLineLength += 1; // space
                    firstLineLength += word.length;
                    wordsOnFirstLine++;
                } else {
                    break;
                }
            }
            
            // Build display text with line break
            for (let i = 0; i < words.length; i++) {
                if (i === wordsOnFirstLine) {
                    displayText += '\n'; // Line break after first line words
                }
                if (i > 0 && i !== wordsOnFirstLine) {
                    displayText += ' '; // Space between words (but not after line break)
                }
                displayText += words[i];
            }
            
            numbers.forEach((num, index) => {
                if (index < currentIndex) {
                    // Show the actual character for revealed positions
                    if (displayText[index]) {
                        num.textContent = displayText[index];
                        num.style.color = '#01627f'; // Teal for revealed chars
                        num.style.fontWeight = 'bold';
                        num.classList.add('revealed');
                        
                        // Add line break styling
                        if (displayText[index] === '\n') {
                            num.style.display = 'block';
                            num.style.width = '100%';
                            num.style.height = '0';
                            num.textContent = '';
                        } else {
                            num.style.display = 'inline-block';
                            num.style.width = 'auto';
                            num.style.height = 'auto';
                        }
                    } else {
                        // Fill with dots if no character at this position
                        num.textContent = '·';
                        num.style.color = '#9ca3af';
                        num.style.fontWeight = 'normal';
                        num.classList.remove('revealed');
                        num.style.display = 'inline-block';
                    }
                } else if (index < 18) {
                    // Show random numbers for unrevealed positions up to 18 characters
                    const randomNum = Math.floor(Math.random() * 10);
                    num.textContent = randomNum;
                    num.style.color = '#9ca3af'; // Gray for scrambling numbers
                    num.style.fontWeight = 'normal';
                    num.classList.remove('revealed');
                    num.style.display = 'inline-block';
                } else {
                    // Hide remaining positions
                    num.textContent = '';
                    num.style.color = 'transparent';
                    num.style.fontWeight = 'normal';
                    num.classList.remove('revealed');
                    num.style.display = 'inline-block';
                }
            });
        }
        
        function typePhrase() {
            const currentPhrase = getCurrentPhrase();
            const words = currentPhrase.split(' ');
            
            // Create display text with line breaks
            let displayText = '';
            let wordsOnFirstLine = 0;
            let firstLineLength = 0;
            
            // Determine how many words fit on first line
            for (let word of words) {
                // Special handling for "Mrs. Ramirez..." - only "Mrs." on first line
                if (currentPhrase === "Mrs. Ramirez..." && wordsOnFirstLine === 1) {
                    break;
                }
                // Special handling for "Web_App Development!" - only "Web_App" on first line
                if (currentPhrase === "Web_App Development!" && wordsOnFirstLine === 1) {
                    break;
                }
                // General rule for other phrases
                if (firstLineLength + word.length + (wordsOnFirstLine > 0 ? 1 : 0) <= 9) {
                    if (wordsOnFirstLine > 0) firstLineLength += 1;
                    firstLineLength += word.length;
                    wordsOnFirstLine++;
                } else {
                    break;
                }
            }
            
            // Build display text
            for (let i = 0; i < words.length; i++) {
                if (i === wordsOnFirstLine) {
                    displayText += '\n';
                }
                if (i > 0 && i !== wordsOnFirstLine) {
                    displayText += ' ';
                }
                displayText += words[i];
            }
            
            if (!isDeleting && currentIndex < displayText.length) {
                // Typing forward
                if (displayText[currentIndex] && numbers[currentIndex]) {
                    numbers[currentIndex].textContent = displayText[currentIndex];
                    numbers[currentIndex].style.color = '#01627f';
                    numbers[currentIndex].style.fontWeight = 'bold';
                    numbers[currentIndex].style.transform = 'scale(1.2)';
                    numbers[currentIndex].classList.add('revealed');
                    
                    // Handle line breaks
                    if (displayText[currentIndex] === '\n') {
                        numbers[currentIndex].style.display = 'block';
                        numbers[currentIndex].style.width = '100%';
                        numbers[currentIndex].style.height = '0';
                        numbers[currentIndex].textContent = '';
                    } else {
                        numbers[currentIndex].style.display = 'inline-block';
                        numbers[currentIndex].style.width = 'auto';
                        numbers[currentIndex].style.height = 'auto';
                    }
                    
                    // Reset scale after animation
                    setTimeout(() => {
                        if (numbers[currentIndex]) {
                            numbers[currentIndex].style.transform = 'scale(1)';
                        }
                    }, 200);
                }
                currentIndex++;
                
                // Fill remaining positions with dots after typing the phrase
                if (currentIndex === displayText.length) {
                    for (let i = displayText.length; i < Math.min(18, numbers.length); i++) {
                        if (numbers[i]) {
                            numbers[i].textContent = '';
                            numbers[i].style.color = 'transparent';
                            numbers[i].style.fontWeight = 'normal';
                            numbers[i].classList.remove('revealed');
                            numbers[i].style.display = 'inline-block';
                        }
                    }
                }
                
                setTimeout(typePhrase, typeSpeed);
                
            } else if (!isDeleting && currentIndex >= displayText.length) {
                // Finished typing, wait then start deleting
                isDeleting = true;
                setTimeout(typePhrase, phraseDelay);
                
            } else if (isDeleting && currentIndex > 0) {
                // Deleting backward
                currentIndex--;
                if (numbers[currentIndex]) {
                    const randomNum = Math.floor(Math.random() * 10);
                    numbers[currentIndex].textContent = randomNum;
                    numbers[currentIndex].style.color = '#9ca3af';
                    numbers[currentIndex].style.fontWeight = 'normal';
                    numbers[currentIndex].classList.remove('revealed');
                    numbers[currentIndex].style.display = 'inline-block';
                    numbers[currentIndex].style.width = 'auto';
                    numbers[currentIndex].style.height = 'auto';
                }
                setTimeout(typePhrase, deleteSpeed);
                
            } else if (isDeleting && currentIndex === 0) {
                // Finished deleting, move to next phrase
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(typePhrase, 500);
            }
        }
        
        // Start the scrambling effect
        scrambleInterval = setInterval(scrambleNumbers, scrambleSpeed);
        
        // Start typing after a short delay
        setTimeout(() => {
            if (scrambleInterval) {
                clearInterval(scrambleInterval);
            }
            typePhrase();
        }, 800);
        
        console.log('Multi-phrase animation started');
    }

    // Multiple ways to ensure the animation starts
    function startNameAnimation() {
        // Wait for all content to be loaded
        if (document.readyState === 'complete') {
            setTimeout(animatedName, 1000);
        } else {
            window.addEventListener('load', () => {
                setTimeout(animatedName, 1000);
            });
        }
        
        // Fallback - try again after a longer delay
        setTimeout(() => {
            const numbers = document.querySelectorAll('.nbr');
            if (numbers.length > 0 && numbers[0].textContent === '0') {
                console.log('Fallback animation trigger');
                animatedName();
            }
        }, 3000);
    }

    // Manual trigger function for the fallback button
    window.triggerNameAnimation = function() {
        console.log('Manual trigger activated');
        animatedName();
    };

    // Click anywhere on page as another fallback
    let animationTriggered = false;
    document.addEventListener('click', function() {
        if (!animationTriggered) {
            const numbers = document.querySelectorAll('.nbr');
            if (numbers.length > 0 && numbers[0].textContent === '0') {
                console.log('Click trigger activated');
                animationTriggered = true;
                animatedName();
            }
        }
    });

    // Start the main name animation
    startNameAnimation();
    
    // Start navigation animation after a delay
    setTimeout(() => {
        animatedNavName();
    }, 1500);
});

// Table layout toggle function for mobile
function toggleTableLayout(button) {
    const wrapper = button.closest('.table-wrapper');
    const table = wrapper.querySelector('.curriculum-table');
    const mobileCards = wrapper.querySelector('.mobile-cards');
    
    if (table.style.display === 'none') {
        // Switch to table view
        table.style.display = 'table';
        mobileCards.style.display = 'none';
        button.textContent = 'Switch to Card View';
    } else {
        // Switch to card view
        table.style.display = 'none';
        mobileCards.style.display = 'block';
        button.textContent = 'Switch to Table View';
    }
}

// Card carousel functionality
let cardPositions = {};

function initializeCarousel(containerId) {
    console.log('Initializing carousel:', containerId);
    
    if (!cardPositions[containerId]) {
        cardPositions[containerId] = 0;
    }
    
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    const cards = container.querySelectorAll('.curriculum-card');
    const totalElement = document.getElementById(containerId.replace('-cards', '-total'));
    const currentElement = document.getElementById(containerId.replace('-cards', '-current'));
    
    console.log('Found cards:', cards.length, 'for container:', containerId);
    
    if (totalElement) totalElement.textContent = cards.length;
    if (currentElement) currentElement.textContent = '1';
    
    // Show first card initially, hide others
    cards.forEach((card, index) => {
        if (index === 0) {
            card.style.display = 'block';
            card.style.visibility = 'visible';
        } else {
            card.style.display = 'none';
            card.style.visibility = 'hidden';
        }
    });
    
    updateNavigationButtons(containerId);
    console.log('Carousel initialized successfully:', containerId);
}

function nextCard(containerId) {
    const container = document.getElementById(containerId);
    const cards = container.querySelectorAll('.curriculum-card');
    const currentPos = cardPositions[containerId] || 0;
    
    if (currentPos < cards.length - 1) {
        cards[currentPos].style.display = 'none';
        cardPositions[containerId] = currentPos + 1;
        cards[cardPositions[containerId]].style.display = 'block';
        
        const currentElement = document.getElementById(containerId.replace('-cards', '-current'));
        if (currentElement) currentElement.textContent = cardPositions[containerId] + 1;
        
        updateNavigationButtons(containerId);
    }
}

function previousCard(containerId) {
    const container = document.getElementById(containerId);
    const cards = container.querySelectorAll('.curriculum-card');
    const currentPos = cardPositions[containerId] || 0;
    
    if (currentPos > 0) {
        cards[currentPos].style.display = 'none';
        cardPositions[containerId] = currentPos - 1;
        cards[cardPositions[containerId]].style.display = 'block';
        
        const currentElement = document.getElementById(containerId.replace('-cards', '-current'));
        if (currentElement) currentElement.textContent = cardPositions[containerId] + 1;
        
        updateNavigationButtons(containerId);
    }
}

function updateNavigationButtons(containerId) {
    const currentPos = cardPositions[containerId] || 0;
    const container = document.getElementById(containerId);
    const cards = container.querySelectorAll('.curriculum-card');
    
    const prevButton = document.getElementById(containerId.replace('-cards', '-prev'));
    const nextButton = document.getElementById(containerId.replace('-cards', '-next'));
    
    if (prevButton) {
        prevButton.disabled = currentPos === 0;
        prevButton.style.opacity = currentPos === 0 ? '0.5' : '1';
    }
    
    if (nextButton) {
        nextButton.disabled = currentPos === cards.length - 1;
        nextButton.style.opacity = currentPos === cards.length - 1 ? '0.5' : '1';
    }
}

// --- Password Protection for Teacher Tools ---
function accessTool(toolUrl) {
    // Simple password protection
    const teacherPassword = "TechTeach2025"; // Change this to your desired password
    
    const password = prompt("🔒 Teacher Access Required\n\nPlease enter the teacher password:");
    
    if (password === null) {
        // User cancelled
        return;
    }
    
    if (password === teacherPassword) {
        // Correct password - open the tool
        window.open(toolUrl, '_blank');
    } else {
        // Incorrect password
        alert("❌ Incorrect password. Access denied.\n\nPlease contact Mrs. Ramirez if you need access to teacher tools.");
    }
}

// --- Enhanced Modal System for Better UX ---
function showCustomModal(message, isPrompt = false, defaultValue = '') {
    return new Promise((resolve) => {
        const modal = document.getElementById('custom-modal');
        const modalMessage = document.getElementById('modal-message');
        const modalInput = document.getElementById('modal-input');
        const okButton = document.getElementById('modal-ok-button');
        const cancelButton = document.getElementById('modal-cancel-button');
        
        // Set up modal content
        modalMessage.textContent = message;
        
        if (isPrompt) {
            modalInput.style.display = 'block';
            modalInput.value = defaultValue;
            cancelButton.style.display = 'inline-block';
            modalInput.focus();
        } else {
            modalInput.style.display = 'none';
            cancelButton.style.display = 'none';
        }
        
        // Show modal
        modal.classList.remove('hidden');
        
        // Handle OK button
        const handleOk = () => {
            const result = isPrompt ? modalInput.value : true;
            modal.classList.add('hidden');
            okButton.removeEventListener('click', handleOk);
            cancelButton.removeEventListener('click', handleCancel);
            resolve(result);
        };
        
        // Handle Cancel button
        const handleCancel = () => {
            modal.classList.add('hidden');
            okButton.removeEventListener('click', handleOk);
            cancelButton.removeEventListener('click', handleCancel);
            resolve(null);
        };
        
        // Handle Enter key in input
        const handleEnter = (e) => {
            if (e.key === 'Enter') {
                handleOk();
            }
        };
        
        okButton.addEventListener('click', handleOk);
        cancelButton.addEventListener('click', handleCancel);
        if (isPrompt) {
            modalInput.addEventListener('keydown', handleEnter);
        }
    });
}

// Enhanced password protection with better UX
async function accessToolEnhanced(toolUrl) {
    const teacherPassword = "TechTeach2025"; // Change this to your desired password
    
    const password = await showCustomModal("🔒 Teacher Access Required\n\nPlease enter the teacher password:", true);
    
    if (password === null) {
        // User cancelled
        return;
    }
    
    if (password === teacherPassword) {
        // Correct password - open the tool
        await showCustomModal("✅ Access granted! Opening tool...");
        window.open(toolUrl, '_blank');
    } else {
        // Incorrect password
        await showCustomModal("❌ Incorrect password. Access denied.\n\nPlease contact Mrs. Ramirez if you need access to teacher tools.");
    }
}

// --- Teacher Tools Section Access ---
async function accessTeacherTools() {
    const teacherPassword = "TechTeach2025"; // Change this to your desired password
    
    const password = await showCustomModal("🔒 Teacher Access Required\n\nPlease enter the teacher password to access curriculum tools:", true);
    
    if (password === null) {
        // User cancelled
        return;
    }
    
    if (password === teacherPassword) {
        // Correct password - show the tools section
        const accessSection = document.getElementById('teacher-tools-access');
        const contentSection = document.getElementById('teacher-tools-content');
        
        if (accessSection && contentSection) {
            // Hide the access prompt
            accessSection.style.display = 'none';
            
            // Show the tools content with animation
            contentSection.classList.remove('hidden');
            contentSection.style.display = 'block';
            
            // Add the content to the tools section
            contentSection.innerHTML = `
                    <!-- Public Tools Section -->
                    <div class="public-tools mb-8">
                        <h3 class="text-2xl font-semibold mb-6 text-green-300">📖 Quick Access</h3>
                        <div class="tools-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="tool-card bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors duration-300">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                                        <i class="fas fa-book-open text-white text-xl"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold">Lesson Plan Viewer</h4>
                                </div>
                                <p class="text-gray-300 mb-4">Browse and view lesson plans by unit and day. See daily agendas, objectives, and materials.</p>
                                <button onclick="accessTool('LPS-github.html')" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    🔒 Access Viewer
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Protected Tools Section -->
                    <div class="protected-tools">
                        <h3 class="text-2xl font-semibold mb-6 text-orange-300">🔒 Teacher Tools (Password Protected)</h3>
                        <div class="tools-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            <div class="tool-card bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors duration-300">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4">
                                        <i class="fas fa-edit text-white text-xl"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold">Lesson Editor</h4>
                                </div>
                                <p class="text-gray-300 mb-4">Edit lesson plans, fill in missing data, export PDFs, and download updated curriculum files.</p>
                                <button onclick="accessTool('tools/lesson-editor-github.html')" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    🔒 Access Editor
                                </button>
                            </div>

                            <div class="tool-card bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors duration-300">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                                        <i class="fas fa-search text-white text-xl"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold">Data Validator</h4>
                                </div>
                                <p class="text-gray-300 mb-4">Validate lesson data completeness and generate templates for missing lessons.</p>
                                <button onclick="accessTool('tools/validation-tool.html')" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    🔒 Access Validator
                                </button>
                            </div>

                            <div class="tool-card bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors duration-300">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mr-4">
                                        <i class="fas fa-chart-bar text-white text-xl"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold">Missing Lessons Report</h4>
                                </div>
                                <p class="text-gray-300 mb-4">Visual report showing which lessons need completion and detailed missing data analysis.</p>
                                <button onclick="accessTool('tools/missing-lessons-report.html')" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    🔒 Access Report
                                </button>
                            </div>

                            <div class="tool-card bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors duration-300">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mr-4">
                                        <i class="fas fa-cog text-white text-xl"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold">Local Lesson Editor</h4>
                                </div>
                                <p class="text-gray-300 mb-4">Local development version with external JSON file loading (requires server).</p>
                                <button onclick="accessTool('tools/lesson-editor.html')" class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    🔒 Access Local Editor
                                </button>
                            </div>

                            <div class="tool-card bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors duration-300">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                                        <i class="fas fa-book text-white text-xl"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold">Local Lesson Viewer</h4>
                                </div>
                                <p class="text-gray-300 mb-4">Local development version of lesson plan selector (requires server).</p>
                                <button onclick="accessTool('LPS.html')" class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    🔒 Access Local Viewer
                                </button>
                            </div>

                            <div class="tool-card bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors duration-300">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mr-4">
                                        <i class="fas fa-file-alt text-white text-xl"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold">Templates & Docs</h4>
                                </div>
                                <p class="text-gray-300 mb-4">Access lesson templates, documentation, and reference materials.</p>
                                <button onclick="accessTool('templates/')" class="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                                    🔒 Access Templates
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500">
                        <p class="text-sm text-gray-300">
                            <i class="fas fa-info-circle text-blue-400 mr-2"></i>
                            <strong>Note:</strong> All tools require teacher access credentials. This ensures curriculum materials are properly supervised and managed by authorized educators.
                        </p>
                    </div>
            `;
            
            await showCustomModal("✅ Access granted! Teacher tools are now available.");
        }
    } else {
        // Incorrect password
        await showCustomModal("❌ Incorrect password. Access denied.\n\nPlease contact Mrs. Ramirez if you need access to teacher tools.");
    }
}

