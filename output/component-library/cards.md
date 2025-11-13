# 卡片组件分析 (Card Components Analysis)

## 概述

Meshy.ai 的卡片系统提供了灵活的内容容器，用于组织和展示相关信息。卡片设计遵循现代设计原则，具有良好的层次感和视觉分离效果，适用于多种内容展示场景。

## 卡片类型与变体

### 1. 标准卡片 (Standard Card)
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-content">
    <p>Card content goes here. This is the main content area of the card.</p>
  </div>
  <div class="card-footer">
    <button class="button button-primary">Action</button>
  </div>
</div>
```

**样式特征**:
- 背景: `--color-bg-sub` (#1e1e1e)
- 边框: 1px solid `--color-bg-border` (#3f3f3f)
- 圆角: `--radius-lg` (0.5rem)
- 内边距: `--p-2xl` (1.5rem)
- 阴影: 轻微阴影效果

**CSS 实现**:
```css
.card {
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  padding: var(--p-2xl);
  transition: all var(--duration-fast) var(--ease-smooth);
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

.card:hover {
  background-color: var(--color-bg-base-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

### 2. 模型卡片 (Model Card) - Meshy 特有
```html
<div class="card card-model">
  <div class="card-media">
    <div class="model-preview">
      <img src="model-preview.jpg" alt="3D Model Preview" />
      <div class="model-overlay">
        <button class="button button-primary button-small">View 3D</button>
      </div>
    </div>
  </div>
  <div class="card-content">
    <h3 class="card-title">Fantasy Character</h3>
    <p class="card-description">3D model of a fantasy character with detailed textures.</p>
    <div class="card-meta">
      <span class="tag">Character</span>
      <span class="date">2 hours ago</span>
    </div>
  </div>
</div>
```

**样式特征**:
- 包含 3D 模型预览
- 悬停时显示操作按钮
- 底部元数据标签

**CSS 实现**:
```css
.card-model {
  overflow: hidden;
}

.model-preview {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.model-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.model-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: var(--p-lg);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-smooth);
}

.card-model:hover .model-overlay {
  opacity: 1;
}
```

### 3. 博客卡片 (Blog Card)
```html
<article class="card card-blog">
  <div class="card-media">
    <img src="blog-image.jpg" alt="Blog post thumbnail" />
    <div class="card-category">
      <span class="category-tag">Tutorial</span>
    </div>
  </div>
  <div class="card-content">
    <time class="card-date">November 14, 2025</time>
    <h2 class="card-title">Getting Started with 3D Modeling</h2>
    <p class="card-excerpt">Learn the basics of 3D modeling and create your first stunning 3D assets...</p>
    <div class="card-author">
      <img src="author-avatar.jpg" alt="Author" class="author-avatar" />
      <span class="author-name">John Doe</span>
    </div>
  </div>
</article>
```

**样式特征**:
- 特色图片展示
- 分类标签
- 作者信息
- 阅读时间或发布日期

**CSS 实现**:
```css
.card-blog {
  cursor: pointer;
}

.card-blog:hover {
  transform: translateY(-4px);
}

.card-category {
  position: absolute;
  top: var(--p-lg);
  left: var(--p-lg);
}

.category-tag {
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
  padding: var(--p-xs) var(--p-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
}

.card-date {
  color: var(--color-label-soft);
  font-size: var(--text-sm);
  margin-bottom: var(--p-sm);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--p-sm);
  line-height: var(--leading-tight);
}

.card-excerpt {
  color: var(--color-label-soft);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--p-lg);
}

.card-author {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
}
```

### 4. 职位卡片 (Job Card)
```html
<div class="card card-job">
  <div class="card-header">
    <div class="company-info">
      <h3 class="job-title">Senior Frontend Developer</h3>
      <p class="company-name">Meshy AI</p>
    </div>
    <div class="job-type">
      <span class="tag tag-fulltime">Full-time</span>
    </div>
  </div>
  <div class="card-content">
    <p class="job-description">We're looking for an experienced frontend developer to join our team...</p>
    <div class="job-requirements">
      <span class="requirement">React</span>
      <span class="requirement">TypeScript</span>
      <span class="requirement">3D Graphics</span>
    </div>
  </div>
  <div class="card-footer">
    <div class="job-meta">
      <span class="location">San Francisco, CA</span>
      <span class="salary">$120k - $180k</span>
    </div>
    <button class="button button-primary">Apply Now</button>
  </div>
</div>
```

**样式特征**:
- 公司信息和职位类型
- 技能要求标签
- 地理位置和薪资信息
- 申请操作按钮

**CSS 实现**:
```css
.card-job {
  border-left: 4px solid var(--color-accent-base);
}

.job-title {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-label-title);
  margin-bottom: var(--p-xs);
}

.company-name {
  color: var(--color-label-soft);
  font-size: var(--text-sm);
}

.job-type {
  flex-shrink: 0;
}

.tag-fulltime {
  background-color: var(--color-semantic-success-base);
  color: var(--color-bg-base);
  padding: var(--p-xs) var(--p-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
}

.job-requirements {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-sm);
  margin: var(--p-lg) 0;
}

.requirement {
  background-color: var(--color-bg-translucent);
  color: var(--color-label-soft);
  padding: var(--p-xs) var(--p-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
}

.job-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--p-lg);
}

.location {
  color: var(--color-label-soft);
  font-size: var(--text-sm);
}

.salary {
  color: var(--color-accent-base);
  font-weight: var(--font-weight-semibold);
}
```

## 卡片尺寸变体

### 小卡片
```html
<div class="card card-small">
  <div class="card-content">
    <h4 class="card-title">Small Card</h4>
    <p>Compact content for small spaces.</p>
  </div>
</div>
```

**CSS**:
```css
.card-small {
  padding: var(--p-lg);
  border-radius: var(--radius-md);
}

.card-small .card-title {
  font-size: var(--text-base);
}
```

### 中等卡片（默认）
```html
<div class="card card-medium">
  <!-- 标准卡片内容 -->
</div>
```

**CSS**:
```css
.card-medium {
  padding: var(--p-2xl);
  border-radius: var(--radius-lg);
}
```

### 大卡片
```html
<div class="card card-large">
  <div class="card-header">
    <h2 class="card-title">Large Card Title</h2>
  </div>
  <div class="card-content">
    <p>More spacious content area for detailed information...</p>
  </div>
</div>
```

**CSS**:
```css
.card-large {
  padding: var(--p-3xl);
  border-radius: var(--radius-xl);
}

.card-large .card-title {
  font-size: var(--text-2xl);
}
```

## 卡片状态

### 正常状态 (Normal State)
- 标准外观
- 基础交互

### 悬停状态 (Hover State)
```css
.card:hover {
  background-color: var(--color-bg-base-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: var(--color-accent-base);
}
```

### 激活状态 (Active State)
```css
.card:active {
  transform: translateY(0);
  transition-duration: var(--duration-instant);
}
```

### 选中状态 (Selected State)
```html
<div class="card card-selected">
  <div class="selected-indicator">
    <svg class="icon">...</svg>
  </div>
  <!-- 卡片内容 -->
</div>
```

**CSS**:
```css
.card-selected {
  border-color: var(--color-accent-base);
  background-color: var(--color-accent-bg);
}

.selected-indicator {
  position: absolute;
  top: var(--p-sm);
  right: var(--p-sm);
  color: var(--color-accent-base);
}
```

### 加载状态 (Loading State)
```html
<div class="card card-loading">
  <div class="loading-skeleton">
    <div class="skeleton-header"></div>
    <div class="skeleton-content"></div>
    <div class="skeleton-footer"></div>
  </div>
</div>
```

**CSS**:
```css
.card-loading {
  pointer-events: none;
  opacity: 0.7;
}

.skeleton-header,
.skeleton-content,
.skeleton-footer {
  background: linear-gradient(90deg, var(--color-bg-shade) 25%, var(--color-bg-border) 50%, var(--color-bg-shade) 75%);
  background-size: 200% 100%;
  animation: loading-shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}

.skeleton-header {
  height: 24px;
  width: 60%;
  margin-bottom: var(--p-sm);
}

.skeleton-content {
  height: 16px;
  width: 100%;
  margin-bottom: var(--p-xs);
}

.skeleton-footer {
  height: 32px;
  width: 120px;
  margin-top: var(--p-lg);
}

@keyframes loading-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

## 卡片布局系统

### 网格布局
```html
<div class="card-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

**CSS**:
```css
.card-grid {
  display: grid;
  gap: var(--gap-xl);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 瀑布流布局
```html
<div class="card-masonry">
  <div class="card">Card 1</div>
  <div class="card card-tall">Tall Card 2</div>
  <div class="card">Card 3</div>
  <div class="card card-wide">Wide Card 4</div>
</div>
```

**CSS**:
```css
.card-masonry {
  column-count: 3;
  column-gap: var(--gap-xl);
}

.card-masonry .card {
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

### 水平滚动布局
```html
<div class="card-horizontal-scroll">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

**CSS**:
```css
.card-horizontal-scroll {
  display: flex;
  gap: var(--gap-lg);
  overflow-x: auto;
  padding: var(--p-lg) 0;
  scrollbar-width: thin;
  scrollbar-color: var(--color-bg-border) transparent;
}

.card-horizontal-scroll::-webkit-scrollbar {
  height: 6px;
}

.card-horizontal-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.card-horizontal-scroll::-webkit-scrollbar-thumb {
  background: var(--color-bg-border);
  border-radius: var(--radius-full);
}

.card-horizontal-scroll .card {
  flex: 0 0 300px;
}
```

## 特殊卡片组件

### 统计卡片
```html
<div class="card card-stats">
  <div class="stats-icon">
    <svg class="icon">...</svg>
  </div>
  <div class="stats-content">
    <div class="stats-value">12,543</div>
    <div class="stats-label">Total Models</div>
    <div class="stats-change positive">+12.5%</div>
  </div>
</div>
```

**CSS**:
```css
.card-stats {
  display: flex;
  align-items: center;
  gap: var(--p-lg);
}

.stats-icon {
  width: 48px;
  height: 48px;
  background-color: var(--color-accent-bg);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-base);
}

.stats-value {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-label-title);
}

.stats-label {
  color: var(--color-label-soft);
  font-size: var(--text-sm);
}

.stats-change {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}

.stats-change.positive {
  color: var(--color-semantic-success-base);
}

.stats-change.negative {
  color: var(--color-semantic-error-base);
}
```

### 功能卡片
```html
<div class="card card-feature">
  <div class="feature-icon">
    <svg class="icon">...</svg>
  </div>
  <h3 class="feature-title">AI-Powered Generation</h3>
  <p class="feature-description">Generate high-quality 3D models from text descriptions using advanced AI technology.</p>
  <a href="#" class="feature-link">Learn more →</a>
</div>
```

**CSS**:
```css
.card-feature {
  text-align: center;
  padding: var(--p-3xl);
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--color-accent-base), var(--color-accent-support-base));
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--p-lg);
  color: var(--color-bg-base);
}

.feature-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--p-md);
  color: var(--color-label-title);
}

.feature-description {
  color: var(--color-label-soft);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--p-lg);
}

.feature-link {
  color: var(--color-accent-base);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--duration-fast) var(--ease-smooth);
}

.feature-link:hover {
  color: var(--color-accent-base-hover);
}
```

## 可访问性考虑

### 语义化标记
```html
<article class="card" role="article">
  <header class="card-header">
    <h3 class="card-title">Card Title</h3>
  </header>
  <div class="card-content">
    <p>Card content...</p>
  </div>
  <footer class="card-footer">
    <button class="button" aria-label="Learn more about this topic">Learn More</button>
  </footer>
</article>
```

### 键盘导航
```css
.card[tabindex="0"] {
  cursor: pointer;
}

.card[tabindex="0"]:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}
```

### 屏幕阅读器支持
```html
<div class="card" role="button" tabindex="0" aria-label="View details for 3D Model">
  <h3 class="sr-only">3D Model Details</h3>
  <!-- 卡片内容 -->
</div>
```

## 响应式设计

### 移动设备适配
```css
@media (max-width: 768px) {
  .card {
    padding: var(--p-lg);
    border-radius: var(--radius-md);
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: var(--gap-lg);
  }

  .card-horizontal-scroll {
    gap: var(--gap-md);
  }

  .card-horizontal-scroll .card {
    flex: 0 0 280px;
  }
}
```

### 触摸设备优化
```css
@media (hover: none) {
  .card:hover {
    transform: none;
    box-shadow: none;
  }

  .card:active {
    transform: scale(0.98);
    background-color: var(--color-bg-base-hover);
  }
}
```

## 卡片使用指南

### 何时使用卡片
- 组织相关内容
- 创建内容网格
- 展示可操作项目
- 建立视觉层次
- 响应式内容布局

### 卡片设计原则
- 保持内容简洁
- 使用清晰的视觉层次
- 确保足够的间距
- 提供明确的操作
- 保持一致的样式

### 最佳实践
- 一个卡片聚焦一个主题
- 使用有意义的图片
- 保持卡片大小一致
- 提供清晰的标签和描述
- 考虑不同设备的使用体验

## 卡片变体速查表

| 类型 | 用途 | 特殊元素 | 尺寸 |
|------|------|----------|------|
| Standard | 通用内容 | 标题+内容+操作 | 可变 |
| Model | 3D模型展示 | 预览图+悬停操作 | 固定比例 |
| Blog | 文章预览 | 图片+分类+作者 | 标准 |
| Job | 职位信息 | 技能标签+薪资 | 标准 |
| Stats | 数据展示 | 图标+数值+趋势 | 固定 |
| Feature | 功能介绍 | 图标+描述+链接 | 标准 |

## 代码示例

### 完整的博客卡片
```html
<article class="card card-blog" role="article">
  <div class="card-media">
    <img src="blog-thumbnail.jpg" alt="Article thumbnail" loading="lazy" />
    <div class="card-category">
      <span class="category-tag">Tutorial</span>
    </div>
  </div>
  <div class="card-content">
    <time datetime="2025-11-14" class="card-date">November 14, 2025</time>
    <h2 class="card-title">
      <a href="#" class="title-link">Getting Started with 3D Modeling</a>
    </h2>
    <p class="card-excerpt">Learn the fundamentals of 3D modeling and create stunning 3D assets...</p>
    <div class="card-author">
      <img src="author-avatar.jpg" alt="John Doe" class="author-avatar" loading="lazy" />
      <div class="author-info">
        <span class="author-name">John Doe</span>
        <span class="read-time">5 min read</span>
      </div>
    </div>
  </div>
</article>
```