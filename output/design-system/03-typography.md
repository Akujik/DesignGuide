# 排版系统 (Typography System)

> Meshy AI 的字体、文本样式和可读性指南

## 概述

Meshy AI的排版系统基于现代Web字体最佳实践，采用系统字体栈确保最佳性能和跨平台一致性。系统支持响应式排版，确保在不同设备上都有优秀的阅读体验。

## 字体系统

### 主要字体族

#### 系统无衬线字体 (Sans-serif)
```css
--font-sans: ui-sans-serif, system-ui, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol", "Noto Color Emoji";

--font-inter: "Inter", "Inter Fallback";
--font-inter-tight: "Inter Tight", "Inter Tight Fallback";
--font-figtree: "Figtree", "Figtree Fallback";
```

#### 系统等宽字体 (Monospace)
```css
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco,
            Consolas, "Liberation Mono", "Courier New", monospace;

--font-karma: "Karma", "Karma Fallback";
```

#### 默认字体
```css
--default-font-family: var(--font-sans);
--default-mono-font-family: var(--font-mono);
```

### 字体选择原则

1. **性能优先**: 使用系统字体避免加载延迟
2. **跨平台一致**: 确保在不同操作系统上显示一致
3. **可读性最佳**: 优化屏幕阅读体验
4. **多语言支持**: 包含表情符号和特殊字符

## 字号系统

### 响应式字号

#### 基础字号系列
```css
--text-2xs: 0.625rem;     /* 10px - 极小文本 */
--text-xs: 0.75rem;       /* 12px - 小号文本 */
--text-sm: 0.875rem;      /* 14px - 中小文本 */
--text-base: 1rem;        /* 16px - 基础文本 */
--text-lg: 1.125rem;      /* 18px - 中大文本 */
--text-xl: 1.25rem;       /* 20px - 大号文本 */
--text-2xl: 1.5rem;       /* 24px - 特大文本 */
--text-3xl: 1.75rem;      /* 28px - 超大文本 */
--text-4xl: 2rem;         /* 32px - 巨大文本 */
--text-5xl: 2.5rem;       /* 40px - 标题文本 */
--text-6xl: 3rem;         /* 48px - 主标题 */
--text-7xl: 3.5rem;       /* 56px - 超大标题 */
--text-8xl: 4rem;         /* 64px - 展示标题 */
```

#### 加粗字号系列 (Plus)
```css
--text-2xs-plus: 0.625rem;    /* 10px - 极小加粗 */
--text-xs-plus: 0.75rem;      /* 12px - 小号加粗 */
--text-sm-plus: 0.875rem;     /* 14px - 中小加粗 */
--text-base-plus: 1rem;       /* 16px - 基础加粗 */
--text-lg-plus: 1.125rem;     /* 18px - 中大加粗 */
--text-xl-plus: 1.25rem;      /* 20px - 大号加粗 */
--text-2xl-plus: 1.5rem;      /* 24px - 特大加粗 */
--text-3xl-plus: 1.75rem;     /* 28px - 超大加粗 */
--text-4xl-plus: 2rem;        /* 32px - 巨大加粗 */
--text-5xl-plus: 2.5rem;      /* 40px - 标题加粗 */
--text-6xl-plus: 3rem;        /* 48px - 主标题加粗 */
--text-8xl-plus: 4rem;        /* 64px - 展示标题加粗 */
```

### 行高系统

```css
--text-2xs--line-height: 0.75rem;      /* 12px */
--text-xs--line-height: 1rem;          /* 16px */
--text-sm--line-height: 1.25rem;       /* 20px */
--text-base--line-height: 1.5rem;      /* 24px */
--text-lg--line-height: 1.75rem;       /* 28px */
--text-xl--line-height: 1.75rem;       /* 28px */
--text-2xl--line-height: 2rem;         /* 32px */
--text-3xl--line-height: 2.25rem;      /* 36px */
--text-4xl--line-height: 2.5rem;       /* 40px */
--text-5xl--line-height: 3rem;         /* 48px */
--text-6xl--line-height: 3rem;         /* 48px */
--text-7xl--line-height: 3.5rem;       /* 56px */
--text-8xl--line-height: 4.5rem;       /* 72px */
```

## 字重系统

```css
--font-weight-light: 300;       /* 细体 */
--font-weight-normal: 400;      /* 常规 */
--font-weight-medium: 500;      /* 中等 */
--font-weight-semibold: 600;    /* 半粗 */
--font-weight-bold: 700;        /* 粗体 */
--font-weight-extrabold: 800;   /* 超粗 */
--font-weight-black: 900;       /* 黑体 */
```

### 加粗系列默认字重
```css
--text-2xs-plus--font-weight: 500;
--text-xs-plus--font-weight: 500;
--text-sm-plus--font-weight: 500;
--text-base-plus--font-weight: 600;
--text-lg-plus--font-weight: 600;
--text-xl-plus--font-weight: 600;
--text-2xl-plus--font-weight: 600;
--text-3xl-plus--font-weight: 700;
--text-4xl-plus--font-weight: 700;
--text-5xl-plus--font-weight: 700;
--text-6xl-plus--font-weight: 700;
--text-8xl-plus--font-weight: 700;
```

## 字符间距

```css
--tracking-tight: -0.025em;      /* 紧密 */
--tracking-wider: 0.05em;        /* 宽松 */
--tracking-widest: 0.1em;        /* 最宽松 */
```

## 段落间距

```css
--leading-tight: 1.25;           /* 紧密行高 */
--leading-snug: 1.375;           /* 适中行高 */
--leading-normal: 1.5;           /* 正常行高 */
--leading-relaxed: 1.625;        /* 宽松行高 */
--leading-loose: 2;              /* 最宽松行高 */
```

## 排版层级

### 1. 展示层级 (Display)

#### 展示标题 (Display)
```css
.typography-display {
  font-size: var(--text-8xl-plus);
  font-weight: var(--font-weight-black);
  line-height: var(--text-8xl--line-height);
  font-family: var(--font-inter);
}
```

#### 主标题 (H1)
```css
.typography-h1 {
  font-size: var(--text-6xl-plus);
  font-weight: var(--font-weight-bold);
  line-height: var(--text-6xl--line-height);
  font-family: var(--font-inter);
}
```

### 2. 内容层级 (Content)

#### 章节标题 (H2)
```css
.typography-h2 {
  font-size: var(--text-4xl-plus);
  font-weight: var(--font-weight-bold);
  line-height: var(--text-4xl--line-height);
}
```

#### 小节标题 (H3)
```css
.typography-h3 {
  font-size: var(--text-2xl-plus);
  font-weight: var(--font-weight-semibold);
  line-height: var(--text-2xl--line-height);
}
```

#### 子标题 (H4)
```css
.typography-h4 {
  font-size: var(--text-xl-plus);
  font-weight: var(--font-weight-semibold);
  line-height: var(--text-xl--line-height);
}
```

### 3. 正文层级 (Body)

#### 正文大号 (Body Large)
```css
.typography-body-large {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-normal);
  line-height: var(--text-lg--line-height);
}
```

#### 正文标准 (Body)
```css
.typography-body {
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--text-base--line-height);
}
```

#### 正文小号 (Body Small)
```css
.typography-body-small {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-normal);
  line-height: var(--text-sm--line-height);
}
```

### 4. 元信息层级 (Meta)

#### 标签文本 (Label)
```css
.typography-label {
  font-size: var(--text-sm-plus);
  font-weight: var(--font-weight-medium);
  line-height: var(--text-sm--line-height);
}
```

#### 说明文本 (Caption)
```css
.typography-caption {
  font-size: var(--text-xs);
  font-weight: var(--font-weight-normal);
  line-height: var(--text-xs--line-height);
  color: var(--foreground-quiet-color);
}
```

#### 极小文本 (Fine Print)
```css
.typography-fine-print {
  font-size: var(--text-2xs);
  font-weight: var(--font-weight-normal);
  line-height: var(--text-2xs--line-height);
  color: var(--foreground-subtle-color);
}
```

## 代码排版

### 内联代码
```css
.typography-code {
  font-family: var(--default-mono-font-family);
  font-size: 0.875em; /* 相对于父元素 */
  background-color: var(--background-subtle-color);
  padding: 0.125rem 0.25rem;
  border-radius: var(--radius-sm);
}
```

### 代码块
```css
.typography-code-block {
  font-family: var(--default-mono-font-family);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  background-color: var(--background-subtle-color);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  overflow-x: auto;
}
```

## 响应式排版

### 移动优先策略

```css
/* 移动设备 (默认) */
.typography-responsive {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

/* 平板设备 */
@media (min-width: 768px) {
  .typography-responsive {
    font-size: var(--text-lg);
    line-height: var(--leading-normal);
  }
}

/* 桌面设备 */
@media (min-width: 1024px) {
  .typography-responsive {
    font-size: var(--text-xl);
    line-height: var(--leading-snug);
  }
}
```

### 流体排版

```css
/* 使用 clamp() 实现流体字号 */
.typography-fluid {
  font-size: clamp(
    var(--text-sm),     /* 最小值 */
    2.5vw,             /* 首选值 */
    var(--text-lg)      /* 最大值 */
  );
}
```

## 可读性优化

### 行长控制

```css
/* 最佳行长：45-75个字符 */
.typography-readable {
  max-width: 65ch;     /* 65个字符宽度 */
  line-height: var(--leading-relaxed);
}
```

### 段落间距

```css
.typography-paragraph {
  margin-bottom: 1.5em; /* 段落间距 */
}

.typography-paragraph:last-child {
  margin-bottom: 0;
}
```

### 文本对齐

```css
/* 左对齐 (默认) */
.typography-left {
  text-align: left;
}

/* 居中对齐 (标题、短文本) */
.typography-center {
  text-align: center;
}

/* 两端对齐 (长段落) */
.typography-justify {
  text-align: justify;
  text-align-last: left; /* 最后一行左对齐 */
}
```

## 无障碍考虑

### 字体大小调整

```css
/* 尊重用户字体大小偏好 */
@media (prefers-reduced-data: reduce) {
  .typography-accessible {
    font-size: 100%; /* 不使用小于100%的字体 */
  }
}
```

### 高对比度模式

```css
@media (prefers-contrast: high) {
  .typography-accessible {
    font-weight: var(--font-weight-bold);
    text-shadow: 0 0 1px currentColor;
  }
}
```

### 动画减少

```css
@media (prefers-reduced-motion: reduce) {
  .typography-accessible {
    transition: none;
  }
}
```

## 使用指南

### 1. 层级清晰
- 保持明确的视觉层级
- 标题与正文有足够的对比
- 避免过多字号变化

### 2. 一致性
- 在同类型内容中使用相同的排版样式
- 保持字重、字间距的一致性
- 遵循既定的排版规范

### 3. 可读性优先
- 确保足够的对比度
- 控制行长和段落间距
- 考虑不同设备的阅读体验

### 4. 性能考虑
- 优先使用系统字体
- 避免过多的字体变体
- 优化字体加载策略

## 测试清单

### 功能测试
- [ ] 所有字号在不同设备上显示正确
- [ ] 字体在各种浏览器中一致
- [ ] 响应式排版工作正常
- [ ] 代码字体显示正确

### 可访问性测试
- [ ] 字体大小可以缩放到200%
- [ ] 对比度符合WCAG标准
- [ ] 高对比度模式显示正常
- [ ] 动画减少模式有效

### 用户体验测试
- [ ] 长文本阅读舒适
- [ ] 标题层级清晰
- [ ] 代码块可读性好
- [ ] 多语言显示正常

---

*最后更新: 2025年11月14日*