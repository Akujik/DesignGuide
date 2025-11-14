// Meshy.ai Design System - Animations JavaScript

// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
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

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animation interactions
    initAnimationInteractions();

    // Progress bar animation
    initProgressBarAnimation();

    // Loading spinner demo
    initLoadingSpinnerDemo();

    // Demo box click interactions
    initDemoBoxInteractions();
});

// Animation interaction controls
function initAnimationInteractions() {
    // Add click to replay functionality to animated elements
    const animatedElements = document.querySelectorAll('.demo-box, .spinner, .progress-fill');

    animatedElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.title = '点击重播动画';

        element.addEventListener('click', function() {
            // Remove animation class
            this.style.animation = 'none';

            // Force reflow
            this.offsetHeight;

            // Re-add animation class
            const animations = {
                'demo-box fade-in-animation': 'fadeIn 1s ease-in-out infinite alternate',
                'demo-box slide-in-animation': 'slideIn 1s ease-in-out infinite alternate',
                'demo-box scale-animation': 'scale 1s ease-in-out infinite alternate',
                'demo-box rotate-animation': 'rotate 2s linear infinite',
                'spinner': 'spin 1s linear infinite',
                'progress-fill': 'progress 2s ease-in-out infinite alternate'
            };

            for (const [className, animation] of Object.entries(animations)) {
                if (this.classList.contains(className.split(' ')[1])) {
                    this.style.animation = animation;
                    break;
                }
            }
        });
    });
}

// Progress bar animation controls
function initProgressBarAnimation() {
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        // Add click to pause/resume functionality
        let isPaused = false;

        progressBar.addEventListener('click', function() {
            if (isPaused) {
                this.style.animationPlayState = 'running';
                this.parentElement.style.cursor = 'pointer';
                this.parentElement.title = '点击暂停动画';
            } else {
                this.style.animationPlayState = 'paused';
                this.parentElement.style.cursor = 'pointer';
                this.parentElement.title = '点击继续动画';
            }
            isPaused = !isPaused;
        });

        progressBar.parentElement.style.cursor = 'pointer';
        progressBar.parentElement.title = '点击暂停动画';
    }
}

// Loading spinner demo controls
function initLoadingSpinnerDemo() {
    const spinner = document.querySelector('.spinner');
    if (spinner) {
        // Add click to change speed functionality
        let speed = 1;
        const speeds = [0.5, 1, 2, 3];
        let currentIndex = 1;

        spinner.parentElement.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % speeds.length;
            speed = speeds[currentIndex];
            spinner.style.animationDuration = (1 / speed) + 's';

            const speedText = speed < 1 ? '慢速' : speed === 1 ? '正常' : '快速';
            spinner.parentElement.title = `点击切换速度 (当前: ${speedText})`;
        });

        spinner.parentElement.style.cursor = 'pointer';
        spinner.parentElement.title = '点击切换速度 (当前: 正常)';
    }
}

// Demo box interactions
function initDemoBoxInteractions() {
    const demoBoxes = document.querySelectorAll('.demo-box');

    demoBoxes.forEach(box => {
        // Add hover to pause animation
        box.addEventListener('mouseenter', function() {
            if (this.style.animation && this.style.animation !== 'none') {
                this.style.animationPlayState = 'paused';
            }
        });

        box.addEventListener('mouseleave', function() {
            if (this.style.animation && this.style.animation !== 'none') {
                this.style.animationPlayState = 'running';
            }
        });

        // Add keyboard support
        box.setAttribute('tabindex', '0');
        box.setAttribute('role', 'button');
        box.setAttribute('aria-label', '动画演示元素，点击重播');

        box.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Utility function to copy animation CSS to clipboard
function copyAnimationToClipboard(animationName, animationCSS) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(animationCSS).then(function() {
            showNotification('动画CSS已复制到剪贴板');
        }).catch(function() {
            showNotification('复制失败，请手动复制');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = animationCSS;
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            showNotification('动画CSS已复制到剪贴板');
        } catch (err) {
            showNotification('复制失败，请手动复制');
        }

        document.body.removeChild(textArea);
    }
}

// Show notification toast
function showNotification(message) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification-toast');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification-toast';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--color-surface-light);
        border: 1px solid var(--color-primary);
        border-radius: var(--radius-md);
        padding: var(--space-3) var(--space-4);
        color: var(--color-text-primary);
        font-size: var(--font-size-sm);
        z-index: var(--z-toast);
        transform: translateX(100%);
        transition: transform var(--transition-normal);
    `;

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Performance monitoring for animations
function monitorAnimationPerformance() {
    const performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure' && entry.name.includes('animation')) {
                if (entry.duration > 16.67) { // More than 60fps threshold
                    console.warn(`Animation "${entry.name}" took ${entry.duration.toFixed(2)}ms, which may cause performance issues`);
                }
            }
        }
    });

    try {
        performanceObserver.observe({ entryTypes: ['measure'] });
    } catch (e) {
        // PerformanceObserver not supported
        console.log('Performance monitoring not available');
    }
}

// Accessibility enhancements
function enhanceAccessibility() {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function updateAnimations(reduced) {
        if (reduced) {
            document.body.classList.add('reduced-motion');
            showNotification('已启用减少动画模式');
        } else {
            document.body.classList.remove('reduced-motion');
        }
    }

    updateAnimations(prefersReducedMotion.matches);
    prefersReducedMotion.addEventListener('change', (e) => updateAnimations(e.matches));

    // Add keyboard navigation for component cards
    const componentCards = document.querySelectorAll('.component-card');
    componentCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');

        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const demoBox = this.querySelector('.demo-box, .interactive-card, .loading-spinner, .progress-bar');
                if (demoBox) {
                    demoBox.click();
                }
            }
        });
    });
}

// Initialize accessibility features
enhanceAccessibility();
monitorAnimationPerformance();

// Add smooth reveal animation to elements when they come into view
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-revealed');

                // Only observe once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe section headers and cards
    const elementsToReveal = document.querySelectorAll('.section-header, .token-card, .component-card');
    elementsToReveal.forEach(element => {
        element.classList.add('scroll-reveal');
        observer.observe(element);
    });
}

// Initialize scroll reveal if not in reduced motion mode
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    initScrollReveal();
}

// Add CSS for scroll reveal and reduced motion
const additionalCSS = `
    .scroll-reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity var(--transition-normal), transform var(--transition-normal);
    }

    .scroll-revealed {
        opacity: 1;
        transform: translateY(0);
    }

    .reduced-motion .scroll-reveal,
    .reduced-motion .scroll-revealed {
        opacity: 1;
        transform: none;
        transition: none;
    }

    .notification-toast {
        font-family: var(--font-family-primary);
    }
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);