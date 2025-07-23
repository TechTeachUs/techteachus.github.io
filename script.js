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

    // --- Particles.js Initialization ---
    // Check if particlesJS is loaded before initializing
    if (typeof particlesJS !== 'undefined') {
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
                    "value": "#6366F1" // Indigo-500
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#a78bfa", // Light purple
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.warn("Particles.js library not loaded. Background animation will not work.");
    }

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

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    // Theme toggle event listener
    themeToggle?.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });

    // Function to update theme icons
    function updateThemeIcons(theme) {
        if (theme === 'light') {
            lightIcon?.classList.remove('hidden');
            darkIcon?.classList.add('hidden');
        } else {
            lightIcon?.classList.add('hidden');
            darkIcon?.classList.remove('hidden');
        }
    }

    // --- Animated Name Effect ---
    function animatedName() {
        const name = "Mrs. Luna Ramirez";
        const numbers = document.querySelectorAll('.nbr');
        const nameChars = name.split('');
        
        // Set CSS custom property for animation delay
        numbers.forEach((num, index) => {
            num.style.setProperty('--i', index);
        });

        let currentIndex = 0;
        const animationSpeed = 100; // ms between character reveals
        const scrambleSpeed = 50; // ms between number changes during scramble
        
        function scrambleNumbers() {
            numbers.forEach((num, index) => {
                if (index <= currentIndex) {
                    // Show the actual character for revealed positions
                    if (nameChars[index]) {
                        num.textContent = nameChars[index];
                        num.style.color = '#6366f1'; // Indigo for revealed chars
                    }
                } else {
                    // Show random numbers for unrevealed positions
                    const randomNum = Math.floor(Math.random() * 10);
                    num.textContent = randomNum;
                    num.style.color = '#9ca3af'; // Gray for scrambling numbers
                }
            });
        }

        function revealNextCharacter() {
            if (currentIndex < nameChars.length && currentIndex < numbers.length) {
                // Reveal the next character
                if (nameChars[currentIndex]) {
                    numbers[currentIndex].textContent = nameChars[currentIndex];
                    numbers[currentIndex].style.color = '#6366f1';
                    numbers[currentIndex].style.transform = 'scale(1.2)';
                    
                    // Reset scale after animation
                    setTimeout(() => {
                        if (numbers[currentIndex]) {
                            numbers[currentIndex].style.transform = 'scale(1)';
                        }
                    }, 200);
                }
                currentIndex++;
                
                if (currentIndex < nameChars.length) {
                    setTimeout(revealNextCharacter, animationSpeed);
                } else {
                    // Animation complete, stop scrambling
                    clearInterval(scrambleInterval);
                }
            }
        }

        // Start the scrambling effect
        const scrambleInterval = setInterval(scrambleNumbers, scrambleSpeed);
        
        // Start revealing characters after a short delay
        setTimeout(revealNextCharacter, 500);
    }

    // Start the animated name effect when page loads
    setTimeout(animatedName, 1500); // Wait for loader to finish
});

