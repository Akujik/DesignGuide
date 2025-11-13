// Meshy AI 设计系统预览脚本

// 复制代码功能
function copyCode(button) {
  const codeContent = button.closest('.code-example').querySelector('code').textContent;
  navigator.clipboard.writeText(codeContent).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Copy Failed:', err);
    button.textContent = 'Copy Failed';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
}

// 主题切换功能
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    themeToggle.innerHTML = newTheme === 'light'
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></svg>';
  });
}

// 侧边栏高亮当前页面
function initSidebarHighlight() {
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.sidebar-nav-item');

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && currentPath.includes(href)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// 颜色复制功能
function copyColor(colorValue) {
  navigator.clipboard.writeText(colorValue).then(() => {
    showNotification(`已复制颜色值: ${colorValue}`);
  }).catch(err => {
    console.error('Copy Failed:', err);
    showNotification('Copy Failed', 'error');
  });
}

// 显示通知
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${type === 'error' ? 'var(--color-error)' : 'var(--color-success)'};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    z-index: 10000;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideUp 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// 平滑滚动
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 添加页面加载动画
function initPageAnimations() {
  const components = document.querySelectorAll('.component-showcase');
  components.forEach((component, index) => {
    component.style.opacity = '0';
    component.style.transform = 'translateY(20px)';

    setTimeout(() => {
      component.style.transition = 'all 0.6s ease-out';
      component.style.opacity = '1';
      component.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// 添加交互式组件演示
function initInteractiveDemo() {
  // 按钮点击效果
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(e) {
      // 创建涟漪效果
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
        background: rgba(255, 255, 255, 0.6);
        left: ${x}px;
        top: ${y}px;
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// 添加键盘快捷键
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 快速搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.querySelector('.search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }

    // Ctrl/Cmd + / 显示快捷键帮助
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      e.preventDefault();
      showNotification('Ctrl+K: 搜索 | T: 切换主题');
    }

    // T 切换主题
    if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const activeElement = document.activeElement;
      if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
        document.querySelector('.theme-toggle')?.click();
      }
    }
  });
}

// 添加CSS动画
function addCSSAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translate(-50%, 20px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translate(-50%, 0);
      }
      to {
        opacity: 0;
        transform: translate(-50%, -20px);
      }
    }

    @keyframes ripple {
      from {
        transform: scale(0);
        opacity: 1;
      }
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .notification {
      animation: slideUp 0.3s ease-out;
    }

    .notification.notification-error {
      background-color: var(--color-error);
    }

    .notification.notification-success {
      background-color: var(--color-success);
    }
  `;
  document.head.appendChild(style);
}

// ================================
// 导航组件交互功能
// ================================

// 下拉菜单交互
function initNavDropdowns() {
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown-menu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = dropdown.classList.contains('open');

      // 关闭所有其他下拉菜单
      document.querySelectorAll('.nav-dropdown').forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('open');
        }
      });

      // 切换当前下拉菜单
      dropdown.classList.toggle('open');
    });

    // 点击菜单项关闭下拉
    menu.querySelectorAll('.nav-dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        dropdown.classList.remove('open');
      });
    });
  });

  // 点击外部关闭所有下拉菜单
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });
}

// 语言选择器交互
function initLanguageSelector() {
  document.querySelectorAll('.language-selector').forEach(selector => {
    const toggle = selector.querySelector('.language-toggle');
    const dropdown = selector.querySelector('.language-dropdown');

    if (!toggle || !dropdown) return;

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = selector.classList.contains('open');

      // 关闭其他语言选择器
      document.querySelectorAll('.language-selector').forEach(other => {
        if (other !== selector) {
          other.classList.remove('open');
        }
      });

      // 关闭其他下拉菜单
      document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
      });

      // 切换当前语言选择器
      selector.classList.toggle('open');
    });

    // 点击语言选项
    dropdown.querySelectorAll('.language-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const selectedLang = option.querySelector('.language-name')?.textContent || option.textContent;
        const selectedFlag = option.querySelector('.language-flag')?.innerHTML || '';

        // 更新显示
        const flagContainer = toggle.querySelector('.language-flag');
        const nameContainer = toggle.querySelector('.language-name');

        if (flagContainer) flagContainer.innerHTML = selectedFlag;
        if (nameContainer) nameContainer.textContent = selectedLang;

        // 更新活动状态
        dropdown.querySelectorAll('.language-option').forEach(opt => {
          opt.classList.remove('active');
        });
        option.classList.add('active');

        // 关闭下拉菜单
        selector.classList.remove('open');

        // 保存语言偏好
        localStorage.setItem('preferred-language', selectedLang);

        showNotification(`语言已切换到: ${selectedLang}`);
      });
    });

    // 点击外部关闭语言选择器
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.language-selector')) {
        selector.classList.remove('open');
      }
    });
  });
}

// 标签页交互
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabsContainer => {
    const tabButtons = tabsContainer.querySelectorAll('.tab');
    const tabPanels = tabsContainer.querySelectorAll('.tab-panel');

    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // 移除所有活动状态
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // 设置当前活动状态
        button.classList.add('active');
        const targetPanel = document.getElementById(button.getAttribute('data-tab') || `tab-content-${index + 1}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
          targetPanel.style.display = 'block';
        }

        // 隐藏其他面板
        tabPanels.forEach(panel => {
          if (panel !== targetPanel) {
            panel.classList.remove('active');
            panel.style.display = 'none';
          }
        });
      });
    });
  });
}

// 分页交互
function initPagination() {
  document.querySelectorAll('.pagination').forEach(pagination => {
    const items = pagination.querySelectorAll('.pagination-item');

    items.forEach(item => {
      item.addEventListener('click', (e) => {
        if (item.disabled) return;

        // 移除所有活动状态
        pagination.querySelectorAll('.pagination-item').forEach(i => {
          i.classList.remove('active');
        });

        // 设置活动状态（如果不是 prev/next 按钮）
        if (!item.classList.contains('prev') && !item.classList.contains('next')) {
          item.classList.add('active');
        }
      });
    });
  });
}

// 面包屑导航增强
function initBreadcrumb() {
  document.querySelectorAll('.breadcrumb').forEach(breadcrumb => {
    const items = breadcrumb.querySelectorAll('.breadcrumb-item');

    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.color = 'var(--color-accent-base)';
      });

      item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('active')) {
          item.style.color = 'var(--color-label-base)';
        }
      });
    });
  });
}

// 步骤导航交互
function initSteps() {
  document.querySelectorAll('.steps').forEach(steps => {
    const stepItems = steps.querySelectorAll('.step');

    stepItems.forEach((step, index) => {
      // 点击步骤
      step.addEventListener('click', () => {
        // 移除所有活动状态
        stepItems.forEach(s => s.classList.remove('active'));

        // 设置当前及之前步骤为完成状态
        for (let i = 0; i <= index; i++) {
          if (i < index) {
            stepItems[i].classList.add('completed');
            stepItems[i].classList.remove('active');
          } else if (i === index) {
            stepItems[i].classList.add('active');
            stepItems[i].classList.remove('completed');
          }
        }
      });
    });
  });
}

// 移动端导航切换
function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');

  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('open');

    if (isOpen) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    } else {
      sidebar.classList.add('open');
      overlay.classList.add('active');
    }
  });

  // 点击遮罩层关闭
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });

  // ESC 键关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }
  });
}

// 导航状态管理
function initNavigationState() {
  // 从 URL 获取当前页面
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';

  // 更新侧边栏导航状态
  document.querySelectorAll('.sidebar-nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage.replace('.html', ''))) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // 更新主导航状态
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage.replace('.html', ''))) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// 键盘导航支持
function initKeyboardNavigation() {
  // Tab 键在导航元素之间切换
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      // 让浏览器处理默认的 Tab 行为
      return;
    }

    // ESC 键关闭所有下拉菜单
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown, .language-selector').forEach(element => {
        element.classList.remove('open');
      });
    }

    // 方向键导航下拉菜单
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const activeDropdown = document.querySelector('.nav-dropdown.open .nav-dropdown-menu, .language-selector.open .language-dropdown');
      if (activeDropdown) {
        e.preventDefault();
        const items = activeDropdown.querySelectorAll(':scope > *');
        const currentIndex = Array.from(items).findIndex(item => item === document.activeElement);

        let nextIndex;
        if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        }

        if (items[nextIndex]) {
          items[nextIndex].focus();
        }
      }
    }
  });
}

// 语言偏好加载
function loadLanguagePreference() {
  const preferredLanguage = localStorage.getItem('preferred-language');
  if (preferredLanguage) {
    // 尝试找到匹配的语言选项
    document.querySelectorAll('.language-option').forEach(option => {
      const langName = option.querySelector('.language-name')?.textContent || option.textContent;
      if (langName === preferredLanguage) {
        option.classList.add('active');

        // 更新选择器显示
        const selector = option.closest('.language-selector');
        const toggle = selector?.querySelector('.language-toggle');
        if (toggle) {
          const flagContainer = toggle.querySelector('.language-flag');
          const nameContainer = toggle.querySelector('.language-name');
          const flag = option.querySelector('.language-flag')?.innerHTML || '';

          if (flagContainer) flagContainer.innerHTML = flag;
          if (nameContainer) nameContainer.textContent = langName;
        }
      }
    });
  }
}

// ================================
// 页脚组件交互功能
// ================================

// 页脚社交媒体链接点击跟踪
function initFooterSocialTracking() {
  document.querySelectorAll('.footer-social-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const platform = this.querySelector('svg')?.getAttribute('aria-label') || 'unknown';

      // 发送分析数据（模拟）
      if (typeof gtag !== 'undefined') {
        gtag('event', 'social_share', {
          platform: platform,
          location: 'footer'
        });
      }

      console.log(`社交媒体链接点击: ${platform}`);
    });
  });
}

// 页脚邮件订阅表单
function initFooterSubscribe() {
  const subscribeForm = document.querySelector('.footer-subscribe-form');
  const subscribeInput = document.querySelector('.footer-subscribe-input');
  const subscribeButton = document.querySelector('.footer-subscribe-button');

  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = subscribeInput?.value?.trim();
      if (!email) {
        showNotification('请输入邮箱地址', 'error');
        return;
      }

      // 邮箱格式验证
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification('请输入有效的邮箱地址', 'error');
        return;
      }

      // 模拟订阅过程
      if (subscribeButton) {
        const originalText = subscribeButton.textContent;
        subscribeButton.textContent = '订阅中...';
        subscribeButton.disabled = true;

        setTimeout(() => {
          showNotification('订阅成功！感谢您的关注。');
          subscribeButton.textContent = originalText;
          subscribeButton.disabled = false;

          // 清空输入框
          if (subscribeInput) {
            subscribeInput.value = '';
          }
        }, 1500);
      }
    });
  }
}

// 页脚链接点击分析
function initFooterLinkTracking() {
  document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const linkText = this.textContent?.trim() || 'unknown';
      const linkCategory = this.closest('.footer-section')?.querySelector('.footer-title')?.textContent || 'uncategorized';

      // 发送分析数据（模拟）
      if (typeof gtag !== 'undefined') {
        gtag('event', 'footer_link_click', {
          link_text: linkText,
          category: linkCategory,
          location: 'footer'
        });
      }

      console.log(`页脚链接点击: ${linkText} (${linkCategory})`);
    });
  });
}

// 页脚应用下载跟踪
function initFooterAppTracking() {
  document.querySelectorAll('.footer-app-button').forEach(button => {
    button.addEventListener('click', function(e) {
      const appType = this.querySelector('.footer-app-button-large')?.textContent || 'unknown';

      // 发送分析数据（模拟）
      if (typeof gtag !== 'undefined') {
        gtag('event', 'app_download', {
          app_type: appType,
          location: 'footer'
        });
      }

      console.log(`应用下载点击: ${appType}`);
    });
  });
}

// 页脚返回顶部功能
function initFooterBackToTop() {
  const backToTopButton = document.querySelector('.footer-back-to-top');

  if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();

      // 平滑滚动到顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      // 添加焦点到页面顶部元素（提高可访问性）
      const mainContent = document.querySelector('main, .main-content, h1');
      if (mainContent) {
        mainContent.focus();
      }
    });
  }
}

// 页脚语言切换功能（与主导航语言选择器同步）
function initFooterLanguageSync() {
  const footerLanguageOptions = document.querySelectorAll('.footer-language-option');

  footerLanguageOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();

      const selectedLang = this.dataset.lang || this.textContent.trim();

      // 更新主导航语言选择器
      const mainLanguageOptions = document.querySelectorAll('.language-option');
      mainLanguageOptions.forEach(mainOption => {
        const mainLangName = mainOption.querySelector('.language-name')?.textContent || mainOption.textContent;
        if (mainLangName === selectedLang || mainOption.dataset.lang === selectedLang) {
          mainOption.click(); // 触发主导航语言选择器的点击事件
        }
      });

      showNotification(`语言已切换到: ${selectedLang}`);
    });
  });
}

// 页脚主题切换功能（与主题按钮同步）
function initFooterThemeSync() {
  const footerThemeToggle = document.querySelector('.footer-theme-toggle');
  const mainThemeToggle = document.querySelector('.theme-toggle');

  if (footerThemeToggle && mainThemeToggle) {
    footerThemeToggle.addEventListener('click', function() {
      mainThemeToggle.click(); // 触发主导航主题切换
    });
  }
}

// 页脚无障碍功能
function initFooterAccessibility() {
  // 为页脚链接添加键盘支持
  document.querySelectorAll('.footer-social-link, .footer-link').forEach(link => {
    link.addEventListener('keydown', function(e) {
      // Enter 或 Space 键触发点击
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // 为页脚区域添加 ARIA 标签
  const footer = document.querySelector('.footer');
  if (footer && !footer.getAttribute('role')) {
    footer.setAttribute('role', 'contentinfo');
  }

  // 为页脚导航区域添加导航标签
  const footerNavSections = document.querySelectorAll('.footer-section .footer-links');
  footerNavSections.forEach(section => {
    if (!section.getAttribute('role')) {
      section.setAttribute('role', 'navigation');
      section.setAttribute('aria-label', '页脚导航');
    }
  });

  // 为社交媒体链接区域添加标签
  const socialLinks = document.querySelector('.footer-social-links');
  if (socialLinks && !socialLinks.getAttribute('aria-label')) {
    socialLinks.setAttribute('aria-label', '社交媒体链接');
  }
}

// 页脚懒加载图片优化
function initFooterLazyLoading() {
  const footerImages = document.querySelectorAll('.footer img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }

          observer.unobserve(img);
        }
      });
    });

    footerImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // 降级处理：直接加载所有图片
    footerImages.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
      }
    });
  }
}

// 页脚性能优化 - 防抖函数
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

// 页脚滚动显示/隐藏功能
function initFooterScrollEffect() {
  let lastScrollTop = 0;
  const footer = document.querySelector('.footer');

  if (!footer) return;

  const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 当页面接近底部时显示页脚增强效果
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    if (scrollPercentage > 70) {
      footer.classList.add('footer-visible');
    } else {
      footer.classList.remove('footer-visible');
    }

    lastScrollTop = scrollTop;
  }, 100);

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// 页脚CSS动画添加
function addFooterAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .footer-visible {
      animation: footerSlideIn 0.3s ease-out;
    }

    @keyframes footerSlideIn {
      from {
        transform: translateY(10px);
        opacity: 0.8;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .footer-social-link {
      transition: all var(--transition-slow);
    }

    .footer-app-button {
      transition: all var(--transition-slow);
    }

    .footer-link {
      transition: all var(--transition-slow);
    }

    img.loaded {
      animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

// 初始化所有页脚功能
function initFooterComponents() {
  initFooterSocialTracking();
  initFooterSubscribe();
  initFooterLinkTracking();
  initFooterAppTracking();
  initFooterBackToTop();
  initFooterLanguageSync();
  initFooterThemeSync();
  initFooterAccessibility();
  initFooterLazyLoading();
  initFooterScrollEffect();
  addFooterAnimations();

  // Meshy 页脚特定功能
  initMeshyFooterLanguageSelector();

  console.log('页脚组件交互功能已初始化');
}

// Meshy 页脚语言选择器
function initMeshyFooterLanguageSelector() {
  const languageSelectors = document.querySelectorAll('.footer-meshy-language-selector');

  languageSelectors.forEach(selector => {
    const toggle = selector.querySelector('.footer-meshy-language-toggle');
    const dropdown = selector.querySelector('.footer-meshy-language-dropdown');

    if (!toggle || !dropdown) return;

    // 切换下拉菜单
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = selector.classList.contains('open');

      // 关闭所有其他语言选择器
      document.querySelectorAll('.footer-meshy-language-selector').forEach(other => {
        if (other !== selector) {
          other.classList.remove('open');
        }
      });

      // 切换当前选择器
      selector.classList.toggle('open');
    });

    // 语言选项点击
    const options = dropdown.querySelectorAll('.footer-meshy-language-option');
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const selectedLang = option.querySelector('span').textContent;
        const selectedFlag = option.querySelector('svg').innerHTML;

        // 更新按钮显示
        const toggleFlag = toggle.querySelector('svg');
        const toggleText = toggle.querySelector('span');

        if (toggleFlag) toggleFlag.innerHTML = selectedFlag;
        if (toggleText) toggleText.textContent = selectedLang;

        // 关闭下拉菜单
        selector.classList.remove('open');

        // 显示通知
        showNotification(`语言已切换到: ${selectedLang}`);

        // 保存偏好设置
        localStorage.setItem('meshy-footer-language', selectedLang);
      });
    });
  });

  // 点击外部关闭语言选择器
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.footer-meshy-language-selector')) {
      languageSelectors.forEach(selector => {
        selector.classList.remove('open');
      });
    }
  });

  // 加载保存的语言偏好
  const savedLanguage = localStorage.getItem('meshy-footer-language');
  if (savedLanguage) {
    languageSelectors.forEach(selector => {
      const toggle = selector.querySelector('.footer-meshy-language-toggle');
      const options = selector.querySelectorAll('.footer-meshy-language-option');

      options.forEach(option => {
        const langName = option.querySelector('span').textContent;
        if (langName === savedLanguage) {
          const flag = option.querySelector('svg').innerHTML;
          const toggleFlag = toggle?.querySelector('svg');
          const toggleText = toggle?.querySelector('span');

          if (toggleFlag) toggleFlag.innerHTML = flag;
          if (toggleText) toggleText.textContent = savedLanguage;
        }
      });
    });
  }
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
  addCSSAnimations();
  initThemeToggle();
  initSidebarHighlight();
  initSmoothScroll();
  initPageAnimations();
  initInteractiveDemo();
  initKeyboardShortcuts();

  // 导航功能
  initNavDropdowns();
  initLanguageSelector();
  initTabs();
  initPagination();
  initBreadcrumb();
  initSteps();
  initMobileNav();
  initNavigationState();
  initKeyboardNavigation();
  loadLanguagePreference();

  // 页脚功能
  initFooterComponents();

  // 头部导航功能
  initHeaderNavigation();

  // 新增组件功能
  initTabsComponent();
  initAccordionComponent();
  initTableComponent();

  console.log('Meshy AI 设计系统预览已加载');
  console.log('快捷键: Ctrl+K 搜索, T 切换主题, ESC 关闭下拉菜单');
});

// ===================================
// HEADER NAVIGATION FUNCTIONALITY
// ===================================

function initHeaderNavigation() {
  initHeaderDropdowns();
  initHeaderLanguageSelector();
  initMobileNavigation();
  initHeaderScrollEffects();
  initHeaderKeyboardNavigation();
}

// Header Dropdown Menus
function initHeaderDropdowns() {
  const dropdowns = document.querySelectorAll('.header-main .dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!toggle || !menu) return;

    // Toggle dropdown on click
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Close all other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('active');
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('active');
    });

    // Handle dropdown item clicks
    const items = dropdown.querySelectorAll('.dropdown-item');
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        // Remove active class from all items in this dropdown
        items.forEach(i => i.classList.remove('active'));

        // Add active class to clicked item
        item.classList.add('active');

        // Update toggle text if it has data-update attribute
        if (toggle.dataset.update) {
          toggle.innerHTML = item.innerHTML;
        }

        // Close dropdown
        dropdown.classList.remove('active');

        // Save to localStorage
        const dropdownId = toggle.getAttribute('aria-label') || 'dropdown';
        localStorage.setItem(`header-${dropdownId}-selection`, item.dataset.value || item.textContent.trim());
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-main .dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });

  // Close dropdowns on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });

  // Load saved dropdown selections
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (!toggle) return;

    const dropdownId = toggle.getAttribute('aria-label') || 'dropdown';
    const savedSelection = localStorage.getItem(`header-${dropdownId}-selection`);

    if (savedSelection) {
      const items = dropdown.querySelectorAll('.dropdown-item');
      const matchingItem = Array.from(items).find(item =>
        (item.dataset.value && item.dataset.value === savedSelection) ||
        item.textContent.trim() === savedSelection
      );

      if (matchingItem) {
        matchingItem.classList.add('active');
      }
    }
  });
}

// Header Language Selector
function initHeaderLanguageSelector() {
  const selector = document.querySelector('.header-main .language-selector');
  if (!selector) return;

  const toggle = selector.querySelector('.language-toggle');
  const dropdown = selector.querySelector('.language-dropdown');
  const options = selector.querySelectorAll('.language-option');

  if (!toggle || !dropdown) return;

  // Toggle language dropdown
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    selector.classList.toggle('active');

    // Close other dropdowns
    document.querySelectorAll('.header-main .dropdown').forEach(d => {
      if (d !== selector) {
        d.classList.remove('active');
      }
    });
  });

  // Handle language selection
  options.forEach(option => {
    option.addEventListener('click', () => {
      const langCode = option.dataset.lang;
      const langName = option.querySelector('.language-name').textContent;
      const flag = option.querySelector('.language-flag').textContent;

      // Update active state
      options.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');

      // Update toggle display
      const flagElement = toggle.querySelector('.language-flag');
      const textElement = toggle.querySelector('.language-text');

      if (flagElement) flagElement.textContent = flag;
      if (textElement) textElement.textContent = langName;

      // Save preference
      localStorage.setItem('header-language-preference', langCode);

      // Close dropdown
      selector.classList.remove('active');

      // Update page language if function exists
      if (typeof updatePageLanguage === 'function') {
        updatePageLanguage(langCode);
      }

      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('headerLanguageChanged', {
        detail: { languageCode: langCode, languageName: langName }
      }));
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-main .language-selector')) {
      selector.classList.remove('active');
    }
  });

  // Load saved language preference
  const savedLang = localStorage.getItem('header-language-preference');
  if (savedLang) {
    const matchingOption = Array.from(options).find(opt => opt.dataset.lang === savedLang);
    if (matchingOption) {
      matchingOption.click();
    }
  }
}

// Mobile Navigation
function initMobileNavigation() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const closeButton = document.querySelector('.mobile-drawer-close');
  const overlay = document.querySelector('.mobile-nav-overlay');

  if (!toggle || !drawer) return;

  // Toggle mobile navigation
  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('active');

    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // Close button functionality
  if (closeButton) {
    closeButton.addEventListener('click', closeMobileNav);
  }

  // Overlay click to close
  if (overlay) {
    overlay.addEventListener('click', closeMobileNav);
  }

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // Handle mobile nav links
  const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Only close if it's a hash link or same page
      const href = link.getAttribute('href');
      if (href && (href.startsWith('#') || href === window.location.pathname)) {
        setTimeout(closeMobileNav, 300);
      }
    });
  });

  function openMobileNav() {
    drawer.classList.add('active');
    toggle.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Create overlay if it doesn't exist
    if (!overlay) {
      const overlayElement = document.createElement('div');
      overlayElement.className = 'mobile-nav-overlay';
      overlayElement.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        z-index: 1000;
        opacity: 0;
        transition: opacity var(--transition-normal);
      `;
      document.body.appendChild(overlayElement);

      // Animate overlay in
      requestAnimationFrame(() => {
        overlayElement.style.opacity = '1';
      });

      // Add click handler
      overlayElement.addEventListener('click', closeMobileNav);
    }

    // Focus first focusable element
    requestAnimationFrame(() => {
      const firstFocusable = drawer.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    });
  }

  function closeMobileNav() {
    drawer.classList.remove('active');
    toggle.classList.remove('active');
    document.body.style.overflow = '';

    const overlayElement = document.querySelector('.mobile-nav-overlay');
    if (overlayElement) {
      overlayElement.style.opacity = '0';
      setTimeout(() => {
        overlayElement.remove();
      }, 300);
    }
  }

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768 && drawer.classList.contains('active')) {
        closeMobileNav();
      }
    }, 250);
  });
}

// Header Scroll Effects
function initHeaderScrollEffects() {
  const header = document.querySelector('.header-main');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let scrollDirection = 'down';
  let headerHeight = header.offsetHeight;

  // Update header height on resize
  const updateHeaderHeight = () => {
    headerHeight = header.offsetHeight;
  };
  window.addEventListener('resize', updateHeaderHeight);

  // Throttled scroll handler
  let ticking = false;
  const updateHeader = () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);

    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      scrollDirection = 'down';
    } else if (currentScrollY < lastScrollY) {
      scrollDirection = 'up';
    }

    // Apply scroll-based effects
    if (scrollDelta > 5) { // Only if significant scroll
      if (scrollDirection === 'down' && currentScrollY > headerHeight) {
        // Hide header when scrolling down past header height
        header.style.transform = 'translateY(-100%)';
      } else {
        // Show header when scrolling up or near top
        header.style.transform = 'translateY(0)';
      }
    }

    // Add/remove scrolled class for styling
    if (currentScrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Update blur effect based on scroll speed
    const scrollSpeed = Math.abs(currentScrollY - lastScrollY);
    if (scrollSpeed > 20) {
      header.classList.add('no-blur');
    } else {
      header.classList.remove('no-blur');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // Initial state
  updateHeader();
}

// Header Keyboard Navigation
function initHeaderKeyboardNavigation() {
  const header = document.querySelector('.header-main');
  if (!header) return;

  // Make header focusable
  header.setAttribute('tabindex', '-1');

  // Handle Tab key navigation within header
  header.addEventListener('keydown', (e) => {
    const focusableElements = header.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab - going backwards
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab - going forwards
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    // Escape key - close dropdowns and mobile nav
    if (e.key === 'Escape') {
      const activeDropdowns = header.querySelectorAll('.dropdown.active');
      const activeLanguageSelector = header.querySelector('.language-selector.active');
      const activeMobileNav = document.querySelector('.mobile-nav-drawer.active');

      activeDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });

      if (activeLanguageSelector) {
        activeLanguageSelector.classList.remove('active');
      }

      if (activeMobileNav) {
        document.querySelector('.mobile-nav-toggle').click();
      }
    }

    // Alt + M - Toggle mobile navigation
    if (e.altKey && e.key === 'm') {
      e.preventDefault();
      const mobileToggle = document.querySelector('.mobile-nav-toggle');
      if (mobileToggle) {
        mobileToggle.click();
      }
    }

    // Alt + L - Open language selector
    if (e.altKey && e.key === 'l') {
      e.preventDefault();
      const langToggle = header.querySelector('.language-toggle');
      if (langToggle) {
        langToggle.click();
      }
    }
  });

  // Add ARIA live region for screen reader announcements
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.style.cssText = `
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `;
  document.body.appendChild(liveRegion);

  // Helper function to announce changes
  window.announceToScreenReader = (message) => {
    liveRegion.textContent = message;
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  };
}

// ===================================
// HEADER NAVIGATION UTILITY FUNCTIONS
// ===================================

// Get current active language
function getCurrentHeaderLanguage() {
  const selector = document.querySelector('.header-main .language-selector');
  if (!selector) return 'zh';

  const activeOption = selector.querySelector('.language-option.active');
  return activeOption ? activeOption.dataset.lang : 'zh';
}

// Set header language programmatically
function setHeaderLanguage(langCode) {
  const selector = document.querySelector('.header-main .language-selector');
  if (!selector) return;

  const option = selector.querySelector(`.language-option[data-lang="${langCode}"]`);
  if (option) {
    option.click();
  }
}

// Close all header dropdowns
function closeAllHeaderDropdowns() {
  document.querySelectorAll('.header-main .dropdown.active, .header-main .language-selector.active').forEach(element => {
    element.classList.remove('active');
  });
}

// Check if mobile navigation is open
function isMobileNavOpen() {
  const drawer = document.querySelector('.mobile-nav-drawer');
  return drawer ? drawer.classList.contains('active') : false;
}

// Toggle mobile navigation programmatically
function toggleMobileNavigation() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  if (toggle) {
    toggle.click();
  }
}

// ===================================
// TABS COMPONENT FUNCTIONALITY
// ===================================

function initTabsComponent() {
  // 处理标签页切换 - 修复以匹配HTML结构
  document.querySelectorAll('.tab-button, .tabs-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      const container = this.closest('.tabs, .tabs-nav, .tabs-container');

      if (!container) return;

      // 移除所有标签页的活动状态
      container.querySelectorAll('.tab-button, .tabs-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.tab-panel, .tabs-panel').forEach(p => p.classList.remove('active'));

      // 激活当前标签页
      this.classList.add('active');

      // 查找对应的面板
      const targetPanel = container.querySelector(`[data-panel="${tabId}"]`);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.style.display = 'block';
      }

      // 隐藏其他面板
      container.querySelectorAll('.tab-panel, .tabs-panel').forEach(panel => {
        if (panel !== targetPanel) {
          panel.classList.remove('active');
          panel.style.display = 'none';
        }
      });
    });
  });

  // 键盘导航支持 - 修复选择器
  document.querySelectorAll('.tabs, .tabs-nav').forEach(nav => {
    nav.addEventListener('keydown', function(e) {
      const tabs = Array.from(this.querySelectorAll('.tab-button, .tabs-tab'));
      const currentIndex = tabs.findIndex(tab => tab.classList.contains('active'));

      if (currentIndex === -1 && tabs.length > 0) {
        // 如果没有活动标签页，激活第一个
        tabs[0].classList.add('active');
        tabs[0].focus();
        return;
      }

      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
          tabs[prevIndex].click();
          tabs[prevIndex].focus();
          break;

        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % tabs.length;
          tabs[nextIndex].click();
          tabs[nextIndex].focus();
          break;

        case 'Home':
          e.preventDefault();
          tabs[0].click();
          tabs[0].focus();
          break;

        case 'End':
          e.preventDefault();
          tabs[tabs.length - 1].click();
          tabs[tabs.length - 1].focus();
          break;
      }
    });
  });

  // 初始化默认显示状态
  document.querySelectorAll('.tabs').forEach(tabsContainer => {
    const activeTab = tabsContainer.querySelector('.tab-button.active, .tabs-tab.active');
    const allPanels = tabsContainer.querySelectorAll('.tab-panel, .tabs-panel');

    if (activeTab) {
      // 如果有活动标签页，只显示对应面板
      const tabId = activeTab.dataset.tab;
      const targetPanel = tabsContainer.querySelector(`[data-panel="${tabId}"]`);

      if (targetPanel) {
        allPanels.forEach(panel => {
          if (panel === targetPanel) {
            panel.classList.add('active');
            panel.style.display = 'block';
          } else {
            panel.classList.remove('active');
            panel.style.display = 'none';
          }
        });
      }
    } else {
      // 如果没有活动标签页，显示第一个面板
      allPanels.forEach((panel, index) => {
        if (index === 0) {
          panel.classList.add('active');
          panel.style.display = 'block';
          // 同时激活对应的标签页
          const tabId = panel.dataset.panel;
          const correspondingTab = tabsContainer.querySelector(`[data-tab="${tabId}"]`);
          if (correspondingTab) {
            correspondingTab.classList.add('active');
          }
        } else {
          panel.classList.remove('active');
          panel.style.display = 'none';
        }
      });
    }
  });
}

// ===================================
// ACCORDION COMPONENT FUNCTIONALITY
// ===================================

function initAccordionComponent() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
      const item = this.closest('.accordion-item');
      const content = this.nextElementSibling;
      const icon = this.querySelector('.accordion-icon');
      const container = this.closest('.accordion');

      if (!item || !content) return;

      const isExpanded = item.classList.contains('expanded');

      // 如果是手风琴模式（同时只能展开一个），关闭其他项
      if (container && !container.classList.contains('accordion-multiple')) {
        container.querySelectorAll('.accordion-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('expanded');
            otherItem.classList.add('collapsed');
            const otherContent = otherItem.querySelector('.accordion-content');
            const otherIcon = otherItem.querySelector('.accordion-icon');
            if (otherContent) {
              otherContent.style.maxHeight = '0';
              otherContent.classList.remove('expanded');
            }
            if (otherIcon) {
              otherIcon.style.transform = 'rotate(0deg)';
            }
          }
        });
      }

      // 切换当前项
      if (isExpanded) {
        item.classList.remove('expanded');
        item.classList.add('collapsed');
        content.style.maxHeight = '0';
        content.classList.remove('expanded');
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
        this.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.remove('collapsed');
        item.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('expanded');
        if (icon) {
          icon.style.transform = 'rotate(180deg)';
        }
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 键盘支持
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('keydown', function(e) {
      switch(e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          this.click();
          break;

        case 'ArrowDown':
          e.preventDefault();
          const nextItem = this.closest('.accordion-item').nextElementSibling;
          if (nextItem) {
            const nextHeader = nextItem.querySelector('.accordion-header');
            if (nextHeader) {
              nextHeader.focus();
            }
          }
          break;

        case 'ArrowUp':
          e.preventDefault();
          const prevItem = this.closest('.accordion-item').previousElementSibling;
          if (prevItem) {
            const prevHeader = prevItem.querySelector('.accordion-header');
            if (prevHeader) {
              prevHeader.focus();
            }
          }
          break;

        case 'Home':
          e.preventDefault();
          const firstHeader = this.closest('.accordion').querySelector('.accordion-header');
          if (firstHeader) {
            firstHeader.focus();
          }
          break;

        case 'End':
          e.preventDefault();
          const allHeaders = this.closest('.accordion').querySelectorAll('.accordion-header');
          if (allHeaders.length > 0) {
            allHeaders[allHeaders.length - 1].focus();
          }
          break;
      }
    });
  });
}

// ===================================
// TABLE COMPONENT FUNCTIONALITY
// ===================================

function initTableComponent() {
  // 表格排序功能
  document.querySelectorAll('.table-sortable').forEach(table => {
    const headers = table.querySelectorAll('th[data-sortable]');

    headers.forEach(header => {
      header.style.cursor = 'pointer';
      header.addEventListener('click', function() {
        const column = this.dataset.sortable;
        const currentOrder = this.dataset.sortOrder || 'asc';
        const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';

        // 更新排序状态
        headers.forEach(h => {
          h.dataset.sortOrder = '';
          h.classList.remove('sort-asc', 'sort-desc');
        });

        this.dataset.sortOrder = newOrder;
        this.classList.add(newOrder === 'asc' ? 'sort-asc' : 'sort-desc');

        // 执行排序
        sortTable(table, column, newOrder);
      });
    });
  });

  // 表格行选择功能
  document.querySelectorAll('.table-selectable').forEach(table => {
    const checkboxes = table.querySelectorAll('input[type="checkbox"].row-select');
    const masterCheckbox = table.querySelector('input[type="checkbox"].master-select');

    if (masterCheckbox) {
      masterCheckbox.addEventListener('change', function() {
        checkboxes.forEach(checkbox => {
          checkbox.checked = this.checked;
          const row = checkbox.closest('tr');
          if (this.checked) {
            row.classList.add('selected');
          } else {
            row.classList.remove('selected');
          }
        });
      });
    }

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const row = this.closest('tr');
        if (this.checked) {
          row.classList.add('selected');
        } else {
          row.classList.remove('selected');
        }

        // 更新主复选框状态
        if (masterCheckbox) {
          const totalCheckboxes = checkboxes.length;
          const checkedCheckboxes = table.querySelectorAll('input[type="checkbox"].row-select:checked').length;
          masterCheckbox.checked = totalCheckboxes === checkedCheckboxes;
          masterCheckbox.indeterminate = checkedCheckboxes > 0 && checkedCheckboxes < totalCheckboxes;
        }
      });
    });
  });

  // 表格搜索功能
  document.querySelectorAll('.table-searchable').forEach(table => {
    const searchInput = table.closest('.table-container')?.querySelector('input[type="search"].table-search');

    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = table.querySelectorAll('tbody tr');

        rows.forEach(row => {
          const text = row.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
            row.style.display = '';
            row.classList.remove('search-filtered');
          } else {
            row.style.display = 'none';
            row.classList.add('search-filtered');
          }
        });

        // 更新过滤状态
        const visibleRows = table.querySelectorAll('tbody tr:not(.search-filtered)');
        const noResults = table.closest('.table-container')?.querySelector('.table-no-results');

        if (noResults) {
          noResults.style.display = visibleRows.length === 0 ? 'block' : 'none';
        }
      });
    }
  });
}

// 表格排序辅助函数
function sortTable(table, column, order) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const columnIndex = Array.from(table.querySelectorAll('th')).findIndex(th => th.dataset.sortable === column);

  rows.sort((a, b) => {
    const aValue = a.children[columnIndex].textContent.trim();
    const bValue = b.children[columnIndex].textContent.trim();

    // 尝试数字排序
    const aNum = parseFloat(aValue);
    const bNum = parseFloat(bValue);

    if (!isNaN(aNum) && !isNaN(bNum)) {
      return order === 'asc' ? aNum - bNum : bNum - aNum;
    }

    // 文本排序
    return order === 'asc'
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  // 重新排列行
  rows.forEach(row => tbody.appendChild(row));
}

// 页面卸载时清理
window.addEventListener('beforeunload', function() {
  // 清理任何需要清理的内容
});