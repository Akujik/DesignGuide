// Meshy.ai Design System JavaScript - Enhanced Quick Guide Navigation

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Enhanced smooth scroll for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Account for both mobile nav and desktop sidebar
                    const isMobile = window.innerWidth < 1024;
                    const offset = isMobile ? 80 : 32;
                    const offsetTop = target.offsetTop - offset;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Update active navigation state
                    updateActiveNavigation(href);
                }
            }
        });
    });

    // Sidebar navigation active state management
    function updateActiveNavigation(targetId) {
        // Update desktop sidebar
        const sidebarLinks = document.querySelectorAll('.sidebar-link[href^="#"]');
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }

    // Highlight current section on scroll
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                updateActiveNavigation('#' + sectionId);
            }
        });
    }

    // Scroll event listener for section highlighting
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(highlightCurrentSection, 50);
    });

    // Initialize current section highlight
    highlightCurrentSection();

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Press '/' to focus search (if implemented)
        if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            // Could implement search functionality here
        }

        // Press 'Escape' to close mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Intersection Observer for animations (if needed)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections for entrance animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Add CSS for entrance animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Smooth transitions for interactive elements */
    .group:hover .group-hover\\:text-meshy-600 {
        transition: color 0.2s ease-in-out;
    }

    .group:hover .group-hover\\:border-meshy-500 {
        transition: border-color 0.2s ease-in-out;
    }

    .group:hover .group-hover\\:shadow-lg {
        transition: box-shadow 0.2s ease-in-out;
    }
`;
document.head.appendChild(styleSheet);

    // Add active state to navigation based on scroll position
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const activeNav = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeNav) {
                    document.querySelectorAll('.nav-link').forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    activeNav.classList.add('active');
                }
            }
        });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Update active nav on page load
    updateActiveNav();

    // Add animation classes on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.component-card, .token-card, .quick-link-card');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('animate-in');
            }
        });
    }

    // Run animation check on scroll and page load
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Component preview functionality
    function initializeComponentPreviews() {
        const componentCards = document.querySelectorAll('.component-card');

        componentCards.forEach(card => {
            const preview = card.querySelector('.component-preview');

            if (preview) {
                card.addEventListener('mouseenter', function() {
                    preview.style.transform = 'scale(1.05)';
                    preview.style.boxShadow = '0 10px 25px rgba(197, 249, 85, 0.2)';
                });

                card.addEventListener('mouseleave', function() {
                    preview.style.transform = 'scale(1)';
                    preview.style.boxShadow = 'none';
                });
            }
        });
    }

    initializeComponentPreviews();

    // Color palette copy functionality
    function initializeColorPalette() {
        const colorSwatches = document.querySelectorAll('.color-swatch');

        colorSwatches.forEach(swatch => {
            const colorValue = swatch.querySelector('.color-value');

            if (colorValue) {
                swatch.addEventListener('click', function() {
                    const value = colorValue.textContent;
                    navigator.clipboard.writeText(value).then(function() {
                        // Show copy feedback
                        const originalText = colorValue.textContent;
                        colorValue.textContent = 'Copied!';
                        colorValue.style.color = 'var(--color-primary)';

                        setTimeout(function() {
                            colorValue.textContent = originalText;
                            colorValue.style.color = '';
                        }, 1500);
                    }).catch(function(err) {
                        console.error('Failed to copy color value: ', err);
                    });
                });

                // Add cursor pointer to indicate clickable
                swatch.style.cursor = 'pointer';

                // Add hover effect
                swatch.addEventListener('mouseenter', function() {
                    swatch.style.transform = 'translateX(4px)';
                    swatch.style.transition = 'transform 0.2s ease';
                });

                swatch.addEventListener('mouseleave', function() {
                    swatch.style.transform = 'translateX(0)';
                });
            }
        });
    }

    initializeColorPalette();

    // Search functionality (if search element exists)
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const searchableElements = document.querySelectorAll('.component-card, .token-card, .quick-link-card');

            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    element.style.display = '';
                    element.classList.add('search-match');
                } else {
                    element.style.display = 'none';
                    element.classList.remove('search-match');
                }
            });

            // Show no results message if needed
            const visibleElements = document.querySelectorAll('.component-card:not([style*="display: none"]), .token-card:not([style*="display: none"]), .quick-link-card:not([style*="display: none"])');
            const noResultsMessage = document.getElementById('no-results');

            if (noResultsMessage) {
                if (visibleElements.length === 0 && searchTerm.length > 0) {
                    noResultsMessage.style.display = 'block';
                } else {
                    noResultsMessage.style.display = 'none';
                }
            }
        });
    }

    // Theme toggle (if theme toggle exists)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');

            // Update icon
            const icon = this.querySelector('i');
            if (document.body.classList.contains('light-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const navToggle = document.getElementById('nav-toggle');
            const navMenu = document.getElementById('nav-menu');

            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }

        // Alt + S focuses search
        if (e.altKey && e.key === 's') {
            const searchInput = document.getElementById('search');
            if (searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        }
    });

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll-heavy functions
    const debouncedUpdateActiveNav = debounce(updateActiveNav, 100);
    const debouncedAnimateOnScroll = debounce(animateOnScroll, 100);

    window.addEventListener('scroll', function() {
        debouncedUpdateActiveNav();
        debouncedAnimateOnScroll();
    });

    console.log('Meshy.ai Design System initialized successfully!');
});