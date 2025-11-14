# 间距系统 (Spacing System)

> Meshy AI 的布局、间距和网格系统指南

## 概述

Meshy AI的间距系统基于8点网格原则，提供了一致、可预测的间距规则。系统确保所有元素之间保持和谐的视觉关系，支持响应式设计和多种布局需求。

## 基础间距单位

### 8点网格系统

```css
--spacing: 0.25rem;  /* 基础单位 = 4px */
```

所有间距都是基础单位的倍数，确保设计的一致性和可预测性。

### 间距令牌

#### 微间距 (Micro Spacing)
```css
--spacing-xs: 0.25rem;    /* 4px - 极小间距 */
--spacing-sm: 0.5rem;     /* 8px - 小间距 */
```

#### 常用间距 (Common Spacing)
```css
--spacing-md: 0.75rem;    /* 12px - 中等间距 */
--spacing-lg: 1rem;       /* 16px - 大间距 */
--spacing-xl: 1.25rem;    /* 20px - 特大间距 */
--spacing-2xl: 1.5rem;    /* 24px - 超大间距 */
```

#### 扩展间距 (Extended Spacing)
```css
--size-2xs: 2px;          /* 2px - 最小尺寸 */
--size-xs: 4px;           /* 4px - 极小尺寸 */
--size-sm: 8px;           /* 8px - 小尺寸 */
--size-md: 16px;          /* 16px - 中等尺寸 */
--size-ml: 24px;          /* 24px - 中大尺寸 */
--size-lg: 32px;          /* 32px - 大尺寸 */
--size-xl: 48px;          /* 48px - 特大尺寸 */
```

## 组件间距

### 内边距 (Padding)

#### 按钮内边距
```css
/* 小按钮 */
.button-sm {
  padding: var(--spacing-sm) var(--spacing-md);
}

/* 标准按钮 */
.button {
  padding: var(--spacing-md) var(--spacing-lg);
}

/* 大按钮 */
.button-lg {
  padding: var(--spacing-lg) var(--spacing-xl);
}
```

#### 卡片内边距
```css
/* 紧凑卡片 */
.card-compact {
  padding: var(--spacing-md);
}

/* 标准卡片 */
.card {
  padding: var(--spacing-lg);
}

/* 宽松卡片 */
.card-relaxed {
  padding: var(--spacing-xl);
}
```

#### 表单控件内边距
```css
.input {
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid var(--border-color);
}

.textarea {
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
}
```

### 外边距 (Margin)

#### 元素间距
```css
/* 段落间距 */
.paragraph {
  margin-bottom: var(--spacing-lg);
}

/* 标题间距 */
.heading {
  margin-bottom: var(--spacing-md);
}

/* 列表项间距 */
.list-item {
  margin-bottom: var(--spacing-sm);
}
```

#### 组件间距
```css
/* 组件组间距 */
.component-group {
  margin-bottom: var(--spacing-xl);
}

/* 区块间距 */
.section {
  margin-bottom: var(--spacing-2xl);
}

/* 页面间距 */
.page-section {
  margin-bottom: 3rem; /* 48px */
}
```

## 布局系统

### 容器系统

```css
/* 响应式容器 */
.container-3xs { max-width: 16rem; }  /* 256px */
.container-xs  { max-width: 20rem; }  /* 320px */
.container-sm  { max-width: 24rem; }  /* 384px */
.container-md  { max-width: 28rem; }  /* 448px */
.container-lg  { max-width: 32rem; }  /* 512px */
.container-xl  { max-width: 36rem; }  /* 576px */
.container-2xl { max-width: 42rem; }  /* 672px */
.container-3xl { max-width: 48rem; }  /* 768px */
.container-4xl { max-width: 56rem; }  /* 896px */
.container-5xl { max-width: 64rem; }  /* 1024px */
.container-8xl { max-width: 90rem; }  /* 1440px */
.container-9xl { max-width: 120rem; } /* 1920px */
```

### 页面水平内边距

```css
.page-horizontal-padding {
  padding-left: var(--size-md);
  padding-right: var(--size-md);
}
```

### 断点系统

```css
/* 移动优先的响应式断点 */
--breakpoint-sm: 640px;   /* 小屏幕 */
--breakpoint-md: 768px;   /* 中等屏幕 */
--breakpoint-lg: 1024px;  /* 大屏幕 */
--breakpoint-xl: 1280px;  /* 超大屏幕 */
--breakpoint-2xl: 1536px; /* 超超大屏幕 */
```

## 间距使用模式

### 1. 元素内部间距

```css
/* 一致的内部间距 */
.component {
  padding: var(--spacing-lg);
}

/* 非对称内边距 */
.component-asymmetric {
  padding: var(--spacing-md) var(--spacing-lg);
}
```

### 2. 元素之间间距

```css
/* 垂直间距 */
.vertical-spacing > * + * {
  margin-top: var(--spacing-md);
}

/* 水平间距 */
.horizontal-spacing > * + * {
  margin-left: var(--spacing-md);
}
```

### 3. 嵌套间距

```css
/* 嵌套组件的间距管理 */
.nested-component {
  padding: var(--spacing-lg);
}

.nested-component .child {
  margin-bottom: var(--spacing-md);
}
```

## 特殊间距场景

### 1. 最小触摸目标

```css
/* 移动设备最小触摸目标 */
.min-touch-target {
  min-height: 2.75rem;  /* 44px */
  min-width: 2.75rem;   /* 44px */
}
```

### 2. 安全区域

```css
/* 移动设备安全区域 */
.mobile-nav-height {
  height: env(safe-area-inset-bottom, 0);
}

.safe-area-inset-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
```

### 3. 滚动容器

```css
/* 页面内容高度 */
.page-content-height {
  height: calc(100dvh - var(--header-height));
}

.page-content-height-without-header {
  height: 100dvh;
}
```

## 应用程序特定间距

### 1. 头部导航

```css
/* 头部高度 */
.header-height {
  height: 54px;
}

/* 应用内头部高度 */
.in-app-header-height {
  height: 50px;
}
```

### 2. 侧边栏

```css
/* 侧边栏宽度 */
.sidebar-width {
  width: 220px;
}

.sidebar-width-collapsed {
  width: 90px;
}

.sidebar-default-width {
  width: 72px;
}
```

### 3. 线程布局

```css
/* 线程宽度 */
.thread-width {
  width: 1100px;
}

.thread-content-width {
  width: 740px;
}

/* 线程视觉间距 */
.thread-visual-spacing {
  margin-bottom: var(--size-md);
}
```

### 4. 模态框和提示

```css
/* 轻提示边距 */
.toast-v-margin {
  margin-top: 60px;
  margin-bottom: 60px;
}

.toast-h-margin {
  margin-left: 24px;
  margin-right: 24px;
}

/* 输入框高度 */
.thread-input-height-with-padding {
  height: 130px;
}

.thread-attachments-height-with-padding {
  height: 182px;
}
```

## 响应式间距

### 移动优先策略

```css
/* 默认移动间距 */
.responsive-spacing {
  padding: var(--spacing-md);
}

/* 平板间距 */
@media (min-width: 768px) {
  .responsive-spacing {
    padding: var(--spacing-lg);
  }
}

/* 桌面间距 */
@media (min-width: 1024px) {
  .responsive-spacing {
    padding: var(--spacing-xl);
  }
}
```

### 流体间距

```css
/* 使用 clamp() 实现流体间距 */
.fluid-spacing {
  padding: clamp(
    var(--spacing-sm),    /* 最小值 */
    2vw,                 /* 首选值 */
    var(--spacing-xl)     /* 最大值 */
  );
}
```

## 间距工具类

### 内边距工具类

```css
/* 全方向内边距 */
.p-xs { padding: var(--spacing-xs); }
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }
.p-xl { padding: var(--spacing-xl); }

/* 单方向内边距 */
.pt-sm { padding-top: var(--spacing-sm); }
.pr-sm { padding-right: var(--spacing-sm); }
.pb-sm { padding-bottom: var(--spacing-sm); }
.pl-sm { padding-left: var(--spacing-sm); }

/* 水平和垂直内边距 */
.px-sm {
  padding-left: var(--spacing-sm);
  padding-right: var(--spacing-sm);
}
.py-sm {
  padding-top: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
}
```

### 外边距工具类

```css
/* 全方向外边距 */
.m-xs { margin: var(--spacing-xs); }
.m-sm { margin: var(--spacing-sm); }
.m-md { margin: var(--spacing-md); }
.m-lg { margin: var(--spacing-lg); }
.m-xl { margin: var(--spacing-xl); }

/* 单方向外边距 */
.mt-sm { margin-top: var(--spacing-sm); }
.mr-sm { margin-right: var(--spacing-sm); }
.mb-sm { margin-bottom: var(--spacing-sm); }
.ml-sm { margin-left: var(--spacing-sm); }

/* 外边距自动居中 */
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
```

### 间距重置

```css
/* 重置所有间距 */
.m-0 { margin: 0; }
.p-0 { padding: 0; }

/* 重置单方向间距 */
.mt-0 { margin-top: 0; }
.mb-0 { margin-bottom: 0; }
.ml-0 { margin-left: 0; }
.mr-0 { margin-right: 0; }
```

## 最佳实践

### 1. DO's ✅

#### 使用间距令牌
```css
/* ✅ 正确 */
.component {
  margin-bottom: var(--spacing-lg);
}

/* ❌ 错误 */
.component {
  margin-bottom: 16px;
}
```

#### 保持一致性
```css
/* ✅ 相同类型组件使用相同间距 */
.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.sidebar-item {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}
```

#### 响应式设计
```css
/* ✅ 响应式间距 */
.responsive-component {
  padding: var(--spacing-md);
}

@media (min-width: 768px) {
  .responsive-component {
    padding: var(--spacing-lg);
  }
}
```

### 2. DON'Ts ❌

#### 避免硬编码值
```css
/* ❌ 错误 */
.component {
  margin: 23px 17px;
}

/* ✅ 正确 */
.component {
  margin: var(--spacing-lg) var(--spacing-md);
}
```

#### 避免不一致的间距
```css
/* ❌ 错误 - 间距不一致 */
.component {
  padding: 12px 16px 14px 13px;
}

/* ✅ 正确 - 使用一致的间距 */
.component {
  padding: var(--spacing-md) var(--spacing-lg);
}
```

#### 避免过小的间距
```css
/* ❌ 错误 - 间距太小 */
.component {
  margin: 2px;
}

/* ✅ 正确 - 使用最小间距 */
.component {
  margin: var(--spacing-xs);
}
```

## 测试指南

### 视觉测试
- [ ] 所有间距在8点网格上对齐
- [ ] 不同屏幕尺寸下间距保持比例
- [ ] 组件间距看起来和谐
- [ ] 文本行间距合适

### 功能测试
- [ ] 最小触摸目标符合要求
- [ ] 响应式间距正确工作
- [ ] 安全区域间距正确
- [ ] 滚动容器高度正确

### 用户体验测试
- [ ] 布局在不同设备上美观
- [ ] 间距不会造成视觉混乱
- [ ] 重要元素有足够的空间
- [ ] 长文本内容可读性好

---

*最后更新: 2025年11月14日*