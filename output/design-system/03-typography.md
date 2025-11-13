# 字体系统规范 (Typography System Specification)

## 概述

Meshy.ai 的字体系统采用现代化的无衬线字体栈，以 Inter 字体为主要字体，建立了清晰的层次结构和良好的阅读体验。系统支持多语言显示和响应式排版。

## 字体族系统 (Font Families)

### 主要字体
```css
--font-sans: ui-sans-serif, system-ui, sans-serif;
--font-inter: "Inter", sans-serif;
--font-inter-tight: "Inter Tight", sans-serif;
--font-figtree: "Figtree", sans-serif;
```

**应用场景**:
- `--font-sans`: 系统默认字体栈，UI 组件
- `--font-inter`: 主要内容字体，正文
- `--font-inter-tight`: 紧凑排版，空间受限场景
- `--font-figtree`: 特殊标题和品牌元素

### 等宽字体
```css
--font-mono: ui-monospace, SFMono-Regular, monospace;
```

**应用场景**:
- 代码显示
- 数据表格
- 技术文档

## 字号系统 (Font Sizes)

### 基础字号 (rem-based)
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.75rem;   /* 28px */
--text-4xl: 2rem;      /* 32px */
```

### 大字号 (Display Sizes)
```css
--text-5xl: 2.25rem;   /* 36px - 小标题 */
--text-6xl: 3rem;      /* 48px - 中标题 */
--text-7xl: 3.75rem;   /* 60px - 大标题 */
--text-8xl: 4.5rem;    /* 72px - 超大标题 */
--text-9xl: 6rem;      /* 96px - 展示标题 */
```

## 字重系统 (Font Weights)

```css
--font-weight-light: 300;     /* 轻体 */
--font-weight-normal: 400;    /* 常规 */
--font-weight-medium: 500;    /* 中等 */
--font-weight-semibold: 600;  /* 半粗 */
--font-weight-bold: 700;      /* 粗体 */
```

**应用指南**:
- **300 (Light)**: 大标题、装饰文本
- **400 (Normal)**: 正文内容、表单标签
- **500 (Medium)**: 次要标题、强调文本
- **600 (Semibold)**: 主要标题、导航元素
- **700 (Bold)**: 重要强调、品牌元素

## 行高系统 (Line Heights)

### 固定行高
```css
--text-xs--line-height: 1rem;      /* 16px */
--text-sm--line-height: 1.25rem;   /* 20px */
--text-base--line-height: 1.5rem;  /* 24px */
--text-lg--line-height: 1.75rem;   /* 28px */
--text-xl--line-height: 1.75rem;   /* 28px */
```

### 相对行高
```css
--leading-tight: 1.25;    /* 紧凑行高 */
--leading-normal: 1.5;    /* 正常行高 */
--leading-relaxed: 1.75;  /* 宽松行高 */
--leading-loose: 2;       /* 很宽松行高 */
```

## 字体组合规范

### 标题层次 (Heading Hierarchy)
```css
/* H1 - 页面主标题 */
h1 {
  font-family: var(--font-figtree);
  font-size: var(--text-6xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
  color: var(--color-label-title);
}

/* H2 - 章节标题 */
h2 {
  font-family: var(--font-inter);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--leading-tight);
  color: var(--color-label-title);
}

/* H3 - 小节标题 */
h3 {
  font-family: var(--font-inter);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--leading-normal);
  color: var(--color-label-title);
}

/* H4 - 小标题 */
h4 {
  font-family: var(--font-inter);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--leading-normal);
  color: var(--color-label-base);
}

/* H5 - 微标题 */
h5 {
  font-family: var(--font-inter);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  line-height: var(--leading-normal);
  color: var(--color-label-base);
}

/* H6 - 最小标题 */
h6 {
  font-family: var(--font-inter);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--leading-normal);
  color: var(--color-label-soft);
}
```

### 正文排版 (Body Text)
```css
/* 主要段落 */
p {
  font-family: var(--font-inter);
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-label-base);
}

/* 小文本 */
.small-text {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-normal);
  line-height: var(--leading-normal);
  color: var(--color-label-soft);
}

/* 标签文本 */
.label-text {
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  line-height: var(--leading-normal);
  color: var(--color-label-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

## 特殊文本样式

### 强调和链接
```css
/* 强调文本 */
em, .emphasis {
  font-style: italic;
  color: var(--color-accent-base);
}

/* 重要文本 */
strong, .important {
  font-weight: var(--font-weight-semibold);
  color: var(--color-label-title);
}

/* 链接样式 */
a {
  font-family: var(--font-inter);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent-base);
  text-decoration: none;
}

a:hover {
  color: var(--color-accent-base-hover);
  text-decoration: underline;
}
```

### 代码文本
```css
/* 行内代码 */
code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background-color: var(--color-bg-shade);
  color: var(--color-accent-highlight);
  padding: 0.125rem 0.25rem;
  border-radius: var(--radius-sm);
}

/* 代码块 */
pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  background-color: var(--color-bg-shade);
  color: var(--color-label-base);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  overflow-x: auto;
}
```

## 响应式排版

### 断点系统
```css
/* 移动设备 */
@media (max-width: 768px) {
  :root {
    --text-scale: 0.875;
  }
}

/* 平板设备 */
@media (min-width: 769px) and (max-width: 1024px) {
  :root {
    --text-scale: 0.925;
  }
}

/* 桌面设备 */
@media (min-width: 1025px) {
  :root {
    --text-scale: 1;
  }
}
```

### 响应式标题
```css
h1 {
  font-size: calc(var(--text-4xl) * var(--text-scale));
}

@media (min-width: 768px) {
  h1 {
    font-size: var(--text-5xl);
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: var(--text-6xl);
  }
}
```

## 可读性优化

### 字符间距和词间距
```css
/* 标题字符间距 */
.heading-tight {
  letter-spacing: -0.02em;
}

.heading-normal {
  letter-spacing: 0;
}

.heading-wide {
  letter-spacing: 0.05em;
}

/* 词间距 */
.text-wide-spacing {
  word-spacing: 0.1em;
}
```

### 最大宽度限制
```css
/* 最佳阅读宽度 */
.readable-width {
  max-width: 65ch; /* 约 65 个字符 */
  line-height: var(--leading-relaxed);
}

/* 窄文本 */
.narrow-width {
  max-width: 45ch;
}

/* 宽文本 */
.wide-width {
  max-width: 85ch;
}
```

## 性能优化

### 字体加载策略
```css
/* 字体显示策略 */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap; /* 交换显示策略 */
  font-weight: 100 900; /* 可变字重 */
}

/* 系统字体回退 */
.system-font {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
               'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
               'Droid Sans', 'Helvetica Neue', sans-serif;
}
```

## 使用指南

### 排版原则
1. **层次清晰**: 使用不同的字号、字重创建明确的视觉层次
2. **对比度充足**: 确保文本与背景有足够的颜色对比度
3. **行高适中**: 正文行高建议为字号的 1.5-1.75 倍
4. **行长限制**: 单行文本长度不超过 75-85 个字符

### 最佳实践
- 标题使用较粗的字重，正文使用常规字重
- 大标题使用较紧的行高，正文使用较松的行高
- 在深色背景下适当增加字重以提高可读性
- 保持一致的字体族使用，避免混用过多字体

## 字体速查表

| 用途 | 字体族 | 字号 | 字重 | 行高 |
|------|--------|------|------|------|
| 页面主标题 (H1) | Figtree | 48px (3rem) | 700 | 1.25 |
| 章节标题 (H2) | Inter | 32px (2rem) | 600 | 1.25 |
| 小节标题 (H3) | Inter | 24px (1.5rem) | 600 | 1.5 |
| 正文段落 | Inter | 16px (1rem) | 400 | 1.75 |
| 小文本 | Inter | 14px (0.875rem) | 400 | 1.5 |
| 标签 | Inter | 12px (0.75rem) | 500 | 1.25 |
| 按钮 | Inter | 14px (0.875rem) | 600 | 1.25 |
| 代码 | Mono | 14px (0.875rem) | 400 | 1.5 |