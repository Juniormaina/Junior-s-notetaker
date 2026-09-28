document.addEventListener('DOMContentLoaded', () => {
    // Dynamic footer year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    if (toggleButton && primaryNav) {
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            toggleButton.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle menu visibility
            primaryNav.classList.toggle('is-open');
        });
    }
});
