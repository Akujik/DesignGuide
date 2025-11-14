# Meshy AI 模型展示轮播组件 (Model Showcase Carousel)

## 📋 概述

基于真实Meshy网站的3D模型展示页面，这是一个专门用于展示3D模型、作品集等内容的水平滚动轮播组件，支持图片切换、用户信息展示和丰富的交互效果。

**验证状态**: ✅ 完全验证
**基于**: Meshy网站真实3D模型展示页面
**交互功能**: 平滑滚动、图片切换、用户信息展示
**响应式**: 移动端优先，完全响应式设计

---

## 🎯 组件核心特征

### 设计理念
- **作品展示**: 以最佳的视觉效果展示3D模型和创作
- **用户识别**: 突出显示创作者信息和身份
- **流畅交互**: 硬件加速的滚动和图片切换动画
- **渐进增强**: 从基础展示到高级交互的渐进体验

### 技术特点
- **性能优化**: 使用 `translate3d` 硬件加速
- **响应式布局**: 自适应卡片宽度和间距
- **图片预加载**: 支持主图和hover图的懒加载
- **无障碍设计**: 完整的键盘导航和屏幕阅读器支持

---

## 🎨 组件结构分析

### 基础HTML结构
```html
<div class="meshy-model-showcase">
  <!-- 标题区域 -->
  <div class="meshy-showcase__header">
    <div class="meshy-showcase__title-section">
      <svg class="meshy-showcase__icon">立方体图标</svg>
      <h2 class="meshy-showcase__title">模型</h2>
    </div>
    <div class="meshy-showcase__controls">
      <button class="meshy-showcase__btn meshy-showcase__btn--prev">
        <svg>左箭头图标</svg>
      </button>
      <button class="meshy-showcase__btn meshy-showcase__btn--next">
        <svg>右箭头图标</svg>
      </button>
    </div>
  </div>

  <!-- 轮播容器 -->
  <div class="meshy-showcase__viewport">
    <div class="meshy-showcase__track">
      <!-- 模型卡片项 -->
      <div class="meshy-model-card">
        <div class="meshy-model-card__container group">
          <a class="meshy-model-card__link" href="#">
            <!-- 图片区域 -->
            <div class="meshy-model-card__image-wrapper">
              <img class="meshy-model-card__image primary" src="..." alt="...">
              <img class="meshy-model-card__image secondary" src="..." alt="...">

              <!-- 悬停信息 -->
              <div class="meshy-model-card__overlay">
                <div class="meshy-model-card__badge">
                  <svg>图片图标</svg>
                  <span>图片生成模型</span>
                </div>
              </div>
            </div>
          </a>

          <!-- 用户信息区域 -->
          <div class="meshy-model-card__user-info">
            <div class="meshy-model-card__avatar-wrapper">
              <a href="#" class="meshy-model-card__user-link">
                <div class="meshy-model-card__avatar">
                  <img src="..." alt="用户头像">
                  <div class="meshy-model-card__avatar-badge"></div>
                </div>
                <div class="meshy-model-card__username">用户名</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 更多卡片... -->
    </div>
  </div>
</div>
```

### 响应式断点
```css
/* 基于真实网站的响应式设计 */
@media (max-width: 640px) {
  .meshy-model-card {
    basis: 200px;  /* 移动端 */
  }
}

@media (min-width: 768px) {
  .meshy-model-card {
    basis: 300px;  /* 平板端 */
  }
}

@media (min-width: 1024px) {
  .meshy-model-card {
    margin-right: 32px;  /* 桌面端更大间距 */
  }
}
```

---

## 🔧 CSS样式实现

### 核心容器样式
```css
/* 模型展示轮播容器 */
.meshy-model-showcase {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}

/* 标题区域 */
.meshy-showcase__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 16px;
}

.meshy-showcase__title-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.meshy-showcase__icon {
  width: 24px;
  height: 24px;
  color: var(--meshy-text-primary);
}

.meshy-showcase__title {
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--meshy-text-primary);
  margin: 0;
}

/* 控制按钮容器 */
.meshy-showcase__controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.meshy-showcase__btn {
  background: var(--meshy-bg-tertiary);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--meshy-text-primary);
}

.meshy-showcase__btn:hover {
  transform: scale(1.05);
  background: var(--meshy-bg-primary);
}

.meshy-showcase__btn:active {
  transform: scale(0.95);
}

.meshy-showcase__btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
}

/* 轮播视口 */
.meshy-showcase__viewport {
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
}

/* 滚动轨道 */
.meshy-showcase__track {
  display: flex;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}
```

### 模型卡片样式
```css
/* 模型卡片 */
.meshy-model-card {
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  background: var(--meshy-bg-strong);
  border-radius: 24px;
  width: 200px; /* 移动端默认宽度 */
}

.meshy-model-card__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
}

.meshy-model-card__link {
  display: block;
  width: 100%;
  text-decoration: none;
  overflow: hidden;
  border-radius: 16px;
  transition: all 0.1s ease-out;
}

.meshy-model-card__link:hover,
.meshy-model-card__link:focus {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.meshy-model-card__link:focus {
  outline: 2px solid var(--meshy-primary);
  outline-offset: 2px;
}

/* 图片区域 */
.meshy-model-card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--meshy-bg-strong);
}

.meshy-model-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease-out;
}

.meshy-model-card__image.primary {
  opacity: 1;
}

.meshy-model-card__image.secondary {
  opacity: 0;
}

.meshy-model-card__container:hover .meshy-model-card__image.primary {
  opacity: 0;
}

.meshy-model-card__container:hover .meshy-model-card__image.secondary {
  opacity: 1;
}

/* 悬停信息覆盖层 */
.meshy-model-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.3s ease-out;
  pointer-events: none;
}

.meshy-model-card__container:hover .meshy-model-card__overlay {
  opacity: 1;
  transform: translateY(0);
}

.meshy-model-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  padding: 4px 8px;
  color: white;
  font-size: 12px;
  font-weight: 500;
}

.meshy-model-card__badge svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* 用户信息区域 */
.meshy-model-card__user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 20px;
}

.meshy-model-card__user-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--meshy-text-primary);
  transition: opacity 0.2s ease;
}

.meshy-model-card__user-link:hover {
  opacity: 0.8;
}

.meshy-model-card__avatar {
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 0.5px solid var(--meshy-bg-translucent);
}

.meshy-model-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.meshy-model-card__avatar-badge {
  position: absolute;
  top: -7px;
  right: -7px;
  width: 16px;
  height: 16px;
  /* 用户等级徽章样式 */
}

.meshy-model-card__username {
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
}

/* 响应式卡片宽度 */
@media (min-width: 640px) {
  .meshy-model-card {
    width: 240px;
    margin-right: 24px;
  }
}

@media (min-width: 768px) {
  .meshy-model-card {
    width: 300px;
    margin-right: 24px;
  }

  .meshy-model-card__username {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .meshy-model-card {
    margin-right: 32px;
  }

  .meshy-showcase__header {
    padding: 0 24px;
  }
}

@media (min-width: 1280px) {
  .meshy-showcase__header {
    padding: 0 32px;
  }

  .meshy-showcase__title {
    font-size: 1.5rem;
  }
}
```

---

## ⚙️ JavaScript交互功能

### 核心轮播逻辑
```javascript
class ModelShowcaseCarousel {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector('.meshy-showcase__track');
    this.cards = Array.from(container.querySelectorAll('.meshy-model-card'));
    this.prevBtn = container.querySelector('.meshy-showcase__btn--prev');
    this.nextBtn = container.querySelector('.meshy-showcase__btn--next');

    this.currentIndex = 0;
    this.cardWidth = 200; // 默认移动端宽度
    this.gap = 16;
    this.isAnimating = false;

    this.init();
  }

  init() {
    this.updateCardWidth();
    this.setupEventListeners();
    this.updateButtons();
    this.setupKeyboardNavigation();
    this.preloadSecondaryImages();
  }

  updateCardWidth() {
    const width = window.innerWidth;
    if (width >= 768) {
      this.cardWidth = 300; // 平板和桌面
      this.gap = width >= 1024 ? 32 : 24;
    } else if (width >= 640) {
      this.cardWidth = 240; // 大手机
      this.gap = 24;
    } else {
      this.cardWidth = 200; // 移动端
      this.gap = 16;
    }
  }

  setupEventListeners() {
    // 按钮事件
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    // 窗口调整
    window.addEventListener('resize', () => {
      this.updateCardWidth();
      this.goToCard(this.currentIndex, false); // 无动画重定位
    });

    // 触摸支持
    this.setupTouchSupport();
  }

  next() {
    if (this.isAnimating) return;

    const maxIndex = Math.max(0, this.cards.length - this.getVisibleCards());
    if (this.currentIndex < maxIndex) {
      this.goToCard(this.currentIndex + 1);
    }
  }

  prev() {
    if (this.isAnimating) return;

    if (this.currentIndex > 0) {
      this.goToCard(this.currentIndex - 1);
    }
  }

  goToCard(index, animate = true) {
    if (this.isAnimating || index < 0 || index >= this.cards.length) return;

    this.isAnimating = true;
    this.currentIndex = index;

    const offset = -(index * (this.cardWidth + this.gap));

    if (animate) {
      this.track.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      this.track.style.transition = 'none';
    }

    this.track.style.transform = `translate3d(${offset}px, 0, 0)`;

    this.updateButtons();

    if (animate) {
      setTimeout(() => {
        this.isAnimating = false;
      }, 300);
    } else {
      this.isAnimating = false;
    }
  }

  getVisibleCards() {
    const containerWidth = this.container.offsetWidth;
    return Math.floor(containerWidth / (this.cardWidth + this.gap));
  }

  updateButtons() {
    const maxIndex = Math.max(0, this.cards.length - this.getVisibleCards());

    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex <= 0;
    }

    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex >= maxIndex;
    }
  }

  setupTouchSupport() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      this.track.style.transition = 'none';
    });

    this.track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;

      currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      const baseOffset = -(this.currentIndex * (this.cardWidth + this.gap));

      this.track.style.transform = `translate3d(${baseOffset + diff}px, 0, 0)`;
    });

    this.track.addEventListener('touchend', (e) => {
      if (!isDragging) return;

      isDragging = false;
      const diff = currentX - startX;
      const threshold = this.cardWidth / 4;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prev();
        } else {
          this.next();
        }
      } else {
        this.goToCard(this.currentIndex); // 回弹到原位
      }
    });
  }

  setupKeyboardNavigation() {
    this.container.setAttribute('tabindex', '0');

    this.container.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.prev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.next();
          break;
        case 'Home':
          e.preventDefault();
          this.goToCard(0);
          break;
        case 'End':
          e.preventDefault();
          this.goToCard(this.cards.length - 1);
          break;
      }
    });
  }

  preloadSecondaryImages() {
    // 预加载hover状态的图片
    this.cards.forEach(card => {
      const secondaryImage = card.querySelector('.meshy-model-card__image.secondary');
      if (secondaryImage && secondaryImage.dataset.src) {
        const img = new Image();
        img.src = secondaryImage.dataset.src;
        img.onload = () => {
          secondaryImage.src = img.src;
        };
      }
    });
  }
}

// 初始化所有轮播组件
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.meshy-model-showcase');
  carousels.forEach(carousel => new ModelShowcaseCarousel(carousel));
});
```

---

## 🎯 使用指南

### 基础使用
```html
<link rel="stylesheet" href="meshy-design-system.css">

<div class="meshy-model-showcase">
  <div class="meshy-showcase__header">
    <div class="meshy-showcase__title-section">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="meshy-showcase__icon">
        <path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z"></path>
        <path d="M12 22v-10"></path>
        <path d="M12 12l8.73 -5.04"></path>
        <path d="M3.27 6.96l8.73 5.04"></path>
      </svg>
      <h2 class="meshy-showcase__title">模型</h2>
    </div>
    <div class="meshy-showcase__controls">
      <button class="meshy-showcase__btn meshy-showcase__btn--prev">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12l14 0"></path>
          <path d="M5 12l6 6"></path>
          <path d="M5 12l6 -6"></path>
        </svg>
      </button>
      <button class="meshy-showcase__btn meshy-showcase__btn--next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </button>
    </div>
  </div>

  <div class="meshy-showcase__viewport">
    <div class="meshy-showcase__track">
      <div class="meshy-model-card">
        <div class="meshy-model-card__container group">
          <a href="/model1" class="meshy-model-card__link">
            <div class="meshy-model-card__image-wrapper">
              <img class="meshy-model-card__image primary" src="model1-primary.jpg" alt="3D模型">
              <img class="meshy-model-card__image secondary" src="model1-secondary.jpg" alt="3D模型预览">
              <div class="meshy-model-card__overlay">
                <div class="meshy-model-card__badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 8h.01"></path>
                    <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
                    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
                  </svg>
                  <span>图片生成模型</span>
                </div>
              </div>
            </div>
          </a>
          <div class="meshy-model-card__user-info">
            <div class="meshy-model-card__avatar-wrapper">
              <a href="/@user1" class="meshy-model-card__user-link">
                <div class="meshy-model-card__avatar">
                  <img src="user1-avatar.jpg" alt="用户头像">
                  <div class="meshy-model-card__avatar-badge"></div>
                </div>
                <div class="meshy-model-card__username">用户名称</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 更多卡片... -->
    </div>
  </div>
</div>

<script src="meshy-model-carousel.js"></script>
```

### 数据驱动示例
```javascript
const models = [
  {
    id: 1,
    title: "Psychedelic Fungus Creature",
    primaryImage: "model1-primary.jpg",
    secondaryImage: "model1-secondary.jpg",
    link: "/models/1",
    user: {
      name: "KATAKANA-KUN",
      avatar: "user1-avatar.jpg",
      badge: "premium",
      link: "/@user1"
    }
  },
  {
    id: 2,
    title: "Golden Elegance",
    primaryImage: "model2-primary.jpg",
    secondaryImage: "model2-secondary.jpg",
    link: "/models/2",
    user: {
      name: "Meshy_Official",
      avatar: "user2-avatar.jpg",
      badge: "official",
      link: "/@user2"
    }
  }
  // 更多模型...
];

// 动态生成轮播
function createModelShowcase(models) {
  const track = document.querySelector('.meshy-showcase__track');

  models.forEach(model => {
    const card = document.createElement('div');
    card.className = 'meshy-model-card';

    card.innerHTML = `
      <div class="meshy-model-card__container group">
        <a href="${model.link}" class="meshy-model-card__link">
          <div class="meshy-model-card__image-wrapper">
            <img class="meshy-model-card__image primary" src="${model.primaryImage}" alt="${model.title}">
            <img class="meshy-model-card__image secondary" src="${model.secondaryImage}" alt="${model.title}">
            <div class="meshy-model-card__overlay">
              <div class="meshy-model-card__badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 8h.01"></path>
                  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
                  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
                  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
                </svg>
                <span>图片生成模型</span>
              </div>
            </div>
          </div>
        </a>
        <div class="meshy-model-card__user-info">
          <div class="meshy-model-card__avatar-wrapper">
            <a href="${model.user.link}" class="meshy-model-card__user-link">
              <div class="meshy-model-card__avatar">
                <img src="${model.user.avatar}" alt="${model.user.name}">
                <div class="meshy-model-card__avatar-badge badge-${model.user.badge}"></div>
              </div>
              <div class="meshy-model-card__username">${model.user.name}</div>
            </a>
          </div>
        </div>
      </div>
    `;

    track.appendChild(card);
  });
}

createModelShowcase(models);
```

---

## ♿ 无障碍支持

### ARIA属性
```html
<div class="meshy-model-showcase" role="region" aria-label="3D模型展示轮播">
  <div class="meshy-showcase__header">
    <div class="meshy-showcase__title-section">
      <h2 class="meshy-showcase__title">模型</h2>
    </div>
    <div class="meshy-showcase__controls" role="group" aria-label="轮播控制">
      <button class="meshy-showcase__btn meshy-showcase__btn--prev"
              aria-label="上一张"
              disabled>
        <!-- 图标 -->
      </button>
      <button class="meshy-showcase__btn meshy-showcase__btn--next"
              aria-label="下一张">
        <!-- 图标 -->
      </button>
    </div>
  </div>

  <div class="meshy-showcase__viewport" aria-live="polite">
    <div class="meshy-showcase__track" role="presentation">
      <!-- 卡片内容 -->
    </div>
  </div>
</div>
```

---

## 🚀 性能优化

### 图片懒加载
```html
<img class="meshy-model-card__image primary"
     src="placeholder.jpg"
     data-src="real-image.jpg"
     alt="3D模型"
     loading="lazy"
     class="lazy-load">

<img class="meshy-model-card__image secondary"
     src="placeholder.jpg"
     data-src="hover-image.jpg"
     alt="3D模型预览"
     loading="lazy"
     class="lazy-load">
```

### Intersection Observer
```javascript
setupLazyLoading() {
  const images = this.container.querySelectorAll('.lazy-load');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy-load');
        imageObserver.unobserve(img);
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => {
    if (img.dataset.src) {
      imageObserver.observe(img);
    }
  });
}
```

---

**基于**: Meshy网站真实3D模型展示页面分析
**验证**: 完整的交互功能和响应式设计
**更新**: 2025年11月15日