# 布局系统 (Layout System)

> Meshy AI 的网格、容器和页面布局指南

## 概述

Meshy AI的布局系统基于现代CSS Grid和Flexbox技术，提供灵活、响应式的布局解决方案。系统支持多种布局模式，从简单的组件排列到复杂的页面结构，确保在所有设备上都有良好的用户体验。

## 网格系统

### 基础网格概念

```css
/* 12列网格系统 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-md);
  max-width: var(--container-5xl);
  margin: 0 auto;
  padding: 0 var(--page-horizontal-padding);
}
```

### 响应式网格

```css
/* 移动优先的响应式网格 */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

/* 平板设备 */
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 桌面设备 */
@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 大屏设备 */
@media (min-width: 1280px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### 网格间距

```css
/* 不同断点的网格间距 */
.grid-gap-sm { gap: var(--spacing-sm); }
.grid-gap-md { gap: var(--spacing-md); }
.grid-gap-lg { gap: var(--spacing-lg); }
.grid-gap-xl { gap: var(--spacing-xl); }

/* 响应式网格间距 */
.grid-gap-responsive {
  gap: var(--spacing-sm);
}

@media (min-width: 768px) {
  .grid-gap-responsive {
    gap: var(--spacing-md);
  }
}

@media (min-width: 1024px) {
  .grid-gap-responsive {
    gap: var(--spacing-lg);
  }
}
```

## 容器系统

### 页面容器

```css
/* 标准页面容器 */
.container {
  width: 100%;
  max-width: var(--container-5xl);
  margin: 0 auto;
  padding: 0 var(--page-horizontal-padding);
}

/* 紧凑容器 */
.container-narrow {
  max-width: var(--container-3xl);
}

/* 宽松容器 */
.container-wide {
  max-width: var(--container-7xl);
}

/* 全宽容器 */
.container-full {
  max-width: none;
  padding: 0;
}
```

### 区域容器

```css
/* 主内容区域 */
.main-content {
  max-width: var(--thread-content-width);
  margin: 0 auto;
  padding: var(--spacing-lg);
}

/* 侧边栏容器 */
.sidebar {
  width: var(--sidebar-width);
  padding: var(--spacing-md);
}

/* 次要内容区域 */
.secondary-content {
  max-width: var(--container-lg);
  margin: 0 auto;
}
```

## Flexbox布局

### 基础Flexbox

```css
/* 水平居中 */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 水平均匀分布 */
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 垂直布局 */
.flex-column {
  display: flex;
  flex-direction: column;
}

/* 换行布局 */
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}
```

### 导航布局

```css
/* 水平导航 */
.nav-horizontal {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

/* 垂直导航 */
.nav-vertical {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

/* 响应式导航 */
.nav-responsive {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .nav-responsive {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

### 卡片布局

```css
/* 卡片网格 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

/* 卡片列表 */
.card-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

/* 水平卡片 */
.card-horizontal {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}
```

## 页面布局模式

### 1. 标准页面布局

```css
/* 头部 + 主内容 + 侧边栏 + 页脚 */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "main sidebar"
    "footer footer";
  grid-template-columns: 1fr var(--sidebar-width);
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.page-header {
  grid-area: header;
}

.page-main {
  grid-area: main;
  padding: var(--spacing-lg);
}

.page-sidebar {
  grid-area: sidebar;
  background-color: var(--background-subtle-color);
}

.page-footer {
  grid-area: footer;
}
```

### 2. 单栏布局

```css
/* 简单单栏布局 */
.single-column {
  max-width: var(--container-3xl);
  margin: 0 auto;
  padding: var(--spacing-xl) var(--page-horizontal-padding);
}

/* 文档页面布局 */
.document-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.document-header {
  padding: var(--spacing-lg) 0;
}

.document-content {
  flex: 1;
  padding: var(--spacing-xl) 0;
}

.document-footer {
  padding: var(--spacing-lg) 0;
}
```

### 3. 双栏布局

```css
/* 主内容 + 侧边栏 */
.two-column {
  display: grid;
  grid-template-columns: 1fr var(--sidebar-width);
  gap: var(--spacing-xl);
  max-width: var(--container-7xl);
  margin: 0 auto;
  padding: 0 var(--page-horizontal-padding);
}

/* 响应式双栏 */
.two-column-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 1024px) {
  .two-column-responsive {
    grid-template-columns: 2fr 1fr;
  }
}
```

### 4. 三栏布局

```css
/* 左侧边栏 + 主内容 + 右侧边栏 */
.three-column {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr var(--sidebar-width);
  gap: var(--spacing-xl);
  max-width: var(--container-9xl);
  margin: 0 auto;
  padding: 0 var(--page-horizontal-padding);
}

/* 响应式三栏 */
.three-column-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .three-column-responsive {
    grid-template-columns: 200px 1fr;
  }
}

@media (min-width: 1280px) {
  .three-column-responsive {
    grid-template-columns: 200px 1fr 200px;
  }
}
```

## 组件布局

### 1. 头部组件

```css
/* 标准头部 */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--page-horizontal-padding);
  background-color: var(--background-base-color);
  border-bottom: 1px solid var(--border-color);
}

.header-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}
```

### 2. 侧边栏组件

```css
/* 可折叠侧边栏 */
.sidebar {
  position: fixed;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: var(--background-subtle-color);
  border-right: 1px solid var(--border-color);
  transition: transform var(--default-transition-duration);
}

.sidebar.collapsed {
  transform: translateX(-100%);
}

@media (min-width: 768px) {
  .sidebar.collapsed {
    transform: translateX(calc(-1 * var(--sidebar-width) + var(--sidebar-width-collapsed)));
    width: var(--sidebar-width-collapsed);
  }
}
```

### 3. 卡片组件

```css
/* 标准卡片 */
.card {
  background-color: var(--background-raised-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.card-header {
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.card-content {
  margin-bottom: var(--spacing-md);
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
}
```

### 4. 表单布局

```css
/* 垂直表单 */
.form-vertical {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-label {
  font-weight: var(--font-weight-medium);
}

.form-input {
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}

/* 水平表单 */
.form-horizontal {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-md);
  align-items: center;
}

@media (min-width: 768px) {
  .form-horizontal {
    grid-template-columns: 200px 1fr;
  }
}
```

## 响应式布局

### 断点策略

```css
/* 移动优先的断点 */
/* xs: 0px - 639px (默认) */
/* sm: 640px - 767px */
/* md: 768px - 1023px */
/* lg: 1024px - 1279px */
/* xl: 1280px - 1535px */
/* 2xl: 1536px+ */

.responsive-layout {
  /* 移动布局 - 单列 */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .responsive-layout {
    /* 平板布局 - 双列 */
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .responsive-layout {
    /* 桌面布局 - 三列 */
    grid-template-columns: 250px 1fr 250px;
  }
}
```

### 容器查询 (现代浏览器)

```css
/* 基于容器宽度的响应式 */
.container-query {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .container-query .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (min-width: 700px) {
  .container-query .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 特殊布局场景

### 1. 侧边栏布局

```css
/* 固定侧边栏 */
.layout-with-sidebar {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  min-height: 100vh;
}

/* 可切换侧边栏 */
.layout-toggle-sidebar {
  display: grid;
  grid-template-columns: var(--sidebar-default-width) 1fr;
  transition: grid-template-columns var(--default-transition-duration);
}

.layout-toggle-sidebar.sidebar-expanded {
  grid-template-columns: var(--sidebar-pinned-width) 1fr;
}
```

### 2. 页脚布局

```css
/* 粘性页脚 */
.sticky-footer-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sticky-footer-content {
  flex: 1;
}

.sticky-footer {
  margin-top: auto;
}

/* 固定页脚 */
.fixed-footer-layout {
  padding-bottom: var(--footer-height);
}

.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--footer-height);
}
```

### 3. 网格重叠布局

```css
/* 网格重叠 */
.overlap-layout {
  display: grid;
  grid-template-areas:
    "hero"
    "content";
}

.overlap-hero {
  grid-area: hero;
  margin-bottom: -4rem;
  position: relative;
  z-index: 1;
}

.overlap-content {
  grid-area: content;
  position: relative;
  z-index: 2;
  background-color: var(--background-base-color);
  padding-top: 6rem;
}
```

## 布局工具类

### 显示工具类

```css
/* Flexbox */
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }

/* Grid */
.grid { display: grid; }
.inline-grid { display: inline-grid; }

/* 块级 */
.block { display: block; }
.inline-block { display: inline-block; }
.hidden { display: none; }
```

### 对齐工具类

```css
/* Justify Content */
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }

/* Align Items */
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.items-stretch { align-items: stretch; }
```

### 位置工具类

```css
/* Position */
.static { position: static; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

/* Top/Right/Bottom/Left */
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }
```

## 可访问性考虑

### 1. 跳转链接

```css
/* 跳转到主内容 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--background-inverse-color);
  color: var(--foreground-inverse-color);
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 6px;
}
```

### 2. 布局顺序

```css
/* 保持逻辑的DOM顺序 */
.accessible-layout {
  display: grid;
  grid-template-areas:
    "header"
    "navigation"
    "main"
    "complementary"
    "contentinfo";
}

.accessible-header { grid-area: header; }
.accessible-nav { grid-area: navigation; }
.accessible-main { grid-area: main; }
.accessible-aside { grid-area: complementary; }
.accessible-footer { grid-area: contentinfo; }
```

### 3. 响应式导航

```css
/* 移动设备隐藏导航，显示汉堡菜单 */
@media (max-width: 767px) {
  .responsive-nav {
    display: none;
  }

  .responsive-nav[aria-expanded="true"] {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--background-base-color);
  }
}
```

## 性能优化

### 1. 布局优化

```css
/* 使用 containment 提升性能 */
.layout-contained {
  contain: layout style paint;
}

/* 避免复杂的布局重排 */
.optimized-layout {
  will-change: transform;
  transform: translateZ(0); /* 硬件加速 */
}
```

### 2. 滚动性能

```css
/* 平滑滚动 */
.smooth-scroll {
  scroll-behavior: smooth;
}

/* 滚动捕捉 */
.scroll-snap {
  scroll-snap-type: x mandatory;
}

.scroll-snap-item {
  scroll-snap-align: start;
}
```

## 最佳实践

### 1. DO's ✅

- 使用语义化HTML标签
- 保持布局的响应式
- 确保良好的可访问性
- 使用一致的间距系统
- 测试不同设备的表现

### 2. DON'Ts ❌

- 避免固定宽度的布局
- 不要忽略移动端体验
- 避免过度嵌套的布局
- 不要忽视可访问性
- 避免使用魔法数字

## 测试清单

### 功能测试
- [ ] 响应式布局正确工作
- [ ] 侧边栏折叠功能正常
- [ ] 网格系统在所有断点下工作
- [ ] 容器最大宽度正确应用

### 可视测试
- [ ] 布局在不同屏幕尺寸下美观
- [ ] 间距一致且和谐
- [ ] 元素对齐正确
- [ ] 文本可读性好

### 可访问性测试
- [ ] 键盘导航正常
- [ ] 屏幕阅读器友好
- [ ] 跳转链接工作
- [ ] 焦点指示器清晰

---

*最后更新: 2025年11月14日*