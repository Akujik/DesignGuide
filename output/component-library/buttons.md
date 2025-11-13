# 按钮组件分析 (Button Components Analysis)

## 概述

Meshy.ai 的按钮系统设计简洁现代，提供了多种样式变体以适应不同的使用场景。按钮设计注重用户体验，提供了清晰的视觉反馈和状态指示。

## 按钮类型与变体

### 1. 主要按钮 (Primary Button)
```html
<button class="button button-primary">
  <span>Get Started</span>
</button>
```

**样式特征**:
- 背景色: `--color-accent-base` (#c5f955)
- 文字色: 深色文本确保对比度
- 圆角: `--radius-md` (0.375rem)
- 内边距: `var(--p-md) var(--p-xl)`
- 字重: `--font-weight-semibold`

**CSS 实现**:
```css
.button-primary {
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--p-md) var(--p-xl);
  font-family: var(--font-inter);
  font-weight: var(--font-weight-semibold);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.button-primary:hover {
  background-color: var(--color-accent-base-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(197, 249, 85, 0.2);
}

.button-primary:active {
  transform: translateY(0);
}
```

### 2. 次要按钮 (Secondary Button)
```html
<button class="button button-secondary">
  <span>Learn More</span>
</button>
```

**样式特征**:
- 背景: `--color-bg-sub` (半透明背景)
- 边框: 1px solid `--color-bg-border`
- 文字色: `--color-label-base`
- 玻璃拟态效果

**CSS 实现**:
```css
.button-secondary {
  background-color: var(--color-bg-sub);
  color: var(--color-label-base);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  padding: var(--p-md) var(--p-xl);
  font-family: var(--font-inter);
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.button-secondary:hover {
  background-color: var(--color-bg-base-hover);
  border-color: var(--color-accent-base);
}
```

### 3. 幽灵按钮 (Ghost Button)
```html
<button class="button button-ghost">
  <span>Cancel</span>
</button>
```

**样式特征**:
- 透明背景
- 仅文字和边框着色
- 最小视觉干扰

**CSS 实现**:
```css
.button-ghost {
  background-color: transparent;
  color: var(--color-label-soft);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: var(--p-md) var(--p-xl);
  font-family: var(--font-inter);
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.button-ghost:hover {
  color: var(--color-label-base);
  background-color: var(--color-bg-translucent);
}
```

### 4. 图标按钮 (Icon Button)
```html
<button class="button button-icon">
  <svg class="icon">...</svg>
</button>
```

**样式特征**:
- 正方形或圆形
- 仅包含图标
- 常用于工具栏和操作

**CSS 实现**:
```css
.button-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  color: var(--color-label-base);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.button-icon:hover {
  background-color: var(--color-bg-base-hover);
  color: var(--color-accent-base);
}
```

## 按钮尺寸变体

### 小尺寸按钮
```html
<button class="button button-primary button-small">
  Small
</button>
```

**CSS**:
```css
.button-small {
  padding: var(--p-sm) var(--p-md);
  font-size: var(--text-sm);
  border-radius: var(--radius-sm);
}
```

### 中等尺寸按钮（默认）
```html
<button class="button button-primary button-medium">
  Medium
</button>
```

**CSS**:
```css
.button-medium {
  padding: var(--p-md) var(--p-xl);
  font-size: var(--text-base);
  border-radius: var(--radius-md);
}
```

### 大尺寸按钮
```html
<button class="button button-primary button-large">
  Large
</button>
```

**CSS**:
```css
.button-large {
  padding: var(--p-lg) var(--p-2xl);
  font-size: var(--text-lg);
  border-radius: var(--radius-lg);
}
```

## 按钮状态

### 正常状态 (Normal State)
- 默认外观
- 可交互

### 悬停状态 (Hover State)
- 颜色变化
- 轻微位移动画
- 阴影效果

**CSS**:
```css
.button:hover {
  transform: translateY(-1px);
  transition-duration: var(--duration-fast);
}
```

### 激活状态 (Active State)
- 按下时的视觉反馈
- 位移动画恢复

**CSS**:
```css
.button:active {
  transform: translateY(0);
  transition-duration: var(--duration-instant);
}
```

### 焦点状态 (Focus State)
- 键盘导航支持
- 清晰的焦点指示器

**CSS**:
```css
.button:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}
```

### 禁用状态 (Disabled State)
- 不可点击
- 降低视觉对比度

**CSS**:
```css
.button:disabled,
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### 加载状态 (Loading State)
```html
<button class="button button-primary button-loading">
  <span class="button-text">Loading</span>
  <div class="loading-spinner"></div>
</button>
```

**CSS**:
```css
.button-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.button-loading .button-text {
  opacity: 0;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin var(--duration-slow) linear infinite;
}
```

## 按钮组 (Button Groups)

### 水平按钮组
```html
<div class="button-group">
  <button class="button button-primary">Save</button>
  <button class="button button-secondary">Cancel</button>
</div>
```

**CSS**:
```css
.button-group {
  display: flex;
  gap: var(--gap-sm);
}

.button-group .button {
  margin: 0; /* 重置默认间距 */
}

.button-group > :not(:last-child) {
  margin-right: var(--gap-sm);
}
```

### 垂直按钮组
```html
<div class="button-group button-group-vertical">
  <button class="button button-primary">Upload</button>
  <button class="button button-secondary">Preview</button>
  <button class="button button-ghost">Delete</button>
</div>
```

**CSS**:
```css
.button-group-vertical {
  flex-direction: column;
  gap: var(--gap-sm);
}

.button-group-vertical .button {
  width: 100%;
}
```

## 特殊按钮变体

### 全宽按钮
```html
<button class="button button-primary button-full-width">
  Full Width Button
</button>
```

**CSS**:
```css
.button-full-width {
  width: 100%;
  display: flex;
  justify-content: center;
}
```

### 圆形按钮
```html
<button class="button button-primary button-circle">
  <svg class="icon">...</svg>
</button>
```

**CSS**:
```css
.button-circle {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  padding: 0;
}
```

### 渐变按钮
```html
<button class="button button-gradient">
  Gradient Button
</button>
```

**CSS**:
```css
.button-gradient {
  background: linear-gradient(135deg, var(--color-accent-base), var(--color-accent-support-base));
  color: var(--color-bg-base);
  border: none;
}

.button-gradient:hover {
  background: linear-gradient(135deg, var(--color-accent-base-hover), var(--color-accent-support-highlight));
}
```

## 按钮内容布局

### 仅文本按钮
```html
<button class="button button-primary">
  Text Only
</button>
```

### 带图标按钮
```html
<button class="button button-primary">
  <svg class="icon icon-left">...</svg>
  <span>Icon Left</span>
</button>

<button class="button button-primary">
  <span>Icon Right</span>
  <svg class="icon icon-right">...</svg>
</button>
```

**CSS**:
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-sm);
}

.icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.icon-left {
  order: -1;
}

.icon-right {
  order: 1;
}
```

### 带加载状态的按钮
```html
<button class="button button-primary" data-loading="false">
  <span class="button-content">
    <svg class="icon">...</svg>
    <span>Submit</span>
  </span>
  <div class="button-spinner" hidden>
    <div class="spinner"></div>
  </div>
</button>
```

## 可访问性考虑

### ARIA 属性
```html
<button class="button button-primary"
        aria-label="Submit form"
        aria-describedby="submit-help">
  Submit
</button>
<div id="submit-help" class="sr-only">
  Submits the form and processes your data
</div>
```

### 键盘导航
```css
.button {
  /* 确保按钮可以通过键盘聚焦 */
  position: relative;
}

.button:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}
```

### 屏幕阅读器支持
```html
<button class="button button-primary"
        aria-pressed="false"
        role="button">
  Toggle
</button>
```

## 响应式设计

### 移动设备适配
```css
@media (max-width: 768px) {
  .button {
    min-height: 44px; /* 触摸友好的最小尺寸 */
    padding: var(--p-md) var(--p-lg);
  }

  .button-small {
    min-height: 36px;
    padding: var(--p-sm) var(--p-md);
  }
}
```

### 触摸设备优化
```css
@media (hover: none) {
  .button:hover {
    /* 移除悬停效果 */
    transform: none;
    box-shadow: none;
  }

  .button:active {
    /* 增强触摸反馈 */
    transform: scale(0.98);
    background-color: var(--color-bg-base-hover);
  }
}
```

## 按钮使用指南

### 何时使用
- **主要按钮**: 主要操作，如"提交"、"保存"、"开始"
- **次要按钮**: 次要操作，如"取消"、"返回"
- **幽灵按钮**: 低优先级操作，如"了解更多"、"查看详情"
- **图标按钮**: 空间有限的场景，如工具栏

### 按钮层级
1. **主要按钮**: 最重要的操作
2. **次要按钮**: 备选操作
3. **幽灵按钮**: 辅助操作
4. **文本链接**: 最弱的操作

### 最佳实践
- 一个界面中只使用一个主要按钮
- 按钮文本简洁明确，使用动词
- 提供清晰的视觉反馈
- 确保足够的触摸目标尺寸
- 保持一致的样式和行为

## 预览系统

### 交互式预览
查看所有按钮组件的实时预览和交互效果：
- [按钮组件预览页面](../preview/buttons.html)

### 功能特性
- ✨ **实时预览** - 所有按钮状态和交互效果
- 🎨 **颜色复制** - 点击颜色块复制HEX值
- 📋 **代码复制** - 一键复制所有按钮代码
- 📱 **响应式** - 适配所有设备尺寸
- ⚡ **交互演示** - 悬停、点击、状态切换

## 按钮变体速查表

| 类型 | 用途 | 背景色 | 文字色 | 圆角 | 预览链接 |
|------|------|--------|--------|------|-----------|
| Primary | 主要操作 | #c5f955 | #181818 | 0.375rem | [预览](../preview/buttons.html) |
| Secondary | 次要操作 | #1e1e1e | #dedede | 0.375rem | [预览](../preview/buttons.html) |
| Ghost | 辅助操作 | transparent | #9b9b9b | 0.375rem | [预览](../preview/buttons.html) |
| Icon | 工具操作 | #1e1e1e | #dedede | 0.375rem | [预览](../preview/buttons.html) |

## 代码示例

### 完整的按钮组件
```html
<button class="button button-primary button-medium"
        type="submit"
        aria-label="Submit form">
  <span class="button-content">
    <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
    <span>Submit</span>
  </span>
</button>
```

### 带状态的按钮组
```html
<div class="button-group">
  <button class="button button-primary" disabled>Processing...</button>
  <button class="button button-secondary">Cancel</button>
</div>
```