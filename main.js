// main.js - Optimized for Performance

// Performance optimizations
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const animation = element.dataset.animation || 'fadeIn';
            const delay = element.dataset.delay || '0ms';

            element.style.animation = `${animation} 0.8s ease-out ${delay} forwards`;
            animationObserver.unobserve(element);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animated').forEach(el => animationObserver.observe(el));

// --- Loader Logic ---
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    const body = document.querySelector('body');

    // Hide loader and remove hidden class from body
    loader.style.opacity = '0';
    
    setTimeout(() => {
        loader.style.display = 'none';
        body.classList.remove('hidden');
        
        // Initialize components after loader is hidden
        initializeComponents();
        
        // Observe animated elements
        document.querySelectorAll('.animated').forEach(el => {
            animationObserver.observe(el);
        });
    }, 500);
});

// Initialize all components
function initializeComponents() {
    try {
        initScrollify();
        initParticles();
        initLazyLoading();
    } catch (error) {
        console.error('Error initializing components:', error);
    }
}

// Mobile navigation functionality
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav__toggle');
    const navLinks = document.querySelector('.nav__links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav__links--active');
            navToggle.classList.toggle('nav__toggle--active');
            
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
                navLinks.classList.remove('nav__links--active');
                navToggle.classList.remove('nav__toggle--active');
                
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('nav__links--active')) {
                navLinks.classList.remove('nav__links--active');
                navToggle.classList.remove('nav__toggle--active');
                
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    } else {
                        console.error('Missing data-src attribute for lazy-loaded image:', img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Optimize scroll performance
    const scrollHandler = throttle(() => {
        updateScrollProgress();
    }, 16); // ~60fps
    
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    // Optimize resize handling
    const resizeHandler = debounce(() => {
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }, 250);
    
    window.addEventListener('resize', resizeHandler, { passive: true });
    
    window.addEventListener('unload', () => {
        window.removeEventListener('scroll', updateScrollProgress);
        window.removeEventListener('resize', debounce);
    });
}

// Update scroll progress
function updateScrollProgress() {
    const scrollLine = document.querySelector('.bar__line');
    if (scrollLine) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollLine.style.height = `${Math.min(progress, 100)}%`;
    }
}

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
    $.scrollify({
        section: '.section',
        easing: 'easeOutExpo',
        scrollSpeed: 600, // Reduced for better responsiveness
        updateHash: false,
        touchScroll: true
    });
}


// --- Particles.js Initialization - Optimized ---
function initParticles() {
    const isMobile = window.innerWidth <= 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4;

    const particleCount = isMobile ? 30 : isLowEnd ? 20 : 80;

    particlesJS('particles-js', {
        particles: {
            number: { value: particleCount },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: false },
                onclick: { enable: false }
            }
        },
        retina_detect: true // Enable retina detection for better visual quality
    });
    
    // Pause particles when page is not visible for better performance
    document.addEventListener('visibilitychange', function() {
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            if (document.hidden) {
                window.pJSDom[0].pJS.fn.particlesPause();
            } else {
                window.pJSDom[0].pJS.fn.particlesPlay();
            }
        }
    });
}

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData && perfData.loadEventEnd > 3000) {
                console.warn('Page load time is slow:', perfData.loadEventEnd + 'ms');
            }
        });
    }
}

// Initialize performance monitoring
monitorPerformance();