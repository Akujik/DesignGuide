// Design System Preview JavaScript
// Interactive features and utilities

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  initializePreview();
});

function initializePreview() {
  // Initialize all interactive features
  initializeCopyButtons();
  initializeColorCopy();
  initializeNavigation();
  initializeThemeToggle();
  initializeComponentInteractions();
  initializeCodeToggle();
}

// Copy button functionality
function initializeCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', async function() {
      const codeBlock = this.closest('.code-example').querySelector('code');
      const text = codeBlock.textContent;

      try {
        await navigator.clipboard.writeText(text);

        // Update button state
        const originalHTML = this.innerHTML;
        this.classList.add('copied');
        this.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          Copied!
        `;

        // Reset button after 2 seconds
        setTimeout(() => {
          this.classList.remove('copied');
          this.innerHTML = originalHTML;
        }, 2000);

      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
}

// Color copy functionality
function initializeColorCopy() {
  const colorSwatches = document.querySelectorAll('.color-preview');

  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', async function() {
      const colorValue = this.dataset.color;

      if (!colorValue) return;

      try {
        await navigator.clipboard.writeText(colorValue);

        // Show feedback
        showCopyFeedback(this, colorValue);

      } catch (err) {
        console.error('Failed to copy color: ', err);
      }
    });

    // Add hover effect
    swatch.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
      this.style.transform = 'scale(1.02)';
    });

    swatch.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// Show copy feedback
function showCopyFeedback(element, value) {
  const feedback = document.createElement('div');
  feedback.className = 'copy-feedback';
  feedback.textContent = `Copied: ${value}`;
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--color-semantic-success-base);
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    z-index: 1000;
    animation: slideInRight 0.3s ease;
  `;

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(feedback);
    }, 300);
  }, 2000);
}

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.sidebar-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Update active state
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Smooth scroll to section if it's an anchor link
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Theme toggle functionality
function initializeThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('light-theme');

      // Save preference
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');

      // Update button text
      this.textContent = isLight ? '🌙 Dark' : '☀️ Light';
    });

    // Load saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      themeToggle.textContent = '🌙 Dark';
    }
  }
}

// Component interactions
function initializeComponentInteractions() {
  // Button states
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    // Ripple effect
    button.addEventListener('click', function(e) {
      if (this.classList.contains('disabled') || this.disabled) return;

      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Card interactions
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Form input interactions
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach(input => {
    // Focus animation
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });

    // Validation simulation
    input.addEventListener('input', function() {
      if (this.hasAttribute('data-validate')) {
        validateInput(this);
      }
    });
  });
}

// Form validation simulation
function validateInput(input) {
  const type = input.getAttribute('data-validate');
  const value = input.value.trim();
  const formGroup = input.closest('.form-group');

  // Remove previous validation states
  input.classList.remove('form-error', 'form-success');
  if (formGroup) {
    const errorMessage = formGroup.querySelector('.form-error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  }

  if (!value) return;

  let isValid = true;
  let message = '';

  switch (type) {
    case 'email':
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      message = isValid ? 'Valid email address' : 'Please enter a valid email address';
      break;
    case 'password':
      isValid = value.length >= 8;
      message = isValid ? 'Strong password' : 'Password must be at least 8 characters';
      break;
    case 'required':
      isValid = value.length > 0;
      message = isValid ? 'Field is complete' : 'This field is required';
      break;
  }

  if (value) {
    if (isValid) {
      input.classList.add('form-success');
    } else {
      input.classList.add('form-error');
      if (formGroup) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
          font-size: 13px;
          color: var(--color-semantic-error-base);
          margin-top: 4px;
        `;
        formGroup.appendChild(errorDiv);
      }
    }
  }
}

// Component showcase features
class ComponentShowcase {
  constructor() {
    this.init();
  }

  init() {
    this.initializeShowcase();
    this.initializeLivePreview();
    this.initializeCodeGeneration();
  }

  initializeShowcase() {
    // Add interactive previews for components
    const showcaseElements = document.querySelectorAll('.component-preview');

    showcaseElements.forEach(element => {
      this.addInteractiveFeatures(element);
    });
  }

  addInteractiveFeatures(container) {
    // Add hover effects to components
    const components = container.querySelectorAll('.button, .card, .form-input');

    components.forEach(component => {
      component.addEventListener('mouseenter', () => {
        component.style.transition = 'all 0.3s ease';
      });
    });
  }

  initializeLivePreview() {
    // Live preview for custom components
    const liveEditors = document.querySelectorAll('.live-editor');

    liveEditors.forEach(editor => {
      this.setupLiveEditor(editor);
    });
  }

  setupLiveEditor(editor) {
    const textarea = editor.querySelector('textarea');
    const preview = editor.querySelector('.live-preview');

    if (!textarea || !preview) return;

    const updatePreview = () => {
      try {
        preview.innerHTML = textarea.value;
      } catch (e) {
        preview.innerHTML = '<div style="color: var(--color-semantic-error-base);">Preview Error</div>';
      }
    };

    textarea.addEventListener('input', updatePreview);
    updatePreview(); // Initial render
  }

  initializeCodeGeneration() {
    // Generate code for components
    const codeButtons = document.querySelectorAll('.generate-code-btn');

    codeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const component = button.getAttribute('data-component');
        this.generateComponentCode(component);
      });
    });
  }

  generateComponentCode(componentName) {
    const component = document.querySelector(`[data-component-name="${componentName}"]`);
    if (!component) return;

    const html = this.getComponentHTML(component);
    const css = this.getComponentCSS(component);

    this.showCodeModal(html, css, componentName);
  }

  getComponentHTML(element) {
    // Clone and clean up the HTML
    const clone = element.cloneNode(true);

    // Remove preview-specific attributes
    clone.removeAttribute('data-component-name');

    // Remove interactive elements added by preview
    const interactiveElements = clone.querySelectorAll('.preview-controls, .code-overlay');
    interactiveElements.forEach(el => el.remove());

    // Format HTML
    return this.formatHTML(clone.outerHTML);
  }

  getComponentCSS(element) {
    // Extract computed styles relevant to the component
    const styles = window.getComputedStyle(element);
    const relevantProperties = [
      'background-color', 'color', 'border', 'border-radius', 'padding',
      'margin', 'font-size', 'font-weight', 'display', 'flex-direction',
      'gap', 'transition', 'transform', 'box-shadow'
    ];

    let css = `.component {\n`;
    relevantProperties.forEach(prop => {
      const value = styles.getPropertyValue(prop);
      if (value && value !== 'initial' && value !== 'normal') {
        css += `  ${prop}: ${value};\n`;
      }
    });
    css += `}`;

    return css;
  }

  formatHTML(html) {
    // Simple HTML formatting
    return html
      .replace(/></g, '>\n<')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map((line, index) => {
        const depth = (line.match(/^\s*<\//) ? -1 : 0) +
                     (line.match(/^\s*<[^\/>][^>]*[^\/]>/) ? 1 : 0);
        return '  '.repeat(Math.max(0, depth)) + line;
      })
      .join('\n');
  }

  showCodeModal(html, css, componentName) {
    // Create modal to show generated code
    const modal = document.createElement('div');
    modal.className = 'code-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;

    modal.innerHTML = `
      <div style="
        background: var(--color-bg-sub);
        border: 1px solid var(--color-bg-border);
        border-radius: 12px;
        max-width: 800px;
        max-height: 80vh;
        overflow: auto;
        padding: 24px;
        position: relative;
      ">
        <button onclick="this.parentElement.parentElement.remove()" style="
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: var(--color-label-soft);
          font-size: 20px;
          cursor: pointer;
        ">×</button>

        <h2 style="margin: 0 0 16px 0; color: var(--color-label-title);">
          ${componentName} Component Code
        </h2>

        <div style="margin-bottom: 16px;">
          <h3 style="color: var(--color-label-base); font-size: 14px; margin: 0 0 8px 0;">HTML:</h3>
          <pre style="
            background: var(--color-bg-base);
            border: 1px solid var(--color-bg-border);
            border-radius: 8px;
            padding: 16px;
            overflow-x: auto;
            margin: 0;
          "><code>${this.escapeHTML(html)}</code></pre>
        </div>

        <div>
          <h3 style="color: var(--color-label-base); font-size: 14px; margin: 0 0 8px 0;">CSS:</h3>
          <pre style="
            background: var(--color-bg-base);
            border: 1px solid var(--color-bg-border);
            border-radius: 8px;
            padding: 16px;
            overflow-x: auto;
            margin: 0;
          "><code>${this.escapeHTML(css)}</code></pre>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize component showcase
const showcase = new ComponentShowcase();

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .copy-feedback {
    animation: slideInRight 0.3s ease;
  }
`;
document.head.appendChild(style);

// Code toggle functionality
function initializeCodeToggle() {
  // Handle code-example elements
  const codeExamples = document.querySelectorAll('.code-example');

  codeExamples.forEach(example => {
    initializeCodeExample(example);
  });

  // Handle component-code elements
  const componentCodes = document.querySelectorAll('.component-code');

  componentCodes.forEach(code => {
    initializeComponentCode(code);
  });
}

function initializeCodeExample(example) {
  // Start with collapsed state
  example.classList.add('collapsed');

  // Get the header and modify it to include toggle button
  const header = example.querySelector('.code-header');
  if (header && !header.querySelector('.toggle-code-btn')) {
    // Create control container
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'code-header-controls';

    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-code-btn';
    toggleBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
      显示代码
    `;

    // Find the copy button and move it to controls container
    const copyBtn = header.querySelector('.copy-btn');
    if (copyBtn) {
      controlsContainer.appendChild(copyBtn);
    }

    // Add toggle button to controls container
    controlsContainer.appendChild(toggleBtn);

    // Replace header content
    const title = header.querySelector('.code-title');
    header.innerHTML = '';
    if (title) {
      header.appendChild(title);
    }
    header.appendChild(controlsContainer);

    // Add click event to toggle button
    toggleBtn.addEventListener('click', function() {
      toggleCodeExample(example, this);
    });
  }
}

function initializeComponentCode(code) {
  // Start with collapsed state
  code.classList.add('collapsed');

  // Find the copy button
  const copyBtn = code.querySelector('.copy-button');

  if (copyBtn && !code.querySelector('.toggle-code-btn')) {
    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-code-btn';
    toggleBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
      显示代码
    `;

    // Insert toggle button before copy button
    copyBtn.parentNode.insertBefore(toggleBtn, copyBtn);

    // Add click event to toggle button
    toggleBtn.addEventListener('click', function() {
      toggleComponentCode(code, this);
    });
  }
}

function toggleCodeExample(example, toggleBtn) {
  const isCollapsed = example.classList.contains('collapsed');

  if (isCollapsed) {
    example.classList.remove('collapsed');
    toggleBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 9l6 6 6-6"/>
      </svg>
      隐藏代码
    `;
  } else {
    example.classList.add('collapsed');
    toggleBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
      显示代码
    `;
  }
}

function toggleComponentCode(code, toggleBtn) {
  const isCollapsed = code.classList.contains('collapsed');
  const codeBlock = code.querySelector('pre, code');

  if (isCollapsed) {
    code.classList.remove('collapsed');
    if (codeBlock) {
      codeBlock.style.display = 'block';
    }
    toggleBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 9l6 6 6-6"/>
      </svg>
      隐藏代码
    `;
  } else {
    code.classList.add('collapsed');
    if (codeBlock) {
      codeBlock.style.display = 'none';
    }
    toggleBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
      显示代码
    `;
  }
}

// Export utilities for external use
window.DesignSystemPreview = {
  ComponentShowcase,
  showCopyFeedback,
  validateInput
};