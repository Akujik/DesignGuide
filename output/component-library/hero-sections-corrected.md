# Hero 区域组件分析 (Hero Sections Analysis)

## 概述

Meshy.ai 的 Hero 区域设计注重品牌展示和用户引导，提供了现代化的首屏体验。Hero 组件采用响应式设计，融合了品牌标识、导航系统和行动号召按钮，确保用户能够快速了解产品价值并进行转化。

## Hero 区域类型与变体

### 1. 主页 Hero 区域 (Homepage Hero)
```html
<header class="hero-header">
  <div class="hero-container">
    <div class="hero-brand">
      <a href="/" class="brand-link" aria-label="Meshy">
        <svg class="brand-logo" viewBox="0 0 167 64" fill="none">
          <defs>
            <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#c5f955" />
              <stop offset="50%" style="stop-color:#ff97c2" />
              <stop offset="100%" style="stop-color:#ff3e8f" />
            </linearGradient>
          </defs>
          <!-- Logo路径 -->
          <rect x="2" y="2" width="60" height="60" rx="12" fill="url(#brand-gradient)"/>
          <text x="70" y="40" font-family="Inter, sans-serif" font-size="24" font-weight="bold" fill="#ffffff">Meshy</text>
        </svg>
      </a>
    </div>

    <nav class="hero-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/features" class="nav-link">Features</a>
        </li>
        <li class="nav-item">
          <a href="/pricing" class="nav-link">Pricing</a>
        </li>
        <li class="nav-item nav-dropdown">
          <button class="nav-link dropdown-toggle">
            Resources
            <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div class="dropdown-menu">
            <a href="/blog" class="dropdown-item">Blog</a>
            <a href="/docs" class="dropdown-item">Documentation</a>
            <a href="/tutorials" class="dropdown-item">Tutorials</a>
          </div>
        </li>
      </ul>
    </nav>

    <div class="hero-actions">
      <button class="button button-secondary">Sign In</button>
      <button class="button button-primary">Get Started Free</button>
    </div>
  </div>
</header>

<main class="bg-bg-base relative z-0 flex flex-col items-center justify-center gap-0 bg-no-repeat">
  <!-- 主要Hero内容 -->
  <div class="hero-main-content">
    <h1 class="hero-title">The Easiest Way to Create 3D Models</h1>
    <p class="hero-subtitle">
      Meet the world's most popular and intuitive free AI 3D model generator.
      Join millions of designers and creators bringing their ideas to life.
    </p>
    <button class="button button-primary button-large hero-cta">
      Start Creating
    </button>
  </div>

  <!-- Use Cases Section -->
  <section class="use-cases-section">
    <div class="use-cases-grid">
      <div class="use-case-card">
        <div class="use-case-image">
          <img src="use-case-film-production.webp" alt="Film Production" loading="lazy" />
          <div class="use-case-gradient"></div>
        </div>
        <h3 class="use-case-title">Film Production</h3>
        <p class="use-case-description">Create detailed 3D models and props for movies and animations</p>
      </div>

      <div class="use-case-card">
        <div class="use-case-image">
          <img src="use-case-product-design.webp" alt="Product Design" loading="lazy" />
          <div class="use-case-gradient"></div>
        </div>
        <h3 class="use-case-title">Product Design</h3>
        <p class="use-case-description">Prototype and visualize products before manufacturing</p>
      </div>

      <div class="use-case-card">
        <div class="use-case-image">
          <img src="use-case-education.webp" alt="Education" loading="lazy" />
          <div class="use-case-gradient"></div>
        </div>
        <h3 class="use-case-title">Education</h3>
        <p class="use-case-description">Create 3D models for teaching and learning materials</p>
      </div>

      <div class="use-case-card">
        <div class="use-case-image">
          <img src="use-case-game-development.webp" alt="Game Development" loading="lazy" />
          <div class="use-case-gradient"></div>
        </div>
        <h3 class="use-case-title">Game Development</h3>
        <p class="use-case-description">Design 3D assets, characters, and environments for games</p>
      </div>

      <div class="use-case-card">
        <div class="use-case-image">
          <img src="use-case-3d-printing.webp" alt="3D Printing" loading="lazy" />
          <div class="use-case-gradient"></div>
        </div>
        <h3 class="use-case-title">3D Printing</h3>
        <p class="use-case-description">Generate models ready for 3D printing and prototyping</p>
      </div>

      <div class="use-case-card">
        <div class="use-case-image">
          <img src="use-case-vr-ar.webp" alt="VR/AR" loading="lazy" />
          <div class="use-case-gradient"></div>
        </div>
        <h3 class="use-case-title">VR/AR</h3>
        <p class="use-case-description">Create immersive experiences with virtual and augmented reality</p>
      </div>

      <div class="use-case-card">
        <div class="use-case-image">
          <img src="use-case-interior-design.webp" alt="Interior Design" loading="lazy" />
          <div class="use-case-gradient"></div>
        </div>
        <h3 class="use-case-title">Interior Design</h3>
        <p class="use-case-description">Visualize spaces and create 3D models for architecture</p>
      </div>
    </div>
  </section>
</main>
```

**样式特征**:
- 背景: `--color-bg-base` (#181818)
- 粘性定位导航: `sticky top-0`
- Z轴层级: `z-50`
- 响应式高度: 移动端 3rem，桌面端 4.5rem
- 品牌渐变: 绿色到粉色的渐变效果
- Use Cases: 7个真实用例卡片，带图片和渐变悬停效果

**CSS 实现**:
```css
/* 主容器 - 使用实际的 Meshy.ai 结构 */
.bg-bg-base {
  background-color: var(--color-bg-base);
}

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
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem; /* 48px */
  padding: 0 var(--p-lg);
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .hero-container {
    height: 4.5rem; /* 72px */
    padding: 0 var(--p-2xl);
  }
}

/* 主要 Hero 内容 */
.hero-main-content {
  text-align: center;
  padding: var(--p-5xl) var(--p-lg);
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: var(--text-5xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-label-title);
  line-height: var(--leading-tight);
  margin-bottom: var(--p-xl);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: var(--text-6xl);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 72px;
    line-height: 1;
  }
}

.hero-subtitle {
  font-size: var(--text-xl);
  color: var(--color-label-soft);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--p-3xl);
}

/* Use Cases Section */
.use-cases-section {
  padding: 0 var(--p-lg) var(--p-5xl);
  max-width: 1200px;
  margin: 0 auto;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--p-4xl);
}

@media (min-width: 768px) {
  .use-cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .use-cases-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.use-case-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-smooth);
  cursor: pointer;
  background-color: var(--color-bg-sub);
}

.use-case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.use-case-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: var(--color-accent-bg);
}

.use-case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-normal) var(--ease-smooth);
}

.use-case-card:hover .use-case-image img {
  transform: scale(1.05);
}

.use-case-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(120deg,
    rgba(197, 249, 85, 0.15),
    rgba(255, 151, 194, 0.15));
  opacity: 0;
  transition: opacity var(--duration-fast) var(--ease-smooth);
}

.use-case-card:hover .use-case-gradient {
  opacity: 1;
}

.use-case-title {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-label-title);
  margin: var(--p-lg) var(--p-md) var(--p-sm);
  line-height: var(--leading-tight);
}

.use-case-description {
  font-size: var(--text-base);
  color: var(--color-label-soft);
  line-height: var(--leading-relaxed);
  margin: 0 var(--p-md) var(--p-lg);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hero-cta {
  background: linear-gradient(120deg, var(--color-accent-base), var(--color-accent-bg-hover));
  color: var(--color-bg-base);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-full);
  padding: var(--p-lg) var(--p-3xl);
  font-size: var(--text-lg);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.hero-cta:hover {
  background: linear-gradient(120deg, var(--color-accent-base-hover), var(--color-accent-bg));
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(197, 249, 85, 0.2);
}
```

### 2. 全屏 Hero 区域 (Full-Screen Hero)
```html
<section class="hero-fullscreen">
  <div class="hero-background">
    <div class="hero-gradient"></div>
    <div class="hero-pattern"></div>
  </div>

  <div class="hero-content">
    <h1 class="hero-title">
      AI-Powered 3D Model Generation
    </h1>
    <p class="hero-subtitle">
      Create stunning 3D models from text descriptions in seconds with advanced artificial intelligence.
    </p>

    <div class="hero-cta">
      <button class="button button-primary button-large">
        Start Creating Free
      </button>
      <button class="button button-ghost button-large">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polygon points="5,3 19,12 5,21"/>
        </svg>
        Watch Demo
      </button>
    </div>
  </div>

  <div class="hero-visual">
    <div class="hero-showcase">
      <div class="hero-image-placeholder">
        <svg viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" rx="16" fill="var(--color-bg-sub)"/>
          <rect x="100" y="75" width="200" height="150" rx="8" fill="var(--color-accent-bg)"/>
          <text x="200" y="155" text-anchor="middle" font-family="Inter" font-size="16" fill="var(--color-label-soft)">3D Model Preview</text>
        </svg>
      </div>
    </div>
  </div>
</section>
```

### 3. 分屏 Hero 区域 (Split-Screen Hero)
```html
<section class="hero-split">
  <div class="hero-split-container">
    <div class="hero-split-content">
      <div class="hero-content-left">
        <h1 class="hero-title">
          Transform Ideas into 3D Models
        </h1>
        <p class="hero-description">
          Meshy uses cutting-edge AI to convert your text descriptions into high-quality 3D models.
        </p>

        <div class="hero-features">
          <div class="feature-item">
            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            <span>Text to 3D in seconds</span>
          </div>
          <div class="feature-item">
            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            <span>High-quality output</span>
          </div>
          <div class="feature-item">
            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            <span>Multiple format support</span>
          </div>
        </div>

        <div class="hero-actions">
          <button class="button button-primary button-large">
            Start Free Trial
          </button>
          <button class="button button-secondary button-large">
            View Gallery
          </button>
        </div>
      </div>
    </div>

    <div class="hero-split-visual">
      <div class="hero-showcase-3d">
        <div class="model-viewer">
          <div class="model-mesh"></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Hero 区域状态

### 正常状态 (Normal State)
```css
.hero-header {
  background-color: var(--color-bg-base);
  border-bottom: 1px solid var(--color-bg-border);
  transition: all var(--duration-fast) var(--ease-smooth);
}
```

### 滚动状态 (Scroll State)
```css
.hero-header.scrolled {
  background-color: rgba(24, 24, 24, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

### 悬停状态 (Hover State)
```css
.hero-link:hover {
  transform: scale(1.02);
}

.hero-cta-button:hover {
  background-color: var(--color-accent-base-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(197, 249, 85, 0.2);
}
```

## 响应式设计

### 移动设备适配
```css
/* 移动端优化 */
@media (max-width: 768px) {
  .hero-container {
    height: 3rem;
    padding: 0 var(--p-md);
  }

  .hero-nav {
    display: none;
  }

  .hero-actions {
    gap: var(--p-sm);
  }

  .hero-title {
    font-size: var(--text-3xl);
  }

  .hero-cta {
    flex-direction: column;
    width: 100%;
  }

  .hero-cta .button {
    width: 100%;
    justify-content: center;
  }

  .use-cases-grid {
    grid-template-columns: 1fr;
    gap: var(--p-2xl);
  }
}

/* 平板设备 */
@media (min-width: 769px) and (max-width: 1023px) {
  .hero-title {
    font-size: var(--text-4xl);
  }

  .use-cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## 可访问性考虑

### 语义化标记
```html
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <a href="/" aria-label="Meshy home page">
      <img src="logo.svg" alt="Meshy logo" />
    </a>
  </nav>
</header>

<main role="main" aria-labelledby="hero-title">
  <h1 id="hero-title">AI-Powered 3D Model Generation</h1>
</main>
```

### 键盘导航
```css
.hero-link:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}
```

## 预览系统

### 交互式预览
查看所有 Hero 区域组件的实时预览和交互效果：
- [Hero 区域组件预览页面](../preview/hero-sections.html)

### 功能特性
- ✨ **实时预览** - 所有 Hero 区域变体和交互效果
- 🎨 **颜色复制** - 点击颜色块复制HEX值
- 📋 **代码复制** - 一键复制所有 Hero 区域代码
- 📱 **响应式** - 适配所有设备尺寸
- ⚡ **交互演示** - 滚动效果、悬停动画、导航下拉

## Hero 区域组件速查表

| 类型 | 用途 | 关键特性 | 响应式支持 | 预览链接 |
|------|------|----------|------------|-----------|
| Homepage | 品牌展示和用例 | 粘性头部、7个Use Cases卡片 | 完全响应式 | [预览](../preview/hero-sections.html) |
| Full-Screen | 沉浸式体验 | 全屏背景、大标题、统计数据 | 移动端优化 | [预览](../preview/hero-sections.html) |
| Split-Screen | 功能介绍 | 左右布局、3D展示、特性列表 | 网格适配 | [预览](../preview/hero-sections.html) |

## 设计原则更新

基于实际分析，Hero 区域设计需要遵循以下原则：

1. **使用 `bg-bg-base` 作为主容器背景**
2. **采用实际的7个Use Cases**: Film Production, Product Design, Education, Game Development, 3D Printing, VR/AR, Interior Design
3. **微妙的渐变效果**: `rgba(197, 249, 85, 0.15)` 而不是强烈的渐变
4. **响应式网格**: 移动端1列，平板2列，桌面3列
5. **真实的标题内容**: "The Easiest Way to Create 3D Models"
6. **精确的字体大小**: 桌面端 72px，符合实际网站设计