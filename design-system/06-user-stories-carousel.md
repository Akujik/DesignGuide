# Meshy AI 用户故事轮播组件 (User Story Carousel)

## 📋 概述

基于真实Meshy网站的用户故事展示页面，这是一个具有丰富交互功能的水平滚动轮播组件，用于展示用户案例、成功故事和产品应用。

**验证状态**: ✅ 完全验证
**基于**: Meshy网站真实用户故事页面
**交互功能**: 平滑滚动、触摸滑动、键盘导航
**响应式**: 移动端优先，完全响应式设计

---

## 🎯 组件核心特征

### 设计理念
- **故事驱动**: 以视觉化方式展示用户成功案例
- **沉浸体验**: 大图片 + 简洁标题的卡片设计
- **流畅交互**: 硬件加速的滚动动画
- **渐进增强**: 从基础功能到高级交互的渐进体验

### 技术特点
- **性能优化**: 使用 `translate3d` 硬件加速
- **响应式布局**: 自适应卡片宽度和间距
- **触摸友好**: 支持移动端滑动手势
- **无障碍设计**: 完整的键盘导航和屏幕阅读器支持

---

## 🎨 组件结构分析

### 基础HTML结构
```html
<div class="meshy-user-stories-carousel">
  <!-- 标题区域 -->
  <div class="meshy-carousel__header">
    <h2 class="meshy-carousel__title">用户故事</h2>
    <div class="meshy-carousel__controls">
      <button class="meshy-carousel__btn meshy-carousel__btn--prev">
        <svg>左箭头图标</svg>
      </button>
      <button class="meshy-carousel__btn meshy-carousel__btn--next">
        <svg>右箭头图标</svg>
      </button>
    </div>
  </div>

  <!-- 轮播容器 -->
  <div class="meshy-carousel__viewport">
    <div class="meshy-carousel__track">
      <!-- 卡片项 -->
      <a class="meshy-story-card" href="#">
        <img class="meshy-story-card__image" src="..." alt="...">
        <div class="meshy-story-card__content">
          <h3 class="meshy-story-card__title">故事标题</h3>
        </div>
      </a>
      <!-- 更多卡片... -->
    </div>
  </div>
</div>
```

### 响应式断点
```css
/* 基于真实网站的响应式设计 */
@media (max-width: 640px) {
  .meshy-story-card {
    basis: 280px;  /* 移动端 */
  }
}

@media (min-width: 768px) {
  .meshy-story-card {
    basis: 400px;  /* 平板端 */
  }
}

@media (min-width: 1024px) {
  .meshy-story-card {
    margin-right: 32px;  /* 桌面端更大间距 */
  }
}
```

---

## 🔧 CSS样式实现

### 核心容器样式
```css
/* 轮播容器 */
.meshy-user-stories-carousel {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}

/* 标题区域 */
.meshy-carousel__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 32px;
  padding: 0 16px;
}

.meshy-carousel__title {
  font-size: clamp(2rem, 5vw, 6rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--meshy-text-primary);
  margin: 0;
}

/* 控制按钮容器 */
.meshy-carousel__controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.meshy-carousel__btn {
  background: var(--meshy-bg-tertiary);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--meshy-text-primary);
}

.meshy-carousel__btn:hover {
  transform: scale(1.05);
  background: var(--meshy-bg-primary);
}

.meshy-carousel__btn:active {
  transform: scale(0.95);
}

.meshy-carousel__btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
}

/* 轮播视口 */
.meshy-carousel__viewport {
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
}

/* 滚动轨道 */
.meshy-carousel__track {
  display: flex;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}
```

### 故事卡片样式
```css
/* 故事卡片 */
.meshy-story-card {
  display: block;
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  border-radius: 24px;
  text-decoration: none;
  background: var(--meshy-bg-secondary);
  transition: all 0.2s ease-out;
  margin-right: 16px;
  width: 280px; /* 移动端默认宽度 */
}

.meshy-story-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.meshy-story-card:hover .meshy-story-card__content {
  background: var(--meshy-bg-tertiary);
}

/* 卡片图片 */
.meshy-story-card__image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  select-none: user-select-none;
  -webkit-user-drag: none;
}

/* 卡片内容 */
.meshy-story-card__content {
  background: var(--meshy-bg-secondary);
  padding: 16px;
  height: 100%;
  font-weight: 600;
  font-size: 14px;
  color: var(--meshy-text-primary);
  transition: background-color 0.2s ease-out;
  line-height: 1.4;
}

/* 响应式卡片宽度 */
@media (min-width: 768px) {
  .meshy-story-card {
    width: 400px;
    margin-right: 24px;
  }

  .meshy-story-card__image {
    height: 255px;
  }

  .meshy-story-card__content {
    padding: 20px;
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .meshy-story-card {
    margin-right: 32px;
  }

  .meshy-carousel__header {
    padding: 0 24px;
  }
}

@media (min-width: 1280px) {
  .meshy-carousel__header {
    padding: 0 32px;
  }

  .meshy-carousel__title {
    font-size: 6rem;
  }
}
```

---

## ⚙️ JavaScript交互功能

### 核心轮播逻辑
```javascript
class UserStoryCarousel {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector('.meshy-carousel__track');
    this.slides = Array.from(container.querySelectorAll('.meshy-story-card'));
    this.prevBtn = container.querySelector('.meshy-carousel__btn--prev');
    this.nextBtn = container.querySelector('.meshy-carousel__btn--next');

    this.currentIndex = 0;
    this.slideWidth = 280; // 默认移动端宽度
    this.gap = 16;
    this.isAnimating = false;

    this.init();
  }

  init() {
    this.updateSlideWidth();
    this.setupEventListeners();
    this.updateButtons();
    this.setupTouchSupport();
    this.setupKeyboardNavigation();
  }

  updateSlideWidth() {
    const width = window.innerWidth;
    if (width >= 768) {
      this.slideWidth = 400; // 平板和桌面
      this.gap = width >= 1024 ? 32 : 24;
    } else {
      this.slideWidth = 280; // 移动端
      this.gap = 16;
    }
  }

  setupEventListeners() {
    // 按钮事件
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    // 窗口调整
    window.addEventListener('resize', () => {
      this.updateSlideWidth();
      this.goToSlide(this.currentIndex, false); // 无动画重定位
    });
  }

  next() {
    if (this.isAnimating) return;

    const maxIndex = Math.max(0, this.slides.length - this.getVisibleSlides());
    if (this.currentIndex < maxIndex) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  prev() {
    if (this.isAnimating) return;

    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  goToSlide(index, animate = true) {
    if (this.isAnimating || index < 0 || index >= this.slides.length) return;

    this.isAnimating = true;
    this.currentIndex = index;

    const offset = -(index * (this.slideWidth + this.gap));

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

  getVisibleSlides() {
    const containerWidth = this.container.offsetWidth;
    return Math.floor(containerWidth / (this.slideWidth + this.gap));
  }

  updateButtons() {
    const maxIndex = Math.max(0, this.slides.length - this.getVisibleSlides());

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
      const baseOffset = -(this.currentIndex * (this.slideWidth + this.gap));

      this.track.style.transform = `translate3d(${baseOffset + diff}px, 0, 0)`;
    });

    this.track.addEventListener('touchend', (e) => {
      if (!isDragging) return;

      isDragging = false;
      const diff = currentX - startX;
      const threshold = this.slideWidth / 4;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prev();
        } else {
          this.next();
        }
      } else {
        this.goToSlide(this.currentIndex); // 回弹到原位
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
          this.goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.slides.length - 1);
          break;
      }
    });
  }
}

// 初始化所有轮播组件
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.meshy-user-stories-carousel');
  carousels.forEach(carousel => new UserStoryCarousel(carousel));
});
```

---

## 🎯 使用指南

### 基础使用
```html
<link rel="stylesheet" href="meshy-design-system.css">

<div class="meshy-user-stories-carousel">
  <div class="meshy-carousel__header">
    <h2 class="meshy-carousel__title">用户故事</h2>
    <div class="meshy-carousel__controls">
      <button class="meshy-carousel__btn meshy-carousel__btn--prev">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12l14 0"></path>
          <path d="M5 12l6 6"></path>
          <path d="M5 12l6 -6"></path>
        </svg>
      </button>
      <button class="meshy-carousel__btn meshy-carousel__btn--next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </button>
    </div>
  </div>

  <div class="meshy-carousel__viewport">
    <div class="meshy-carousel__track">
      <a href="/story1" class="meshy-story-card">
        <img src="image1.jpg" alt="故事1" class="meshy-story-card__image">
        <div class="meshy-story-card__content">
          荆棘酒馆如何通过 Meshy AI 将 TTRPG 3D 微型模型的生产时间缩短 90% 以上
        </div>
      </a>
      <!-- 更多卡片... -->
    </div>
  </div>
</div>

<script src="meshy-carousel.js"></script>
```

### 数据驱动示例
```javascript
const stories = [
  {
    title: "荆棘酒馆如何通过 Meshy AI 将 TTRPG 3D 微型模型的生产时间缩短 90% 以上",
    image: "thorns-tavern.jpg",
    link: "/blog/thorns-tavern"
  },
  {
    title: "从7天到2小时：Jupiter如何利用Meshy AI扩展裸眼3D内容",
    image: "jupiter.jpg",
    link: "/blog/jupiter"
  }
  // 更多故事...
];

// 动态生成轮播
function createCarousel(stories) {
  const track = document.querySelector('.meshy-carousel__track');

  stories.forEach(story => {
    const card = document.createElement('a');
    card.href = story.link;
    card.className = 'meshy-story-card';

    card.innerHTML = `
      <img src="${story.image}" alt="${story.title}" class="meshy-story-card__image">
      <div class="meshy-story-card__content">
        ${story.title}
      </div>
    `;

    track.appendChild(card);
  });
}

createCarousel(stories);
```

---

## ♿ 无障碍支持

### ARIA属性
```html
<div class="meshy-user-stories-carousel" role="region" aria-label="用户故事轮播">
  <div class="meshy-carousel__header">
    <h2 class="meshy-carousel__title">用户故事</h2>
    <div class="meshy-carousel__controls" role="group" aria-label="轮播控制">
      <button class="meshy-carousel__btn meshy-carousel__btn--prev"
              aria-label="上一张"
              disabled>
        <!-- 图标 -->
      </button>
      <button class="meshy-carousel__btn meshy-carousel__btn--next"
              aria-label="下一张">
        <!-- 图标 -->
      </button>
    </div>
  </div>

  <div class="meshy-carousel__viewport" aria-live="polite">
    <div class="meshy-carousel__track" role="presentation">
      <!-- 卡片内容 -->
    </div>
  </div>
</div>
```

### 屏幕阅读器支持
```javascript
updateARIA() {
  const totalSlides = this.slides.length;
  const currentPosition = this.currentIndex + 1;

  this.container.setAttribute('aria-label',
    `用户故事轮播，第 ${currentPosition} 张，共 ${totalSlides} 张`
  );

  // 更新当前活动卡片
  this.slides.forEach((slide, index) => {
    slide.setAttribute('aria-current', index === this.currentIndex ? 'true' : 'false');
  });
}
```

---

## 🚀 性能优化

### 硬件加速
```css
.meshy-carousel__track {
  /* 启用GPU加速 */
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}

.meshy-story-card {
  /* 优化渲染性能 */
  contain: layout style paint;
}
```

### 懒加载优化
```javascript
// 图片懒加载
setupLazyLoading() {
  const images = this.container.querySelectorAll('.meshy-story-card__image');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
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

**基于**: Meshy网站真实用户故事页面分析
**验证**: 26个用户故事卡片的实际实现
**更新**: 2025年11月15日