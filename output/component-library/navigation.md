# 导航组件分析 (Navigation Components Analysis)

## 概述

Meshy.ai 的导航系统提供了清晰的信息架构和用户导航路径。导航组件设计注重用户体验，支持多种设备和交互场景，确保用户能够轻松找到和访问所需内容。

## 导航类型

### 1. 主导航栏 (Header Navigation)
```html
<header class="header">
  <nav class="nav-main">
    <div class="nav-container">
      <div class="nav-brand">
        <a href="/" class="brand-link">
          <img src="logo.svg" alt="Meshy" class="brand-logo" />
          <span class="brand-text">Meshy</span>
        </a>
      </div>

      <ul class="nav-menu">
        <li class="nav-item">
          <a href="/models" class="nav-link">Models</a>
        </li>
        <li class="nav-item">
          <a href="/tutorials" class="nav-link">Tutorials</a>
        </li>
        <li class="nav-item">
          <a href="/pricing" class="nav-link">Pricing</a>
        </li>
        <li class="nav-item nav-dropdown">
          <button class="nav-link nav-dropdown-toggle">
            Resources
            <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div class="dropdown-menu">
            <a href="/blog" class="dropdown-item">Blog</a>
            <a href="/docs" class="dropdown-item">Documentation</a>
            <a href="/api" class="dropdown-item">API Reference</a>
            <a href="/community" class="dropdown-item">Community</a>
          </div>
        </li>
      </ul>

      <div class="nav-actions">
        <button class="button button-ghost">Sign In</button>
        <button class="button button-primary">Get Started</button>
        <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
          <svg class="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</header>
```

**样式特征**:
- 背景: `--color-bg-base` (#181818)
- 边框: 底部 1px solid `--color-bg-border`
- 品牌标识: Logo + 文字
- 导航链接: 悬停效果和下划线动画
- 操作按钮: 主要和次要按钮组合

**CSS 实现**:
```css
.header {
  background-color: var(--color-bg-base);
  border-bottom: 1px solid var(--color-bg-border);
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(10px);
  background-color: rgba(24, 24, 24, 0.95);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--p-lg) var(--p-3xl);
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  text-decoration: none;
  color: var(--color-label-title);
  font-weight: var(--font-weight-bold);
  font-size: var(--text-lg);
}

.brand-logo {
  width: 32px;
  height: 32px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--gap-xl);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--color-label-base);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  padding: var(--p-sm) var(--p-md);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-smooth);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-accent-base);
  transition: all var(--duration-fast) var(--ease-smooth);
  transform: translateX(-50%);
}

.nav-link:hover {
  color: var(--color-label-title);
  background-color: var(--color-bg-translucent);
}

.nav-link:hover::after {
  width: 80%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--color-label-base);
  padding: var(--p-sm);
  border-radius: var(--radius-md);
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
  }
}
```

### 2. 侧边栏导航 (Sidebar Navigation)
```html
<aside class="sidebar">
  <div class="sidebar-header">
    <div class="sidebar-brand">
      <img src="logo.svg" alt="Meshy" class="sidebar-logo" />
      <span class="sidebar-title">Dashboard</span>
    </div>
    <button class="sidebar-toggle" aria-label="Toggle sidebar">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>

  <nav class="sidebar-nav">
    <div class="nav-section">
      <h3 class="nav-section-title">Main</h3>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/dashboard" class="nav-link nav-active">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/models" class="nav-link">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            <span>My Models</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/create" class="nav-link">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            <span>Create New</span>
            <span class="nav-badge">Pro</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="nav-section">
      <h3 class="nav-section-title">Resources</h3>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/tutorials" class="nav-link">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <span>Tutorials</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/api" class="nav-link">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            <span>API Docs</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="sidebar-footer">
    <div class="user-profile">
      <img src="user-avatar.jpg" alt="User" class="user-avatar" />
      <div class="user-info">
        <div class="user-name">John Doe</div>
        <div class="user-plan">Pro Plan</div>
      </div>
      <button class="user-menu-toggle" aria-label="User menu">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>
  </div>
</aside>
```

**CSS 实现**:
```css
.sidebar {
  width: 280px;
  background-color: var(--color-bg-sub);
  border-right: 1px solid var(--color-bg-border);
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: transform var(--duration-normal) var(--ease-smooth);
}

.sidebar-header {
  padding: var(--p-lg);
  border-bottom: 1px solid var(--color-bg-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.sidebar-logo {
  width: 24px;
  height: 24px;
}

.sidebar-title {
  color: var(--color-label-title);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-lg);
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: var(--p-lg) 0;
}

.nav-section {
  margin-bottom: var(--m-xl);
}

.nav-section-title {
  color: var(--color-label-muted);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 var(--p-lg);
  margin-bottom: var(--p-sm);
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
  padding: var(--p-md) var(--p-lg);
  color: var(--color-label-soft);
  text-decoration: none;
  transition: all var(--duration-fast) var(--ease-smooth);
  position: relative;
}

.nav-link:hover {
  color: var(--color-label-base);
  background-color: var(--color-bg-translucent);
}

.nav-link.nav-active {
  color: var(--color-accent-base);
  background-color: var(--color-accent-bg);
}

.nav-link.nav-active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: var(--color-accent-base);
}

.nav-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.nav-badge {
  margin-left: auto;
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}

.sidebar-footer {
  padding: var(--p-lg);
  border-top: 1px solid var(--color-bg-border);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
}

.user-info {
  flex: 1;
}

.user-name {
  color: var(--color-label-base);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}

.user-plan {
  color: var(--color-label-soft);
  font-size: var(--text-xs);
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
```

### 3. 面包屑导航 (Breadcrumb Navigation)
```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="/" class="breadcrumb-link">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        <span class="sr-only">Home</span>
      </a>
    </li>
    <li class="breadcrumb-item">
      <a href="/models" class="breadcrumb-link">Models</a>
    </li>
    <li class="breadcrumb-item">
      <a href="/models/characters" class="breadcrumb-link">Characters</a>
    </li>
    <li class="breadcrumb-item breadcrumb-current" aria-current="page">
      Fantasy Warrior
    </li>
  </ol>
</nav>
```

**CSS 实现**:
```css
.breadcrumb {
  padding: var(--p-md) 0;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--gap-sm);
  flex-wrap: wrap;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.breadcrumb-item:not(:last-child)::after {
  content: '/';
  color: var(--color-label-muted);
  font-size: var(--text-sm);
}

.breadcrumb-link {
  color: var(--color-label-soft);
  text-decoration: none;
  font-size: var(--text-sm);
  transition: color var(--duration-fast) var(--ease-smooth);
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
}

.breadcrumb-link:hover {
  color: var(--color-label-base);
}

.breadcrumb-current {
  color: var(--color-label-base);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### 4. 标签页导航 (Tab Navigation)
```html
<div class="tabs">
  <nav class="tab-nav" role="tablist" aria-label="Model settings">
    <button
      class="tab-button tab-active"
      role="tab"
      aria-selected="true"
      aria-controls="general-panel"
      id="general-tab"
    >
      General
    </button>
    <button
      class="tab-button"
      role="tab"
      aria-selected="false"
      aria-controls="advanced-panel"
      id="advanced-tab"
    >
      Advanced
    </button>
    <button
      class="tab-button"
      role="tab"
      aria-selected="false"
      aria-controls="export-panel"
      id="export-tab"
    >
      Export
    </button>
  </nav>

  <div class="tab-panels">
    <div
      class="tab-panel tab-panel-active"
      id="general-panel"
      role="tabpanel"
      aria-labelledby="general-tab"
      tabindex="0"
    >
      <h3>General Settings</h3>
      <!-- General settings content -->
    </div>
    <div
      class="tab-panel"
      id="advanced-panel"
      role="tabpanel"
      aria-labelledby="advanced-tab"
      tabindex="0"
      hidden
    >
      <h3>Advanced Settings</h3>
      <!-- Advanced settings content -->
    </div>
    <div
      class="tab-panel"
      id="export-panel"
      role="tabpanel"
      aria-labelledby="export-tab"
      tabindex="0"
      hidden
    >
      <h3>Export Options</h3>
      <!-- Export options content -->
    </div>
  </div>
</div>
```

**CSS 实现**:
```css
.tabs {
  width: 100%;
}

.tab-nav {
  display: flex;
  border-bottom: 1px solid var(--color-bg-border);
  gap: var(--gap-lg);
  margin-bottom: var(--m-xl);
}

.tab-button {
  background: none;
  border: none;
  color: var(--color-label-soft);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  padding: var(--p-md) var(--p-lg);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
  position: relative;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.tab-button:hover {
  color: var(--color-label-base);
  background-color: var(--color-bg-translucent);
}

.tab-button.tab-active {
  color: var(--color-accent-base);
  border-bottom-color: var(--color-accent-base);
}

.tab-button:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: -2px;
}

.tab-panels {
  width: 100%;
}

.tab-panel {
  padding: var(--p-lg) 0;
  animation: fadeIn var(--duration-normal) var(--ease-smooth);
}

.tab-panel[hidden] {
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 5. 分页导航 (Pagination Navigation)
```html
<nav class="pagination" aria-label="Pagination">
  <button class="pagination-button pagination-prev" disabled>
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
    Previous
  </button>

  <ol class="pagination-list">
    <li class="pagination-item">
      <button class="pagination-page pagination-current" aria-current="page">1</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-page">2</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-page">3</button>
    </li>
    <li class="pagination-item">
      <span class="pagination-ellipsis">...</span>
    </li>
    <li class="pagination-item">
      <button class="pagination-page">12</button>
    </li>
  </ol>

  <button class="pagination-button pagination-next">
    Next
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  </button>
</nav>
```

**CSS 实现**:
```css
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-sm);
  margin: var(--m-3xl) 0;
}

.pagination-button {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  padding: var(--p-md) var(--p-lg);
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  color: var(--color-label-base);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.pagination-button:hover:not(:disabled) {
  background-color: var(--color-bg-base-hover);
  border-color: var(--color-accent-base);
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-list {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  list-style: none;
  margin: 0;
  padding: 0;
}

.pagination-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  color: var(--color-label-base);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.pagination-page:hover {
  background-color: var(--color-bg-base-hover);
  border-color: var(--color-accent-base);
}

.pagination-page.pagination-current {
  background-color: var(--color-accent-base);
  border-color: var(--color-accent-base);
  color: var(--color-bg-base);
}

.pagination-ellipsis {
  padding: 0 var(--p-sm);
  color: var(--color-label-muted);
  font-size: var(--text-sm);
}
```

### 6. 步骤导航 (Step Navigation)
```html
<div class="steps">
  <div class="steps-container">
    <div class="step step-completed">
      <div class="step-indicator">
        <svg class="step-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>
      <div class="step-content">
        <div class="step-title">Upload Model</div>
        <div class="step-description">Select your 3D model file</div>
      </div>
    </div>

    <div class="step step-current">
      <div class="step-indicator">
        <span class="step-number">2</span>
      </div>
      <div class="step-content">
        <div class="step-title">Configure Settings</div>
        <div class="step-description">Adjust quality and format options</div>
      </div>
    </div>

    <div class="step">
      <div class="step-indicator">
        <span class="step-number">3</span>
      </div>
      <div class="step-content">
        <div class="step-title">Generate</div>
        <div class="step-description">Process and create your model</div>
      </div>
    </div>
  </div>

  <div class="step-progress">
    <div class="step-progress-bar" style="width: 50%;"></div>
  </div>
</div>
```

**CSS 实现**:
```css
.steps {
  position: relative;
  margin: var(--m-3xl) 0;
}

.step-progress {
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-bg-border);
  z-index: 1;
}

.step-progress-bar {
  height: 100%;
  background-color: var(--color-accent-base);
  transition: width var(--duration-normal) var(--ease-smooth);
}

.steps-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 32px;
  left: 60%;
  right: -40%;
  height: 2px;
  background-color: var(--color-bg-border);
  z-index: -1;
}

.step-completed::after {
  background-color: var(--color-accent-base);
}

.step-indicator {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-lg);
  margin-bottom: var(--p-md);
  position: relative;
  z-index: 1;
}

.step:not(.step-completed):not(.step-current) .step-indicator {
  background-color: var(--color-bg-sub);
  border: 2px solid var(--color-bg-border);
  color: var(--color-label-muted);
}

.step-current .step-indicator {
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
  box-shadow: 0 0 0 4px rgba(197, 249, 85, 0.2);
}

.step-completed .step-indicator {
  background-color: var(--color-semantic-success-base);
  color: var(--color-bg-base);
}

.step-check {
  width: 24px;
  height: 24px;
}

.step-number {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
}

.step-content {
  max-width: 200px;
}

.step-title {
  color: var(--color-label-base);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-base);
  margin-bottom: var(--p-xs);
}

.step-description {
  color: var(--color-label-soft);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .steps-container {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-xl);
  }

  .step {
    flex-direction: row;
    text-align: left;
    width: 100%;
  }

  .step:not(:last-child)::after {
    display: none;
  }

  .step-indicator {
    margin-bottom: 0;
    margin-right: var(--p-lg);
  }

  .step-progress {
    display: none;
  }
}
```

## 下拉菜单

### 主导航下拉菜单
```html
<div class="nav-dropdown">
  <button class="nav-dropdown-toggle" aria-expanded="false" aria-haspopup="menu">
    Resources
    <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  </button>

  <div class="dropdown-menu" role="menu">
    <a href="/blog" class="dropdown-item" role="menuitem">
      <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
      <div class="dropdown-content">
        <div class="dropdown-title">Blog</div>
        <div class="dropdown-description">Latest tutorials and updates</div>
      </div>
    </a>

    <a href="/docs" class="dropdown-item" role="menuitem">
      <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
      </svg>
      <div class="dropdown-content">
        <div class="dropdown-title">Documentation</div>
        <div class="dropdown-description">API reference and guides</div>
      </div>
    </a>

    <div class="dropdown-divider"></div>

    <a href="/community" class="dropdown-item" role="menuitem">
      <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <div class="dropdown-content">
        <div class="dropdown-title">Community</div>
        <div class="dropdown-description">Join our Discord server</div>
      </div>
    </a>
  </div>
</div>
```

**CSS 实现**:
```css
.nav-dropdown {
  position: relative;
}

.nav-dropdown-toggle {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  background: none;
  border: none;
  color: var(--color-label-base);
  font-weight: var(--font-weight-medium);
  padding: var(--p-sm) var(--p-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  transition: transform var(--duration-fast) var(--ease-smooth);
}

.nav-dropdown[aria-expanded="true"] .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 280px;
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  padding: var(--p-sm);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--duration-fast) var(--ease-smooth);
  z-index: 50;
}

.nav-dropdown[aria-expanded="true"] .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
  padding: var(--p-md);
  color: var(--color-label-base);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: background-color var(--duration-fast) var(--ease-smooth);
}

.dropdown-item:hover {
  background-color: var(--color-bg-base-hover);
}

.dropdown-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-label-soft);
}

.dropdown-content {
  flex: 1;
}

.dropdown-title {
  color: var(--color-label-base);
  font-weight: var(--font-weight-medium);
  margin-bottom: 2px;
}

.dropdown-description {
  color: var(--color-label-soft);
  font-size: var(--text-sm);
}

.dropdown-divider {
  height: 1px;
  background-color: var(--color-bg-border);
  margin: var(--p-sm) 0;
}
```

## 移动端导航

### 移动端菜单
```html
<div class="mobile-menu-overlay" hidden></div>
<div class="mobile-menu" hidden>
  <div class="mobile-menu-header">
    <div class="mobile-menu-brand">
      <img src="logo.svg" alt="Meshy" class="mobile-menu-logo" />
      <span class="mobile-menu-title">Meshy</span>
    </div>
    <button class="mobile-menu-close" aria-label="Close menu">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>

  <nav class="mobile-menu-nav">
    <ul class="mobile-menu-list">
      <li class="mobile-menu-item">
        <a href="/models" class="mobile-menu-link">Models</a>
      </li>
      <li class="mobile-menu-item">
        <a href="/tutorials" class="mobile-menu-link">Tutorials</a>
      </li>
      <li class="mobile-menu-item">
        <a href="/pricing" class="mobile-menu-link">Pricing</a>
      </li>
      <li class="mobile-menu-divider"></li>
      <li class="mobile-menu-item">
        <a href="/sign-in" class="mobile-menu-link">Sign In</a>
      </li>
      <li class="mobile-menu-item">
        <a href="/get-started" class="mobile-menu-link button button-primary">Get Started</a>
      </li>
    </ul>
  </nav>
</div>
```

**CSS 实现**:
```css
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 45;
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-smooth);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: var(--color-bg-sub);
  z-index: 50;
  transform: translateX(100%);
  transition: transform var(--duration-normal) var(--ease-smooth);
  display: flex;
  flex-direction: column;
}

.mobile-menu-overlay:not([hidden]),
.mobile-menu:not([hidden]) {
  display: block;
}

.mobile-menu.open,
.mobile-menu-overlay.open {
  opacity: 1;
  transform: translateX(0);
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--p-lg);
  border-bottom: 1px solid var(--color-bg-border);
}

.mobile-menu-brand {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.mobile-menu-logo {
  width: 24px;
  height: 24px;
}

.mobile-menu-title {
  color: var(--color-label-title);
  font-weight: var(--font-weight-bold);
  font-size: var(--text-lg);
}

.mobile-menu-close {
  background: none;
  border: none;
  color: var(--color-label-soft);
  padding: var(--p-sm);
  border-radius: var(--radius-md);
  cursor: pointer;
}

.mobile-menu-nav {
  flex: 1;
  overflow-y: auto;
}

.mobile-menu-list {
  list-style: none;
  margin: 0;
  padding: var(--p-lg);
}

.mobile-menu-item {
  margin-bottom: var(--p-md);
}

.mobile-menu-link {
  display: block;
  color: var(--color-label-base);
  text-decoration: none;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  padding: var(--p-md);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.mobile-menu-link:hover {
  color: var(--color-accent-base);
  background-color: var(--color-bg-translucent);
}

.mobile-menu-divider {
  height: 1px;
  background-color: var(--color-bg-border);
  margin: var(--p-lg) 0;
}
```

## 可访问性考虑

### ARIA 标签
```html
<nav role="navigation" aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="/models" role="menuitem">Models</a>
    </li>
  </ul>
</nav>
```

### 键盘导航
```css
.nav-link:focus-visible,
.tab-button:focus-visible,
.pagination-page:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}

/* 跳过链接 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
  padding: 8px;
  text-decoration: none;
  border-radius: var(--radius-sm);
  z-index: 100;
}

.skip-link:focus {
  top: 6px;
}
```

### 屏幕阅读器支持
```html
<nav aria-label="Pagination">
  <button aria-label="Go to previous page">
    Previous
  </button>
  <button aria-label="Current page, page 1" aria-current="page">
    1
  </button>
  <button aria-label="Go to page 2">
    2
  </button>
  <button aria-label="Go to next page">
    Next
  </button>
</nav>
```

## 响应式设计

### 断点适配
```css
/* 平板设备 */
@media (min-width: 769px) and (max-width: 1024px) {
  .nav-menu {
    gap: var(--gap-lg);
  }

  .nav-container {
    padding: var(--p-md) var(--p-xl);
  }
}

/* 大屏幕设备 */
@media (min-width: 1440px) {
  .nav-container {
    max-width: 1400px;
  }
}
```

### 触摸设备优化
```css
@media (hover: none) {
  .nav-link:hover {
    color: var(--color-label-base);
    background-color: transparent;
  }

  .nav-link:active {
    color: var(--color-accent-base);
    background-color: var(--color-bg-translucent);
  }
}
```

## 导航使用指南

### 导航设计原则
- 清晰的信息架构
- 一致的交互模式
- 良好的视觉反馈
- 无障碍访问支持
- 移动设备友好

### 最佳实践
- 使用语义化 HTML 标签
- 提供清晰的当前页面指示
- 实现键盘导航支持
- 确保足够的触摸目标尺寸
- 保持简洁的导航层级

### 导航状态管理
- 明确的活动状态指示
- 禁用状态处理
- 加载状态反馈
- 错误状态处理

## 预览系统

### 交互式预览
查看所有导航组件的实时预览和交互效果：
- [导航组件预览页面](../preview/navigation.html)

### 功能特性
- ✨ **实时预览** - 所有导航类型和交互效果
- 🎨 **颜色复制** - 点击颜色块复制HEX值
- 📋 **代码复制** - 一键复制所有导航代码
- 📱 **响应式** - 适配所有设备尺寸
- ⚡ **交互演示** - 悬停、下拉、移动端菜单

## 导航组件速查表

| 组件类型 | 用途 | 特殊功能 | 响应式支持 | 预览链接 |
|----------|------|----------|------------|-----------|
| Header | 网站主导航 | 下拉菜单、用户操作 | 完全响应式 | [预览](../preview/navigation.html) |
| Sidebar | 应用内导航 | 用户信息、快速操作 | 移动端折叠 | [预览](../preview/navigation.html) |
| Breadcrumb | 层级导航 | 路径指示、快速返回 | 移动端截断 | [预览](../preview/navigation.html) |
| Tabs | 内容切换 | 键盘导航、动画过渡 | 水平滚动 | [预览](../preview/navigation.html) |
| Pagination | 分页导航 | 省略号显示、跳转功能 | 完全响应式 | [预览](../preview/navigation.html) |
| Steps | 流程导航 | 进度指示、步骤验证 | 移动端垂直布局 | [预览](../preview/navigation.html) |

## 代码示例

### 完整的头部导航
```html
<header class="header" role="banner">
  <nav class="nav-main" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <a href="/" class="brand-link" aria-label="Meshy home">
          <img src="logo.svg" alt="Meshy" class="brand-logo" width="32" height="32" />
          <span class="brand-text">Meshy</span>
        </a>
      </div>

      <ul class="nav-menu" role="menubar">
        <li class="nav-item" role="none">
          <a href="/models" class="nav-link" role="menuitem">Models</a>
        </li>
        <li class="nav-item" role="none">
          <a href="/tutorials" class="nav-link" role="menuitem">Tutorials</a>
        </li>
        <li class="nav-item nav-dropdown" role="none">
          <button
            class="nav-link nav-dropdown-toggle"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded="false"
            id="resources-dropdown"
          >
            Resources
            <svg class="dropdown-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div class="dropdown-menu" role="menu" aria-labelledby="resources-dropdown">
            <a href="/blog" class="dropdown-item" role="menuitem">Blog</a>
            <a href="/docs" class="dropdown-item" role="menuitem">Documentation</a>
            <a href="/api" class="dropdown-item" role="menuitem">API Reference</a>
            <a href="/community" class="dropdown-item" role="menuitem">Community</a>
          </div>
        </li>
      </ul>

      <div class="nav-actions">
        <a href="/sign-in" class="button button-ghost">Sign In</a>
        <a href="/get-started" class="button button-primary">Get Started</a>
        <button class="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
          <svg class="hamburger-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</header>
```