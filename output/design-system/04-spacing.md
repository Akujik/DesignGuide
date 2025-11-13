# 间距系统规范 (Spacing System Specification)

## 概述

Meshy.ai 的间距系统基于 4px (0.25rem) 的基础单位，采用数学化的倍数关系，确保了设计的一致性和和谐性。系统支持组件内部间距、元素间距和布局间距的多层次应用。

## 基础单位系统

### 基础定义
```css
--spacing-unit: 0.25rem; /* 4px - 基础间距单位 */
```

### 基础间距倍数
```css
--spacing-xs: calc(var(--spacing-unit) * 1);    /* 0.25rem = 4px */
--spacing-sm: calc(var(--spacing-unit) * 2);    /* 0.5rem = 8px */
--spacing-md: calc(var(--spacing-unit) * 3);    /* 0.75rem = 12px */
--spacing-lg: calc(var(--spacing-unit) * 4);    /* 1rem = 16px */
--spacing-xl: calc(var(--spacing-unit) * 5);    /* 1.25rem = 20px */
--spacing-2xl: calc(var(--spacing-unit) * 6);   /* 1.5rem = 24px */
--spacing-3xl: calc(var(--spacing-unit) * 8);   /* 2rem = 32px */
--spacing-4xl: calc(var(--spacing-unit) * 10);  /* 2.5rem = 40px */
--spacing-5xl: calc(var(--spacing-unit) * 12);  /* 3rem = 48px */
--spacing-6xl: calc(var(--spacing-unit) * 16);  /* 4rem = 64px */
--spacing-7xl: calc(var(--spacing-unit) * 20);  /* 5rem = 80px */
```

## 间距分类系统

### 内间距 (Padding)
```css
/* 内间距统一命名 */
--p-xs: var(--spacing-xs);    /* 4px */
--p-sm: var(--spacing-sm);    /* 8px */
--p-md: var(--spacing-md);    /* 12px */
--p-lg: var(--spacing-lg);    /* 16px */
--p-xl: var(--spacing-xl);    /* 20px */
--p-2xl: var(--spacing-2xl);  /* 24px */
--p-3xl: var(--spacing-3xl);  /* 32px */
--p-4xl: var(--spacing-4xl);  /* 40px */
```

### 外间距 (Margin)
```css
/* 外间距统一命名 */
--m-xs: var(--spacing-xs);    /* 4px */
--m-sm: var(--spacing-sm);    /* 8px */
--m-md: var(--spacing-md);    /* 12px */
--m-lg: var(--spacing-lg);    /* 16px */
--m-xl: var(--spacing-xl);    /* 20px */
--m-2xl: var(--spacing-2xl);  /* 24px */
--m-3xl: var(--spacing-3xl);  /* 32px */
--m-4xl: var(--spacing-4xl);  /* 40px */
```

### 组件间距 (Gap)
```css
/* 弹性布局和网格间距 */
--gap-xs: var(--spacing-xs);   /* 4px */
--gap-sm: var(--spacing-sm);   /* 8px */
--gap-md: var(--spacing-md);   /* 12px */
--gap-lg: var(--spacing-lg);   /* 16px */
--gap-xl: var(--spacing-xl);   /* 20px */
--gap-2xl: var(--spacing-2xl); /* 24px */
--gap-3xl: var(--spacing-3xl); /* 32px */
```

## 圆角系统 (Border Radius)

### 基础圆角
```css
--radius-xs: 0.125rem;  /* 2px */
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */
--radius-3xl: 1.5rem;   /* 24px */
--radius-4xl: 2rem;     /* 32px */
```

### 特殊圆角
```css
--radius-full: 9999px;  /* 完全圆角 */
--radius-pill: 50px;    /* 胶囊形状 */
--radius-none: 0;       /* 无圆角 */
```

## 间距应用指南

### 按钮组件间距
```css
/* 小按钮 */
.button-small {
  padding: var(--p-sm) var(--p-lg);
  border-radius: var(--radius-md);
  gap: var(--gap-sm);
}

/* 中等按钮 */
.button-medium {
  padding: var(--p-md) var(--p-xl);
  border-radius: var(--radius-lg);
  gap: var(--gap-sm);
}

/* 大按钮 */
.button-large {
  padding: var(--p-lg) var(--p-2xl);
  border-radius: var(--radius-xl);
  gap: var(--gap-md);
}
```

### 卡片组件间距
```css
.card {
  padding: var(--p-2xl);
  border-radius: var(--radius-lg);
  margin-bottom: var(--m-2xl);
}

.card-header {
  margin-bottom: var(--m-lg);
  padding-bottom: var(--p-md);
}

.card-content {
  margin-bottom: var(--m-lg);
}

.card-footer {
  padding-top: var(--p-md);
  margin-top: var(--m-md);
}
```

### 表单组件间距
```css
.form-group {
  margin-bottom: var(--m-lg);
}

.form-label {
  margin-bottom: var(--p-sm);
}

.form-input {
  padding: var(--p-md) var(--p-lg);
  border-radius: var(--radius-md);
  margin-bottom: var(--p-sm);
}

.form-error {
  margin-top: var(--p-xs);
  padding: var(--p-sm) var(--p-md);
  border-radius: var(--radius-sm);
}
```

### 导航组件间距
```css
.nav-container {
  padding: var(--p-lg) var(--p-3xl);
}

.nav-item {
  margin-right: var(--m-lg);
  padding: var(--p-sm) var(--p-md);
  border-radius: var(--radius-md);
}

.nav-dropdown {
  gap: var(--gap-xs);
  padding: var(--p-xs);
}
```

## 布局间距系统

### 页面布局
```css
/* 页面容器 */
.page-container {
  padding: var(--p-3xl) var(--p-4xl);
  max-width: 1200px;
  margin: 0 auto;
}

/* 页面标题区域 */
.page-header {
  margin-bottom: var(--m-4xl);
  padding-bottom: var(--p-2xl);
}

/* 页面主要内容 */
.page-main {
  margin-bottom: var(--m-6xl);
}

/* 页面底部 */
.page-footer {
  margin-top: var(--m-6xl);
  padding-top: var(--p-3xl);
}
```

### 网格布局
```css
/* 网格间距 */
.grid-tight {
  gap: var(--gap-sm);
}

.grid-normal {
  gap: var(--gap-lg);
}

.grid-loose {
  gap: var(--gap-2xl);
}

/* 响应式网格间距 */
@media (max-width: 768px) {
  .grid-responsive {
    gap: var(--gap-md);
  }
}

@media (min-width: 769px) {
  .grid-responsive {
    gap: var(--gap-lg);
  }
}
```

### 弹性布局
```css
/* 弹性容器间距 */
.flex-row {
  gap: var(--gap-md);
}

.flex-column {
  gap: var(--gap-lg);
}

.flex-wrap {
  gap: var(--gap-lg);
}
```

## 响应式间距

### 断点间距调整
```css
/* 移动设备 */
@media (max-width: 768px) {
  :root {
    --spacing-scale: 0.75;
  }
}

/* 平板设备 */
@media (min-width: 769px) and (max-width: 1024px) {
  :root {
    --spacing-scale: 0.875;
  }
}

/* 桌面设备 */
@media (min-width: 1025px) {
  :root {
    --spacing-scale: 1;
  }
}
```

### 响应式间距计算
```css
.responsive-padding {
  padding: calc(var(--spacing-lg) * var(--spacing-scale));
}

.responsive-margin {
  margin: calc(var(--spacing-xl) * var(--spacing-scale)) 0;
}
```

## 特殊间距场景

### 组件内部间距
```css
/* 列表项间距 */
.list-item {
  padding: var(--p-md) var(--p-lg);
  margin-bottom: var(--m-sm);
}

/* 标签间距 */
.tag {
  padding: var(--p-xs) var(--p-sm);
  margin-right: var(--m-sm);
  border-radius: var(--radius-pill);
}

/* 头像间距 */
.avatar-group {
  margin-right: calc(var(--m-lg) * -1); /* 负间距重叠 */
}

.avatar-item {
  margin-right: var(--m-sm);
}
```

### 分隔间距
```css
/* 垂直分隔 */
.divider-vertical {
  margin: var(--m-2xl) 0;
  height: 1px;
}

/* 水平分隔 */
.divider-horizontal {
  margin: 0 var(--m-lg);
  width: 1px;
}
```

### 悬停和焦点间距
```css
/* 悬停状态 */
:hover {
  padding: var(--p-md);
  margin: calc(var(--p-md) * -1);
}

/* 焦点状态 */
:focus {
  padding: calc(var(--p-md) - 2px);
  border: 2px solid var(--color-accent-base);
}
```

## 间距计算工具

### 复合间距
```css
/* 双倍间距 */
--spacing-2xs: calc(var(--spacing-xs) * 2);

/* 1.5倍间距 */
--spacing-lg-half: calc(var(--spacing-lg) * 1.5);

/* 间距组合 */
--spacing-complex: calc(var(--spacing-sm) + var(--spacing-md));
```

### 负间距
```css
/* 负外间距 */
--m-negative-xs: calc(var(--spacing-xs) * -1);
--m-negative-sm: calc(var(--spacing-sm) * -1);
--m-negative-md: calc(var(--spacing-md) * -1);
--m-negative-lg: calc(var(--spacing-lg) * -1);
```

## 间距使用原则

### 黄金比例应用
```css
/* 基于黄金比例的间距 (1:1.618) */
--spacing-golden-sm: 8px;
--spacing-golden-md: 13px;  /* 8 * 1.618 ≈ 13 */
--spacing-golden-lg: 21px;  /* 13 * 1.618 ≈ 21 */
--spacing-golden-xl: 34px;  /* 21 * 1.618 ≈ 34 */
```

### 3/4 比例系统
```css
/* 基于视觉和谐的 3/4 比例 */
--spacing-harmony-xs: 4px;
--spacing-harmony-sm: 6px;   /* 4 * 1.5 */
--spacing-harmony-md: 9px;   /* 6 * 1.5 */
--spacing-harmony-lg: 14px;  /* 9 * 1.5 */
--spacing-harmony-xl: 21px;  /* 14 * 1.5 */
```

## 间距速查表

| 间距名称 | rem | px | CSS 变量 | 应用场景 |
|----------|-----|----|----------|----------|
| xs | 0.25 | 4 | `--spacing-xs` | 微小间距、图标间距 |
| sm | 0.5 | 8 | `--spacing-sm` | 小组件内边距 |
| md | 0.75 | 12 | `--spacing-md` | 表单元素内边距 |
| lg | 1 | 16 | `--spacing-lg` | 标准间距、段落间距 |
| xl | 1.25 | 20 | `--spacing-xl` | 按钮内边距 |
| 2xl | 1.5 | 24 | `--spacing-2xl` | 卡片内边距 |
| 3xl | 2 | 32 | `--spacing-3xl` | 大组件间距 |
| 4xl | 2.5 | 40 | `--spacing-4xl` | 页面区域间距 |
| 5xl | 3 | 48 | `--spacing-5xl` | 页面标题间距 |
| 6xl | 4 | 64 | `--spacing-6xl` | 页面主区域间距 |

## 最佳实践

### 间距选择指南
1. **一致性**: 在同一类组件中使用相同的间距
2. **层次性**: 使用不同的间距创建视觉层次
3. **呼吸感**: 适当留白，避免过于拥挤
4. **对齐**: 基于网格系统进行间距设计

### 常见错误避免
- 不要使用奇数的 px 值，保持 rem 对齐
- 避免在一个组件中使用过多不同间距值
- 不要在响应式设计中使用固定的 px 间距
- 避免负间距的滥用，仅在必要时使用