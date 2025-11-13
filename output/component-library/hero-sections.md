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
          <!-- 品牌渐变Logo -->
          <defs>
            <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#c5f955" />
              <stop offset="50%" style="stop-color:#ff97c2" />
              <stop offset="100%" style="stop-color:#ff3e8f" />
            </linearGradient>
          </defs>
          <!-- Logo路径 -->
        </svg>
        <span class="brand-text">Meshy</span>
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
```

**样式特征**:
- 背景: `--color-bg-base` (#181818)
- 粘性定位: `sticky top-0`
- Z轴层级: `z-50` 确保在其他元素之上
- 响应式高度: 移动端 3rem，桌面端 4.5rem
- 品牌渐变: 绿色到粉色的渐变效果

**CSS 实现**:
```css
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

.brand-link {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  text-decoration: none;
  color: var(--color-label-title);
  font-weight: var(--font-weight-bold);
  font-size: var(--text-lg);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.brand-link:hover {
  transform: scale(1.02);
}

.brand-logo {
  width: 167px;
  height: 64px;
  flex-shrink: 0;
}

.hero-nav {
  display: none;
}

@media (min-width: 768px) {
  .hero-nav {
    display: flex;
    flex: 1;
    justify-content: center;
  }
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--gap-xl);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--color-label-base);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  padding: var(--p-sm) var(--p-md);
  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-smooth);
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
}

.nav-link:hover {
  color: var(--color-label-title);
  background-color: var(--color-bg-translucent);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
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
    <div class="hero-text">
      <h1 class="hero-title">
        AI-Powered 3D Model Generation
      </h1>
      <p class="hero-subtitle">
        Create stunning 3D models from text descriptions in seconds with advanced artificial intelligence.
      </p>
    </div>

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
      <img src="hero-3d-model.png" alt="3D Model Generation" class="hero-image" />
      <div class="hero-overlay">
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-value">1M+</div>
            <div class="stat-label">Models Created</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">50K+</div>
            <div class="stat-label">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS 实现**:
```css
.hero-fullscreen {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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

.hero-visual {
  position: relative;
  z-index: 5;
  margin-top: var(--p-5xl);
}

.hero-showcase {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top,
    rgba(24, 24, 24, 0.9) 0%,
    transparent 100%);
  padding: var(--p-3xl);
}

.hero-stats {
  display: flex;
  gap: var(--p-3xl);
  justify-content: center;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent-base);
  margin-bottom: var(--p-xs);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-label-soft);
}
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
          Perfect for game developers, designers, and content creators.
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
          <div class="model-controls">
            <button class="control-btn" aria-label="Rotate left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M2 12a10 10 0 1 0 10-10"/>
              </svg>
            </button>
            <button class="control-btn" aria-label="Rotate right">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 12a10 10 0 1 1-10-10"/>
              </svg>
            </button>
            <button class="control-btn" aria-label="Zoom">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS 实现**:
```css
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

.feature-icon {
  width: 20px;
  height: 20px;
  color: var(--color-accent-base);
  flex-shrink: 0;
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

.model-viewer {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.model-mesh {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg,
    var(--color-accent-base),
    var(--color-accent-support-base));
  border-radius: var(--radius-lg);
  animation: mesh-rotation 8s linear infinite;
  box-shadow: 0 0 40px rgba(197, 249, 85, 0.3);
}

@keyframes mesh-rotation {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

.model-controls {
  position: absolute;
  bottom: var(--p-lg);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--p-md);
  background-color: var(--color-bg-sub);
  padding: var(--p-sm);
  border-radius: var(--radius-full);
  backdrop-filter: blur(10px);
}

.control-btn {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-base);
  border: 1px solid var(--color-bg-border);
  color: var(--color-label-base);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.control-btn:hover {
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
  border-color: var(--color-accent-base);
}
```

### 4. 功能展示 Hero 区域 (Feature Showcase Hero)
```html
<section class="hero-feature">
  <div class="hero-feature-container">
    <div class="hero-feature-header">
      <h1 class="hero-feature-title">
        AI-Powered 3D Model Generation
      </h1>
      <p class="hero-feature-subtitle">
        From text to 3D in seconds. Our advanced AI understands your descriptions
        and creates stunning, production-ready 3D models.
      </p>
    </div>

    <div class="hero-feature-grid">
      <div class="feature-card">
        <div class="feature-icon-large">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
        <h3 class="feature-title">Text to 3D</h3>
        <p class="feature-description">
          Simply describe your model in natural language and watch it come to life in 3D.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon-large">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        </div>
        <h3 class="feature-title">High Quality</h3>
        <p class="feature-description">
          Generate production-ready models with clean topology and detailed textures.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon-large">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
        </div>
        <h3 class="feature-title">Multiple Formats</h3>
        <p class="feature-description">
          Export to OBJ, FBX, GLTF, and other popular 3D formats.
        </p>
      </div>
    </div>

    <div class="hero-feature-cta">
      <button class="button button-primary button-large">
        Get Started Free
      </button>
      <p class="cta-description">
        No credit card required • 100 free models per month
      </p>
    </div>
  </div>
</section>
```

**CSS 实现**:
```css
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

.feature-icon-large svg {
  width: 32px;
  height: 32px;
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

.hero-feature-cta {
  text-align: center;
}

.cta-description {
  margin-top: var(--p-md);
  color: var(--color-label-muted);
  font-size: var(--text-sm);
}
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
  transform: scale(1.05);
  color: var(--color-accent-base);
}

.hero-cta-button:hover {
  background-color: var(--color-accent-base-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(197, 249, 85, 0.2);
}
```

### 加载状态 (Loading State)
```html
<div class="hero-loading">
  <div class="loading-spinner"></div>
  <p>Loading amazing 3D models...</p>
</div>
```

**CSS**:
```css
.hero-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-bg-border);
  border-top: 4px solid var(--color-accent-base);
  border-radius: var(--radius-full);
  animation: spin var(--duration-slow) linear infinite;
  margin-bottom: var(--p-lg);
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
  }
}

/* 平板设备 */
@media (min-width: 769px) and (max-width: 1023px) {
  .hero-container {
    height: 4rem;
    padding: 0 var(--p-xl);
  }

  .hero-title {
    font-size: var(--text-4xl);
  }
}

/* 大屏设备 */
@media (min-width: 1440px) {
  .hero-container {
    max-width: 1400px;
  }

  .hero-title {
    font-size: var(--text-6xl);
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
    <ul role="menubar">
      <li role="none">
        <a href="/features" role="menuitem">Features</a>
      </li>
    </ul>
  </nav>
</header>

<section role="main" aria-labelledby="hero-title">
  <h1 id="hero-title">AI-Powered 3D Model Generation</h1>
</section>
```

### 键盘导航
```css
.hero-link:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}

.hero-cta-button:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}
```

### 屏幕阅读器支持
```html
<button aria-label="Get started with Meshy for free">
  Get Started Free
</button>

<div aria-live="polite" class="sr-only">
  Loading 3D model generation interface
</div>
```

## Hero 区域使用指南

### 何时使用
- **主页首屏**: 产品价值展示和用户引导
- **产品页面**: 功能介绍和转化促进
- **落地页**: 营销活动和用户获取
- **应用入口**: 重要功能和更新的展示

### Hero 区域设计原则
- 清晰的价值主张
- 强烈的行动号召
- 品牌一致性
- 响应式友好
- 加载性能优化

### 最佳实践
- 标题文字简洁有力，突出核心价值
- 副标题补充说明，降低理解门槛
- CTA按钮明确，使用动词引导用户行为
- 视觉元素支持而非干扰核心信息
- 确保在所有设备上都有良好体验

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
| Homepage | 品牌展示和导航 | 粘性头部、品牌渐变、CTA按钮 | 完全响应式 | [预览](../preview/hero-sections.html) |
| Full-Screen | 沉浸式体验 | 全屏背景、大标题、统计数据 | 移动端优化 | [预览](../preview/hero-sections.html) |
| Split-Screen | 功能介绍 | 左右布局、3D展示、特性列表 | 网格适配 | [预览](../preview/hero-sections.html) |
| Feature Showcase | 功能展示 | 卡片网格、图标突出、描述详细 | 弹性布局 | [预览](../preview/hero-sections.html) |

## 代码示例

### 完整的 Hero 区域实现
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meshy - AI-Powered 3D Model Generation</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <!-- Hero Header Navigation -->
  <header class="hero-header" role="banner">
    <div class="hero-container">
      <div class="hero-brand">
        <a href="/" class="brand-link" aria-label="Meshy home">
          <svg class="brand-logo" viewBox="0 0 167 64" fill="none">
            <defs>
              <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#c5f955" />
                <stop offset="50%" style="stop-color:#ff97c2" />
                <stop offset="100%" style="stop-color:#ff3e8f" />
              </linearGradient>
            </defs>
            <!-- Logo SVG paths with gradient fill -->
          </svg>
        </a>
      </div>

      <nav class="hero-nav" role="navigation" aria-label="Main navigation">
        <ul class="nav-list" role="menubar">
          <li class="nav-item" role="none">
            <a href="/features" class="nav-link" role="menuitem">Features</a>
          </li>
          <li class="nav-item" role="none">
            <a href="/pricing" class="nav-link" role="menuitem">Pricing</a>
          </li>
          <li class="nav-item nav-dropdown" role="none">
            <button class="nav-link dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="menuitem">
              Resources
              <svg class="dropdown-icon" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div class="dropdown-menu" role="menu">
              <a href="/blog" class="dropdown-item" role="menuitem">Blog</a>
              <a href="/docs" class="dropdown-item" role="menuitem">Documentation</a>
              <a href="/tutorials" class="dropdown-item" role="menuitem">Tutorials</a>
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

  <!-- Main Hero Section -->
  <section class="hero-fullscreen" role="main">
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
          <svg class="icon" viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
          Watch Demo
        </button>
      </div>
    </div>
  </section>

  <script src="assets/js/scripts.js"></script>
</body>
</html>
```