# Meshy AI 设计系统 - 字体系统规范

## 概述

Meshy AI 采用 Inter 字体家族，建立了一套清晰、易读的层级化字体系统，确保在各种设备上都有良好的阅读体验。

## 字体家族

### 主要字体
```css
--font-family-base: Inter, system-ui, sans-serif;
```

### 等宽字体
```css
--font-family-mono: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
```

## 字体大小系统

### 标题级别

| 变量名 | 大小 | 行高 | 用途 | 示例 |
|--------|------|------|------|------|
| `--text-6xl` | `3rem` (48px) | `3rem` (48px) | 主标题 | <h1 style="font-size: 3rem; line-height: 3rem;">主标题</h1> |
| `--text-5xl` | `2.5rem` (40px) | `3rem` (48px) | 大标题 | <h2 style="font-size: 2.5rem; line-height: 3rem;">大标题</h2> |
| `--text-4xl` | `2rem` (32px) | `2.5rem` (40px) | 中标题 | <h3 style="font-size: 2rem; line-height: 2.5rem;">中标题</h3> |
| `--text-3xl` | `1.75rem` (28px) | `2.25rem` (36px) | 小标题 | <h4 style="font-size: 1.75rem; line-height: 2.25rem;">小标题</h4> |
| `--text-2xl` | `1.5rem` (24px) | `2rem` (32px) | 副标题 | <h5 style="font-size: 1.5rem; line-height: 2rem;">副标题</h5> |

### 正文级别

| 变量名 | 大小 | 行高 | 用途 | 示例 |
|--------|------|------|------|------|
| `--text-xl` | `1.25rem` (20px) | `1.75rem` (28px) | 大正文 | <p style="font-size: 1.25rem; line-height: 1.75rem;">大正文文本</p> |
| `--text-lg` | `1.125rem` (18px) | `1.75rem` (28px) | 中正文 | <p style="font-size: 1.125rem; line-height: 1.75rem;">中正文文本</p> |
| `--text-base` | `1rem` (16px) | `1.5rem` (24px) | 标准正文 | <p style="font-size: 1rem; line-height: 1.5rem;">标准正文文本</p> |
| `--text-sm` | `0.875rem` (14px) | `1.25rem` (20px) | 小正文 | <p style="font-size: 0.875rem; line-height: 1.25rem;">小正文文本</p> |
| `--text-xs` | `0.75rem` (12px) | `1rem` (16px) | 标签/注解 | <span style="font-size: 0.75rem; line-height: 1rem;">标签文本</span> |

## 字重系统

| 变量名 | 数值 | 用途 |
|--------|------|------|
| `--font-weight-light` | `300` | 轻体（用于装饰性文本） |
| `--font-weight-normal` | `400` | 正常（正文内容） |
| `--font-weight-medium` | `500` | 中等（强调文本） |
| `--font-weight-semibold` | `600` | 半粗体（小标题） |
| `--font-weight-bold` | `700` | 粗体（标题） |

## 行高系统

| 变量名 | 数值 | 用途 |
|--------|------|------|
| `--leading-none` | `1` | 无额外行高（紧凑布局） |
| `--leading-tight` | `1.25` | 紧凑行高（标题） |
| `--leading-normal` | `1.5` | 正常行高（正文） |
| `--leading-relaxed` | `1.75` | 宽松行高（长文阅读） |
| `--leading-loose` | `2` | 很宽松行高（特殊场景） |

## 字母间距

| 变量名 | 数值 | 用途 |
|--------|------|------|
| `--tracking-tighter` | `-0.05em` | 更紧凑（特殊效果） |
| `--tracking-tight` | `-0.025em` | 紧凑（标题） |
| `--tracking-normal` | `0` | 正常（正文） |
| `--tracking-wide` | `0.025em` | 宽松（UI元素） |
| `--tracking-wider` | `0.05em` | 更宽松（特殊场景） |
| `--tracking-widest` | `0.1em` | 最宽松（装饰） |

## 使用指南

### 层级应用

1. **H1 - 页面主标题**
   ```css
   h1 {
     font-size: var(--text-6xl);
     line-height: var(--leading-none);
     font-weight: var(--font-weight-bold);
     letter-spacing: var(--tracking-tight);
   }
   ```

2. **H2 - 章节标题**
   ```css
   h2 {
     font-size: var(--text-5xl);
     line-height: var(--leading-tight);
     font-weight: var(--font-weight-bold);
     letter-spacing: var(--tracking-tight);
   }
   ```

3. **H3 - 小节标题**
   ```css
   h3 {
     font-size: var(--text-4xl);
     line-height: var(--leading-tight);
     font-weight: var(--font-weight-semibold);
   }
   ```

4. **Body - 正文内容**
   ```css
   p {
     font-size: var(--text-base);
     line-height: var(--leading-normal);
     font-weight: var(--font-weight-normal);
   }
   ```

5. **Small - 小文本**
   ```css
   small {
     font-size: var(--text-sm);
     line-height: var(--leading-normal);
     font-weight: var(--font-weight-normal);
   }
   ```

### 响应式字体

```css
.responsive-text {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

/* 中等屏幕 */
@media (min-width: 768px) {
  .responsive-text {
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
  }
}

/* 大屏幕 */
@media (min-width: 1024px) {
  .responsive-text {
    font-size: var(--text-xl);
    line-height: var(--leading-relaxed);
  }
}
```

### 代码字体

```css
code {
  font-family: var(--font-family-mono);
  font-size: 0.875em; /* 相对父元素缩小 */
  line-height: var(--leading-normal);
}

pre {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}
```

## CSS 实现示例

```css
:root {
  /* 字体家族 */
  --font-family-base: Inter, system-ui, sans-serif;
  --font-family-mono: ui-monospace, SFMono-Regular, monospace;

  /* 字体大小 */
  --text-6xl: 3rem;
  --text-5xl: 2.5rem;
  --text-4xl: 2rem;
  --text-3xl: 1.75rem;
  --text-2xl: 1.5rem;
  --text-xl: 1.25rem;
  --text-lg: 1.125rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;

  /* 字重 */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* 行高 */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;

  /* 字母间距 */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}

/* 基础文字重置 */
body {
  font-family: var(--font-family-base);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  font-weight: var(--font-weight-normal);
  color: var(--color-label-base);
}
```

## 性能优化

### 字体加载策略

```css
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/fonts/inter-variable.woff2') format('woff2-variations'),
       url('/fonts/inter-variable.woff2') format('woff2');
}
```

### 字体回退

```css
.system-font {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
               "Helvetica Neue", Arial, "Noto Sans", sans-serif,
               "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
               "Noto Color Emoji";
}
```

---

*此字体系统基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*