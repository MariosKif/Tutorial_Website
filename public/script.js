// Web Tutorials JavaScript
// This file contains interactive functionality for the website

// Log when the page loads
console.log("Web Tutorials loaded");

// Dark mode toggle functionality
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize page functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (sidebarToggle && sidebar && sidebarOverlay) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('open');
        });
        
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('open');
        });
        
        // Close sidebar when clicking on sidebar links (mobile)
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    sidebarOverlay.classList.remove('open');
                }
            });
        });
    }
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Expandable sidebar functionality
    const expandableSections = document.querySelectorAll('.sidebar-section-title.expandable');
    
    expandableSections.forEach(section => {
        section.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const menu = document.getElementById(sectionId + '-menu');
            const icon = this.querySelector('.expand-icon');
            
            if (menu && icon) {
                // Toggle expanded state
                this.classList.toggle('expanded');
                menu.classList.toggle('collapsed');
                
                // Save state to localStorage
                const isExpanded = this.classList.contains('expanded');
                localStorage.setItem(`sidebar-${sectionId}`, isExpanded);
            }
        });
        
        // Restore saved state
        const sectionId = section.getAttribute('data-section');
        const savedState = localStorage.getItem(`sidebar-${sectionId}`);
        const menu = document.getElementById(sectionId + '-menu');
        
        if (savedState === 'true' && menu) {
            section.classList.add('expanded');
            menu.classList.remove('collapsed');
        } else if (menu) {
            // Default: expand all sections to show courses
            section.classList.add('expanded');
            menu.classList.remove('collapsed');
        }
    });
    
    
    // Update sidebar counts with real data
    if (window.tutorialCounts) {
        const htmlLink = document.querySelector('a[href="/tutorialwebsite/html/"]');
        const cssLink = document.querySelector('a[href="/tutorialwebsite/css/"]');
        const jsLink = document.querySelector('a[href="/tutorialwebsite/javascript/"]');
        
        if (htmlLink && window.tutorialCounts.html > 0) {
            htmlLink.innerHTML = htmlLink.innerHTML.replace(/HTML/, `HTML <span class="course-count">(${window.tutorialCounts.html} tutorials)</span>`);
        }
        
        if (cssLink && window.tutorialCounts.css > 0) {
            cssLink.innerHTML = cssLink.innerHTML.replace(/CSS/, `CSS <span class="course-count">(${window.tutorialCounts.css} tutorials)</span>`);
        }
        
        if (jsLink && window.tutorialCounts.javascript > 0) {
            jsLink.innerHTML = jsLink.innerHTML.replace(/JavaScript/, `JavaScript <span class="course-count">(${window.tutorialCounts.javascript} tutorials)</span>`);
        }
    }
    
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small delay for visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add animation to tutorial cards on scroll
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initialize card animations
    tutorialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add click tracking for analytics (placeholder)
    function trackClick(element, action) {
        // TODO: Implement analytics tracking
        console.log(`Tracked: ${action} on ${element}`);
    }
    
    // Track tutorial card clicks
    const tutorialButtons = document.querySelectorAll('.tutorial-card .btn');
    tutorialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tutorialType = this.closest('.tutorial-card').querySelector('h3').textContent;
            trackClick(this, `Tutorial started: ${tutorialType}`);
        });
    });
});

// Utility function for future features
function showNotification(message, type = 'info') {
    // TODO: Implement notification system
    console.log(`Notification (${type}): ${message}`);
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleDarkMode,
        showNotification
    };
}
