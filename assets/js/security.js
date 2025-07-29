// Enhanced Security Module for TechTeach
// Designed to deter curious students while maintaining educational accessibility

class SecurityManager {
    constructor() {
        this.init();
    }

    init() {
        this.preventDevToolsBasic();
        this.preventRightClick();
        this.preventKeyboardShortcuts();
        this.detectSuspiciousActivity();
        this.obfuscateConsoleMessages();
    }

    // Basic dev tools prevention (can be bypassed but deters casual users)
    preventDevToolsBasic() {
        // Detect F12 and common dev tool shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.ctrlKey && e.key === 'U')) {
                
                e.preventDefault();
                this.showSecurityWarning('Developer tools access is monitored and may be reported to Mrs. Ramirez.');
                return false;
            }
        });

        // Detect console opening (basic detection)
        let devtools = { open: false, orientation: null };
        const threshold = 160;

        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    this.logSecurityEvent('Developer tools detected');
                    this.showSecurityWarning('Developer tools detected. This activity may be logged.');
                }
            } else {
                devtools.open = false;
            }
        }, 500);
    }

    // Prevent right-click context menu
    preventRightClick() {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showSecurityNotice('Right-click is disabled. Contact Mrs. Ramirez if you need to access page functions.');
        });
    }

    // Prevent common keyboard shortcuts
    preventKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Prevent Ctrl+S (save page)
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.showSecurityNotice('Page saving is disabled to protect educational content.');
            }
            
            // Prevent Ctrl+A (select all)
            if (e.ctrlKey && e.key === 'a') {
                e.preventDefault();
                this.showSecurityNotice('Text selection is limited to protect content.');
            }
        });
    }

    // Detect suspicious activity patterns
    detectSuspiciousActivity() {
        let rapidClickCount = 0;
        let lastClickTime = 0;

        document.addEventListener('click', () => {
            const currentTime = Date.now();
            if (currentTime - lastClickTime < 100) {
                rapidClickCount++;
                if (rapidClickCount > 10) {
                    this.logSecurityEvent('Rapid clicking detected - possible automation');
                    this.showSecurityWarning('Unusual activity detected. Please use the site normally.');
                    rapidClickCount = 0;
                }
            } else {
                rapidClickCount = 0;
            }
            lastClickTime = currentTime;
        });

        // Monitor for copy attempts
        document.addEventListener('copy', (e) => {
            if (e.target.closest('.lesson-content, .teacher-tools')) {
                this.logSecurityEvent('Content copy attempt');
                this.showSecurityNotice('Content copying is monitored. Ensure you have permission to copy educational materials.');
            }
        });
    }

    // Obfuscate console messages
    obfuscateConsoleMessages() {
        // Redirect console methods to prevent password discovery
        const originalLog = console.log;
        const originalWarn = console.warn;
        const originalError = console.error;

        console.log = (...args) => {
            // Filter out sensitive information
            const filteredArgs = args.map(arg => 
                typeof arg === 'string' ? arg.replace(/TechTeach2008!\?/g, '[REDACTED]') : arg
            );
            originalLog.apply(console, filteredArgs);
        };

        console.warn = (...args) => {
            const filteredArgs = args.map(arg => 
                typeof arg === 'string' ? arg.replace(/TechTeach2008!\?/g, '[REDACTED]') : arg
            );
            originalWarn.apply(console, filteredArgs);
        };

        console.error = (...args) => {
            const filteredArgs = args.map(arg => 
                typeof arg === 'string' ? arg.replace(/TechTeach2008!\?/g, '[REDACTED]') : arg
            );
            originalError.apply(console, filteredArgs);
        };

        // Add fake console messages to confuse curious students
        setTimeout(() => {
            console.log('%c🎓 Welcome to Mrs. Ramirez\'s TechTeach Portal!', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
            console.log('%cFor students: Focus on learning! For teachers: All access is logged.', 'color: #2196F3; font-size: 12px;');
            console.log('%c⚠️ Unauthorized access attempts are monitored and may be reported.', 'color: #FF9800; font-size: 12px;');
        }, 1000);
    }

    // Security warning modal
    showSecurityWarning(message) {
        if (typeof showCustomModal !== 'undefined') {
            showCustomModal(`🛡️ Security Notice\n\n${message}`);
        } else {
            alert(`🛡️ Security Notice\n\n${message}`);
        }
    }

    // Security notice (less intrusive)
    showSecurityNotice(message) {
        // Create a temporary notification
        const notice = document.createElement('div');
        notice.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f44336;
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-size: 14px;
            max-width: 300px;
            animation: slideIn 0.3s ease-out;
        `;
        notice.innerHTML = `<i class="fas fa-shield-alt"></i> ${message}`;
        
        // Add slide-in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notice);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notice.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => notice.remove(), 300);
        }, 5000);
    }

    // Log security events (in production, send to server)
    logSecurityEvent(event) {
        const timestamp = new Date().toISOString();
        const userAgent = navigator.userAgent.substring(0, 100);
        const url = window.location.href;
        
        // Store locally (in production, send to server)
        const securityLog = JSON.parse(localStorage.getItem('securityLog') || '[]');
        securityLog.push({
            timestamp,
            event,
            userAgent,
            url,
            sessionId: this.getSessionId()
        });
        
        // Keep only last 50 events
        if (securityLog.length > 50) {
            securityLog.splice(0, securityLog.length - 50);
        }
        
        localStorage.setItem('securityLog', JSON.stringify(securityLog));
        
        // In production, also send to server:
        // fetch('/api/security-log', { method: 'POST', body: JSON.stringify(logEntry) });
    }

    // Generate session ID for tracking
    getSessionId() {
        let sessionId = sessionStorage.getItem('securitySessionId');
        if (!sessionId) {
            sessionId = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
            sessionStorage.setItem('securitySessionId', sessionId);
        }
        return sessionId;
    }

    // Advanced password obfuscation
    static obfuscatePassword(password) {
        // Multiple layers of encoding to make reverse engineering harder
        const step1 = btoa(password); // Base64
        const step2 = step1.split('').reverse().join(''); // Reverse
        const step3 = btoa(step2); // Base64 again
        return step3;
    }

    static deobfuscatePassword(obfuscated) {
        try {
            const step1 = atob(obfuscated);
            const step2 = step1.split('').reverse().join('');
            const step3 = atob(step2);
            return step3;
        } catch (e) {
            return null;
        }
    }
}

// Initialize security manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/' || 
        window.location.pathname.includes('LPS')) {
        new SecurityManager();
    }
});

// Export for use in other scripts
window.SecurityManager = SecurityManager;
