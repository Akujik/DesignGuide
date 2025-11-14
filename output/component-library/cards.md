# 卡片组件 (Cards)

> Meshy AI 的卡片组件库和使用指南

## 概述

卡片是用于组织相关信息的容器组件，提供清晰的视觉边界和层次结构。Meshy AI的卡片系统支持多种布局模式、交互状态和内容类型。

## 基础卡片

### 标准卡片

最常用的卡片类型，适用于一般内容展示。

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">卡片标题</h3>
  </div>
  <div class="card-content">
    <p>卡片内容区域，用于放置文本、图片、列表等内容。</p>
  </div>
  <div class="card-footer">
    <button class="button button-primary">操作</button>
  </div>
</div>
```

#### 样式规格
```css
.card {
  background-color: var(--background-raised-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--default-transition-duration) var(--default-transition-timing-function);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card-header {
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.card-title {
  margin: 0;
  font-size: var(--text-lg-plus);
  font-weight: var(--font-weight-semibold);
  color: var(--foreground-color);
}

.card-content {
  padding: var(--spacing-lg);
}

.card-footer {
  padding: var(--spacing-md) var(--spacing-lg) var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-sm);
}
```

## 卡片变体

### 1. 简洁卡片

没有头部和底部的简单卡片。

```html
<div class="card card-plain">
  <div class="card-content">
    <h4>简洁卡片</h4>
    <p>只有内容区域的简单卡片，适合展示基本信息。</p>
  </div>
</div>
```

```css
.card-plain {
  padding: var(--spacing-lg);
}

.card-plain .card-content {
  padding: 0;
}
```

### 2. 无边框卡片

没有边框和阴影的卡片，用于内嵌内容。

```html
<div class="card card-borderless">
  <h4>无边框卡片</h4>
  <p>没有边框和阴影，与背景融为一体的卡片。</p>
</div>
```

```css
.card-borderless {
  background-color: var(--background-base-color);
  border: none;
  box-shadow: none;
  padding: var(--spacing-lg);
}
```

### 3. 可交互卡片

可以点击的卡片，通常用于导航到详情页面。

```html
<a href="#" class="card card-clickable">
  <div class="card-content">
    <h4>可交互卡片</h4>
    <p>点击此卡片可以跳转到相关页面。</p>
  </div>
  <div class="card-arrow">
    <svg class="icon">→</svg>
  </div>
</a>
```

```css
.card-clickable {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform var(--default-transition-duration) var(--ease-out),
              box-shadow var(--default-transition-duration) var(--ease-out);
}

.card-clickable:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.card-clickable:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.card-arrow {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--foreground-quiet-color);
  transition: color var(--default-transition-duration);
}

.card-clickable:hover .card-arrow {
  color: var(--primary-color);
}
```

### 4. 强调卡片

用于重要内容或特色展示。

```html
<div class="card card-featured">
  <div class="card-featured-badge">推荐</div>
  <div class="card-header">
    <h3 class="card-title">特色卡片</h3>
  </div>
  <div class="card-content">
    <p>用于突出显示重要内容或特色功能的卡片。</p>
  </div>
</div>
```

```css
.card-featured {
  border-color: var(--primary-color);
  position: relative;
}

.card-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
}

.card-featured-badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-lg);
  background-color: var(--primary-color);
  color: var(--background-inverse-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
}
```

## 内容模式

### 1. 媒体卡片

包含图片或视频的卡片。

```html
<div class="card card-media">
  <div class="card-media-container">
    <img src="image.jpg" alt="卡片图片" class="card-media-image">
    <div class="card-media-overlay">
      <h3 class="card-title">媒体卡片标题</h3>
    </div>
  </div>
  <div class="card-content">
    <p>卡片描述内容，支持长文本和多行内容。</p>
  </div>
</div>
```

```css
.card-media-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.card-media:hover .card-media-image {
  transform: scale(1.05);
}

.card-media-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: var(--spacing-lg);
  color: white;
}

.card-media-overlay .card-title {
  color: white;
  margin: 0;
}
```

### 2. 统计卡片

用于展示数据和统计信息。

```html
<div class="card card-stats">
  <div class="card-stats-header">
    <div class="card-stats-icon">
      <svg class="icon">📊</svg>
    </div>
    <div class="card-stats-label">总用户数</div>
  </div>
  <div class="card-stats-value">12,345</div>
  <div class="card-stats-change positive">
    <span class="change-icon">↑</span>
    <span class="change-text">12.5%</span>
  </div>
</div>
```

```css
.card-stats {
  text-align: center;
  padding: var(--spacing-xl);
}

.card-stats-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.card-stats-icon {
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-md);
}

.card-stats-icon .icon {
  width: 24px;
  height: 24px;
  color: white;
}

.card-stats-label {
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
  font-weight: var(--font-weight-medium);
}

.card-stats-value {
  font-size: var(--text-3xl-plus);
  font-weight: var(--font-weight-bold);
  color: var(--foreground-color);
  margin-bottom: var(--spacing-sm);
}

.card-stats-change {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}

.card-stats-change.positive {
  color: var(--positive-color);
}

.card-stats-change.negative {
  color: var(--negative-color);
}
```

### 3. 表单卡片

包含表单元素的卡片。

```html
<div class="card card-form">
  <div class="card-header">
    <h3 class="card-title">用户信息</h3>
  </div>
  <div class="card-content">
    <form class="form-vertical">
      <div class="form-group">
        <label class="form-label">姓名</label>
        <input type="text" class="form-input" placeholder="请输入姓名">
      </div>
      <div class="form-group">
        <label class="form-label">邮箱</label>
        <input type="email" class="form-input" placeholder="请输入邮箱">
      </div>
    </form>
  </div>
  <div class="card-footer">
    <button class="button button-secondary">取消</button>
    <button class="button button-primary">保存</button>
  </div>
</div>
```

```css
.card-form .form-group {
  margin-bottom: var(--spacing-lg);
}

.card-form .form-group:last-child {
  margin-bottom: 0;
}
```

## 卡片状态

### 1. 加载状态

```html
<div class="card card-loading">
  <div class="card-loading-skeleton">
    <div class="skeleton-line skeleton-title"></div>
    <div class="skeleton-line skeleton-text"></div>
    <div class="skeleton-line skeleton-text"></div>
  </div>
</div>
```

```css
.card-loading {
  pointer-events: none;
}

.skeleton-line {
  background: linear-gradient(90deg, var(--background-subtle-color) 25%, var(--background-subtler-color) 50%, var(--background-subtle-color) 75%);
  background-size: 200% 100%;
  animation: loading-shimmer var(--duration-slow) ease-in-out infinite;
  border-radius: var(--radius-sm);
}

.skeleton-title {
  height: 24px;
  width: 60%;
  margin-bottom: var(--spacing-md);
}

.skeleton-text {
  height: 16px;
  margin-bottom: var(--spacing-sm);
}

.skeleton-text:last-child {
  width: 80%;
}

@keyframes loading-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 2. 错误状态

```html
<div class="card card-error">
  <div class="card-error-icon">
    <svg class="icon">⚠️</svg>
  </div>
  <div class="card-error-content">
    <h4 class="card-error-title">加载失败</h4>
    <p class="card-error-message">无法获取卡片内容，请稍后重试。</p>
  </div>
  <div class="card-error-actions">
    <button class="button button-primary">重试</button>
  </div>
</div>
```

```css
.card-error {
  border-color: var(--negative-color);
  background-color: var(--color-semantic-error-bg);
  text-align: center;
  padding: var(--spacing-xl);
}

.card-error-icon {
  margin-bottom: var(--spacing-md);
}

.card-error-icon .icon {
  width: 48px;
  height: 48px;
  color: var(--negative-color);
}

.card-error-title {
  color: var(--negative-color);
  margin-bottom: var(--spacing-sm);
}

.card-error-message {
  color: var(--foreground-quiet-color);
  margin-bottom: var(--spacing-lg);
}
```

### 3. 空状态

```html
<div class="card card-empty">
  <div class="card-empty-icon">
    <svg class="icon">📭</svg>
  </div>
  <div class="card-empty-content">
    <h4 class="card-empty-title">暂无数据</h4>
    <p class="card-empty-message">还没有任何内容，点击按钮创建第一个项目。</p>
  </div>
  <div class="card-empty-actions">
    <button class="button button-primary">创建项目</button>
  </div>
</div>
```

```css
.card-empty {
  text-align: center;
  padding: var(--spacing-xl);
}

.card-empty-icon .icon {
  width: 64px;
  height: 64px;
  color: var(--foreground-subtle-color);
  margin-bottom: var(--spacing-lg);
}

.card-empty-title {
  color: var(--foreground-color);
  margin-bottom: var(--spacing-sm);
}

.card-empty-message {
  color: var(--foreground-quiet-color);
  margin-bottom: var(--spacing-lg);
}
```

## 布局模式

### 1. 网格布局

```html
<div class="card-grid">
  <div class="card">卡片 1</div>
  <div class="card">卡片 2</div>
  <div class="card">卡片 3</div>
  <div class="card">卡片 4</div>
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}
```

### 2. 列表布局

```html
<div class="card-list">
  <div class="card">卡片 1</div>
  <div class="card">卡片 2</div>
  <div class="card">卡片 3</div>
</div>
```

```css
.card-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
```

### 3. 瀑布流布局

```html
<div class="card-masonry">
  <div class="card">短内容卡片</div>
  <div class="card">这是一个较长的内容卡片，包含更多文字信息和描述。</div>
  <div class="card">中等长度卡片</div>
</div>
```

```css
.card-masonry {
  column-count: 3;
  column-gap: var(--spacing-lg);
}

.card-masonry .card {
  break-inside: avoid;
  margin-bottom: var(--spacing-lg);
}

@media (max-width: 1024px) {
  .card-masonry {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .card-masonry {
    column-count: 1;
  }
}
```

## 响应式设计

### 自适应卡片

```css
.card-responsive {
  padding: var(--spacing-md);
}

@media (min-width: 768px) {
  .card-responsive {
    padding: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .card-responsive {
    padding: var(--spacing-xl);
  }
}
```

### 移动端优化

```css
@media (max-width: 767px) {
  .card {
    border-radius: var(--radius-md);
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .card-clickable:hover {
    transform: none;
  }

  .card-clickable:active {
    transform: scale(0.98);
  }
}
```

## 可访问性

### 语义化结构

```html
<article class="card">
  <header class="card-header">
    <h3 class="card-title">卡片标题</h3>
  </header>
  <div class="card-content">
    <p>卡片内容</p>
  </div>
  <footer class="card-footer">
    <button class="button">操作</button>
  </footer>
</article>
```

### 可交互卡片

```html
<div class="card"
     role="button"
     tabindex="0"
     aria-label="查看详情">
  <div class="card-content">
    <h4>可交互卡片</h4>
  </div>
</div>
```

```css
.card[role="button"]:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

## 使用指南

### 1. 内容组织

```html
✅ 相关内容组织在一起
<div class="card">
  <h3>用户设置</h3>
  <p>管理您的个人资料和偏好设置。</p>
  <button>编辑设置</button>
</div>

✅ 清晰的信息层级
<div class="card">
  <h4>项目名称</h4>
  <p class="card-description">项目描述...</p>
  <div class="card-meta">更新于 2 小时前</div>
</div>

❌ 避免混合不相关内容
<div class="card">
  <h3>用户设置</h3>
  <p>系统公告：明天将进行维护...</p>
</div>
```

### 2. 视觉设计

```html
✅ 保持一致的间距和布局
<div class="card">
  <div class="card-header">...</div>
  <div class="card-content">...</div>
  <div class="card-footer">...</div>
</div>

✅ 使用适当的视觉层级
<div class="card">
  <h3 class="card-title">主标题</h3>
  <h4 class="card-subtitle">副标题</h4>
  <p class="card-text">正文内容</p>
  <small class="card-meta">元信息</small>
</div>

❌ 避免过度装饰
<div class="card">
  <!-- 避免过多的边框、阴影和颜色 -->
</div>
```

### 3. 交互设计

```html
✅ 明确的交互提示
<a href="#" class="card card-clickable">
  <h4>查看详情</h4>
  <div class="card-arrow">→</div>
</a>

✅ 合理的操作按钮
<div class="card">
  <h4>文档</h4>
  <div class="card-footer">
    <button class="button button-secondary">编辑</button>
    <button class="button button-primary">保存</button>
  </div>
</div>

❌ 避免混淆的操作
<div class="card">
  <!-- 避免卡片本身可点击，内部又有其他可点击元素 -->
</div>
```

## 工具类

### 卡片变体
```css
.card-plain { /* 简洁卡片 */ }
.card-borderless { /* 无边框卡片 */ }
.card-clickable { /* 可点击卡片 */ }
.card-featured { /* 特色卡片 */ }
.card-media { /* 媒体卡片 */ }
.card-stats { /* 统计卡片 */ }
.card-form { /* 表单卡片 */ }
```

### 卡片状态
```css
.card-loading { /* 加载状态 */ }
.card-error { /* 错误状态 */ }
.card-empty { /* 空状态 */ }
.card-disabled { /* 禁用状态 */ }
```

### 布局辅助
```css
.card-grid { /* 网格布局 */ }
.card-list { /* 列表布局 */ }
.card-masonry { /* 瀑布流布局 */ }
```

## 测试清单

### 功能测试
- [ ] 卡片内容正确显示
- [ ] 可交互卡片点击正常
- [ ] 表单卡片提交功能正常
- [ ] 加载状态正确显示

### 视觉测试
- [ ] 卡片样式一致
- [ ] 悬停效果正常
- [ ] 焦点指示器清晰
- [ ] 响应式布局正确

### 可访问性测试
- [ ] 键盘导航正常
- [ ] 屏幕阅读器友好
- [ ] 语义化结构正确
- [ ] 颜色对比度符合标准

### 性能测试
- [ ] 卡片加载速度快
- [ ] 动画流畅
- [ ] 内存使用合理
- [ ] 移动端性能良好

---

*最后更新: 2025年11月14日*