// Web Tutorials JavaScript
// This file contains interactive functionality for the website

// Web Tutorials JavaScript loaded

// Additional theme handling for navigation
(function() {
    // Handle theme changes during navigation
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply theme immediately when script loads
    if (document.documentElement.getAttribute('data-theme') !== savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Force colors if dark theme
        if (savedTheme === 'dark') {
            document.documentElement.style.backgroundColor = '#1a1a1a';
            document.documentElement.style.color = '#e0e0e0';
        }
    }
    
    // Ensure content is visible
    if (document.body && !document.body.classList.contains('theme-loaded')) {
        document.body.classList.add('theme-loaded');
    }
})();

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

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchInput || !searchBtn) return;
    
    // Search function
    function performSearch(query) {
        if (!query.trim()) return;
        
        // Convert query to lowercase for case-insensitive search
        const searchTerm = query.toLowerCase().trim();
        
        // Define searchable content - tutorials and categories
        const searchableContent = [
            // HTML Tutorials
            { title: 'HTML Introduction', url: '/tutorialwebsite/html/introduction', category: 'HTML', description: 'Learn the basics of HTML structure and syntax' },
            { title: 'HTML Elements and Tags', url: '/tutorialwebsite/html/elements-and-tags', category: 'HTML', description: 'Understanding HTML elements, tags, and attributes' },
            
            // CSS Tutorials
            { title: 'CSS Basics', url: '/tutorialwebsite/css/basics', category: 'CSS', description: 'Introduction to CSS styling and selectors' },
            { title: 'CSS Selectors', url: '/tutorialwebsite/css/selectors', category: 'CSS', description: 'Learn different types of CSS selectors' },
            { title: 'CSS Flexbox', url: '/tutorialwebsite/css/flexbox', category: 'CSS', description: 'Master CSS Flexbox layout' },
            { title: 'CSS Grid', url: '/tutorialwebsite/css/grid', category: 'CSS', description: 'Learn CSS Grid layout system' },
            { title: 'CSS Animations', url: '/tutorialwebsite/css/animations', category: 'CSS', description: 'Create beautiful CSS animations' },
            
            // JavaScript Tutorials
            { title: 'JavaScript Introduction', url: '/tutorialwebsite/javascript/intro', category: 'JavaScript', description: 'Get started with JavaScript programming' },
            { title: 'JavaScript Variables', url: '/tutorialwebsite/javascript/variables', category: 'JavaScript', description: 'Learn about variables and data types' },
            { title: 'JavaScript Functions', url: '/tutorialwebsite/javascript/functions', category: 'JavaScript', description: 'Understanding functions in JavaScript' },
            { title: 'JavaScript Async', url: '/tutorialwebsite/javascript/async', category: 'JavaScript', description: 'Asynchronous JavaScript concepts' },
            
            // Categories
            { title: 'HTML Tutorials', url: '/tutorialwebsite/html/', category: 'Category', description: 'Complete HTML learning path' },
            { title: 'CSS Tutorials', url: '/tutorialwebsite/css/', category: 'Category', description: 'Complete CSS learning path' },
            { title: 'JavaScript Tutorials', url: '/tutorialwebsite/javascript/', category: 'Category', description: 'Complete JavaScript learning path' }
        ];
        
        // Filter content based on search term
        const results = searchableContent.filter(item => 
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
        
        // Display results
        displaySearchResults(results, searchTerm);
    }
    
    // Display search results
    function displaySearchResults(results, searchTerm) {
        // Remove existing search results
        const existingResults = document.getElementById('searchResults');
        if (existingResults) {
            existingResults.remove();
        }
        
        // Remove existing backdrop
        const existingBackdrop = document.getElementById('searchBackdrop');
        if (existingBackdrop) {
            existingBackdrop.remove();
        }
        
        if (results.length === 0) {
            showNoResults(searchTerm);
            return;
        }
        
        // Create backdrop to prevent interaction with content below
        const backdrop = document.createElement('div');
        backdrop.id = 'searchBackdrop';
        backdrop.className = 'search-backdrop';
        backdrop.onclick = closeSearchResults;
        
        // Create results container
        const resultsContainer = document.createElement('div');
        resultsContainer.id = 'searchResults';
        resultsContainer.className = 'search-results';
        
        // Create results HTML
        let resultsHTML = `
            <div class="search-results-header">
                <h3>Search Results for "${searchTerm}"</h3>
                <button class="close-search" onclick="closeSearchResults()">×</button>
            </div>
            <div class="search-results-list">
        `;
        
        results.forEach(result => {
            resultsHTML += `
                <a href="${result.url}" class="search-result-item">
                    <div class="search-result-content">
                        <h4>${highlightSearchTerm(result.title, searchTerm)}</h4>
                        <p>${result.description}</p>
                        <div class="search-result-meta">
                            <span class="search-result-category">${result.category}</span>
                            <span class="search-result-type">Tutorial</span>
                        </div>
                    </div>
                </a>
            `;
        });
        
        resultsHTML += '</div>';
        resultsContainer.innerHTML = resultsHTML;
        
        // Insert backdrop and results
        document.body.appendChild(backdrop);
        const navCenter = document.querySelector('.nav-center');
        navCenter.appendChild(resultsContainer);
        
        // Add click outside to close
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 100);
    }
    
    // Highlight search term in results
    function highlightSearchTerm(text, searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    // Show no results message
    function showNoResults(searchTerm) {
        // Create backdrop
        const backdrop = document.createElement('div');
        backdrop.id = 'searchBackdrop';
        backdrop.className = 'search-backdrop';
        backdrop.onclick = closeSearchResults;
        
        const resultsContainer = document.createElement('div');
        resultsContainer.id = 'searchResults';
        resultsContainer.className = 'search-results no-results';
        resultsContainer.innerHTML = `
            <div class="search-results-header">
                <h3>No Results Found</h3>
                <button class="close-search" onclick="closeSearchResults()">×</button>
            </div>
            <div class="search-results-content">
                <p>No tutorials found for "${searchTerm}"</p>
                <p>Try searching for:</p>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Elements, Tags, Selectors</li>
                    <li>Variables, Functions, Animations</li>
                </ul>
            </div>
        `;
        
        document.body.appendChild(backdrop);
        const navCenter = document.querySelector('.nav-center');
        navCenter.appendChild(resultsContainer);
        
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 100);
    }
    
    // Close search results
    function closeSearchResults() {
        const results = document.getElementById('searchResults');
        const backdrop = document.getElementById('searchBackdrop');
        
        if (results) {
            results.remove();
        }
        if (backdrop) {
            backdrop.remove();
        }
        document.removeEventListener('click', handleClickOutside);
    }
    
    // Handle clicks outside search results
    function handleClickOutside(event) {
        const searchResults = document.getElementById('searchResults');
        const searchContainer = document.querySelector('.nav-search');
        
        if (searchResults && !searchResults.contains(event.target) && !searchContainer.contains(event.target)) {
            closeSearchResults();
        }
    }
    
    // Make closeSearchResults globally available
    window.closeSearchResults = closeSearchResults;
    
    // Event listeners
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            performSearch(query);
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        }
    });
    
    // Clear results when input is cleared
    searchInput.addEventListener('input', (e) => {
        if (!e.target.value.trim()) {
            closeSearchResults();
        }
    });
}

// Page-specific filters functionality
function initializePageFilters() {
    const searchInput = document.getElementById('searchInput');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const topicFilter = document.getElementById('topicFilter');
    const articleGrid = document.getElementById('articleGrid');
    
    if (!searchInput || !difficultyFilter || !topicFilter || !articleGrid) return;
    
    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedDifficulty = difficultyFilter.value;
        const selectedTopic = topicFilter.value;
        
        const cards = articleGrid.querySelectorAll('.tutorial-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3 a').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const difficulty = card.getAttribute('data-difficulty');
            const category = card.getAttribute('data-category') || '';
            
            const matchesSearch = !searchTerm || 
                title.includes(searchTerm) || 
                description.includes(searchTerm);
            
            const matchesDifficulty = !selectedDifficulty || difficulty === selectedDifficulty;
            const matchesTopic = !selectedTopic || category.toLowerCase().includes(selectedTopic);
            
            if (matchesSearch && matchesDifficulty && matchesTopic) {
                card.style.display = 'flex';
                card.style.visibility = 'visible';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.visibility = 'hidden';
                card.style.opacity = '0';
            }
        });
    }
    
    // Event listeners
    searchInput.addEventListener('input', filterCards);
    difficultyFilter.addEventListener('change', filterCards);
    topicFilter.addEventListener('change', filterCards);
}

// Initialize page functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    initializeSearch();
    
    // Initialize page-specific functionality
    initializePageFilters();
    
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
    
    // Update theme icon based on current theme (already set by immediate initialization)
    const currentTheme = document.documentElement.getAttribute('data-theme');
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
        // Analytics tracking placeholder
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
    // Notification system placeholder
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleDarkMode,
        showNotification
    };
}
