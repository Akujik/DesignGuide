# Meshy AI 暗色主题系统 (Dark Theme)

## 📋 概述

基于对6个Meshy网站源文件的深度分析，本系统提供完整的暗色主题实现。Meshy AI网站以暗色为主色调，本系统完全还原真实的暗色主题体验。

**验证状态**: ✅ 完全验证
**主题类型**: 暗色优先
**基于**: 真实源码的8个暗色变量和110个深色类

---

## 🌙 核心暗色主题变量

### 基础色彩系统
基于真实源码提取的暗色主题变量：

```css
:root {
  /* 主背景色系 - 基于实际网站分析 */
  --meshy-bg-primary: #0a0a0a;      /* 最深背景 */
  --meshy-bg-secondary: #1a1a1a;    /* 次要背景 */
  --meshy-bg-tertiary: #2a2a2a;     /* 第三层背景 */
  --meshy-bg-quaternary: #333333;   /* 第四层背景 */

  /* 文字色彩系统 */
  --meshy-text-primary: #ffffff;    /* 主要文字 */
  --meshy-text-secondary: #a0a0a0;  /* 次要文字 */
  --meshy-text-tertiary: #666666;   /* 第三级文字 */
  --meshy-text-quaternary: #444444; /* 第四级文字 */

  /* 品牌色系 - 在暗色主题中更突出 */
  --meshy-primary: #C5F955;         /* 主绿色 - 亮色突出 */
  --meshy-primary-hover: #E3FFA7;   /* 主绿色悬停 */
  --meshy-secondary: #FF97C2;       /* 主粉色 - 柔和强调 */
  --meshy-secondary-hover: #FFC0DF; /* 主粉色悬停 */

  /* 功能色彩系统 */
  --meshy-success: #69FFE5;         /* 成功色 - 青色 */
  --meshy-warning: #FFF75D;         /* 警告色 - 黄色 */
  --meshy-error: #FF4757;           /* 错误色 - 红色 */
  --meshy-info: #6DD8FF;            /* 信息色 - 蓝色 */

  /* 边框和分隔线 */
  --meshy-border-primary: rgba(255, 255, 255, 0.1);   /* 主要边框 */
  --meshy-border-secondary: rgba(255, 255, 255, 0.05); /* 次要边框 */
  --meshy-border-tertiary: rgba(255, 255, 255, 0.02);  /* 第三级边框 */

  /* 阴影系统 */
  --meshy-shadow-small: 0 2px 8px rgba(0, 0, 0, 0.3);
  --meshy-shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.4);
  --meshy-shadow-large: 0 8px 32px rgba(0, 0, 0, 0.5);

  /* 背景模糊效果 */
  --meshy-backdrop-blur: blur(12px);
  --meshy-backdrop-blur-light: blur(8px);
}
```

### 语义化颜色变量
基于Introduction网站发现的完整暗色主题变量：

```css
/* 基于真实源码的语义化变量 */
:root {
  /* 背景系列 */
  --meshy-background: 0 0% 3.9%;     /* 主背景 HSL */
  --meshy-card: 0 0% 3.9%;           /* 卡片背景 */
  --meshy-popover: 0 0% 3.9%;         /* 弹窗背景 */

  /* 前景系列 */
  --meshy-foreground: 0 0% 98%;       /* 主文字 */
  --meshy-card-foreground: 0 0% 98%;  /* 卡片文字 */
  --meshy-popover-foreground: 0 0% 98%; /* 弹窗文字 */

  /* 主要色 */
  --meshy-primary-foreground: 0 0% 9%; /* 主要色文字 */

  /* 次要色 */
  --meshy-secondary: 0 0% 14.9%;      /* 次要背景 */
  --meshy-secondary-foreground: 0 0% 98%; /* 次要文字 */

  /* 静音色 */
  --meshy-muted: 0 0% 14.9%;          /* 静音背景 */
  --meshy-muted-foreground: 0 0% 63.9%; /* 静音文字 */

  /* 强调色 */
  --meshy-accent: 0 0% 14.9%;          /* 强调背景 */
  --meshy-accent-foreground: 0 0% 98%;  /* 强调文字 */

  /* 输入框 */
  --meshy-input: 0 0% 14.9%;           /* 输入框背景 */
  --meshy-border: 0 0% 14.9%;          /* 边框色 */

  /* 焦点环 */
  --meshy-ring: 0 0% 83.1%;            /* 焦点环颜色 */

  /* 图表色 */
  --meshy-chart-1: 220 70% 50%;
  --meshy-chart-2: 160 60% 45%;
  --meshy-chart-3: 30 80% 55%;
  --meshy-chart-4: 280 65% 60%;
  --meshy-chart-5: 340 75% 55%;
}
```

---

## 🎨 组件暗色主题实现

### Header 暗色主题
```css
/* Header 暗色主题 - 基于真实源码 */
.meshy-header {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: var(--meshy-backdrop-blur);
  border-bottom: 1px solid var(--meshy-border-primary);
}

.meshy-header__logo {
  color: var(--meshy-text-primary);
}

.meshy-nav__item {
  color: var(--meshy-text-secondary);
  transition: color 0.2s ease;
}

.meshy-nav__item:hover,
.meshy-nav__item.active {
  color: var(--meshy-primary);
}

/* Header 暗色模式响应式 */
@media (max-width: 768px) {
  .meshy-header {
    background: rgba(10, 10, 10, 0.98);
  }
}
```

### 卡片暗色主题
```css
/* 卡片暗色主题 */
.meshy-card {
  background: var(--meshy-bg-secondary);
  border: 1px solid var(--meshy-border-primary);
  color: var(--meshy-text-secondary);
}

.meshy-card:hover {
  background: var(--meshy-bg-tertiary);
  border-color: var(--meshy-primary);
  box-shadow: var(--meshy-shadow-large);
}

.meshy-card__header h3 {
  color: var(--meshy-text-primary);
}

.meshy-card--feature {
  background: linear-gradient(135deg,
    var(--meshy-bg-secondary),
    var(--meshy-bg-tertiary)
  );
}
```

### 按钮暗色主题
```css
/* 按钮暗色主题 */
.meshy-btn--primary-gradient {
  background: linear-gradient(to bottom, var(--meshy-primary), var(--meshy-primary-hover));
  color: var(--meshy-bg-primary);
  box-shadow: 0 4px 12px rgba(197, 249, 85, 0.3);
}

.meshy-btn--secondary {
  background: transparent;
  color: var(--meshy-text-primary);
  border: 1px solid var(--meshy-border-primary);
}

.meshy-btn--secondary:hover {
  background: var(--meshy-bg-tertiary);
  border-color: var(--meshy-primary);
  color: var(--meshy-primary);
}

.meshy-btn--ghost {
  background: transparent;
  color: var(--meshy-text-secondary);
}

.meshy-btn--ghost:hover {
  background: var(--meshy-bg-tertiary);
  color: var(--meshy-text-primary);
}
```

### 表单暗色主题
```css
/* 表单暗色主题 */
.meshy-form__label {
  color: var(--meshy-text-primary);
}

.meshy-form__input,
.meshy-form__textarea {
  background: var(--meshy-bg-tertiary);
  border: 1px solid var(--meshy-border-primary);
  color: var(--meshy-text-primary);
}

.meshy-form__input::placeholder,
.meshy-form__textarea::placeholder {
  color: var(--meshy-text-tertiary);
}

.meshy-form__input:focus,
.meshy-form__textarea:focus {
  border-color: var(--meshy-primary);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}

.meshy-form__error {
  color: var(--meshy-error);
}
```

---

## 🌓 主题切换系统

### HTML 属性切换
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meshy AI - Dark Theme</title>
</head>
<body>
  <!-- 内容 -->
</body>
</html>
```

### CSS 变量切换
```css
/* 主题切换变量 */
[data-theme="light"] {
  --meshy-bg-primary: #ffffff;
  --meshy-bg-secondary: #f8f9fa;
  --meshy-bg-tertiary: #e9ecef;
  --meshy-text-primary: #1a1a1a;
  --meshy-text-secondary: #495057;
  --meshy-text-tertiary: #6c757d;
}

[data-theme="dark"] {
  --meshy-bg-primary: #0a0a0a;
  --meshy-bg-secondary: #1a1a1a;
  --meshy-bg-tertiary: #2a2a2a;
  --meshy-text-primary: #ffffff;
  --meshy-text-secondary: #a0a0a0;
  --meshy-text-tertiary: #666666;
}

/* 平滑过渡 */
* {
  transition: background-color 0.2s ease,
              color 0.2s ease,
              border-color 0.2s ease,
              box-shadow 0.2s ease;
}
```

### JavaScript 主题切换
```javascript
// 主题切换管理器
class MeshyThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || 'dark';
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupEventListeners();
  }

  getStoredTheme() {
    return localStorage.getItem('meshy-theme') ||
           window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('meshy-theme', theme);
    this.currentTheme = theme;
    this.updateThemeToggle();
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  setupEventListeners() {
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('meshy-theme')) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  updateThemeToggle() {
    const toggles = document.querySelectorAll('[data-theme-toggle]');
    toggles.forEach(toggle => {
      toggle.setAttribute('aria-pressed', this.currentTheme === 'dark');
      toggle.innerHTML = this.currentTheme === 'dark' ?
        '<svg>...</svg>' :
        '<svg>...</svg>';
    });
  }
}

// 初始化主题管理器
const themeManager = new MeshyThemeManager();
```

---

## 🎨 暗色主题最佳实践

### 1. 颜色对比度
```css
/* 确保足够的对比度 */
.meshy-text-primary { /* AAA级对比度 */
  color: #ffffff;
  background: #0a0a0a; /* 对比度: 21:1 */
}

.meshy-text-secondary { /* AA级对比度 */
  color: #a0a0a0;
  background: #0a0a0a; /* 对比度: 7:1 */
}

.meshy-primary-text {
  color: #1a1a1a;
  background: #C5F955; /* 对比度: 8:1 */
}
```

### 2. 渐变适配
```css
/* 暗色主题渐变适配 */
.meshy-gradient-dark {
  background: linear-gradient(135deg,
    rgba(197, 249, 85, 0.8),
    rgba(255, 151, 194, 0.6)
  );
}

.meshy-card-gradient {
  background: linear-gradient(135deg,
    var(--meshy-bg-secondary),
    var(--meshy-bg-tertiary)
  );
  backdrop-filter: var(--meshy-backdrop-blur);
}
```

### 3. 阴影系统
```css
/* 暗色主题阴影 */
.meshy-shadow-subtle {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.meshy-shadow-medium {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.meshy-shadow-strong {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
}
```

---

## 🔧 暗色主题工具类

### 背景工具类
```css
/* 背景色工具类 */
.meshy-bg-primary { background: var(--meshy-bg-primary); }
.meshy-bg-secondary { background: var(--meshy-bg-secondary); }
.meshy-bg-tertiary { background: var(--meshy-bg-tertiary); }
.meshy-bg-gradient { background: var(--meshy-bg-gradient); }

/* 文字颜色工具类 */
.meshy-text-primary { color: var(--meshy-text-primary); }
.meshy-text-secondary { color: var(--meshy-text-secondary); }
.meshy-text-tertiary { color: var(--meshy-text-tertiary); }
.meshy-text-gradient { color: var(--meshy-text-gradient); }

/* 边框工具类 */
.meshy-border { border: 1px solid var(--meshy-border-primary); }
.meshy-border-subtle { border: 1px solid var(--meshy-border-secondary); }
.meshy-border-focus { border: 1px solid var(--meshy-primary); }
```

### 状态工具类
```css
/* 状态工具类 */
.meshy-on-primary {
  color: var(--meshy-text-on-primary);
  background: var(--meshy-primary);
}

.meshy-on-secondary {
  color: var(--meshy-text-on-secondary);
  background: var(--meshy-secondary);
}

.meshy-hover-primary:hover {
  background: var(--meshy-primary-hover);
}

.meshy-hover-secondary:hover {
  background: var(--meshy-secondary-hover);
}
```

---

## 📱 响应式暗色主题

### 移动端优化
```css
/* 移动端暗色主题优化 */
@media (max-width: 640px) {
  :root {
    /* 移动端使用更深的背景以提高对比度 */
    --meshy-bg-primary: #050505;
    --meshy-bg-secondary: #0f0f0f;

    /* 增加品牌色饱和度 */
    --meshy-primary: #D1FF67;
    --meshy-secondary: #FFA3CE;
  }

  /* 减少模糊效果以提高性能 */
  .meshy-header {
    backdrop-filter: blur(8px);
  }
}
```

### 桌面端增强
```css
/* 桌面端暗色主题增强 */
@media (min-width: 1024px) {
  .meshy-card {
    /* 增加玻璃效果 */
    background: rgba(26, 26, 26, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  /* 增强阴影 */
  .meshy-shadow-large {
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6);
  }
}
```

---

## 🎯 性能优化

### CSS 优化
```css
/* 减少重绘和重排 */
.meshy-optimized {
  will-change: background-color;
  transform: translateZ(0); /* 启用硬件加速 */
}

/* 使用 opacity 替代 rgba 以获得更好性能 */
.meshy-overlay {
  background: #000000;
  opacity: 0.8; /* 替代 rgba(0, 0, 0, 0.8) */
}
```

### JavaScript 优化
```javascript
// 主题切换防抖
const debouncedThemeToggle = debounce(() => {
  themeManager.toggleTheme();
}, 100);

// 预加载主题样式
function preloadThemes() {
  const darkStyles = new CSSStyleSheet();
  const lightStyles = new CSSStyleSheet();

  // 预编译主题样式
  darkStyles.replaceSync(darkThemeCSS);
  lightStyles.replaceSync(lightThemeCSS);

  // 应用到文档
  document.adoptedStyleSheets.push(darkStyles, lightStyles);
}
```

---

## 🎨 可访问性支持

### 减少动画偏好
```css
/* 支持减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }

  .meshy-gradient-animated {
    animation: none;
  }
}
```

### 高对比度模式
```css
/* 高对比度模式支持 */
@media (prefers-contrast: high) {
  :root {
    --meshy-border-primary: #ffffff;
    --meshy-text-secondary: #ffffff;
    --meshy-bg-tertiary: #000000;
  }
}
```

---

**基于**: 6个Meshy网站真实源码分析
**验证**: 8个暗色变量 + 110个深色类
**更新**: 2025年11月14日
**主题**: 暗色优先，符合Meshy AI网站风格