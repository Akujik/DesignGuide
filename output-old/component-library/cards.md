# Meshy AI 组件库 - 卡片组件分析

## 概述

Meshy AI 的卡片组件采用现代化的设计风格，通过层次分明的背景、边框和阴影效果，为用户提供清晰的信息分组和视觉引导。

## 基础卡片

### 结构

```css
.card {
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-xl);
  padding: var(--padding-lg);
  transition: all 0.2s ease-out;
  position: relative;
  overflow: hidden;
}

.card:hover {
  background-color: var(--color-bg-shade);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: rgba(197, 249, 85, 0.3);
}
```

### 内容布局

```css
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--margin-lg);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-label-title);
  margin: 0;
}

.card-subtitle {
  font-size: var(--text-sm);
  color: var(--color-label-soft);
  margin: var(--margin-xs) 0 0 0;
}

.card-body {
  color: var(--color-label-base);
  line-height: var(--leading-relaxed);
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--margin-lg);
  padding-top: var(--margin-lg);
  border-top: 1px solid var(--color-bg-border);
}
```

## 卡片变体

### 1. 标准卡片 (Standard Card)

用于展示一般信息和操作。

```css
.card-standard {
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-xl);
  padding: var(--padding-lg);
}

.card-standard .card-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--color-accent-base), var(--color-accent-support-base));
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--margin-md);
}

.card-standard .card-icon svg {
  width: 24px;
  height: 24px;
  color: var(--color-bg-base);
}
```

### 2. 模型卡片 (Model Card)

用于展示3D模型预览和信息。

```css
.card-model {
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all 0.3s ease-out;
}

.card-model:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card-model-preview {
  width: 100%;
  height: 200px;
  background-color: var(--color-bg-shade);
  position: relative;
  overflow: hidden;
}

.card-model-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-out;
}

.card-model:hover .card-model-preview img {
  transform: scale(1.1);
}

.card-model-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  display: flex;
  align-items: flex-end;
  padding: var(--padding-lg);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.card-model:hover .card-model-overlay {
  opacity: 1;
}

.card-model-content {
  padding: var(--padding-lg);
}

.card-model-title {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-label-title);
  margin: 0 0 var(--margin-sm) 0;
}

.card-model-description {
  font-size: var(--text-sm);
  color: var(--color-label-soft);
  margin: 0 0 var(--margin-lg) 0;
  line-height: var(--leading-normal);
}
```

### 3. 功能卡片 (Feature Card)

用于展示产品功能和特性。

```css
.card-feature {
  background: linear-gradient(135deg, var(--color-bg-sub), var(--color-bg-shade));
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-2xl);
  padding: var(--padding-xl);
  position: relative;
  overflow: hidden;
}

.card-feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-accent-base), var(--color-accent-highlight));
}

.card-feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--color-accent-base), var(--color-accent-support-base));
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--margin-lg);
  box-shadow: 0 8px 16px rgba(197, 249, 85, 0.3);
}

.card-feature-icon svg {
  width: 32px;
  height: 32px;
  color: var(--color-bg-base);
}

.card-feature-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-label-title);
  margin: 0 0 var(--margin-md) 0;
}

.card-feature-description {
  font-size: var(--text-base);
  color: var(--color-label-base);
  margin: 0 0 var(--margin-lg) 0;
  line-height: var(--leading-relaxed);
}
```

### 4. 统计卡片 (Stats Card)

用于展示数据统计和指标。

```css
.card-stats {
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-xl);
  padding: var(--padding-lg);
  position: relative;
}

.card-stats-value {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent-base);
  margin: 0 0 var(--margin-sm) 0;
  line-height: 1;
}

.card-stats-label {
  font-size: var(--text-sm);
  color: var(--color-label-soft);
  margin: 0 0 var(--margin-lg) 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-stats-change {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}

.card-stats-change.positive {
  color: var(--color-success);
}

.card-stats-change.negative {
  color: var(--color-error);
}

.card-stats-change-icon {
  width: 16px;
  height: 16px;
}
```

## 卡片状态

### 悬浮状态 (Hover)

```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: rgba(197, 249, 85, 0.2);
}

.card-feature:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(197, 249, 85, 0.2);
}

.card-model:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

### 选中状态 (Selected)

```css
.card.selected {
  border-color: var(--color-accent-base);
  background-color: var(--color-bg-shade);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.2);
}

.card.selected::after {
  content: '';
  position: absolute;
  top: 12px;
  right: 12px;
  width: 20px;
  height: 20px;
  background: var(--color-accent-base);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card.selected::before {
  content: '✓';
  position: absolute;
  top: 12px;
  right: 12px;
  width: 20px;
  height: 20px;
  color: var(--color-bg-base);
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
```

### 加载状态 (Loading)

```css
.card.loading {
  pointer-events: none;
  opacity: 0.7;
}

.card-loading-skeleton {
  background: linear-gradient(90deg, var(--color-bg-shade) 25%, var(--color-bg-border) 50%, var(--color-bg-shade) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: var(--radius-md);
}

.card-loading-skeleton.title {
  height: 24px;
  width: 60%;
  margin-bottom: var(--margin-lg);
}

.card-loading-skeleton.text {
  height: 16px;
  width: 100%;
  margin-bottom: var(--margin-sm);
}

.card-loading-skeleton.text:last-child {
  width: 80%;
  margin-bottom: 0;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## 卡片网格布局

### 响应式网格

```css
.card-grid {
  display: grid;
  gap: var(--gap-lg);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.card-grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card-grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

@media (max-width: 768px) {
  .card-grid,
  .card-grid-2,
  .card-grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card-grid-2 {
    grid-template-columns: repeat(3, 1fr);
  }

  .card-grid-3 {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1280px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .card-grid-2 {
    grid-template-columns: repeat(4, 1fr);
  }

  .card-grid-3 {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

## 使用示例

### HTML 结构

```html
<!-- 标准卡片 -->
<div class="card card-standard">
  <div class="card-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  </div>
  <div class="card-header">
    <div>
      <h3 class="card-title">创建新模型</h3>
      <p class="card-subtitle">开始您的3D创作之旅</p>
    </div>
  </div>
  <div class="card-body">
    <p>使用我们强大的AI工具，轻松创建令人惊叹的3D模型。</p>
  </div>
  <div class="card-footer">
    <button class="button button-primary">开始</button>
    <button class="button button-ghost">了解更多</button>
  </div>
</div>

<!-- 模型卡片 -->
<div class="card card-model">
  <div class="card-model-preview">
    <img src="model-preview.jpg" alt="3D模型预览">
    <div class="card-model-overlay">
      <button class="button button-primary">查看详情</button>
    </div>
  </div>
  <div class="card-model-content">
    <h3 class="card-model-title">科幻角色模型</h3>
    <p class="card-model-description">高质量的未来风格3D角色模型，包含完整贴图和骨骼动画。</p>
    <div class="card-footer">
      <span class="text-sm text-soft">2小时前创建</span>
      <div class="flex gap-2">
        <button class="button button-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </button>
        <button class="button button-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- 功能卡片 -->
<div class="card card-feature">
  <div class="card-feature-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  </div>
  <h3 class="card-feature-title">AI驱动生成</h3>
  <p class="card-feature-description">利用先进的机器学习技术，快速生成高质量的3D模型，大幅提升创作效率。</p>
  <div class="card-footer">
    <button class="button button-primary">立即体验</button>
  </div>
</div>

<!-- 统计卡片 -->
<div class="card card-stats">
  <div class="card-stats-value">1,234</div>
  <div class="card-stats-label">模型创建数</div>
  <div class="card-stats-change positive">
    <svg class="card-stats-change-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M7 14l5-5 5 5"/>
    </svg>
    <span>+12.5%</span>
  </div>
</div>
```

## 最佳实践

1. **视觉层次**: 使用卡片标题、正文和操作区域创建清晰的信息层次
2. **一致性**: 保持卡片内部元素的一致间距和对齐
3. **可点击性**: 确保整个卡片或主要区域可点击，提供良好的交互体验
4. **响应式**: 在不同屏幕尺寸上保持卡片的可读性和可用性
5. **加载状态**: 为异步加载的内容提供骨架屏或加载指示器

---

*此卡片组件基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*