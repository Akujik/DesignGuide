# 动画系统 (Animation System)

> Meshy AI 的过渡、动画和交互效果指南

## 概述

Meshy AI的动画系统遵循"有意义、微妙、一致"的原则，提供流畅的用户体验。动画用于增强用户理解、提供视觉反馈和创造愉悦的交互体验，同时尊重用户的偏好和可访问性需求。

## 动画原则

### 1. 有目的性
动画应该有明确的目的：
- 提供状态变化的视觉反馈
- 引导用户注意力
- 建立空间关系
- 增强品牌体验

### 2. 微妙性
动画应该微妙而不突兀：
- 使用自然的缓动函数
- 保持适当的持续时间
- 避免过度的效果

### 3. 一致性
在整个产品中保持一致的动画体验：
- 统一的缓动函数
- 标准化的持续时间
- 可预测的行为模式

## 时间系统

### 持续时间令牌

```css
/* 快速动画 - 用于微交互 */
--duration-fast: 150ms;
--duration-faster: 100ms;

/* 标准动画 - 用于UI过渡 */
--duration-normal: 200ms;
--duration-slow: 300ms;

/* 慢速动画 - 用于页面转换 */
--duration-slower: 500ms;
--duration-slowest: 800ms;
```

### 默认过渡设置

```css
/* 标准过渡 */
--default-transition-duration: 0.15s;
--default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

## 缓动函数

### 标准缓动

```css
/* 线性 - 匀速运动 */
--ease-linear: linear;

/* 标准缓动 - 自然感觉 */
--ease-out: cubic-bezier(0, 0, 0.2, 1);      /* 减速 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);       /* 加速 */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* 加速后减速 */

/* 强调缓动 - 弹性感觉 */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-out-expo: cubic-bezier(0, 0, 0.2, 1);
```

### 物理模拟

```css
/* 弹性动画 */
--spring-soft: cubic-bezier(0.175, 0.885, 0.32, 1.275);
--spring-bouncy: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* 重力动画 */
--gravity: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## 标准动画

### 1. 淡入淡出

```css
/* 淡入 */
.fade-in {
  opacity: 0;
  animation: fade-in var(--duration-normal) var(--ease-out) forwards;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

/* 淡出 */
.fade-out {
  opacity: 1;
  animation: fade-out var(--duration-normal) var(--ease-in) forwards;
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

/* 交叉淡入淡出 */
.fade-cross {
  animation: fade-cross var(--duration-normal) var(--ease-in-out);
}

@keyframes fade-cross {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

### 2. 滑动动画

```css
/* 向下滑动 */
.slide-down {
  transform: translateY(-100%);
  animation: slide-down var(--duration-normal) var(--ease-out) forwards;
}

@keyframes slide-down {
  to {
    transform: translateY(0);
  }
}

/* 向上滑动 */
.slide-up {
  transform: translateY(100%);
  animation: slide-up var(--duration-normal) var(--ease-out) forwards;
}

@keyframes slide-up {
  to {
    transform: translateY(0);
  }
}

/* 从左滑动 */
.slide-left {
  transform: translateX(100%);
  animation: slide-left var(--duration-normal) var(--ease-out) forwards;
}

@keyframes slide-left {
  to {
    transform: translateX(0);
  }
}

/* 从右滑动 */
.slide-right {
  transform: translateX(-100%);
  animation: slide-right var(--duration-normal) var(--ease-out) forwards;
}

@keyframes slide-right {
  to {
    transform: translateX(0);
  }
}
```

### 3. 缩放动画

```css
/* 缩放进入 */
.scale-in {
  transform: scale(0.9);
  opacity: 0;
  animation: scale-in var(--duration-normal) var(--ease-out) forwards;
}

@keyframes scale-in {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* 缩放退出 */
.scale-out {
  transform: scale(1);
  opacity: 1;
  animation: scale-out var(--duration-normal) var(--ease-in) forwards;
}

@keyframes scale-out {
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}

/* 弹性缩放 */
.scale-bounce {
  animation: scale-bounce var(--duration-slow) var(--spring-bouncy);
}

@keyframes scale-bounce {
  0% { transform: scale(1); }
  30% { transform: scale(1.25); }
  60% { transform: scale(0.85); }
  100% { transform: scale(1); }
}
```

## 组合动画

### 1. 页面转换

```css
/* 页面进入 */
.page-enter {
  opacity: 0;
  transform: translateY(20px);
  animation: page-enter var(--duration-slow) var(--ease-out) forwards;
}

@keyframes page-enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 页面退出 */
.page-exit {
  opacity: 1;
  transform: translateY(0);
  animation: page-exit var(--duration-normal) var(--ease-in) forwards;
}

@keyframes page-exit {
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
```

### 2. 模态框动画

```css
/* 模态框背景 */
.modal-backdrop {
  opacity: 0;
  animation: modal-backdrop-in var(--duration-normal) var(--ease-out) forwards;
}

@keyframes modal-backdrop-in {
  to {
    opacity: 1;
  }
}

/* 模态框内容 */
.modal-content {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
  animation: modal-content-in var(--duration-normal) var(--ease-out) forwards;
}

@keyframes modal-content-in {
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}
```

### 3. 提示动画

```css
/* 提示进入 */
.toast-enter {
  transform: translateY(-100%);
  opacity: 0;
  animation: toast-enter var(--duration-normal) var(--spring-soft) forwards;
}

@keyframes toast-enter {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 提示退出 */
.toast-exit {
  transform: translateY(0);
  opacity: 1;
  animation: toast-exit var(--duration-normal) var(--ease-in) forwards;
}

@keyframes toast-exit {
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
```

## 组件动画

### 1. 按钮动画

```css
/* 按钮悬停 */
.button {
  transition: transform var(--duration-fast) var(--ease-out),
              background-color var(--duration-fast) var(--ease-out);
}

.button:hover {
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0);
}

/* 按钮涟漪效果 */
.button-ripple {
  position: relative;
  overflow: hidden;
}

.button-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width var(--duration-slow) var(--ease-out),
              height var(--duration-slow) var(--ease-out);
}

.button-ripple:active::after {
  width: 300px;
  height: 300px;
}
```

### 2. 加载动画

```css
/* 旋转加载 */
.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin var(--duration-slowest) linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 脉冲加载 */
.loading-pulse {
  display: inline-block;
  width: 40px;
  height: 12px;
  background: linear-gradient(90deg, var(--background-subtle-color), var(--primary-color), var(--background-subtle-color));
  background-size: 200% 100%;
  animation: loading-pulse var(--duration-slower) ease-in-out infinite;
}

@keyframes loading-pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 3. 切换动画

```css
/* 开关切换 */
.toggle-switch {
  transition: background-color var(--duration-fast) var(--ease-out);
}

.toggle-switch::after {
  transition: transform var(--duration-fast) var(--spring-soft);
}

.toggle-switch.active::after {
  transform: translateX(20px);
}

/* 折叠动画 */
.collapsible {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-normal) var(--ease-out);
}

.collapsible.expanded {
  max-height: 500px; /* 足够大的值 */
}
```

## 高级动画

### 1. 网格动画

```css
/* 网格渐入 */
.grid-stagger {
  display: grid;
  gap: var(--spacing-md);
}

.grid-item {
  opacity: 0;
  transform: translateY(20px);
  animation: grid-item-enter var(--duration-normal) var(--ease-out) forwards;
}

.grid-item:nth-child(1) { animation-delay: 0ms; }
.grid-item:nth-child(2) { animation-delay: 50ms; }
.grid-item:nth-child(3) { animation-delay: 100ms; }
.grid-item:nth-child(4) { animation-delay: 150ms; }
.grid-item:nth-child(5) { animation-delay: 200ms; }

@keyframes grid-item-enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 2. 列表动画

```css
/* 列表项渐入 */
.list-enter {
  opacity: 0;
  transform: translateX(-20px);
  animation: list-enter var(--duration-normal) var(--ease-out) forwards;
}

@keyframes list-enter {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 列表项移除 */
.list-exit {
  opacity: 1;
  transform: translateX(0);
  animation: list-exit var(--duration-normal) var(--ease-in) forwards;
}

@keyframes list-exit {
  to {
    opacity: 0;
    transform: translateX(20px);
  }
}
```

### 3. 视差滚动

```css
/* 视差背景 */
.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(0);
  will-change: transform;
}

.parallax-bg.slow {
  transform: translateY(calc(var(--scroll-y) * 0.5));
}

.parallax-bg.medium {
  transform: translateY(calc(var(--scroll-y) * 0.3));
}

.parallax-bg.fast {
  transform: translateY(calc(var(--scroll-y) * 0.1));
}
```

## 特殊动画效果

### 1. 网格渐变动画

```css
/* 网格渐变旋转 */
.mesh-gradient {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  background-size: 200% 200%;
  animation: mesh-gradient-rotation 5s linear infinite;
}

@keyframes mesh-gradient-rotation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 2. 文字动画

```css
/* 打字机效果 */
.typewriter {
  overflow: hidden;
  border-right: 2px solid var(--primary-color);
  white-space: nowrap;
  animation: typing var(--duration-slower) steps(30, end),
            blink-caret var(--duration-normal) step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--primary-color); }
}
```

### 3. 弹跳动画

```css
/* 弹跳延迟 */
.bounce-delay-0 {
  animation: bounce-custom 1s ease-out infinite;
}

.bounce-delay-1 {
  animation: bounce-custom 1s ease-out infinite 0.1s;
}

.bounce-delay-2 {
  animation: bounce-custom 1s ease-out infinite 0.2s;
}

@keyframes bounce-custom {
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

## 交互反馈动画

### 1. 悬停效果

```css
/* 悬停提升 */
.hover-lift {
  transition: transform var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* 悬停发光 */
.hover-glow {
  transition: box-shadow var(--duration-fast) var(--ease-out);
}

.hover-glow:hover {
  box-shadow: 0 0 20px var(--primary-color);
}
```

### 2. 焦点效果

```css
/* 焦点环 */
.focus-ring {
  transition: outline var(--duration-fast) var(--ease-out);
}

.focus-ring:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* 焦点提升 */
.focus-lift:focus {
  transform: scale(1.02);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
}
```

### 3. 错误反馈

```css
/* 错误摇晃 */
.error-shake {
  animation: shake var(--duration-normal) ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

/* 成功确认 */
.success-confirm {
  animation: success-pulse var(--duration-normal) var(--ease-out);
}

@keyframes success-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

## 可访问性和用户偏好

### 1. 动画减少

```css
/* 尊重用户的动画偏好 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .animated-element {
    animation: none !important;
    transition: none !important;
  }
}
```

### 2. 自动播放控制

```css
/* 自动播放暂停 */
@media (prefers-reduced-motion: reduce) {
  .auto-play {
    animation-play-state: paused;
  }
}

/* 用户交互控制 */
.interactive-animation {
  animation-play-state: paused;
}

.interactive-animation:hover,
.interactive-animation:focus {
  animation-play-state: running;
}
```

### 3. 性能优化

```css
/* 硬件加速 */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* 避免布局抖动 */
.layout-stable {
  contain: layout style paint;
}
```

## 动画工具类

### 持续时间类

```css
.duration-fast { animation-duration: var(--duration-fast); }
.duration-normal { animation-duration: var(--duration-normal); }
.duration-slow { animation-duration: var(--duration-slow); }
.duration-slower { animation-duration: var(--duration-slower); }
```

### 缓动函数类

```css
.ease-linear { animation-timing-function: var(--ease-linear); }
.ease-out { animation-timing-function: var(--ease-out); }
.ease-in { animation-timing-function: var(--ease-in); }
.ease-in-out { animation-timing-function: var(--ease-in-out); }
```

### 动画状态类

```css
.animate-paused { animation-play-state: paused; }
.animate-running { animation-play-state: running; }
.animate-infinite { animation-iteration-count: infinite; }
```

## 最佳实践

### 1. DO's ✅

- 使用有意义的动画
- 保持动画简洁
- 尊重用户偏好
- 测试性能影响
- 提供视觉反馈

### 2. DON'Ts ❌

- 避免过度动画
- 不要忽视可访问性
- 避免闪烁和快速移动
- 不要使用长时间动画
- 避免影响性能的复杂动画

## 性能指南

### 1. 优化动画性能

```css
/* 优先使用 transform 和 opacity */
.performant-animation {
  transform: translateX(100px);
  opacity: 0.5;
  will-change: transform, opacity;
}

/* 避免触发布局重排 */
.avoid-reflow {
  /* 避免动画这些属性 */
  /* width, height, padding, margin, top, left */
}
```

### 2. 测试性能

- 使用 Chrome DevTools Performance 面板
- 监控 FPS 和 CPU 使用率
- 测试低端设备的性能
- 验证动画的流畅性

## 测试清单

### 功能测试
- [ ] 所有动画在不同浏览器中工作
- [ ] 动画持续时间和缓动正确
- [ ] 动画可以正常暂停和恢复
- [ ] 交互反馈动画工作正常

### 可访问性测试
- [ ] 动画减少模式有效
- [ ] 不会引起眩晕
- [ ] 焦点指示器清晰
- [ ] 屏幕阅读器兼容

### 性能测试
- [ ] 动画流畅度达到60fps
- [ ] 没有明显的延迟
- [ ] 内存使用合理
- [ ] 低端设备表现良好

---

*最后更新: 2025年11月14日*