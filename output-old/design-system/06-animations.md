# Meshy AI 设计系统 - 动效系统规范

## 概述

Meshy AI 的动效系统注重微妙而自然的过渡效果，通过精心设计的动画时长和缓动函数，提升用户体验而不分散注意力。

## 时间函数

### 缓动函数

| 变量名 | 数值 | 用途 | 特点 |
|--------|------|------|------|
| `--ease-linear` | `linear` | 匀速运动 | 无加速变化 |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | 进入动画 | 开始慢，结束快 |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | 退出动画 | 开始快，结束慢 |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | 双向动画 | 平滑的加速减速 |
| `--ease-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | 弹跳效果 | 超出目标后回弹 |
| `--ease-back` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | 回弹效果 | 轻微后退后前进 |

### 持续时间

| 变量名 | 数值 | 用途 | 示例 |
|--------|------|------|------|
| `--duration-instant` | `0ms` | 立即变化 | 状态切换 |
| `--duration-fast` | `180ms` | 快速过渡 | 悬浮、焦点 |
| `--duration-normal` | `300ms` | 标准过渡 | 颜色、透明度 |
| `--duration-slow` | `600ms` | 慢速过渡 | 布局、位置 |
| `--duration-slower` | `1000ms` | 很慢过渡 | 页面进入 |
| `--duration-slowest` | `1500ms` | 最慢过渡 | 复杂动画 |

### 延迟时间

| 变量名 | 数值 | 用途 |
|--------|------|------|
| `--delay-none` | `0ms` | 无延迟 |
| `--delay-short` | `100ms` | 短延迟 |
| `--delay-medium` | `200ms` | 中等延迟 |
| `--delay-long` | `500ms` | 长延迟 |
| `--delay-longer` | `1000ms` | 很长延迟 |

## 常用动画

### 淡入淡出

```css
.fade-in {
  opacity: 0;
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

.fade-out {
  opacity: 1;
  animation: fadeOut var(--duration-normal) var(--ease-in);
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes fadeOut {
  to { opacity: 0; }
}
```

### 滑动效果

```css
.slide-in-up {
  transform: translateY(20px);
  opacity: 0;
  animation: slideInUp var(--duration-normal) var(--ease-out);
}

.slide-in-down {
  transform: translateY(-20px);
  opacity: 0;
  animation: slideInDown var(--duration-normal) var(--ease-out);
}

@keyframes slideInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInDown {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### 缩放效果

```css
.scale-in {
  transform: scale(0.9);
  opacity: 0;
  animation: scaleIn var(--duration-normal) var(--ease-out);
}

.scale-out {
  transform: scale(1);
  opacity: 1;
  animation: scaleOut var(--duration-normal) var(--ease-in);
}

@keyframes scaleIn {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scaleOut {
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}
```

### 旋转效果

```css
.rotate {
  animation: rotate var(--duration-slow) linear infinite;
}

.rotate-once {
  animation: rotate var(--duration-normal) var(--ease-out);
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}
```

## 组件动画

### 按钮动画

```css
.button {
  transition: all var(--duration-fast) var(--ease-out);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);
  transition-duration: var(--duration-instant);
}

.button-loading {
  position: relative;
  color: transparent;
}

.button-loading::after {
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
  animation: spin var(--duration-normal) linear infinite;
}
```

### 卡片动画

```css
.card {
  transition: all var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  background-color: var(--color-bg-shade);
}

.card-enter {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
  animation: cardEnter var(--duration-normal) var(--ease-out);
}

@keyframes cardEnter {
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```

### 模态框动画

```css
.modal-backdrop {
  opacity: 0;
  animation: modalBackdropIn var(--duration-normal) var(--ease-out);
}

.modal-content {
  opacity: 0;
  transform: scale(0.9);
  animation: modalContentIn var(--duration-normal) var(--ease-out);
}

@keyframes modalBackdropIn {
  to { opacity: 1; }
}

@keyframes modalContentIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 导航动画

```css
.nav-item {
  position: relative;
  transition: color var(--duration-fast) var(--ease-out);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent-base);
  transition: width var(--duration-normal) var(--ease-out);
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}
```

## 页面转场

### 页面进入动画

```css
.page-enter {
  opacity: 0;
  transform: translateY(20px);
  animation: pageEnter var(--duration-slow) var(--ease-out);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
}

@keyframes pageEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 列表动画

```css
.list-item {
  opacity: 0;
  transform: translateX(-20px);
  animation: listItemEnter var(--duration-normal) var(--ease-out);
  animation-fill-mode: both;
}

.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: var(--delay-short); }
.list-item:nth-child(3) { animation-delay: var(--delay-medium); }
.list-item:nth-child(4) { animation-delay: var(--delay-long); }

@keyframes listItemEnter {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

## 高级动画

### 加载动画

```css
.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-bg-border);
  border-top-color: var(--color-accent-base);
  border-radius: 50%;
  animation: spin var(--duration-normal) linear infinite;
}

.loading-dots {
  display: inline-flex;
  gap: 4px;
}

.loading-dots span {
  width: 8px;
  height: 8px;
  background-color: var(--color-accent-base);
  border-radius: 50%;
  animation: loadingDots var(--duration-slow) ease-in-out infinite;
}

.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes loadingDots {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
```

### 脉冲动画

```css
.pulse {
  animation: pulse var(--duration-slow) ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.pulse-ring {
  position: relative;
}

.pulse-ring::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--color-accent-base);
  border-radius: inherit;
  animation: pulseRing var(--duration-slower) ease-out infinite;
}

@keyframes pulseRing {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
```

## CSS 实现示例

```css
:root {
  /* 时间函数 */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* 持续时间 */
  --duration-instant: 0ms;
  --duration-fast: 180ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
  --duration-slower: 1000ms;
  --duration-slowest: 1500ms;

  /* 延迟时间 */
  --delay-none: 0ms;
  --delay-short: 100ms;
  --delay-medium: 200ms;
  --delay-long: 500ms;
  --delay-longer: 1000ms;

  /* 过渡属性 */
  --transition-colors: color var(--duration-fast) var(--ease-out),
                      background-color var(--duration-fast) var(--ease-out),
                      border-color var(--duration-fast) var(--ease-out);
  --transition-transform: transform var(--duration-normal) var(--ease-out);
  --transition-opacity: opacity var(--duration-normal) var(--ease-out);
  --transition-all: all var(--duration-fast) var(--ease-out);
}

/* 通用过渡类 */
.transition-colors { transition: var(--transition-colors); }
.transition-transform { transition: var(--transition-transform); }
.transition-opacity { transition: var(--transition-opacity); }
.transition-all { transition: var(--transition-all); }

/* 动画性能优化 */
.will-change-transform { will-change: transform; }
.will-change-opacity { will-change: opacity; }

/* GPU 加速 */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

## 性能优化

### 减少重绘和回流

```css
/* 优先使用 transform 和 opacity */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* 触发硬件加速 */
}

/* 避免使用 left/top 进行动画 */
.bad-animation {
  left: 0;
  transition: left var(--duration-normal) var(--ease-out);
}

.good-animation {
  transform: translateX(0);
  transition: transform var(--duration-normal) var(--ease-out);
}
```

### 动画暂停

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 最佳实践

1. **性能优先**: 使用 transform 和 opacity 进行动画
2. **尊重用户设置**: 支持 prefers-reduced-motion
3. **保持一致性**: 使用统一的时长和缓动函数
4. **适度使用**: 不要过度使用动画效果
5. **可访问性**: 确保动画不会导致眩晕或不适

---

*此动效系统基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*