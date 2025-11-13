# 布局系统规范 (Layout System Specification)

## 概述

Meshy.ai 的布局系统采用现代化的 CSS Grid 和 Flexbox 技术，结合响应式设计原则，提供了灵活、可扩展的布局解决方案。系统支持从移动端到大屏幕的全响应式适配，特别针对 Hero 区域的首屏展示进行了优化。

## 网格系统 (Grid System)

### 基础网格
```css
/* 12列网格系统 */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gap-lg);
  max-width: 1200px;
  margin: 0 auto;
}

/* 网格列 */
.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-5 { grid-column: span 5; }
.col-6 { grid-column: span 6; }
.col-7 { grid-column: span 7; }
.col-8 { grid-column: span 8; }
.col-9 { grid-column: span 9; }
.col-10 { grid-column: span 10; }
.col-11 { grid-column: span 11; }
.col-12 { grid-column: span 12; }
```

### 响应式网格
```css
/* 移动优先响应式网格 */
.grid-responsive {
  display: grid;
  gap: var(--gap-md);
  grid-template-columns: 1fr;
}

/* 平板设备 */
@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(6, 1fr);
  }
}

/* 桌面设备 */
@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(12, 1fr);
  }
}

/* 大屏幕设备 */
@media (min-width: 1440px) {
  .grid-responsive {
    max-width: 1400px;
  }
}
```

### 特殊网格布局
```css
/* 2列布局 */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-xl);
}

/* 3列布局 */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-xl);
}

/* 4列布局 */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-lg);
}

/* 不对称布局 */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--gap-2xl);
}

/* 主边栏布局 */
.grid-sidebar {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--gap-3xl);
}
```

## 容器系统 (Container System)

### 页面容器
```css
/* 基础容器 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--p-lg);
}

/* 窄容器 */
.container-narrow {
  max-width: 800px;
}

/* 宽容器 */
.container-wide {
  max-width: 1400px;
}

/* 全宽容器 */
.container-fluid {
  max-width: none;
  padding: 0 var(--p-lg);
}
```

### 响应式容器
```css
/* 响应式内边距 */
.container-responsive {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--p-md);
}

@media (min-width: 768px) {
  .container-responsive {
    padding: 0 var(--p-xl);
  }
}

@media (min-width: 1024px) {
  .container-responsive {
    padding: 0 var(--p-3xl);
  }
}
```

## 弹性布局 (Flexbox System)

### 基础弹性容器
```css
/* 行方向弹性布局 */
.flex {
  display: flex;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

/* 弹性对齐 */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-around {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.flex-start {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.flex-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
```

### 弹性项目属性
```css
/* 弹性增长 */
.flex-grow-0 { flex-grow: 0; }
.flex-grow-1 { flex-grow: 1; }

/* 弹性收缩 */
.flex-shrink-0 { flex-shrink: 0; }
.flex-shrink-1 { flex-shrink: 1; }

/* 弹性基础 */
.flex-basis-0 { flex-basis: 0; }
.flex-basis-auto { flex-basis: auto; }

/* 自对齐 */
.self-start { align-self: flex-start; }
.self-center { align-self: center; }
.self-end { align-self: flex-end; }
.self-stretch { align-self: stretch; }
```

## 响应式断点 (Breakpoints)

### 断点定义
```css
/* 断点变量 */
--breakpoint-sm: 640px;   /* 小屏幕 */
--breakpoint-md: 768px;   /* 平板 */
--breakpoint-lg: 1024px;  /* 桌面 */
--breakpoint-xl: 1280px;  /* 大桌面 */
--breakpoint-2xl: 1536px; /* 超大桌面 */
```

### 响应式工具类
```css
/* 显示/隐藏 */
.sm-hidden { display: none; }
.md-hidden { display: none; }
.lg-hidden { display: none; }

@media (min-width: 640px) {
  .sm-visible { display: block; }
  .sm-hidden { display: none; }
}

@media (min-width: 768px) {
  .md-visible { display: block; }
  .md-hidden { display: none; }
}

@media (min-width: 1024px) {
  .lg-visible { display: block; }
  .lg-hidden { display: none; }
}
```

## 页面布局模式 (Page Layout Patterns)

### 标准页面布局
```css
/* 页面基础结构 */
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-header {
  flex-shrink: 0;
  padding: var(--p-lg) 0;
  border-bottom: 1px solid var(--color-bg-border);
}

.page-main {
  flex: 1;
  padding: var(--p-3xl) 0;
}

.page-footer {
  flex-shrink: 0;
  padding: var(--p-2xl) 0;
  border-top: 1px solid var(--color-bg-border);
}
```

### 仪表板布局
```css
/* 仪表板网格布局 */
.dashboard {
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
}

.dashboard-header {
  grid-area: header;
  background: var(--color-bg-base);
  border-bottom: 1px solid var(--color-bg-border);
}

.dashboard-sidebar {
  grid-area: sidebar;
  background: var(--color-bg-sub);
  border-right: 1px solid var(--color-bg-border);
}

.dashboard-main {
  grid-area: main;
  overflow-y: auto;
  padding: var(--p-2xl);
}
```

### 卡片布局
```css
/* 卡片网格 */
.card-grid {
  display: grid;
  gap: var(--gap-xl);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* 卡片列表 */
.card-list {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

/* 卡片瀑布流 */
.card-masonry {
  column-count: 3;
  column-gap: var(--gap-xl);
}

.card-masonry-item {
  break-inside: avoid;
  margin-bottom: var(--gap-xl);
}

@media (max-width: 768px) {
  .card-masonry {
    column-count: 1;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .card-masonry {
    column-count: 2;
  }
}
```

## 组件布局 (Component Layout)

### 表单布局
```css
/* 表单网格 */
.form-grid {
  display: grid;
  gap: var(--gap-lg);
  grid-template-columns: 1fr;
}

.form-grid-2 {
  grid-template-columns: 1fr 1fr;
}

.form-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.form-grid-responsive {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .form-grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .form-grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 导航布局
```css
/* 水平导航 */
.nav-horizontal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--p-lg) var(--p-2xl);
}

.nav-items {
  display: flex;
  align-items: center;
  gap: var(--gap-lg);
}

/* 垂直导航 */
.nav-vertical {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
  padding: var(--p-lg);
}

.nav-section {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  margin-bottom: var(--m-xl);
}
```

### 文章布局
```css
/* 文章容器 */
.article {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--p-2xl) var(--p-lg);
}

.article-header {
  margin-bottom: var(--m-3xl);
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
}

.article-sidebar {
  display: none;
}

@media (min-width: 1024px) {
  .article-with-sidebar {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: var(--gap-3xl);
  }

  .article-sidebar {
    display: block;
  }
}
```

## 布局工具类 (Layout Utilities)

### 尺寸工具
```css
/* 宽度 */
.w-full { width: 100%; }
.w-auto { width: auto; }
.w-screen { width: 100vw; }

/* 最大宽度 */
.max-w-xs { max-width: 320px; }
.max-w-sm { max-width: 640px; }
.max-w-md { max-width: 768px; }
.max-w-lg { max-width: 1024px; }
.max-w-xl { max-width: 1280px; }

/* 高度 */
.h-full { height: 100%; }
.h-screen { height: 100vh; }
.h-auto { height: auto; }

/* 最小高度 */
.min-h-screen { min-height: 100vh; }
```

### 定位工具
```css
/* 相对定位 */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

/* 定位偏移 */
.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }

/* 层级 */
.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-50 { z-index: 50; }
```

### 溢出控制
```css
.overflow-hidden { overflow: hidden; }
.overflow-visible { overflow: visible; }
.overflow-scroll { overflow: scroll; }
.overflow-auto { overflow: auto; }

.overflow-x-hidden { overflow-x: hidden; }
.overflow-y-auto { overflow-y: auto; }
```

## 特殊布局场景

### Hero 区域布局

#### Hero 区域设计原则
Hero 区域是用户访问网站时首先看到的区域，需要：
- 突出核心价值主张
- 提供清晰的行动号召
- 保持品牌一致性
- 优化首屏加载性能
- 支持各种设备尺寸

#### 标准 Hero 头部布局
```css
/* Hero 头部导航 */
.hero-header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: var(--color-bg-base);
  border-bottom: 1px solid var(--color-bg-border);
  transition: all var(--duration-fast) var(--ease-smooth);
  backdrop-filter: blur(10px);
  background-color: rgba(24, 24, 24, 0.95);
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem; /* 移动端高度 */
  padding: 0 var(--p-lg);
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .hero-container {
    height: 4.5rem; /* 桌面端高度 */
    padding: 0 var(--p-2xl);
  }
}

.hero-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.hero-nav {
  display: none;
  flex: 1;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-nav {
    display: flex;
  }
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
}
```

#### 全屏 Hero 布局
```css
/* 全屏英雄区域 */
.hero-fullscreen {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-bg-base);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center,
    rgba(197, 249, 85, 0.1) 0%,
    transparent 50%);
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(197, 249, 85, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 62, 143, 0.05) 0%, transparent 50%);
  background-size: 100% 100%;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  padding: var(--p-3xl);
}

.hero-title {
  font-size: var(--text-5xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-label-title);
  line-height: var(--leading-tight);
  margin-bottom: var(--p-xl);
  background: linear-gradient(135deg,
    var(--color-accent-base),
    var(--color-accent-support-base));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: var(--text-xl);
  color: var(--color-label-soft);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--p-3xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: var(--p-lg);
  align-items: center;
}

@media (min-width: 768px) {
  .hero-cta {
    flex-direction: row;
    justify-content: center;
  }
}
```

#### 分屏 Hero 布局
```css
/* 分屏英雄区域 */
.hero-split {
  padding: var(--p-5xl) 0;
  background-color: var(--color-bg-base);
}

.hero-split-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap-3xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--p-lg);
}

@media (min-width: 1024px) {
  .hero-split-container {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.hero-split-content {
  order: 2;
}

@media (min-width: 1024px) {
  .hero-split-content {
    order: 1;
  }
}

.hero-split-visual {
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-split-visual {
    order: 2;
  }
}

.hero-content-left .hero-title {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-label-title);
  line-height: var(--leading-tight);
  margin-bottom: var(--p-xl);
}

.hero-description {
  font-size: var(--text-lg);
  color: var(--color-label-soft);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--p-3xl);
}

.hero-features {
  display: flex;
  flex-direction: column;
  gap: var(--p-md);
  margin-bottom: var(--p-3xl);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--p-md);
  color: var(--color-label-base);
  font-size: var(--text-base);
}

.hero-showcase-3d {
  position: relative;
  aspect-ratio: 1;
  max-width: 500px;
  margin: 0 auto;
  background: linear-gradient(135deg,
    var(--color-accent-bg),
    var(--color-accent-support-base) 0.1);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

#### 功能展示 Hero 布局
```css
/* 功能展示英雄区域 */
.hero-feature {
  padding: var(--p-5xl) 0;
  background: linear-gradient(135deg,
    var(--color-bg-base) 0%,
    var(--color-bg-sub) 100%);
}

.hero-feature-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--p-lg);
  text-align: center;
}

.hero-feature-header {
  margin-bottom: var(--p-5xl);
}

.hero-feature-title {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-label-title);
  line-height: var(--leading-tight);
  margin-bottom: var(--p-xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-feature-subtitle {
  font-size: var(--text-lg);
  color: var(--color-label-soft);
  line-height: var(--leading-relaxed);
  max-width: 600px;
  margin: 0 auto;
}

.hero-feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--p-3xl);
  margin-bottom: var(--p-5xl);
}

.feature-card {
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-2xl);
  padding: var(--p-3xl);
  text-align: left;
  transition: all var(--duration-normal) var(--ease-smooth);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg,
    var(--color-accent-base),
    var(--color-accent-support-base));
  transform: scaleX(0);
  transition: transform var(--duration-normal) var(--ease-smooth);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: var(--color-accent-base);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon-large {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg,
    var(--color-accent-base),
    var(--color-accent-support-base));
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-bg-base);
  margin-bottom: var(--p-xl);
}

.feature-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-label-title);
  margin-bottom: var(--p-md);
}

.feature-description {
  color: var(--color-label-soft);
  line-height: var(--leading-relaxed);
}
```

#### Hero 区域响应式设计
```css
/* 移动端 Hero 优化 */
@media (max-width: 768px) {
  .hero-title {
    font-size: var(--text-3xl);
  }

  .hero-subtitle {
    font-size: var(--text-lg);
  }

  .hero-cta {
    width: 100%;
  }

  .hero-cta .button {
    width: 100%;
    justify-content: center;
  }

  .hero-split-container {
    padding: 0 var(--p-md);
  }

  .hero-feature-grid {
    grid-template-columns: 1fr;
    gap: var(--p-2xl);
  }
}

/* 平板设备适配 */
@media (min-width: 769px) and (max-width: 1023px) {
  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-split-container {
    padding: 0 var(--p-xl);
  }

  .hero-feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 大屏设备优化 */
@media (min-width: 1440px) {
  .hero-title {
    font-size: var(--text-6xl);
  }

  .hero-container {
    max-width: 1400px;
  }

  .hero-fullscreen {
    min-height: 100vh;
  }
}
```

#### Hero 区域性能优化
```css
/* 避免重排的动画 */
.hero-animate {
  will-change: transform;
  transform: translateZ(0);
}

/* 使用 GPU 加速 */
.hero-parallax {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* 延迟加载背景 */
.hero-lazy-bg {
  background-image: none;
  background-color: var(--color-bg-base);
}

.hero-lazy-bg.loaded {
  background-image: url('hero-background.jpg');
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s ease;
}
```

### 模态框布局
```css
/* 模态框容器 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal-content {
  background: var(--color-bg-base);
  border-radius: var(--radius-xl);
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  padding: var(--p-2xl);
}
```

### 侧边栏布局
```css
/* 可收缩侧边栏 */
.sidebar-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.sidebar.collapsed {
  transform: translateX(-100%);
}

.main-content {
  flex: 1;
  padding: var(--p-2xl);
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 40;
  }

  .main-content {
    margin-left: 0;
  }
}
```

## 布局性能优化

### 布局避免重排
```css
/* 使用 transform 而不是改变位置属性 */
.smooth-move {
  transform: translateX(100px);
  /* 而不是 left: 100px */
}

/* 使用 opacity 进行动画 */
.smooth-fade {
  opacity: 0.5;
  /* 而不是 visibility: hidden */
}
```

### 布局包含块
```css
/* 创建包含块 */
.layout-contain {
  contain: layout;
}

/* 同时包含布局和绘制 */
.layout-paint-contain {
  contain: layout paint;
}
```

## 布局最佳实践

### 移动优先原则
```css
/* 移动优先的网格布局 */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap-md);
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 内容优先布局
```css
/* 内容优先的文档流 */
.content-first {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .content-first {
    flex-direction: row;
  }

  .sidebar {
    order: 2;
  }

  .main {
    order: 1;
    flex: 1;
  }
}
```

## 布局速查表

| 布局类型 | 适用场景 | 关键属性 | 断点支持 |
|----------|----------|----------|----------|
| 12列网格 | 复杂页面布局 | Grid, repeat(12, 1fr) | 完整 |
| 弹性布局 | 组件内部排列 | Flexbox, justify-content | 完整 |
| 卡片网格 | 内容展示 | Grid, auto-fit, minmax | 完整 |
| 主边栏布局 | 文章/产品页 | Grid, 2fr 1fr | 完整 |
| 英雄区域 | 首页头部 | Flexbox, min-height | 基础 |
| 模态框 | 弹窗组件 | Fixed, Flexbox center | 基础 |