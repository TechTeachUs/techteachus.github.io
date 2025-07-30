// Quick fix to reset any blocked access attempts
// Run this in browser console if needed to reset failed attempts

// Clear failed attempts
localStorage.removeItem('teacherAccessAttempts');
sessionStorage.removeItem('mainPageAttempts');

// Re-enable any disabled buttons
const button = document.querySelector('button[onclick*="accessTeacherToolsPage"]');
if (button && button.disabled) {
    button.disabled = false;
    button.innerHTML = '<i class="fas fa-tools mr-1"></i>Teacher Tools';
}

console.log('✅ Access attempts reset - you can try again!');
