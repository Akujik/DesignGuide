# Meshy AI 设计系统 - 布局系统规范

## 概述

Meshy AI 采用基于 CSS Grid 和 Flexbox 的现代布局系统，支持响应式设计，确保在各种设备和屏幕尺寸上都有良好的用户体验。

## 网格系统

### 响应式断点

| 断点名称 | 最小宽度 | 前缀 | 用途 |
|----------|----------|------|------|
| `--breakpoint-xs` | `0px` | 无 | 超小屏幕（手机竖屏） |
| `--breakpoint-sm` | `640px` | `sm:` | 小屏幕（手机横屏） |
| `--breakpoint-md` | `768px` | `md:` | 中等屏幕（平板） |
| `--breakpoint-lg` | `1024px` | `lg:` | 大屏幕（小型笔记本） |
| `--breakpoint-xl` | `1280px` | `xl:` | 超大屏幕（桌面） |
| `--breakpoint-2xl` | `1536px` | `2xl:` | 极大屏幕（大桌面） |

### 容器系统

```css
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--padding-lg);
}

.container-fluid {
  width: 100%;
  padding: 0 var(--padding-lg);
}

.container-narrow {
  max-width: var(--container-lg);
  margin: 0 auto;
  padding: 0 var(--padding-lg);
}

.container-wide {
  max-width: var(--container-2xl);
  margin: 0 auto;
  padding: 0 var(--padding-lg);
}
```

### 网格列系统

```css
.grid {
  display: grid;
  gap: var(--gap-lg);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

/* 响应式网格 */
.grid-cols-1.md\:grid-cols-2 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 768px) {
  .grid-cols-1.md\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## 布局组件

### 页面布局

```css
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 3rem;
  background-color: var(--color-bg-base);
  border-bottom: 1px solid var(--color-bg-border);
}

.page-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-footer {
  background-color: var(--color-bg-sub);
  border-top: 1px solid var(--color-bg-border);
  padding: var(--padding-xl) 0;
}
```

### 侧边栏布局

```css
.sidebar-layout {
  display: flex;
  min-height: calc(100vh - 3rem);
}

.sidebar {
  width: 16rem;
  background-color: var(--color-bg-sub);
  border-right: 1px solid var(--color-bg-border);
  padding: var(--padding-lg);
  overflow-y: auto;
}

.main-content {
  flex: 1;
  padding: var(--padding-xl);
  overflow-y: auto;
}
```

### 卡片布局

```css
.card-layout {
  display: grid;
  gap: var(--gap-lg);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: var(--padding-xl);
}

.card {
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  padding: var(--padding-lg);
  transition: all 0.2s ease-out;
}

.card:hover {
  background-color: var(--color-bg-shade);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

## Flexbox 布局

### 弹性容器

```css
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}
```

### 对齐方式

```css
/* 水平对齐 */
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }

/* 垂直对齐 */
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.items-stretch { align-items: stretch; }
.items-baseline { align-items: baseline; }
```

### 伸缩项目

```css
.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-initial { flex: 0 1 auto; }
.flex-none { flex: none; }

/* 伸缩增长 */
.flex-grow { flex-grow: 1; }
.flex-grow-0 { flex-grow: 0; }

/* 伸缩收缩 */
.flex-shrink { flex-shrink: 1; }
.flex-shrink-0 { flex-shrink: 0; }
```

## 响应式布局

### 移动优先策略

```css
/* 基础样式（移动设备） */
.responsive-layout {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

/* 平板设备 */
@media (min-width: 768px) {
  .responsive-layout {
    flex-direction: row;
    gap: var(--gap-lg);
  }
}

/* 桌面设备 */
@media (min-width: 1024px) {
  .responsive-layout {
    gap: var(--gap-xl);
  }
}
```

### 自适应布局

```css
.auto-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: var(--gap-lg);
}

.auto-layout-fixed {
  display: grid;
  grid-template-columns: 200px repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--gap-lg);
}
```

## 特殊布局

### 粘性布局

```css
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--color-bg-base);
  backdrop-filter: blur(8px);
}

.sticky-sidebar {
  position: sticky;
  top: 3rem;
  height: calc(100vh - 3rem);
  overflow-y: auto;
}
```

### 绝对定位布局

```css
.relative-container {
  position: relative;
}

.absolute-element {
  position: absolute;
  top: 0;
  right: 0;
}

.centered-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 固定布局

```css
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.fixed-sidebar {
  position: fixed;
  top: 3rem;
  left: 0;
  width: 16rem;
  height: calc(100vh - 3rem);
  background-color: var(--color-bg-sub);
  border-right: 1px solid var(--color-bg-border);
}
```

## CSS 实现示例

```css
:root {
  /* 断点 */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  /* 容器最大宽度 */
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
}

/* 基础布局 */
.layout {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.layout-header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 50;
}

.layout-main {
  grid-area: main;
}

.layout-footer {
  grid-area: footer;
}

/* 响应式侧边栏布局 */
@media (min-width: 1024px) {
  .layout {
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-columns: 16rem 1fr;
  }

  .layout-sidebar {
    grid-area: sidebar;
  }
}
```

## 布局工具类

### 宽度和高度

```css
.w-full { width: 100%; }
.w-auto { width: auto; }
.w-screen { width: 100vw; }

.h-full { height: 100%; }
.h-auto { height: auto; }
.h-screen { height: 100vh; }
.h-screen-without-header { height: calc(100vh - 3rem); }
```

### 溢出处理

```css
.overflow-auto { overflow: auto; }
.overflow-hidden { overflow: hidden; }
.overflow-scroll { overflow: scroll; }
.overflow-visible { overflow: visible; }

.overflow-x-auto { overflow-x: auto; }
.overflow-y-auto { overflow-y: auto; }
.overflow-x-hidden { overflow-x: hidden; }
.overflow-y-hidden { overflow-y: hidden; }
```

### 定位

```css
.static { position: static; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }
```

## 最佳实践

1. **移动优先**: 始终从移动设备开始设计，然后逐步增强
2. **语义化布局**: 使用合适的 HTML5 语义标签
3. **性能优化**: 避免过度嵌套的布局结构
4. **可访问性**: 确保布局对键盘导航和屏幕阅读器友好
5. **测试覆盖**: 在不同设备和屏幕尺寸上测试布局

---

*此布局系统基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*