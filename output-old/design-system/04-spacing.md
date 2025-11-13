# Meshy AI 设计系统 - 间距系统规范

## 概述

Meshy AI 采用基于 `0.25rem` 的标准化间距系统，确保整个界面的视觉一致性和节奏感。

## 基础间距单位

基础间距单位为 `0.25rem` (4px)，所有间距值都是这个基数的倍数。

```css
:root {
  --spacing-unit: 0.25rem; /* 4px */
}
```

## 间距缩放系统

| 变量名 | 数值 | 像素值 | 用途 | 示例 |
|--------|------|--------|------|------|
| `--spacing-none` | `0` | `0px` | 无间距 | - |
| `--spacing-xs` | `0.25rem` | `4px` | 极小间距 | 图标与文字间距 |
| `--spacing-sm` | `0.5rem` | `8px` | 小间距 | 按钮内边距 |
| `--spacing-md` | `0.75rem` | `12px` | 中等间距 | 卡片元素间距 |
| `--spacing-lg` | `1rem` | `16px` | 标准间距 | 段落间距 |
| `--spacing-xl` | `1.25rem` | `20px` | 大间距 | 区块间距 |
| `--spacing-2xl` | `1.5rem` | `24px` | 很大间距 | 章节间距 |
| `--spacing-3xl` | `2rem` | `32px` | 极大间距 | 页面边距 |
| `--spacing-4xl` | `2.5rem` | `40px` | 超大间距 | 特殊布局 |
| `--spacing-5xl` | `3rem` | `48px` | 巨大间距 | 页面顶部边距 |

## 组件内边距 (Padding)

| 变量名 | 数值 | 用途 | 示例 |
|--------|------|------|------|
| `--padding-xs` | `var(--spacing-xs)` | 极小内边距 | 标签、徽章 |
| `--padding-sm` | `var(--spacing-sm)` | 小内边距 | 紧凑按钮 |
| `--padding-md` | `var(--spacing-md)` | 中等内边距 | 标准按钮 |
| `--padding-lg` | `var(--spacing-lg)` | 大内边距 | 输入框 |
| `--padding-xl` | `var(--spacing-xl)` | 很大内边距 | 卡片 |
| `--padding-2xl` | `var(--spacing-2xl)` | 极大内边距 | 容器 |

## 组件外边距 (Margin)

| 变量名 | 数值 | 用途 | 示例 |
|--------|------|------|------|
| `--margin-xs` | `var(--spacing-xs)` | 极小外边距 | 相邻元素 |
| `--margin-sm` | `var(--spacing-sm)` | 小外边距 | 表单字段 |
| `--margin-md` | `var(--spacing-md)` | 中等外边距 | 列表项 |
| `--margin-lg` | `var(--spacing-lg)` | 大外边距 | 卡片之间 |
| `--margin-xl` | `var(--spacing-xl)` | 很大外边距 | 区块之间 |
| `--margin-2xl` | `var(--spacing-2xl)` | 极大外边距 | 章节之间 |
| `--margin-3xl` | `var(--spacing-3xl)` | 巨大外边距 | 页面边距 |

## Gap 间距 (Grid & Flexbox)

| 变量名 | 数值 | 用途 | 示例 |
|--------|------|------|------|
| `--gap-xs` | `var(--spacing-xs)` | 极小间隙 | 紧凑网格 |
| `--gap-sm` | `var(--spacing-sm)` | 小间隙 | 按钮组 |
| `--gap-md` | `var(--spacing-md)` | 中等间隙 | 卡片网格 |
| `--gap-lg` | `var(--spacing-lg)` | 大间隙 | 布局网格 |
| `--gap-xl` | `var(--spacing-xl)` | 很大间隙 | 页面区域 |
| `--gap-2xl` | `var(--spacing-2xl)` | 极大间隙 | 主要分区 |

## 容器宽度系统

| 变量名 | 数值 | 像素值 | 用途 |
|--------|------|--------|------|
| `--container-3xs` | `16rem` | `256px` | 极小容器 |
| `--container-xs` | `20rem` | `320px` | 小容器 |
| `--container-sm` | `24rem` | `384px` | 中小容器 |
| `--container-md` | `28rem` | `448px` | 中等容器 |
| `--container-lg` | `32rem` | `512px` | 大容器 |
| `--container-xl` | `36rem` | `576px` | 很大容器 |
| `--container-2xl` | `42rem` | `672px` | 极大容器 |
| `--container-3xl` | `48rem` | `768px` | 巨大容器 |

## 常用间距组合

### 紧凑组合
```css
.tight-spacing {
  padding: var(--padding-sm);
  margin-bottom: var(--margin-sm);
}
```

### 标准组合
```css
.standard-spacing {
  padding: var(--padding-lg);
  margin-bottom: var(--margin-lg);
}
```

### 宽松组合
```css
.loose-spacing {
  padding: var(--padding-xl);
  margin-bottom: var(--margin-xl);
}
```

## 使用指南

### 垂直间距

1. **页面顶部**: `--margin-3xl` (48px)
2. **章节间距**: `--margin-2xl` (24px)
3. **区块间距**: `--margin-xl` (20px)
4. **组件间距**: `--margin-lg` (16px)
5. **元素间距**: `--margin-md` (12px)

### 水平间距

1. **页面边距**: `--padding-2xl` (24px)
2. **容器内边距**: `--padding-xl` (20px)
3. **组件内边距**: `--padding-lg` (16px)
4. **元素内边距**: `--padding-md` (12px)

### 特殊场景

#### 按钮间距
```css
.button {
  padding: var(--padding-sm) var(--padding-md);
  margin-right: var(--margin-sm);
}

.button-group {
  display: flex;
  gap: var(--gap-sm);
}
```

#### 卡片间距
```css
.card {
  padding: var(--padding-lg);
  margin-bottom: var(--margin-lg);
}

.card-grid {
  display: grid;
  gap: var(--gap-md);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

#### 表单间距
```css
.form-group {
  margin-bottom: var(--margin-lg);
}

.form-label {
  margin-bottom: var(--margin-sm);
}

.form-input {
  padding: var(--padding-md);
}
```

## 响应式间距

```css
.responsive-spacing {
  padding: var(--padding-md);
  margin-bottom: var(--margin-md);
}

/* 中等屏幕 */
@media (min-width: 768px) {
  .responsive-spacing {
    padding: var(--padding-lg);
    margin-bottom: var(--margin-lg);
  }
}

/* 大屏幕 */
@media (min-width: 1024px) {
  .responsive-spacing {
    padding: var(--padding-xl);
    margin-bottom: var(--margin-xl);
  }
}
```

## CSS 实现示例

```css
:root {
  /* 基础单位 */
  --spacing-unit: 0.25rem;

  /* 间距缩放 */
  --spacing-xs: calc(var(--spacing-unit) * 1);   /* 4px */
  --spacing-sm: calc(var(--spacing-unit) * 2);   /* 8px */
  --spacing-md: calc(var(--spacing-unit) * 3);   /* 12px */
  --spacing-lg: calc(var(--spacing-unit) * 4);   /* 16px */
  --spacing-xl: calc(var(--spacing-unit) * 5);   /* 20px */
  --spacing-2xl: calc(var(--spacing-unit) * 6);  /* 24px */
  --spacing-3xl: calc(var(--spacing-unit) * 8);  /* 32px */

  /* 组件内边距 */
  --padding-xs: var(--spacing-xs);
  --padding-sm: var(--spacing-sm);
  --padding-md: var(--spacing-md);
  --padding-lg: var(--spacing-lg);
  --padding-xl: var(--spacing-xl);
  --padding-2xl: var(--spacing-2xl);

  /* 组件外边距 */
  --margin-xs: var(--spacing-xs);
  --margin-sm: var(--spacing-sm);
  --margin-md: var(--spacing-md);
  --margin-lg: var(--spacing-lg);
  --margin-xl: var(--spacing-xl);
  --margin-2xl: var(--spacing-2xl);
  --margin-3xl: var(--spacing-3xl);

  /* Grid/Flexbox 间距 */
  --gap-xs: var(--spacing-xs);
  --gap-sm: var(--spacing-sm);
  --gap-md: var(--spacing-md);
  --gap-lg: var(--spacing-lg);
  --gap-xl: var(--spacing-xl);
  --gap-2xl: var(--spacing-2xl);

  /* 容器宽度 */
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
}

/* 布局类 */
.section {
  padding: var(--padding-2xl) 0;
}

.container {
  max-width: var(--container-2xl);
  padding: 0 var(--padding-lg);
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: var(--gap-lg);
}
```

## 最佳实践

1. **保持一致性**: 在整个项目中使用标准间距变量
2. **考虑响应式**: 在不同屏幕尺寸上适当调整间距
3. **避免随意值**: 不要使用任意的像素值，坚持使用间距系统
4. **视觉节奏**: 确保间距创造良好的视觉节奏感
5. **可访问性**: 确保间距不会影响可读性和可用性

---

*此间距系统基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*