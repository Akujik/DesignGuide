# 动效系统规范 (Animation System Specification)

## 概述

Meshy.ai 的动效系统遵循简洁、流畅、有意义的原则，提供了丰富的动画效果和过渡系统。动画主要用于增强用户体验、提供视觉反馈和引导用户注意力。

## 动画时长系统 (Animation Duration)

### 基础时长定义
```css
/* 动画时长变量 */
--duration-instant: 0ms;
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
--duration-slowest: 1000ms;
```

### 时长应用指南
```css
/* 快速交互 - 按钮点击、悬停 */
.quick-transition {
  transition: all var(--duration-fast) ease;
}

/* 标准交互 - 表单验证、工具提示 */
.normal-transition {
  transition: all var(--duration-normal) ease;
}

/* 慢速交互 - 模态框、页面切换 */
.slow-transition {
  transition: all var(--duration-slow) ease;
}

/* 背景动画 - 渐变、浮动 */
.background-animation {
  animation-duration: var(--duration-slowest);
}
```

## 缓动函数系统 (Easing Functions)

### 标准缓动函数
```css
/* 缓动函数变量 */
--ease-linear: linear;
--ease-in: ease-in;
--ease-out: ease-out;
--ease-in-out: ease-in-out;

/* 自定义缓动函数 */
--ease-meshy: cubic-bezier(0.16, 1, 0.3, 1); /* Meshy 品牌缓动 */
--ease-entrance: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-exit: cubic-bezier(0.55, 0.06, 0.68, 0.19);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

### 缓动函数应用
```css
/* 入场动画 */
.entrance-animation {
  animation: slideIn var(--duration-normal) var(--ease-entrance);
}

/* 出场动画 */
.exit-animation {
  animation: slideOut var(--duration-fast) var(--ease-exit);
}

/* 弹跳效果 */
.bounce-animation {
  animation: bounce var(--duration-slow) var(--ease-bounce);
}

/* 品牌标准动画 */
.brand-animation {
  transition: all var(--duration-normal) var(--ease-meshy);
}
```

## 核心动画定义 (Core Animations)

### 位移动画
```css
/* 滑入动画 */
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 滑出动画 */
@keyframes slideOutLeft {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes slideOutUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes slideOutDown {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}
```

### 淡入淡出动画
```css
/* 淡入动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 淡出动画 */
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
```

### 缩放动画
```css
/* 缩放进入 */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scaleInBounce {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 缩放退出 */
@keyframes scaleOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
```

### 旋转动画
```css
/* 旋转进入 */
@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-180deg);
  }
  to {
    opacity: 1;
    transform: rotate(0);
  }
}

/* 无限旋转 */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 渐变旋转 */
@keyframes mesh-gradient-rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### 脉冲动画
```css
/* 标准脉冲 */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* 快速脉冲 */
@keyframes pulse-quicker {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

/* 缩放脉冲 */
@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

### 弹跳动画
```css
/* 垂直弹跳 */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

/* 水平弹跳 */
@keyframes bounce-horizontal {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(-30px, 0, 0);
  }
  70% {
    transform: translate3d(-15px, 0, 0);
  }
  90% {
    transform: translate3d(-4px, 0, 0);
  }
}
```

## 特殊效果动画 (Special Effects)

### 摇摆动画
```css
/* 左右摇摆 */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

/* 上下摇摆 */
@keyframes shake-vertical {
  0%, 100% { transform: translateY(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateY(-5px); }
  20%, 40%, 60%, 80% { transform: translateY(5px); }
}
```

### 抖动动画
```css
/* 错误抖动 */
@keyframes wobble {
  0% { transform: translateX(0%); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0%); }
}
```

### 浮动动画
```css
/* 轻微浮动 */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* 摇摆浮动 */
@keyframes float-sway {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-10px) translateX(-5px);
  }
  66% {
    transform: translateY(-5px) translateX(5px);
  }
}
```

## 动画组合与变量

### 动画变量定义
```css
/* 预定义动画组合 */
--animate-slide-down-and-fade: slide-down-and-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
--animate-slide-up-and-fade: slide-up-and-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
--animate-pulse-quicker: pulse-quicker 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
--animate-mesh-gradient-rotation: mesh-gradient-rotation 5s linear infinite;
```

### 组合动画
```css
/* 滑入淡出组合 */
@keyframes slideInFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 缩放淡出组合 */
@keyframes scaleOutFade {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}

/* 旋转滑入组合 */
@keyframes rotateSlideIn {
  from {
    opacity: 0;
    transform: rotate(-180deg) translateX(-100%);
  }
  to {
    opacity: 1;
    transform: rotate(0) translateX(0);
  }
}
```

## 组件动画应用 (Component Animations)

### 按钮动画
```css
/* 按钮悬停效果 */
.button {
  transition: all var(--duration-fast) var(--ease-smooth);
  transform: translateY(0);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(197, 249, 85, 0.3);
}

.button:active {
  transform: translateY(0);
  transition-duration: var(--duration-instant);
}

/* 加载状态按钮 */
.button-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.button-loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin var(--duration-slow) linear infinite;
}
```

### 卡片动画
```css
/* 卡片进入动画 */
.card-enter {
  animation: slideInUp var(--duration-normal) var(--ease-entrance);
}

/* 卡片悬停效果 */
.card {
  transition: all var(--duration-fast) var(--ease-smooth);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

/* 卡片点击效果 */
.card:active {
  transform: translateY(-2px);
  transition-duration: var(--duration-instant);
}
```

### 模态框动画
```css
/* 模态框背景 */
.modal-overlay-enter {
  animation: fadeIn var(--duration-normal) var(--ease-smooth);
}

.modal-overlay-leave {
  animation: fadeOut var(--duration-fast) var(--ease-exit);
}

/* 模态框内容 */
.modal-content-enter {
  animation: scaleIn var(--duration-normal) var(--ease-bounce);
}

.modal-content-leave {
  animation: scaleOut var(--duration-fast) var(--ease-exit);
}
```

### 导航动画
```css
/* 导航项目悬停 */
.nav-item {
  position: relative;
  transition: color var(--duration-fast) var(--ease-smooth);
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent-base);
  transition: width var(--duration-fast) var(--ease-smooth);
}

.nav-item:hover::after {
  width: 100%;
}

/* 下拉菜单动画 */
.dropdown-menu {
  transform-origin: top;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.dropdown-menu.hidden {
  opacity: 0;
  transform: scaleY(0);
}

.dropdown-menu.visible {
  opacity: 1;
  transform: scaleY(1);
}
```

### 表单动画
```css
/* 输入框焦点动画 */
.form-input {
  transition: all var(--duration-fast) var(--ease-smooth);
  border-color: var(--color-bg-border);
}

.form-input:focus {
  border-color: var(--color-accent-base);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}

/* 错误抖动动画 */
.form-input.error {
  animation: shake var(--duration-normal) var(--ease-bounce);
}

/* 成功指示器 */
.form-input.success {
  border-color: var(--color-semantic-success-base);
  animation: pulse var(--duration-fast) var(--ease-smooth);
}
```

## 页面转换动画 (Page Transitions)

### 页面进入
```css
/* 页面淡入 */
.page-enter {
  animation: fadeIn var(--duration-slow) var(--ease-smooth);
}

/* 页面滑入 */
.page-enter-slide {
  animation: slideInRight var(--duration-normal) var(--ease-entrance);
}

/* 页面级联进入 */
.page-enter-stagger > * {
  opacity: 0;
  animation: slideInUp var(--duration-normal) var(--ease-entrance) forwards;
}

.page-enter-stagger > *:nth-child(1) { animation-delay: 0ms; }
.page-enter-stagger > *:nth-child(2) { animation-delay: 100ms; }
.page-enter-stagger > *:nth-child(3) { animation-delay: 200ms; }
.page-enter-stagger > *:nth-child(4) { animation-delay: 300ms; }
```

### 列表动画
```css
/* 列表项进入 */
.list-enter {
  animation: slideInLeft var(--duration-normal) var(--ease-entrance);
}

/* 列表重排 */
.list-move {
  transition: transform var(--duration-normal) var(--ease-smooth);
}

/* 列表项离开 */
.list-leave {
  animation: slideOutRight var(--duration-fast) var(--ease-exit);
}
```

## 性能优化

### 动画性能属性
```css
/* 优化动画性能 */
.performance-animation {
  will-change: transform, opacity;
  transform: translateZ(0); /* 启用硬件加速 */
  backface-visibility: hidden;
}

/* 动画完成后清理 */
.animation-complete {
  will-change: auto;
}
```

### 减少动画复杂度
```css
/* 简单过渡 */
.simple-transition {
  transition: transform var(--duration-fast) var(--ease-smooth),
              opacity var(--duration-fast) var(--ease-smooth);
  /* 避免同时动画多个属性 */
}
```

## 可访问性考虑

### 减少动画偏好
```css
/* 尊重用户的动画偏好 */
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

### 暗色模式动画调整
```css
/* 暗色模式下的动画调整 */
@media (prefers-color-scheme: dark) {
  .dark-mode-animation {
    animation-duration: var(--duration-slower); /* 暗色模式下稍慢 */
  }
}
```

## 动画使用指南

### 动画选择原则
1. **目的性**: 动画应该有明确的目的，提供有意义的反馈
2. **简洁性**: 避免过度复杂的动画，保持简洁优雅
3. **一致性**: 在整个系统中保持动画风格的一致性
4. **性能**: 优先使用 transform 和 opacity 进行动画

### 最佳实践
- 动画时长控制在 200-500ms 之间
- 使用品牌缓动函数保持一致性
- 为重要交互提供动画反馈
- 考虑用户的可访问性偏好
- 在移动设备上适当减少动画复杂度

### 避免的情况
- 不要使用过于花哨的动画分散用户注意力
- 避免过长的动画延迟用户操作
- 不要在表单验证上使用过强的动画效果
- 避免同时运行多个复杂动画

## 动画速查表

| 动画类型 | 持续时间 | 缓动函数 | 应用场景 |
|----------|----------|----------|----------|
| 按钮悬停 | 150ms | cubic-bezier(0.4,0,0.2,1) | 交互反馈 |
| 模态框进入 | 200ms | cubic-bezier(0.16,1,0.3,1) | 弹窗显示 |
| 页面切换 | 300ms | cubic-bezier(0.25,0.46,0.45,0.94) | 页面导航 |
| 加载动画 | 1000ms | linear | 背景动画 |
| 错误提示 | 500ms | cubic-bezier(0.68,-0.55,0.265,1.55) | 错误反馈 |
| 成功提示 | 300ms | cubic-bezier(0.16,1,0.3,1) | 成功反馈 |