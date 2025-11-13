# Meshy AI 组件库 - 导航组件分析

## 概述

Meshy AI 的导航组件采用现代化的设计风格，结合深色主题和品牌色彩，提供清晰的页面结构和直观的用户导航体验。

## 头部导航

### 主导航栏

```css
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 3rem;
  background-color: rgba(24, 24, 24, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-bg-border);
  transition: all 0.2s ease-out;
}

.header-container {
  max-width: var(--container-3xl);
  margin: 0 auto;
  padding: 0 var(--padding-lg);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  text-decoration: none;
  color: var(--color-label-title);
  font-weight: var(--font-weight-bold);
  font-size: var(--text-lg);
}

.header-brand:hover {
  color: var(--color-accent-base);
}

.header-logo {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--color-accent-base), var(--color-accent-support-base));
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-logo svg {
  width: 20px;
  height: 20px;
  color: var(--color-bg-base);
}
```

### 导航菜单

```css
.nav {
  display: flex;
  align-items: center;
  gap: var(--gap-lg);
}

.nav-item {
  position: relative;
  color: var(--color-label-base);
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  padding: var(--padding-sm) var(--padding-md);
  border-radius: var(--radius-md);
  transition: all 0.2s ease-out;
}

.nav-item:hover {
  color: var(--color-label-title);
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  color: var(--color-accent-base);
  background-color: rgba(197, 249, 85, 0.1);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-accent-base);
  transform: translateX(-50%);
  transition: width 0.3s ease-out;
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 80%;
}

.nav-dropdown {
  position: relative;
}

.nav-dropdown-toggle {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  color: var(--color-label-base);
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  padding: var(--padding-sm) var(--padding-md);
  border-radius: var(--radius-md);
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.nav-dropdown-toggle:hover {
  color: var(--color-label-title);
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-dropdown-toggle svg {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease-out;
}

.nav-dropdown.open .nav-dropdown-toggle svg {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: var(--margin-sm);
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: all 0.2s ease-out;
}

.nav-dropdown.open .nav-dropdown-menu {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.nav-dropdown-item {
  display: block;
  padding: var(--padding-md) var(--padding-lg);
  color: var(--color-label-base);
  text-decoration: none;
  font-size: var(--text-sm);
  transition: all 0.2s ease-out;
  border-bottom: 1px solid var(--color-bg-border);
}

.nav-dropdown-item:last-child {
  border-bottom: none;
}

.nav-dropdown-item:hover {
  color: var(--color-label-title);
  background-color: var(--color-bg-shade);
}

.nav-dropdown-item.active {
  color: var(--color-accent-base);
  background-color: rgba(197, 249, 85, 0.1);
}
```

### 用户菜单

```css
.user-menu {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent-base), var(--color-accent-support-base));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-bg-base);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.user-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(197, 249, 85, 0.3);
}

.user-menu-trigger {
  width: 36px;
  height: 36px;
  background-color: var(--color-bg-shade);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.user-menu-trigger:hover {
  background-color: var(--color-bg-sub);
  border-color: var(--color-accent-base);
}

.user-menu-trigger svg {
  width: 18px;
  height: 18px;
  color: var(--color-label-base);
}
```

## 侧边栏导航

### 主侧边栏

```css
.sidebar {
  position: fixed;
  top: 3rem;
  left: 0;
  bottom: 0;
  width: 16rem;
  background-color: var(--color-bg-sub);
  border-right: 1px solid var(--color-bg-border);
  overflow-y: auto;
  transition: transform 0.3s ease-out;
  z-index: 40;
}

.sidebar.collapsed {
  transform: translateX(-100%);
}

.sidebar-header {
  padding: var(--padding-lg);
  border-bottom: 1px solid var(--color-bg-border);
}

.sidebar-title {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-label-soft);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

.sidebar-nav {
  padding: var(--padding-md) 0;
}

.sidebar-nav-section {
  margin-bottom: var(--margin-lg);
}

.sidebar-nav-section:last-child {
  margin-bottom: 0;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
  padding: var(--padding-md) var(--padding-lg);
  color: var(--color-label-base);
  text-decoration: none;
  font-size: var(--text-sm);
  transition: all 0.2s ease-out;
  position: relative;
}

.sidebar-nav-item:hover {
  color: var(--color-label-title);
  background-color: var(--color-bg-shade);
}

.sidebar-nav-item.active {
  color: var(--color-accent-base);
  background-color: rgba(197, 249, 85, 0.1);
}

.sidebar-nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: var(--color-accent-base);
}

.sidebar-nav-icon {
  width: 20px;
  height: 20px;
  color: currentColor;
}

.sidebar-nav-text {
  flex: 1;
  font-weight: var(--font-weight-medium);
}

.sidebar-nav-badge {
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}
```

## 面包屑导航

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--padding-lg) 0;
  font-size: var(--text-sm);
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  color: var(--color-label-soft);
  text-decoration: none;
  transition: color 0.2s ease-out;
}

.breadcrumb-item:hover {
  color: var(--color-label-base);
}

.breadcrumb-item.active {
  color: var(--color-label-base);
  font-weight: var(--font-weight-medium);
}

.breadcrumb-separator {
  color: var(--color-label-muted);
  margin-left: var(--margin-xs);
}

.breadcrumb-separator svg {
  width: 16px;
  height: 16px;
}
```

## 标签页导航

```css
.tabs {
  display: flex;
  border-bottom: 1px solid var(--color-bg-border);
  overflow-x: auto;
}

.tab {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--padding-md) var(--padding-lg);
  color: var(--color-label-soft);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-out;
  cursor: pointer;
  white-space: nowrap;
}

.tab:hover {
  color: var(--color-label-base);
  background-color: var(--color-bg-shade);
}

.tab.active {
  color: var(--color-accent-base);
  border-bottom-color: var(--color-accent-base);
}

.tab-icon {
  width: 16px;
  height: 16px;
}

.tab-badge {
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}

.tab-content {
  padding: var(--padding-xl);
  background-color: var(--color-bg-sub);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}
```

## 分页导航

```css
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-sm);
  margin: var(--margin-xl) 0;
}

.pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  color: var(--color-label-base);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.pagination-item:hover:not(.active):not(:disabled) {
  background-color: var(--color-bg-shade);
  border-color: var(--color-accent-base);
}

.pagination-item.active {
  background-color: var(--color-accent-base);
  border-color: var(--color-accent-base);
  color: var(--color-bg-base);
}

.pagination-item:disabled {
  background-color: var(--color-bg-border);
  color: var(--color-label-muted);
  cursor: not-allowed;
  opacity: 0.6;
}

.pagination-item.prev,
.pagination-item.next {
  width: auto;
  padding: 0 var(--padding-md);
}

.pagination-info {
  color: var(--color-label-soft);
  font-size: var(--text-sm);
  margin: 0 var(--margin-md);
}
```

## 步骤导航

```css
.steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: var(--margin-xl) 0;
  position: relative;
}

.steps::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 30px;
  right: 30px;
  height: 2px;
  background-color: var(--color-bg-border);
  z-index: 1;
}

.step {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-sm);
  flex: 1;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-bg-sub);
  border: 2px solid var(--color-bg-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-sm);
  color: var(--color-label-soft);
  transition: all 0.2s ease-out;
}

.step.completed .step-circle {
  background-color: var(--color-accent-base);
  border-color: var(--color-accent-base);
  color: var(--color-bg-base);
}

.step.active .step-circle {
  border-color: var(--color-accent-base);
  color: var(--color-accent-base);
}

.step-label {
  font-size: var(--text-sm);
  color: var(--color-label-soft);
  text-align: center;
  line-height: var(--leading-tight);
}

.step.completed .step-label,
.step.active .step-label {
  color: var(--color-label-base);
  font-weight: var(--font-weight-medium);
}

.step-icon {
  width: 20px;
  height: 20px;
}
```

## 响应式导航

### 移动端导航

```css
.mobile-nav-toggle {
  display: none;
  width: 40px;
  height: 40px;
  background-color: var(--color-bg-shade);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.mobile-nav-toggle:hover {
  background-color: var(--color-bg-sub);
  border-color: var(--color-accent-base);
}

.mobile-nav-toggle svg {
  width: 20px;
  height: 20px;
  color: var(--color-label-base);
}

@media (max-width: 768px) {
  .mobile-nav-toggle {
    display: flex;
  }

  .header-nav {
    display: none;
  }

  .header-actions {
    gap: var(--gap-sm);
  }

  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 30;
  }

  .overlay.active {
    display: block;
  }
}
```

## 使用示例

### HTML 结构

```html
<!-- 头部导航 -->
<header class="header">
  <div class="header-container">
    <div class="header-brand">
      <div class="header-logo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </div>
      <span>Meshy AI</span>
    </div>

    <nav class="nav header-nav">
      <a href="#" class="nav-item active">创作</a>
      <a href="#" class="nav-item">模型库</a>
      <a href="#" class="nav-item">教程</a>

      <div class="nav-dropdown">
        <button class="nav-dropdown-toggle">
          工具
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="nav-dropdown-menu">
          <a href="#" class="nav-dropdown-item">3D建模</a>
          <a href="#" class="nav-dropdown-item">纹理生成</a>
          <a href="#" class="nav-dropdown-item">动画制作</a>
        </div>
      </div>
    </nav>

    <div class="header-actions">
      <button class="mobile-nav-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>

      <div class="user-menu">
        <button class="user-menu-trigger">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- 侧边栏 -->
<aside class="sidebar">
  <div class="sidebar-header">
    <h3 class="sidebar-title">创作工具</h3>
  </div>

  <nav class="sidebar-nav">
    <div class="sidebar-nav-section">
      <a href="#" class="sidebar-nav-item active">
        <svg class="sidebar-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
        <span class="sidebar-nav-text">快速开始</span>
      </a>
      <a href="#" class="sidebar-nav-item">
        <svg class="sidebar-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
        <span class="sidebar-nav-text">模型生成</span>
        <span class="sidebar-nav-badge">新</span>
      </a>
      <a href="#" class="sidebar-nav-item">
        <svg class="sidebar-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        <span class="sidebar-nav-text">纹理编辑</span>
      </a>
    </div>
  </nav>
</aside>

<!-- 面包屑导航 -->
<nav class="breadcrumb">
  <a href="#" class="breadcrumb-item">首页</a>
  <svg class="breadcrumb-separator" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 18l6-6-6-6"/>
  </svg>
  <a href="#" class="breadcrumb-item">模型库</a>
  <svg class="breadcrumb-separator" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 18l6-6-6-6"/>
  </svg>
  <span class="breadcrumb-item active">角色模型</span>
</nav>

<!-- 标签页导航 -->
<div class="tabs">
  <button class="tab active">
    <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
    快速生成
  </button>
  <button class="tab">
    <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
    </svg>
    高级设置
  </button>
  <button class="tab">
    <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
    纹理优化
  </button>
</div>

<!-- 分页导航 -->
<div class="pagination">
  <button class="pagination-item prev">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
    上一页
  </button>

  <button class="pagination-item">1</button>
  <button class="pagination-item active">2</button>
  <button class="pagination-item">3</button>
  <button class="pagination-item">4</button>
  <button class="pagination-item">5</button>

  <button class="pagination-item next">
    下一页
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  </button>
</div>
```

## 最佳实践

1. **清晰的层次结构**: 使用不同的导航类型来反映信息的层次关系
2. **一致性**: 在整个应用中保持导航样式和交互的一致性
3. **可访问性**: 确保导航可以通过键盘操作，并提供合适的ARIA标签
4. **响应式设计**: 在不同设备上提供适合的导航体验
5. **状态反馈**: 清楚地显示当前页面位置和用户操作状态
6. **性能优化**: 避免过度复杂的动画和效果，保持导航的流畅性

---

*此导航组件基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*