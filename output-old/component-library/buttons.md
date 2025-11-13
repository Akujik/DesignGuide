# Meshy AI 组件库 - 按钮组件分析

## 概述

Meshy AI 的按钮组件具有现代的设计风格，支持多种状态和尺寸，通过渐变背景、边框和阴影效果创造出层次感强的视觉体验。

## 按钮类型

### 1. 主要按钮 (Primary Button)

用于页面中最重要的操作，通常使用品牌绿色。

```css
.button-primary {
  background: linear-gradient(135deg, #C5F955, #B8E845);
  color: #181818;
  border: none;
  border-radius: 14px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  box-shadow: 0 4px 14px 0 rgba(197, 249, 85, 0.3);
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px 0 rgba(197, 249, 85, 0.4);
  background: linear-gradient(135deg, #C5F955, #B8E845);
}

.button-primary:active {
  transform: translateY(0);
  box-shadow: 0 4px 14px 0 rgba(197, 249, 85, 0.3);
}
```

### 2. 次要按钮 (Secondary Button)

用于次要操作，通常使用半透明背景。

```css
.button-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  backdrop-filter: blur(8px);
}

.button-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.button-secondary:active {
  transform: translateY(0);
}
```

### 3. 幽灵按钮 (Ghost Button)

透明背景，只有边框，用于轻量级的操作。

```css
.button-ghost {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.button-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}
```

### 4. 图标按钮 (Icon Button)

只有图标的紧凑按钮，通常用于工具栏或操作面板。

```css
.button-icon {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
  backdrop-filter: blur(8px);
}

.button-icon:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.button-icon svg {
  width: 16px;
  height: 16px;
}
```

## 按钮尺寸

### 小尺寸 (Small)

```css
.button-sm {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 12px;
}

.button-icon-sm {
  width: 28px;
  height: 28px;
}
```

### 中等尺寸 (Medium)

```css
.button-md {
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 14px;
}

.button-icon-md {
  width: 32px;
  height: 32px;
}
```

### 大尺寸 (Large)

```css
.button-lg {
  padding: 16px 32px;
  font-size: 18px;
  border-radius: 16px;
}

.button-icon-lg {
  width: 40px;
  height: 40px;
}
```

## 按钮状态

### 正常状态 (Normal)

```css
.button {
  opacity: 1;
  cursor: pointer;
  pointer-events: auto;
}
```

### 悬浮状态 (Hover)

```css
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.2);
}

.button-primary:hover {
  box-shadow: 0 8px 24px 0 rgba(197, 249, 85, 0.4);
}

.button-secondary:hover {
  box-shadow: 0 8px 24px 0 rgba(255, 255, 255, 0.1);
}
```

### 激活状态 (Active)

```css
.button:active {
  transform: translateY(0);
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
}
```

### 焦点状态 (Focus)

```css
.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.3);
}

.button-secondary:focus {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}
```

### 禁用状态 (Disabled)

```css
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  transform: none;
  box-shadow: none;
}

.button-primary:disabled {
  background: linear-gradient(135deg, #666666, #555555);
}

.button-secondary:disabled {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}
```

### 加载状态 (Loading)

```css
.button.loading {
  color: transparent;
  position: relative;
  pointer-events: none;
}

.button.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

## 按钮组合

### 按钮组

```css
.button-group {
  display: flex;
  gap: 8px;
  align-items: center;
}

.button-group-vertical {
  flex-direction: column;
  align-items: stretch;
}

.button-group .button {
  flex: 1;
}
```

### 分割按钮

```css
.split-button {
  display: flex;
  background: linear-gradient(135deg, #C5F955, #B8E845);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 14px 0 rgba(197, 249, 85, 0.3);
}

.split-button-main {
  padding: 12px 24px;
  border: none;
  background: transparent;
  color: #181818;
  font-weight: 600;
  cursor: pointer;
}

.split-button-dropdown {
  width: 40px;
  border: none;
  background: transparent;
  color: #181818;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.split-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px 0 rgba(197, 249, 85, 0.4);
}
```

## 响应式按钮

```css
.button-responsive {
  padding: 12px 24px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .button-responsive {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .button-responsive {
    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
  }
}
```

## 使用示例

### HTML 结构

```html
<!-- 主要按钮 -->
<button class="button button-primary">
  开始创作
</button>

<!-- 次要按钮 -->
<button class="button button-secondary">
  了解更多
</button>

<!-- 图标按钮 -->
<button class="button button-icon">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 5v14M5 12h14"/>
  </svg>
</button>

<!-- 带图标的按钮 -->
<button class="button button-primary">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px; margin-right: 8px;">
    <path d="M12 5v14M5 12h14"/>
  </svg>
  创建模型
</button>

<!-- 按钮组 -->
<div class="button-group">
  <button class="button button-secondary">取消</button>
  <button class="button button-primary">确认</button>
</div>

<!-- 加载状态按钮 -->
<button class="button button-primary loading">
  处理中...
</button>
```

## 最佳实践

1. **层次清晰**: 使用不同的按钮类型区分操作的重要性
2. **状态反馈**: 提供清晰的悬浮、激活和禁用状态
3. **可访问性**: 确保按钮有合适的焦点状态和键盘导航支持
4. **一致性**: 在整个应用中保持按钮样式的一致性
5. **间距适当**: 为按钮组提供合适的间距，避免拥挤

---

*此按钮组件基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*