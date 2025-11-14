# 按钮组件 (Buttons)

> Meshy AI 的按钮组件库和使用指南

## 概述

按钮是用户界面中最常见的交互元素，用于触发操作、导航和提交表单。Meshy AI的按钮系统提供了一致的视觉样式、交互状态和可访问性支持。

## 按钮类型

### 1. 主要按钮 (Primary)

用于页面或表单中最重要的操作。

```html
<button class="button button-primary">
  主要操作
</button>

<a href="#" class="button button-primary">
  链接样式的主要按钮
</a>
```

#### 样式规格
```css
.button-primary {
  background-color: var(--primary-color);
  color: var(--background-inverse-color);
  border: 1px solid var(--primary-color);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--default-transition-duration) var(--default-transition-timing-function);
}

.button-primary:hover {
  background-color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

### 2. 次要按钮 (Secondary)

用于次要操作或作为主要按钮的替代选项。

```html
<button class="button button-secondary">
  次要操作
</button>
```

#### 样式规格
```css
.button-secondary {
  background-color: var(--background-base-color);
  color: var(--foreground-color);
  border: 1px solid var(--border-color);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--default-transition-duration) var(--default-transition-timing-function);
}

.button-secondary:hover {
  background-color: var(--background-subtle-color);
  border-color: var(--border-color);
  transform: translateY(-1px);
}
```

### 3. 强调按钮 (Accent)

用于需要特别注意的操作，如升级、促销等。

```html
<button class="button button-accent">
  强调操作
</button>
```

#### 样式规格
```css
.button-accent {
  background-color: var(--accent-color);
  color: var(--accent-foreground-color);
  border: 1px solid var(--accent-color);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  position: relative;
  overflow: hidden;
}

.button-accent::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left var(--duration-slow);
}

.button-accent:hover::before {
  left: 100%;
}
```

### 4. 危险按钮 (Destructive)

用于删除、移除等不可逆的危险操作。

```html
<button class="button button-destructive">
  删除
</button>
```

#### 样式规格
```css
.button-destructive {
  background-color: var(--negative-color);
  color: var(--background-inverse-color);
  border: 1px solid var(--negative-color);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
}

.button-destructive:hover {
  background-color: var(--negative-color-hover);
  border-color: var(--negative-color-hover);
}
```

### 5. 幽灵按钮 (Ghost)

用于在已有背景的区域中，不需要强烈视觉强调的操作。

```html
<button class="button button-ghost">
  幽灵按钮
</button>
```

#### 样式规格
```css
.button-ghost {
  background-color: transparent;
  color: var(--foreground-color);
  border: 1px solid var(--border-color);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-normal);
}

.button-ghost:hover {
  background-color: var(--background-subtle-color);
  border-color: var(--foreground-color);
}
```

## 按钮尺寸

### 1. 小按钮 (Small)

用于空间受限的区域或表格操作。

```html
<button class="button button-primary button-sm">
  小按钮
</button>
```

```css
.button-sm {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--text-sm);
  min-height: 32px;
}
```

### 2. 标准按钮 (Default)

最常用的按钮尺寸。

```html
<button class="button button-primary">
  标准按钮
</button>
```

```css
.button {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--text-base);
  min-height: 40px;
}
```

### 3. 大按钮 (Large)

用于主要操作或需要强调的场景。

```html
<button class="button button-primary button-lg">
  大按钮
</button>
```

```css
.button-lg {
  padding: var(--spacing-lg) var(--spacing-xl);
  font-size: var(--text-lg);
  min-height: 48px;
}
```

## 按钮状态

### 1. 禁用状态 (Disabled)

表示按钮当前不可用。

```html
<button class="button button-primary" disabled>
  禁用按钮
</button>
```

```css
.button:disabled,
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  transform: none !important;
}
```

### 2. 加载状态 (Loading)

表示按钮正在执行操作。

```html
<button class="button button-primary button-loading">
  <span class="loading-spinner"></span>
  加载中...
</button>
```

```css
.button-loading {
  pointer-events: none;
  position: relative;
}

.button-loading .loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin var(--duration-slowest) linear infinite;
  margin-right: var(--spacing-sm);
}
```

### 3. 成功状态 (Success)

表示操作成功完成。

```html
<button class="button button-primary button-success">
  ✓ 成功
</button>
```

```css
.button-success {
  background-color: var(--positive-color);
  border-color: var(--positive-color);
  animation: success-pulse var(--duration-normal) var(--ease-out);
}
```

## 特殊按钮变体

### 1. 图标按钮

只包含图标的按钮。

```html
<button class="button button-icon" aria-label="设置">
  <svg class="icon">...</svg>
</button>
```

```css
.button-icon {
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
}

.button-icon .icon {
  width: 20px;
  height: 20px;
}
```

### 2. 带图标的文本按钮

包含图标和文本的按钮。

```html
<button class="button button-primary">
  <svg class="icon icon-left">...</svg>
  保存
</button>

<button class="button button-primary">
  下载
  <svg class="icon icon-right">...</svg>
</button>
```

```css
.button .icon {
  width: 16px;
  height: 16px;
}

.button .icon-left {
  margin-right: var(--spacing-sm);
}

.button .icon-right {
  margin-left: var(--spacing-sm);
}
```

### 3. 全宽按钮

占据容器全宽的按钮。

```html
<button class="button button-primary button-full-width">
  全宽按钮
</button>
```

```css
.button-full-width {
  width: 100%;
  display: block;
}
```

### 4. 按钮组

多个按钮组合在一起。

```html
<div class="button-group">
  <button class="button button-secondary">取消</button>
  <button class="button button-primary">确认</button>
</div>
```

```css
.button-group {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.button-group .button {
  flex: 1;
  min-width: 0;
}
```

## 交互效果

### 1. 悬停效果

```css
.button {
  transition: all var(--duration-fast) var(--ease-out);
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

### 2. 焦点效果

```css
.button:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.button:focus:not(:focus-visible) {
  outline: none;
}
```

### 3. 涟漪效果

```css
.button-ripple {
  position: relative;
  overflow: hidden;
}

.button-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width var(--duration-slow) var(--ease-out),
              height var(--duration-slow) var(--ease-out);
}

.button-ripple:active::after {
  width: 300px;
  height: 300px;
}
```

## 可访问性

### 1. 语义化HTML

```html
<!-- 操作按钮 -->
<button type="button">操作</button>

<!-- 提交按钮 -->
<button type="submit">提交</button>

<!-- 重置按钮 -->
<button type="reset">重置</button>

<!-- 链接样式的按钮 -->
<button type="button" onclick="location.href='#'">链接</button>

<!-- 链接作为按钮 -->
<a href="#" role="button">链接按钮</a>
```

### 2. ARIA 属性

```html
<!-- 带描述的按钮 -->
<button aria-describedby="button-help">操作</button>
<div id="button-help">此操作将保存您的更改</div>

<!-- 带状态的按钮 -->
<button aria-pressed="false">切换</button>

<!-- 带标签的图标按钮 -->
<button aria-label="关闭对话框">
  <svg>...</svg>
</button>
```

### 3. 键盘导航

```css
/* 确保按钮可以获得焦点 */
.button {
  /* 自动获得焦点，无需额外样式 */
}

/* 焦点指示器 */
.button:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

## 响应式设计

### 移动设备优化

```css
@media (max-width: 767px) {
  .button {
    min-height: 44px; /* 最小触摸目标 */
    padding: var(--spacing-md) var(--spacing-lg);
  }

  .button-sm {
    min-height: 40px;
  }

  .button-lg {
    min-height: 48px;
  }
}
```

### 容器查询

```css
.button-container {
  container-type: inline-size;
}

@container (max-width: 300px) {
  .button {
    width: 100%;
    margin-bottom: var(--spacing-sm);
  }
}
```

## 使用指南

### 1. 按钮选择

```html
✅ 主要操作使用主要按钮
<button class="button button-primary">保存更改</button>

✅ 次要操作使用次要按钮
<button class="button button-secondary">取消</button>

✅ 危险操作使用危险按钮
<button class="button button-destructive">删除</button>

✅ 在已有背景中使用幽灵按钮
<div class="card">
  <button class="button button-ghost">了解更多</button>
</div>
```

### 2. 按钮层级

```html
<!-- 按重要性排列 -->
<div class="button-group">
  <button class="button button-secondary">取消</button>
  <button class="button button-primary">确认</button>
</div>

<!-- 避免多个主要按钮 -->
❌ <button class="button button-primary">保存</button>
❌ <button class="button button-primary">删除</button>

✅ <button class="button button-secondary">删除</button>
✅ <button class="button button-primary">保存</button>
```

### 3. 文本内容

```html
✅ 使用动词
<button class="button">保存文档</button>

✅ 清晰具体
<button class="button">下载PDF</button>

❌ 模糊不清
<button class="button">点击这里</button>

❌ 过于简短
<button class="button">OK</button>
```

## 工具类

### 尺寸类
```css
.btn-sm { /* 小尺寸 */ }
.btn-md { /* 中尺寸 */ }
.btn-lg { /* 大尺寸 */ }
.btn-xl { /* 超大尺寸 */ }
```

### 变体类
```css
.btn-primary { /* 主要样式 */ }
.btn-secondary { /* 次要样式 */ }
.btn-accent { /* 强调样式 */ }
.btn-destructive { /* 危险样式 */ }
.btn-ghost { /* 幽灵样式 */ }
```

### 状态类
```css
.btn-loading { /* 加载状态 */ }
.btn-success { /* 成功状态 */ }
.btn-error { /* 错误状态 */ }
.btn-disabled { /* 禁用状态 */ }
```

## 测试清单

### 功能测试
- [ ] 按钮点击正常工作
- [ ] 表单提交按钮功能正确
- [ ] 链接按钮导航正常
- [ ] 禁用状态不可点击

### 视觉测试
- [ ] 不同按钮类型样式正确
- [ ] 悬停和激活状态正常
- [ ] 焦点指示器清晰
- [ ] 加载状态动画流畅

### 可访问性测试
- [ ] 键盘导航正常
- [ ] 屏幕阅读器友好
- [ ] ARIA 属性正确
- [ ] 最小触摸目标符合要求

### 响应式测试
- [ ] 移动设备操作方便
- [ ] 不同屏幕尺寸显示正常
- [ ] 按钮组在小屏幕上正确换行
- [ ] 全宽按钮在容器中正常工作

---

*最后更新: 2025年11月14日*