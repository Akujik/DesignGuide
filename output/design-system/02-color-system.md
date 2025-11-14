# 颜色系统 (Color System)

> Meshy AI 的完整色彩体系和应用指南

## 概述

Meshy AI的颜色系统基于现代色彩理论，使用OKLCH色彩空间确保更好的感知均匀性和可访问性。系统支持浅色和深色主题，并遵循WCAG 2.1 AA级无障碍标准。

## 基础颜色色板

### 主色调 - Meshy 绿色

```css
--hydra-150: oklch(94.94% .033 208.37);  /* 极浅绿 */
--hydra-350: oklch(71.92% .112 205.51);  /* 中绿 */
--hydra-450: oklch(55.27% .086 208.61);  /* 主绿色 */
--hydra-550: oklch(39.71% .062 207.67);  /* 深绿色 */
```

### 辅助色调

#### 蓝色系 - 科技感
```css
--pale-blue-100: oklch(36.61% .003 228.87);
--pale-blue-200: oklch(30.39% .04 213.68);
```

#### 青色系 - 现代
```css
--pale-cyan-50: oklch(49.33% .019 171.99);
--pale-cyan-200: oklch(30.32% .003 197.01);
--pale-cyan-300: oklch(24.57% .003 196.96);
--pale-cyan-400: oklch(21.67% .002 197.04);
```

#### 暖色调 - 活力
```css
--terra-150: oklch(91.23% .05 48.15);     /* 暖黄 */
--terra-350: oklch(70.73% .133 38.31);    /* 橙色 */
--terra-450: oklch(52.75% .13 37.37);     /* 橙红 */
```

#### 紫色系 - 创新
```css
--astra-450: oklch(77.92% .012 71.87);    /* 浅紫 */
--astra-750: oklch(27.99% .014 76.29);    /* 深紫 */
--astra-800: oklch(20.19% .011 80.54);    /* 极深紫 */
```

### 中性色系

#### 淡黄色系 - 浅色主题背景
```css
--pale-yellow-50: oklch(99.62% .004 106.47);  /* 最浅背景 */
--pale-yellow-100: oklch(99.02% .004 106.47); /* 主背景 */
--pale-yellow-200: oklch(96.28% .007 106.52); /* 次级背景 */
--pale-yellow-300: oklch(92.96% .007 106.53); /* 边框色 */
--pale-yellow-600: oklch(88.28% .012 106.65); /* 深边框 */
--pale-yellow-800: oklch(68.98% .027 109.55); /* 文本色 */
```

## 语义颜色

### 状态颜色

#### 成功 (Success)
```css
--light-positive-color: var(--hydra-450);    /* 浅色主题 */
--dark-positive-color: var(--hydra-350);     /* 深色主题 */
```

#### 警告 (Warning/Attention)
```css
--light-attention-color: var(--costa-400);   /* 浅色主题 */
--dark-attention-color: var(--costa-350);    /* 深色主题 */
```

#### 错误 (Error/Negative)
```css
--light-negative-color: var(--rosa-450);     /* 浅色主题 */
--dark-negative-color: var(--rosa-350);      /* 深色主题 */
```

#### 信息 (Info)
```css
--color-semantic-info-base: oklch(40.8% .17 237.323);
--color-semantic-info-highlight: oklch(60.99% .15 237.323);
```

### 反馈颜色

#### 注意 (Caution)
```css
--light-caution-color: var(--red-200);
--dark-caution-color: var(--red-100);
```

## 主题系统

### 浅色主题 (Light Theme)

```css
/* 背景色系 */
--light-background-base-color: var(--pale-yellow-100);
--light-background-subtle-color: var(--pale-yellow-800) / 0.16;
--light-background-raised-color: var(--pale-yellow-50);
--light-background-elevated-color: 100% 0 0;

/* 前景色系 */
--light-foreground-color: var(--pale-blue-200);
--light-foreground-quiet-color: var(--light-foreground-color) / 0.75;
--light-foreground-subtle-color: var(--light-foreground-color) / 0.24;

/* 边框和装饰 */
--light-border-color: var(--pale-yellow-600);
--light-backdrop-color: 0.85 0 0;
```

### 深色主题 (Dark Theme)

```css
/* 背景色系 */
--dark-background-base-color: var(--pale-cyan-400);
--dark-background-subtle-color: var(--pale-cyan-50) / 0.2;
--dark-background-raised-color: var(--dark-background-subtler-color);
--dark-background-elevated-color: var(--dark-background-base-color);

/* 前景色系 */
--dark-foreground-color: var(--pale-yellow-300);
--dark-foreground-quiet-color: var(--dark-foreground-color) / 0.55;
--dark-foreground-subtle-color: var(--dark-foreground-color) / 0.15;

/* 边框和装饰 */
--dark-border-color: var(--pale-blue-100);
--dark-backdrop-color: 0.15 0 0;
```

### 主题切换

系统通过 `[data-theme]` 属性自动切换：

```html
<!-- 浅色主题 -->
<html data-theme="light">

<!-- 深色主题 -->
<html data-theme="dark">

<!-- 自动跟随系统 -->
<html data-theme="auto">
```

## 颜色使用指南

### 1. 层级原则

```css
/* ✅ 正确：使用语义颜色 */
.button-primary {
  background-color: var(--primary-color);
  color: var(--primary-foreground-color);
}

/* ❌ 错误：硬编码颜色 */
.button-primary {
  background-color: #c5f955;
  color: #000000;
}
```

### 2. 对比度要求

所有文本必须满足WCAG 2.1 AA级对比度要求：
- 正常文本：至少 4.5:1
- 大文本：至少 3:1
- 非文本元素：至少 3:1

### 3. 透明度使用

```css
/* 推荐的透明度级别 */
--opacity-subtlest: 0.05;   /* 极微妙的装饰 */
--opacity-subtler: 0.1;     /* 微妙的装饰 */
--opacity-subtle: 0.16;     /* 轻微的背景 */
--opacity-quiet: 0.24;      /* 安静的文本 */
--opacity-quieter: 0.36;    /* 较安静的文本 */
--opacity-quietest: 0.48;   /* 最安静的文本 */
```

### 4. 渐变色使用

```css
/* 品牌渐变 */
--gradient-primary: linear-gradient(90deg, #b6ff19, #ff6faa);
--gradient-secondary: linear-gradient(90deg, #f9e855, #e99430);

/* 等级渐变 */
--gradient-free: linear-gradient(270deg, #edffc5 -1.16%, #c5f955 98.84%);
--gradient-pro: linear-gradient(270deg, #76adff, #3a5aff);
--gradient-max: linear-gradient(270deg, #96b3ff -1.16%, #b155f9 98.84%);
```

## 组件颜色映射

### 按钮组件

```css
/* 主要按钮 */
--button-primary-bg: var(--primary-color);
--button-primary-text: var(--background-inverse-color);
--button-primary-hover: var(--primary-color-hover);

/* 次要按钮 */
--button-secondary-bg: var(--background-subtle-color);
--button-secondary-text: var(--foreground-color);
--button-secondary-border: var(--border-color);
```

### 输入框组件

```css
--input-bg: var(--background-base-color);
--input-border: var(--border-color);
--input-text: var(--foreground-color);
--input-placeholder: var(--foreground-quiet-color);
--input-focus-border: var(--primary-color);
```

### 卡片组件

```css
--card-bg: var(--background-raised-color);
--card-border: var(--border-color);
--card-shadow: var(--shadow-md);
```

## 可访问性检查

### 1. 颜色对比度工具
- 使用 WebAIM Contrast Checker
- Chrome DevTools Lighthouse 审计
- Stark Figma/Sketch 插件

### 2. 色盲友好设计
- 不仅依赖颜色传达信息
- 使用图标、文本、图案辅助
- 测试各种色盲类型

### 3. 动画尊重
- 提供 `prefers-reduced-motion` 支持
- 重要状态变化不依赖动画

## 颜色测试

### 1. 主题一致性测试
```javascript
// 自动化测试示例
const lightColors = getComputedStyle(document.documentElement);
const darkColors = getComputedStyle(document.documentElement.setAttribute('data-theme', 'dark'));

// 验证对比度
function testContrast(bgColor, textColor) {
  const ratio = contrast.calculate(bgColor, textColor);
  console.assert(ratio >= 4.5, `对比度不足: ${ratio}`);
}
```

### 2. 主题切换测试
- 测试所有组件在两种主题下的表现
- 验证用户偏好设置 (`prefers-color-scheme`)
- 测试主题切换的平滑过渡

## 最佳实践

### 1. DO's ✅
- 使用语义颜色而非直接颜色值
- 确保足够的对比度
- 测试深色和浅色主题
- 考虑色盲用户
- 提供高对比度选项

### 2. DON'Ts ❌
- 硬编码颜色值
- 仅使用颜色传达信息
- 忽略对比度要求
- 在暗色主题上使用亮色边框
- 过度使用饱和色

---

*最后更新: 2025年11月14日*