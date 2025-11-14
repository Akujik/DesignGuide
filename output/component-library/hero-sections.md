# Hero 区域组件 (Hero Sections)

> Meshy AI 的 Hero 区域组件库和使用指南

## 概述

Hero 区域是用户进入网站时首先看到的重要部分，用于传达核心价值主张、引导用户行动和建立品牌印象。Meshy AI的Hero组件系统提供了多种布局模式、内容样式和交互效果。

## 标准 Hero 区域

### 1. 居中式 Hero

最常用的Hero布局，内容居中显示。

```html
<section class="hero hero-center">
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">
        用 AI 重新定义
        <span class="hero-highlight">3D 创作</span>
      </h1>
      <p class="hero-description">
        Meshy AI 是最先进的 AI 3D 模型生成器，让您在几分钟内创建出令人惊叹的 3D 模型
      </p>
      <div class="hero-actions">
        <button class="button button-primary button-lg">
          免费开始创作
        </button>
        <button class="button button-secondary button-lg">
          观看演示
        </button>
      </div>
      <div class="hero-features">
        <div class="hero-feature">
          <svg class="feature-icon">⚡</svg>
          <span class="feature-text">秒级生成</span>
        </div>
        <div class="hero-feature">
          <svg class="feature-icon">🎨</svg>
          <span class="feature-text">高质量输出</span>
        </div>
        <div class="hero-feature">
          <svg class="feature-icon">🔄</svg>
          <span class="feature-text">实时迭代</span>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <img src="hero-3d-model.png" alt="3D模型展示" class="hero-image">
      <div class="hero-background">
        <div class="hero-gradient"></div>
      </div>
    </div>
  </div>
</section>
```

#### 样式规格
```css
.hero {
  position: relative;
  padding: var(--spacing-xl) 0;
  overflow: hidden;
  background-color: var(--background-base-color);
}

.hero-center {
  text-align: center;
}

.hero-container {
  max-width: var(--container-7xl);
  margin: 0 auto;
  padding: 0 var(--page-horizontal-padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  min-height: 80vh;
}

.hero-content {
  z-index: 2;
}

.hero-title {
  font-size: var(--text-5xl-plus);
  font-weight: var(--font-weight-black);
  line-height: var(--text-5xl--line-height);
  color: var(--foreground-color);
  margin-bottom: var(--spacing-lg);
}

.hero-highlight {
  color: var(--primary-color);
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: var(--text-xl);
  line-height: var(--text-xl--line-height);
  color: var(--foreground-quiet-color);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: var(--spacing-xl);
}

.hero-features {
  display: flex;
  gap: var(--spacing-xl);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--foreground-color);
  font-weight: var(--font-weight-medium);
}

.feature-icon {
  width: 20px;
  height: 20px;
  color: var(--primary-color);
}

.hero-visual {
  position: relative;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
}

.hero-background {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 120%;
  height: 120%;
  z-index: -1;
  opacity: 0.6;
}

.hero-gradient {
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    var(--primary-color) 0%,
    transparent 70%
  );
  filter: blur(100px);
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-features {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: var(--spacing-lg) 0;
  }

  .hero-title {
    font-size: var(--text-3xl-plus);
  }

  .hero-description {
    font-size: var(--text-lg);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-features {
    flex-direction: column;
    gap: var(--spacing-md);
  }
}
```

## Hero 变体

### 1. 左右分栏式 Hero

```html
<section class="hero hero-split">
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">
        专业的 3D 模型
        <br>
        <span class="hero-highlight">创作平台</span>
      </h1>
      <p class="hero-description">
        为设计师、开发者和创意工作者打造的 AI 驱动 3D 内容创作工具
      </p>
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-number">100K+</div>
          <div class="stat-label">活跃用户</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1M+</div>
          <div class="stat-label">模型创建</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">99.9%</div>
          <div class="stat-label">用户满意度</div>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-showcase">
        <img src="showcase-1.png" alt="3D模型展示" class="showcase-image">
        <img src="showcase-2.png" alt="3D模型展示" class="showcase-image showcase-image-secondary">
        <img src="showcase-3.png" alt="3D模型展示" class="showcase-image showcase-image-tertiary">
      </div>
    </div>
  </div>
</section>
```

```css
.hero-split .hero-content {
  text-align: left;
}

.hero-stats {
  display: flex;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
}

.hero-showcase {
  position: relative;
  height: 500px;
}

.showcase-image {
  position: absolute;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transition: transform var(--duration-slow) var(--ease-out);
}

.showcase-image:hover {
  transform: translateY(-8px);
}

.showcase-image {
  top: 0;
  left: 0;
  width: 70%;
  z-index: 3;
}

.showcase-image-secondary {
  top: 25%;
  right: 0;
  width: 60%;
  z-index: 2;
}

.showcase-image-tertiary {
  bottom: 0;
  right: 10%;
  width: 50%;
  z-index: 1;
}
```

### 2. 全屏背景 Hero

```html
<section class="hero hero-fullscreen">
  <div class="hero-background">
    <img src="hero-bg.jpg" alt="背景" class="hero-bg-image">
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">
        探索无限创意
        <br>
        <span class="hero-highlight">AI 驱动</span>
      </h1>
      <p class="hero-description">
        让人工智能成为您的创意伙伴，突破传统 3D 创作的界限
      </p>
      <div class="hero-actions">
        <button class="button button-primary button-lg">开始探索</button>
        <button class="button button-ghost button-lg">了解更多</button>
      </div>
    </div>
    <div class="hero-scroll">
      <div class="scroll-indicator">
        <span class="scroll-text">向下滚动</span>
        <svg class="scroll-icon">↓</svg>
      </div>
    </div>
  </div>
</section>
```

```css
.hero-fullscreen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.hero-fullscreen .hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  z-index: 1;
}

.hero-fullscreen .hero-title {
  color: white;
  font-size: var(--text-6xl-plus);
}

.hero-fullscreen .hero-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--text-xl);
}

.hero-scroll {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: white;
  opacity: 0.8;
}

.scroll-text {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}

.scroll-icon {
  width: 24px;
  height: 24px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
```

### 3. 产品展示 Hero

```html
<section class="hero hero-product">
  <div class="hero-container">
    <div class="hero-badge">
      <span class="badge-text">🎉 新功能发布</span>
      <a href="#" class="badge-link">了解详情 →</a>
    </div>
    <div class="hero-content">
      <h1 class="hero-title">
        Meshy AI 2.0
        <br>
        <span class="hero-highlight">重新定义 3D 创作</span>
      </h1>
      <p class="hero-description">
        全新的 AI 算法，更快的生成速度，更高的模型质量。支持更多 3D 格式和导出选项。
      </p>
      <div class="hero-pricing">
        <div class="pricing-tier">
          <span class="tier-name">免费版</span>
          <span class="tier-price">¥0</span>
          <span class="tier-period">/月</span>
        </div>
        <div class="pricing-divider">或</div>
        <div class="pricing-tier featured">
          <span class="tier-name">专业版</span>
          <span class="tier-price">¥99</span>
          <span class="tier-period">/月</span>
        </div>
      </div>
      <div class="hero-actions">
        <button class="button button-primary button-lg">
          免费试用
        </button>
        <button class="button button-ghost button-lg">
          查看定价
        </button>
      </div>
    </div>
    <div class="hero-visual">
      <div class="product-showcase">
        <div class="product-browser">
          <div class="browser-header">
            <div class="browser-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="browser-title">meshy.ai</div>
          </div>
          <div class="browser-content">
            <img src="product-screenshot.png" alt="产品界面" class="product-screenshot">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.hero-product {
  background: linear-gradient(135deg, var(--background-subtle-color) 0%, var(--background-base-color) 100%);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--accent-color);
  color: var(--background-inverse-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-lg);
}

.badge-link {
  color: inherit;
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
}

.hero-pricing {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  background-color: var(--background-raised-color);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

.pricing-tier {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-xs);
}

.tier-name {
  font-size: var(--text-base);
  color: var(--foreground-quiet-color);
}

.tier-price {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--foreground-color);
}

.tier-period {
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
}

.pricing-tier.featured .tier-price {
  color: var(--primary-color);
}

.pricing-divider {
  color: var(--foreground-quiet-color);
  font-size: var(--text-sm);
}

.product-showcase {
  perspective: 1000px;
}

.product-browser {
  background-color: var(--background-raised-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  transform: rotateY(-5deg) rotateX(5deg);
  transition: transform var(--duration-slow) var(--ease-out);
}

.product-browser:hover {
  transform: rotateY(0deg) rotateX(0deg);
}

.browser-header {
  background-color: var(--background-subtle-color);
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

.browser-dots {
  display: flex;
  gap: var(--spacing-xs);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-red { background-color: #ff5f57; }
.dot-yellow { background-color: #ffbd2e; }
.dot-green { background-color: #28ca42; }

.browser-title {
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
}

.browser-content {
  padding: var(--spacing-sm);
}

.product-screenshot {
  width: 100%;
  height: auto;
  border-radius: var(--radius-sm);
}
```

## 动画效果

### 1. 渐入动画

```html
<section class="hero hero-animated">
  <div class="hero-container">
    <div class="hero-content animate-fade-in">
      <h1 class="hero-title animate-slide-up">动态标题</h1>
      <p class="hero-description animate-slide-up-delay">动态描述文本</p>
    </div>
  </div>
</section>
```

```css
.animate-fade-in {
  opacity: 0;
  animation: fadeIn var(--duration-slow) var(--ease-out) forwards;
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp var(--duration-slow) var(--ease-out) forwards;
}

.animate-slide-up-delay {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp var(--duration-slow) var(--ease-out) 0.2s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 2. 滚动触发动画

```html
<section class="hero hero-scroll-animate">
  <div class="hero-container">
    <div class="hero-content" data-animate>
      <h1 class="hero-title">滚动触发动画</h1>
    </div>
  </div>
</section>
```

```javascript
// 滚动触发动画的 JavaScript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});
```

```css
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}

[data-animate].animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

## 响应式设计

### 移动端优化

```css
@media (max-width: 768px) {
  .hero {
    padding: var(--spacing-lg) 0;
  }

  .hero-title {
    font-size: var(--text-3xl-plus);
    line-height: 1.2;
  }

  .hero-description {
    font-size: var(--text-lg);
    line-height: 1.5;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions .button {
    width: 100%;
  }

  .hero-features {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .hero-stats {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
```

### 高分辨率优化

```css
@media (min-width: 1440px) {
  .hero-title {
    font-size: var(--text-7xl);
  }

  .hero-description {
    font-size: var(--text-2xl);
  }

  .hero-container {
    gap: var(--spacing-3xl);
  }
}
```

## 性能优化

### 1. 图片优化

```html
<picture class="hero-image-container">
  <source media="(max-width: 768px)" srcset="hero-mobile.webp">
  <source media="(max-width: 1024px)" srcset="hero-tablet.webp">
  <img src="hero-desktop.webp"
       alt="Hero图片"
       class="hero-image"
       loading="eager"
       decoding="async">
</picture>
```

### 2. CSS 优化

```css
/* 使用 will-change 优化动画 */
.hero-visual {
  will-change: transform;
}

/* 使用 contain 提升性能 */
.hero {
  contain: layout style paint;
}

/* 避免复杂的 CSS 选择器 */
.hero-title { /* 直接选择器 */ }
```

## 可访问性

### 1. 语义化标签

```html
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-container">
    <h1 id="hero-title" class="hero-title">主要标题</h1>
    <p class="hero-description">描述文本</p>
    <div class="hero-actions" role="group" aria-label="主要操作">
      <button class="button button-primary">主要操作</button>
      <button class="button button-secondary">次要操作</button>
    </div>
  </div>
</section>
```

### 2. 键盘导航

```css
.hero-actions .button:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

## 使用指南

### 1. 内容策略

```html
✅ 清晰的价值主张
<h1>用 AI 重新定义 3D 创作</h1>
<p>让每个人都能轻松创建专业级 3D 模型</p>

✅ 明确的行动号召
<button class="button button-primary">免费开始</button>

✅ 社会证明
<div class="hero-features">
  <div class="hero-feature">
    <span class="feature-text">100K+ 用户信赖</span>
  </div>
</div>

❌ 避免复杂的技术术语
<h1>基于神经网络的参数化3D建模系统</h1>
```

### 2. 视觉层次

```html
✅ 清晰的信息层级
<h1 class="hero-title">主要信息</h1>
<p class="hero-description">支持信息</p>
<div class="hero-actions">操作信息</div>
<div class="hero-features">信任信息</div>

✅ 合理的颜色对比
.hero-title {
  color: var(--foreground-color); /* 高对比度 */
}

.hero-description {
  color: var(--foreground-quiet-color); /* 中等对比度 */
}
```

### 3. 性能考虑

```html
✅ 优化图片加载
<picture>
  <source srcset="hero-small.webp" media="(max-width: 768px)">
  <img src="hero-large.webp" loading="eager">
</picture>

✅ 延迟加载非关键资源
<img src="hero-image.jpg" loading="lazy" alt="图片">

✅ 使用现代图片格式
<img src="hero-image.webp" alt="WebP格式图片">
```

## 工具类

### Hero 布局
```css
.hero-center { /* 居中布局 */ }
.hero-split { /* 分栏布局 */ }
.hero-fullscreen { /* 全屏布局 */ }
.hero-wide { /* 宽屏布局 */ }
```

### Hero 变体
```css
.hero-product { /* 产品展示 */ }
.hero-marketing { /* 营销页面 */ }
.hero-coming-soon { /* 即将推出 */ }
.hero-error { /* 错误页面 */ }
```

### 动画类
```css
.hero-animated { /* 带动画 */ }
.hero-static { /* 静态 */ }
.hero-parallax { /* 视差效果 */ }
.hero-video { /* 视频背景 */ }
```

## 测试清单

### 功能测试
- [ ] 所有按钮链接正常工作
- [ ] 表单提交功能正确
- [ ] 视频播放正常
- [ ] 交互效果响应及时

### 视觉测试
- [ ] 布局在不同屏幕尺寸正确
- [ ] 图片显示正常
- [ ] 动画流畅自然
- [ ] 颜色对比度符合标准

### 性能测试
- [ ] 页面加载速度快
- [ ] 图片优化有效
- [ ] 动画性能良好
- [ ] 移动端响应迅速

### 可访问性测试
- [ ] 键盘导航完整
- [ ] 屏幕阅读器友好
- [ ] 语义化标签正确
- [ ] 焦点管理良好

---

*最后更新: 2025年11月14日*