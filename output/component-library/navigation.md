# 导航组件 (Navigation)

> Meshy AI 的导航组件库和使用指南

## 概述

导航组件帮助用户在应用程序中移动和理解当前位置。Meshy AI的导航系统提供了一致的导航模式、清晰的层级结构和良好的移动端体验。

## 导航栏 (Header Navigation)

### 1. 标准导航栏

```html
<header class="header">
  <div class="header-container">
    <div class="header-brand">
      <a href="/" class="brand-logo">
        <img src="logo.svg" alt="Meshy AI" class="brand-icon">
        <span class="brand-text">Meshy AI</span>
      </a>
    </div>

    <nav class="header-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/products" class="nav-link">产品</a>
        </li>
        <li class="nav-item">
          <a href="/solutions" class="nav-link">解决方案</a>
        </li>
        <li class="nav-item">
          <a href="/pricing" class="nav-link">价格</a>
        </li>
        <li class="nav-item">
          <a href="/docs" class="nav-link">文档</a>
        </li>
      </ul>
    </nav>

    <div class="header-actions">
      <button class="button button-ghost">登录</button>
      <button class="button button-primary">开始使用</button>
    </div>

    <button class="header-toggle" aria-label="打开菜单">
      <span class="toggle-line"></span>
      <span class="toggle-line"></span>
      <span class="toggle-line"></span>
    </button>
  </div>
</header>
```

#### 样式规格
```css
.header {
  background-color: var(--background-base-color);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  height: var(--header-height);
}

.header-container {
  max-width: var(--container-7xl);
  margin: 0 auto;
  padding: 0 var(--page-horizontal-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header-brand {
  flex-shrink: 0;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: var(--foreground-color);
  font-weight: var(--font-weight-semibold);
}

.brand-icon {
  width: 32px;
  height: 32px;
}

.brand-text {
  font-size: var(--text-lg);
}

.header-nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--foreground-color);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: color var(--default-transition-duration),
              background-color var(--default-transition-duration);
}

.nav-link:hover {
  color: var(--primary-color);
  background-color: var(--background-subtle-color);
}

.nav-link.active {
  color: var(--primary-color);
  background-color: rgba(var(--primary-color-rgb), 0.1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.header-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: var(--radius-md);
}

.toggle-line {
  width: 24px;
  height: 2px;
  background-color: var(--foreground-color);
  margin: 2px 0;
  transition: all var(--default-transition-duration);
}

@media (max-width: 768px) {
  .header-nav {
    display: none;
  }

  .header-actions .button:not(.button-primary) {
    display: none;
  }

  .header-toggle {
    display: flex;
  }
}
```

### 2. 透明导航栏

```html
<header class="header header-transparent">
  <div class="header-container">
    <!-- 导航内容 -->
  </div>
</header>
```

```css
.header-transparent {
  background-color: transparent;
  border-bottom: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.header-transparent.scrolled {
  background-color: var(--background-base-color);
  border-bottom: 1px solid var(--border-color);
  position: fixed;
}

.header-transparent .nav-link {
  color: white;
}

.header-transparent.scrolled .nav-link {
  color: var(--foreground-color);
}
```

## 侧边栏导航

### 1. 标准侧边栏

```html
<aside class="sidebar">
  <div class="sidebar-header">
    <div class="sidebar-brand">
      <a href="/" class="brand-logo">
        <img src="logo.svg" alt="Meshy AI" class="brand-icon">
        <span class="brand-text">Meshy AI</span>
      </a>
    </div>
    <button class="sidebar-close" aria-label="关闭侧边栏">
      <svg class="icon">✕</svg>
    </button>
  </div>

  <nav class="sidebar-nav">
    <ul class="sidebar-nav-list">
      <li class="sidebar-nav-item">
        <a href="/dashboard" class="sidebar-nav-link active">
          <svg class="nav-icon">🏠</svg>
          <span class="nav-text">仪表板</span>
        </a>
      </li>
      <li class="sidebar-nav-item">
        <a href="/projects" class="sidebar-nav-link">
          <svg class="nav-icon">📁</svg>
          <span class="nav-text">项目</span>
        </a>
      </li>
      <li class="sidebar-nav-item">
        <a href="/models" class="sidebar-nav-link">
          <svg class="nav-icon">🎨</svg>
          <span class="nav-text">模型</span>
          <span class="nav-badge">12</span>
        </a>
      </li>
    </ul>
  </nav>

  <div class="sidebar-footer">
    <div class="user-menu">
      <div class="user-avatar">
        <img src="avatar.jpg" alt="用户头像">
      </div>
      <div class="user-info">
        <div class="user-name">张三</div>
        <div class="user-email">zhang@example.com</div>
      </div>
      <button class="user-menu-toggle">
        <svg class="icon">⬇️</svg>
      </button>
    </div>
  </div>
</aside>
```

#### 样式规格
```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: var(--background-raised-color);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform var(--default-transition-duration);
  z-index: var(--z-sidebar);
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.sidebar-close {
  background: none;
  border: none;
  padding: var(--spacing-sm);
  cursor: pointer;
  color: var(--foreground-quiet-color);
  border-radius: var(--radius-sm);
}

.sidebar-close:hover {
  color: var(--foreground-color);
  background-color: var(--background-subtle-color);
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md) 0;
}

.sidebar-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-nav-item {
  margin-bottom: var(--spacing-xs);
}

.sidebar-nav-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  text-decoration: none;
  color: var(--foreground-color);
  transition: background-color var(--default-transition-duration);
}

.sidebar-nav-link:hover {
  background-color: var(--background-subtle-color);
}

.sidebar-nav-link.active {
  background-color: rgba(var(--primary-color-rgb), 0.1);
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
}

.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.nav-text {
  flex: 1;
}

.nav-badge {
  background-color: var(--primary-color);
  color: var(--background-inverse-color);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
}

.sidebar-footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
}

.user-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  overflow: hidden;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  flex: 1;
}

.user-name {
  font-weight: var(--font-weight-medium);
  color: var(--foreground-color);
}

.user-email {
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
}

.user-menu-toggle {
  background: none;
  border: none;
  padding: var(--spacing-sm);
  cursor: pointer;
  color: var(--foreground-quiet-color);
}

@media (min-width: 1024px) {
  .sidebar {
    transform: translateX(0);
    position: relative;
  }
}
```

## 面包屑导航

### 1. 标准面包屑

```html
<nav class="breadcrumb" aria-label="面包屑导航">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="/" class="breadcrumb-link">首页</a>
    </li>
    <li class="breadcrumb-item">
      <a href="/products" class="breadcrumb-link">产品</a>
    </li>
    <li class="breadcrumb-item">
      <a href="/products/3d-models" class="breadcrumb-link">3D模型</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      模型详情
    </li>
  </ol>
</nav>
```

#### 样式规格
```css
.breadcrumb {
  padding: var(--spacing-md) 0;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.breadcrumb-item:not(:last-child)::after {
  content: '/';
  color: var(--foreground-quiet-color);
}

.breadcrumb-link {
  color: var(--foreground-quiet-color);
  text-decoration: none;
  font-size: var(--text-sm);
  transition: color var(--default-transition-duration);
}

.breadcrumb-link:hover {
  color: var(--primary-color);
}

.breadcrumb-item.active {
  color: var(--foreground-color);
  font-weight: var(--font-weight-medium);
  font-size: var(--text-sm);
}
```

### 2. 图标面包屑

```html
<nav class="breadcrumb breadcrumb-icons">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="/" class="breadcrumb-link">
        <svg class="breadcrumb-icon">🏠</svg>
        <span>首页</span>
      </a>
    </li>
    <li class="breadcrumb-item">
      <a href="/products" class="breadcrumb-link">
        <svg class="breadcrumb-icon">📦</svg>
        <span>产品</span>
      </a>
    </li>
    <li class="breadcrumb-item active">
      <svg class="breadcrumb-icon">🎨</svg>
      <span>3D模型</span>
    </li>
  </ol>
</nav>
```

```css
.breadcrumb-icons .breadcrumb-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
}
```

## 标签页导航

### 1. 水平标签页

```html
<div class="tabs">
  <div class="tabs-list" role="tablist">
    <button class="tabs-trigger active" role="tab" aria-selected="true" aria-controls="panel-1">
      概览
    </button>
    <button class="tabs-trigger" role="tab" aria-selected="false" aria-controls="panel-2">
      详细信息
    </button>
    <button class="tabs-trigger" role="tab" aria-selected="false" aria-controls="panel-3">
      设置
    </button>
  </div>
  <div class="tabs-content">
    <div class="tabs-panel active" id="panel-1" role="tabpanel">
      <p>概览内容...</p>
    </div>
    <div class="tabs-panel" id="panel-2" role="tabpanel">
      <p>详细信息内容...</p>
    </div>
    <div class="tabs-panel" id="panel-3" role="tabpanel">
      <p>设置内容...</p>
    </div>
  </div>
</div>
```

#### 样式规格
```css
.tabs {
  width: 100%;
}

.tabs-list {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  gap: var(--spacing-lg);
  overflow-x: auto;
  scrollbar-width: none;
}

.tabs-list::-webkit-scrollbar {
  display: none;
}

.tabs-trigger {
  background: none;
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--foreground-quiet-color);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  transition: color var(--default-transition-duration);
}

.tabs-trigger:hover {
  color: var(--foreground-color);
}

.tabs-trigger.active {
  color: var(--primary-color);
}

.tabs-trigger.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary-color);
}

.tabs-content {
  padding: var(--spacing-lg) 0;
}

.tabs-panel {
  display: none;
}

.tabs-panel.active {
  display: block;
}
```

### 2. 垂直标签页

```html
<div class="tabs tabs-vertical">
  <div class="tabs-list-vertical">
    <button class="tabs-trigger-vertical active">概览</button>
    <button class="tabs-trigger-vertical">详细信息</button>
    <button class="tabs-trigger-vertical">设置</button>
  </div>
  <div class="tabs-content-vertical">
    <div class="tabs-panel active">
      <p>概览内容...</p>
    </div>
    <div class="tabs-panel">
      <p>详细信息内容...</p>
    </div>
    <div class="tabs-panel">
      <p>设置内容...</p>
    </div>
  </div>
</div>
```

```css
.tabs-vertical {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--spacing-xl);
}

.tabs-list-vertical {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.tabs-trigger-vertical {
  background: none;
  border: none;
  padding: var(--spacing-md);
  color: var(--foreground-quiet-color);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  border-radius: var(--radius-md);
  text-align: left;
  transition: all var(--default-transition-duration);
}

.tabs-trigger-vertical:hover {
  color: var(--foreground-color);
  background-color: var(--background-subtle-color);
}

.tabs-trigger-vertical.active {
  color: var(--primary-color);
  background-color: rgba(var(--primary-color-rgb), 0.1);
}

.tabs-content-vertical {
  padding: var(--spacing-md) 0;
}
```

## 分页导航

### 1. 标准分页

```html
<nav class="pagination" aria-label="分页导航">
  <button class="pagination-btn pagination-prev" disabled>
    <svg class="icon">←</svg>
    上一页
  </button>

  <ol class="pagination-list">
    <li class="pagination-item">
      <button class="pagination-btn active">1</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-btn">2</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-btn">3</button>
    </li>
    <li class="pagination-item">
      <span class="pagination-ellipsis">...</span>
    </li>
    <li class="pagination-item">
      <button class="pagination-btn">10</button>
    </li>
  </ol>

  <button class="pagination-btn pagination-next">
    下一页
    <svg class="icon">→</svg>
  </button>
</nav>
```

#### 样式规格
```css
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin: var(--spacing-xl) 0;
}

.pagination-list {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  list-style: none;
  margin: 0;
  padding: 0;
}

.pagination-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background: none;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--foreground-color);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--default-transition-duration);
}

.pagination-btn:hover:not(:disabled) {
  background-color: var(--background-subtle-color);
  border-color: var(--foreground-color);
}

.pagination-btn.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--background-inverse-color);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-ellipsis {
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--foreground-quiet-color);
}
```

### 2. 简化分页

```html
<nav class="pagination pagination-simple">
  <span class="pagination-info">显示 1-10 项，共 100 项</span>
  <div class="pagination-controls">
    <button class="pagination-btn" disabled>上一页</button>
    <span class="pagination-current">第 1 页，共 10 页</span>
    <button class="pagination-btn">下一页</button>
  </div>
</nav>
```

```css
.pagination-simple {
  justify-content: space-between;
}

.pagination-info {
  color: var(--foreground-quiet-color);
  font-size: var(--text-sm);
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.pagination-current {
  color: var(--foreground-color);
  font-size: var(--text-sm);
}
```

## 步骤导航

### 1. 水平步骤

```html
<div class="steps">
  <div class="steps-list">
    <div class="steps-item completed">
      <div class="steps-indicator">
        <svg class="steps-icon">✓</svg>
      </div>
      <div class="steps-content">
        <h4 class="steps-title">基本信息</h4>
        <p class="steps-description">填写您的基本信息</p>
      </div>
    </div>

    <div class="steps-item active">
      <div class="steps-indicator">
        <span class="steps-number">2</span>
      </div>
      <div class="steps-content">
        <h4 class="steps-title">详细信息</h4>
        <p class="steps-description">完善详细资料</p>
      </div>
    </div>

    <div class="steps-item">
      <div class="steps-indicator">
        <span class="steps-number">3</span>
      </div>
      <div class="steps-content">
        <h4 class="steps-title">确认信息</h4>
        <p class="steps-description">确认并提交</p>
      </div>
    </div>
  </div>
</div>
```

#### 样式规格
```css
.steps {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.steps-list {
  display: flex;
  position: relative;
}

.steps-list::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--border-color);
  z-index: 0;
}

.steps-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.steps-indicator {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--background-base-color);
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  transition: all var(--default-transition-duration);
}

.steps-item.completed .steps-indicator {
  background-color: var(--positive-color);
  border-color: var(--positive-color);
}

.steps-item.active .steps-indicator {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.steps-number {
  font-weight: var(--font-weight-semibold);
  color: var(--foreground-quiet-color);
}

.steps-item.completed .steps-number,
.steps-item.active .steps-number {
  color: white;
}

.steps-icon {
  width: 20px;
  height: 20px;
  color: white;
}

.steps-title {
  font-weight: var(--font-weight-semibold);
  color: var(--foreground-color);
  margin-bottom: var(--spacing-xs);
}

.steps-item.active .steps-title {
  color: var(--primary-color);
}

.steps-description {
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
}
```

## 移动导航

### 1. 底部导航

```html
<nav class="bottom-nav">
  <a href="/" class="bottom-nav-item active">
    <svg class="nav-icon">🏠</svg>
    <span class="nav-label">首页</span>
  </a>
  <a href="/explore" class="bottom-nav-item">
    <svg class="nav-icon">🔍</svg>
    <span class="nav-label">探索</span>
  </a>
  <a href="/create" class="bottom-nav-item">
    <svg class="nav-icon">➕</svg>
    <span class="nav-label">创建</span>
  </a>
  <a href="/profile" class="bottom-nav-item">
    <svg class="nav-icon">👤</svg>
    <span class="nav-label">我的</span>
  </a>
</nav>
```

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--background-raised-color);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-around;
  padding: var(--spacing-sm) 0;
  z-index: var(--z-header);
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  text-decoration: none;
  color: var(--foreground-quiet-color);
  font-size: var(--text-xs);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: color var(--default-transition-duration);
}

.bottom-nav-item.active {
  color: var(--primary-color);
}

.bottom-nav-item .nav-icon {
  width: 24px;
  height: 24px;
}
```

## 响应式设计

### 1. 自适应导航

```css
@media (max-width: 768px) {
  .header-nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background-color: var(--background-base-color);
    border-bottom: 1px solid var(--border-color);
    transform: translateY(-100%);
    transition: transform var(--default-transition-duration);
  }

  .header-nav.open {
    transform: translateY(0);
  }

  .nav-list {
    flex-direction: column;
    padding: var(--spacing-lg);
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    display: block;
    padding: var(--spacing-md);
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .nav-link {
    padding: var(--spacing-sm);
    font-size: var(--text-sm);
  }

  .header-actions .button {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--text-sm);
  }
}
```

## 可访问性

### 1. ARIA 属性

```html
<nav role="navigation" aria-label="主导航">
  <ul>
    <li>
      <a href="/home" aria-current="page">首页</a>
    </li>
    <li>
      <a href="/products">产品</a>
    </li>
  </ul>
</nav>

<div class="tabs">
  <div role="tablist">
    <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">
      标签1
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">
      标签2
    </button>
  </div>
  <div role="tabpanel" aria-labelledby="tab1" id="panel1">
    内容1
  </div>
  <div role="tabpanel" aria-labelledby="tab2" id="panel2" hidden>
    内容2
  </div>
</div>
```

### 2. 键盘导航

```css
/* 确保导航元素可以获得焦点 */
.nav-link,
.tabs-trigger,
.pagination-btn {
  /* 自动获得焦点，确保outline可见 */
}

.nav-link:focus,
.tabs-trigger:focus,
.pagination-btn:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* 跳过导航链接 */
.skip-nav {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--background-inverse-color);
  color: var(--foreground-inverse-color);
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-nav:focus {
  top: 6px;
}
```

## 使用指南

### 1. 导航层级

```html
✅ 清晰的信息层级
<header>
  <nav role="navigation" aria-label="主导航">
    <!-- 主要导航项 -->
  </nav>
</header>

<nav aria-label="面包屑导航">
  <!-- 次级导航 -->
</nav>

✅ 合理的导航深度
- 主导航 (5-7个主要项目)
- 次级导航 (面包屑)
- 局部导航 (标签页)
```

### 2. 移动端优化

```html
✅ 简化的移动导航
<header class="header">
  <button class="header-toggle">☰</button>
  <nav class="header-nav mobile-menu">
    <!-- 折叠菜单 -->
  </nav>
</header>

<nav class="bottom-nav">
  <!-- 底部导航 -->
</nav>

✅ 触摸友好的目标
@media (max-width: 768px) {
  .nav-link, .bottom-nav-item {
    min-height: 44px;
    min-width: 44px;
  }
}
```

### 3. 视觉反馈

```html
✅ 清晰的当前状态
<a href="/" class="nav-link active" aria-current="page">首页</a>

✅ 明确的悬停状态
.nav-link:hover {
  background-color: var(--background-subtle-color);
  color: var(--primary-color);
}

✅ 焦点指示器
.nav-link:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

## 工具类

### 导航类型
```css
.nav-horizontal { /* 水平导航 */ }
.nav-vertical { /* 垂直导航 */ }
.nav-horizontal-responsive { /* 响应式水平导航 */ }
.nav-stacked { /* 堆叠导航 */ }
```

### 导航状态
```css
.nav-active { /* 激活状态 */ }
.nav-disabled { /* 禁用状态 */ }
.nav-expanded { /* 展开状态 */ }
.nav-collapsed { /* 折叠状态 */ }
```

### 布局辅助
```css
.nav-start { /* 左对齐 */ }
.nav-center { /* 居中对齐 */ }
.nav-end { /* 右对齐 */ }
.nav-between { /* 两端对齐 */ }
```

## 测试清单

### 功能测试
- [ ] 所有导航链接正确工作
- [ ] 折叠/展开功能正常
- [ ] 标签页切换正常
- [ ] 分页功能正确

### 可访问性测试
- [ ] 键盘导航完整
- [ ] 屏幕阅读器友好
- [ ] ARIA 属性正确
- [ ] 焦点管理正确

### 响应式测试
- [ ] 移动端导航正常
- [ ] 平板端布局合理
- [ ] 桌面端体验良好
- [ ] 不同屏幕尺寸适配

### 用户体验测试
- [ ] 导航层级清晰
- [ ] 当前位置明确
- [ ] 交互反馈及时
- [ ] 加载性能良好

---

*最后更新: 2025年11月14日*