// Meshy.ai Design System JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }

    // Code block toggle functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.code-header')) {
            const codeBlock = e.target.closest('.code-block');
            const toggleBtn = codeBlock.querySelector('.code-toggle');
            const content = codeBlock.querySelector('.code-content');
            const toggleText = toggleBtn.querySelector('.toggle-text');
            const toggleIcon = toggleBtn.querySelector('.toggle-icon');

            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                toggleText.textContent = '展开';
                toggleIcon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('expanded');
                toggleText.textContent = '收起';
                toggleIcon.style.transform = 'rotate(180deg)';
            }
        }
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const searchableElements = document.querySelectorAll('.variant-card, .component-card');

            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    element.style.display = '';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    }

    // Copy to clipboard functionality
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('代码已复制到剪贴板');
            }).catch(() => {
                showNotification('复制失败，请手动复制');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();

            try {
                document.execCommand('copy');
                showNotification('代码已复制到剪贴板');
            } catch (err) {
                showNotification('复制失败，请手动复制');
            }

            document.body.removeChild(textArea);
        }
    }

    // Show notification
    function showNotification(message) {
        const existingNotification = document.querySelector('.notification-toast');
        if (existingNotification) {
            existingNotification.remove();
        }

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
            z-index: 1000;
            transform: translateX(100%);
            transition: transform var(--transition-normal);
        `;

        document.body.appendChild(notification);

        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Make copyToClipboard function globally available
    window.copyToClipboard = copyToClipboard;
});

// Additional code block functionality for legacy elements
function convertLegacyCodeBlocks() {
    const legacyExamples = document.querySelectorAll('.code-example');

    legacyExamples.forEach((example) => {
        // Skip if already converted
        if (example.querySelector('.code-header')) return;

        const code = example.querySelector('code');
        if (code) {
            // Create new expandable structure
            const codeBlock = document.createElement('div');
            codeBlock.className = 'code-block';

            // Create header
            const header = document.createElement('div');
            header.className = 'code-header';

            const title = document.createElement('h4');
            title.className = 'code-title';
            title.textContent = '代码示例';

            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'code-toggle';
            toggleBtn.innerHTML = `
                <span class="toggle-text">展开</span>
                <span class="toggle-icon">▼</span>
            `;

            header.appendChild(title);
            header.appendChild(toggleBtn);

            // Create content
            const content = document.createElement('div');
            content.className = 'code-content';

            const pre = document.createElement('pre');
            pre.appendChild(code.cloneNode(true));

            content.appendChild(pre);

            // Assemble new structure
            codeBlock.appendChild(header);
            codeBlock.appendChild(content);

            // Replace old example
            example.parentNode.replaceChild(codeBlock, example);
        }
    });
}

// Convert legacy code blocks after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(convertLegacyCodeBlocks, 100);
});