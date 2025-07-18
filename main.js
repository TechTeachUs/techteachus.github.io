// main.js

// --- Loader Logic ---
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    const body = document.querySelector('body');

    // Hide loader and remove hidden class from body
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
        body.classList.remove('hidden');
        // Initialize Scrollify and Particles.js after loader is hidden
        initScrollify();
        initParticles();
    }, 500); // Matches the opacity transition duration
});

// --- Custom Modal Implementation (for Alert/Prompt replacements) ---
function showCustomModal(message, isPrompt = false, callback = null) {
    const modal = document.getElementById('custom-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalInput = document.getElementById('modal-input');
    const modalOkButton = document.getElementById('modal-ok-button');
    const modalCancelButton = document.getElementById('modal-cancel-button');

    modalMessage.textContent = message;
    modalInput.style.display = isPrompt ? 'block' : 'none';
    modalInput.value = ''; // Clear input field
    modalCancelButton.style.display = isPrompt ? 'inline-block' : 'none';

    modal.style.display = 'flex'; // Show the modal

    return new Promise(resolve => {
        const handleOk = () => {
            modal.style.display = 'none';
            modalOkButton.removeEventListener('click', handleOk);
            modalCancelButton.removeEventListener('click', handleCancel);
            if (isPrompt) {
                resolve(modalInput.value);
            } else {
                resolve(true); // For alert, just resolve true on OK
            }
            if (callback) callback(modalInput.value);
        };

        const handleCancel = () => {
            modal.style.display = 'none';
            modalOkButton.removeEventListener('click', handleOk);
            modalCancelButton.removeEventListener('click', handleCancel);
            resolve(null); // For prompt, resolve null on Cancel
            if (callback) callback(null);
        };

        modalOkButton.addEventListener('click', handleOk);
        modalCancelButton.addEventListener('click', handleCancel);

        // Allow pressing Enter to confirm if it's a prompt
        if (isPrompt) {
            modalInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleOk();
                }
            });
        }
    });
}


// --- Navigation Functions ---
function goTo(element) {
    const targetId = element.dataset.href.replace('.html', ''); // Remove .html if present
    if (targetId) {
        $.scrollify.move(targetId);
    }
}

async function pass() {
    const password = "please"; // Correct password
    const enteredPassword = await showCustomModal("Enter in the password:", true); // True for prompt

    if (enteredPassword !== null && enteredPassword.toLowerCase() === password) {
        await showCustomModal("Come right in!\n\nYou've entered the right password.");
        // If the password is correct, simulate navigation to MfA.html
        // In a single-page app with scrollify, this would typically scroll to a section.
        // For this example, we'll just log it or scroll to a placeholder section if one existed.
        console.log("Password correct! Navigating to MfA content (simulated).");
        // Example: If you had a section for MfA content, you'd scroll to it:
        // $.scrollify.move("#mfa-section");
    } else {
        await showCustomModal("Incorrect password. Access denied.");
        // Simulate navigation to bad.html
        console.log("Password incorrect! Navigating to bad.html (simulated).");
        // Example: If you had a section for bad access, you'd scroll to it:
        // $.scrollify.move("#bad-access-section");
    }
    return false; // Prevent default link behavior
}


// --- Scrollify Initialization ---
function initScrollify() {
    if ($.scrollify) {
        $.scrollify.destroy(); // Destroy previous instance if any

        $.scrollify({
            section: ".section",
            sectionName: "section-name",
            interstitialSection: "", // If you have non-full-height sections
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset: 0,
            scrollbars: false, // Hide native scrollbars
            before: function(i, sections) {
                // Update active navigation link
                const currentSectionId = sections[i].id;
                document.querySelectorAll('.nav__links li a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSectionId}`) {
                        link.classList.add('active');
                    }
                });

                // Update scroll dots
                document.querySelectorAll('.dots__circle').forEach((dot, index) => {
                    if (index === i) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });

                // Update scroll line height
                const scrollLine = document.querySelector('.bar__line');
                const totalSections = sections.length;
                const progress = (i / (totalSections - 1)) * 100;
                scrollLine.style.height = `${progress}%`;
            },
            afterRender: function() {
                // Set initial active state for first section
                const firstSectionId = $('.section').first().attr('id');
                document.querySelector(`.nav__links li a[href="#${firstSectionId}"]`).classList.add('active');
                document.querySelector('.dots__circle').classList.add('active');
            }
        });

        // Event listener for navigation links to use scrollify
        document.querySelectorAll('.nav__links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                $.scrollify.move(targetId);
            });
        });

        // Event listener for arrow to scroll to next section
        document.querySelector('.arrow').addEventListener('click', function() {
            $.scrollify.next();
        });

    } else {
        console.error("Scrollify not loaded.");
    }
}


// --- Particles.js Initialization ---
function initParticles() {
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
                    "value": "#ffffff"
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
                    "color": "#ffffff",
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
        console.error("particlesJS is not defined. Make sure particles.min.js is loaded.");
    }
}

// --- Original changeSlide function (if needed for a specific element, but Scrollify handles main sections) ---
// This function seems to be for a specific image/content slider, not the main page sections.
// If the user intends to have a separate slider within a section, this can be used.
// For now, it's commented out as Scrollify handles full-page scrolling.
/*
const totalTime = 12 * 1000;
let canChange = false;
let currentSlide = 1;
let wrapInt;
let wrapper = document.getElementById('wrapper'); // This wrapper is for the main sections now

function changeSlide() {
    if (!wrapper) {
        console.warn("Wrapper element not found for changeSlide function.");
        return;
    }

    if (currentSlide == 1 && canChange == true) {
        wrapper.style.setProperty('transition', 'left 0.75s ease');
        wrapper.style.setProperty('left', '0');
        currentSlide++;
    } else if (currentSlide == 2) {
        wrapper.style.setProperty('left', '-50vw');
        currentSlide++;
    } else if (currentSlide == 3) {
        wrapper.style.setProperty('left', '-100vw');
        currentSlide++;
    } else if (currentSlide == 4) {
        wrapper.style.setProperty('transition', 'none');
        wrapper.style.setProperty('left', '50vw');
        currentSlide = 1;
    } else {
        canChange = true;
    }
    wrapInt = setTimeout(changeSlide, totalTime / 4);
}
// Call changeSlide if this specific slider is intended for a section
// window.addEventListener('load', changeSlide);
*/
