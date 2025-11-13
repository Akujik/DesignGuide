# 颜色系统规范 (Color System Specification)

## 概述

Meshy.ai 的颜色系统以深色主题为基础，使用亮绿色 (#c5f955) 作为品牌主色调，构建了一个层次分明、对比度良好的视觉系统。

## 主色调系统 (Primary Colors)

### 品牌主色 (Accent Colors)
```css
--color-accent-base: #c5f955; /* 主要品牌色 - 亮绿色 */
--color-accent-base-hover: #a8e328; /* 悬停状态 */
--color-accent-bg: #c5f95526; /* 背景色 - 15% 透明度 */
--color-accent-bg-hover: #c5f95533; /* 悬停背景色 - 20% 透明度 */
--color-accent-highlight: #dcfa9d; /* 高亮色 */
```

**应用场景**:
- 主要按钮和链接
- 重要操作提示
- 品牌标识元素
- 加载状态指示器

### 辅助色系 (Support Colors)
```css
--color-accent-support-base: #ff3e8f; /* 辅助色 - 洋红色 */
--color-accent-support-highlight: #ff97c2; /* 辅助高亮色 - 粉色 */
```

**应用场景**:
- 次要操作元素
- 装饰性元素
- 品牌变体应用

## 背景色系统 (Background Colors)

### 主背景色
```css
--color-bg-base: #181818; /* 主要背景色 - 深黑色 */
--color-bg-sub: #1e1e1e; /* 次要背景色 */
--color-bg-base-hover: #262626; /* 悬停背景色 */
--color-bg-shade: #303030; /* 阴影背景色 */
--color-bg-border: #3f3f3f; /* 边框色 */
--color-bg-translucent: #ffffff0d; /* 半透明白色 */
```

**应用场景**:
- `--color-bg-base`: 页面主背景
- `--color-bg-sub`: 卡片、容器背景
- `--color-bg-base-hover`: 交互元素悬停状态
- `--color-bg-shade`: 分隔区域背景
- `--color-bg-border`: 边框和分割线
- `--color-bg-translucent`: 覆盖层和半透明效果

## 文本色系统 (Text Colors)

### 主要文本色
```css
--color-label-title: #ffffff; /* 标题文本 */
--color-label-base: #dedede; /* 主要文本 */
--color-label-soft: #9b9b9b; /* 次要文本 */
--color-label-muted: #696969; /* 静音文本 */
--color-label-faint: #505050; /* 淡化文本 */
```

**应用场景**:
- `--color-label-title`: 页面标题、重要标题
- `--color-label-base`: 正文内容、重要信息
- `--color-label-soft`: 辅助说明、元数据
- `--color-label-muted`: 占位符文本、次要信息
- `--color-label-faint`: 禁用状态文本

### 对比度和可访问性
- **标题与背景对比度**: 21:1 (AAA 级别)
- **正文与背景对比度**: 14:1 (AAA 级别)
- **辅助文本与背景对比度**: 7:1 (AA 级别)

## 语义色系统 (Semantic Colors)

### 状态色
```css
--color-semantic-error-base: #f33; /* 错误状态 */
--color-semantic-success-base: #2ee040; /* 成功状态 */
--color-semantic-warning-base: #f6992b; /* 警告状态 */
--color-semantic-info-base: #3b82f6; /* 信息状态 */
```

**应用场景**:
- `--color-semantic-error-base`: 错误消息、验证失败
- `--color-semantic-success-base`: 成功提示、完成状态
- `--color-semantic-warning-base`: 警告提醒、注意信息
- `--color-semantic-info-base`: 信息提示、帮助文本

## 颜色组合指南

### 主要组合
```css
/* 按钮组合 */
.button-primary {
  background-color: var(--color-accent-base);
  color: var(--color-bg-base); /* 黑色文字确保对比度 */
}

.button-secondary {
  background-color: var(--color-bg-sub);
  color: var(--color-label-base);
  border: 1px solid var(--color-bg-border);
}

/* 卡片组合 */
.card {
  background-color: var(--color-bg-sub);
  color: var(--color-label-base);
  border: 1px solid var(--color-bg-border);
}
```

### 交互状态
```css
/* 悬停状态 */
:hover {
  background-color: var(--color-bg-base-hover);
}

/* 焦点状态 */
:focus {
  outline: 2px solid var(--color-accent-base);
}

/* 激活状态 */
:active {
  background-color: var(--color-accent-base);
}
```

## 色彩心理学

### 品牌色选择理由
- **亮绿色 (#c5f955)**: 创新、成长、科技感、AI 时代感
- **洋红色 (#ff3e8f)**: 创造力、活力、现代感
- **深色主题**: 专业、专注、减少视觉疲劳

### 情感传达
- **专业可信**: 深色背景配合明亮的强调色
- **创新进取**: 非传统的亮绿色主色调
- **用户友好**: 清晰的层次和对比度

## 使用规范

### 颜色使用原则
1. **品牌一致性**: 使用定义的设计令牌，避免硬编码颜色值
2. **对比度要求**: 确保文本与背景满足 WCAG 2.1 AA 标准
3. **语义化使用**: 状态色用于相应的语义场景
4. **层次清晰**: 通过颜色创建清晰的视觉层次

### 禁止事项
- 不要使用未定义的颜色值
- 避免在重要文本上使用低对比度颜色
- 不要混合使用过多的颜色
- 避免在非语义场景使用状态色

## 主题切换支持

### CSS 变量系统
```css
/* 深色主题 (默认) */
:root {
  --color-bg-base: #181818;
  --color-label-base: #dedede;
}

/* 浅色主题 */
[data-theme="light"] {
  --color-bg-base: #ffffff;
  --color-label-base: #181818;
}
```

## 调色板速查

| 颜色 | HEX | CSS 变量 | 用途 |
|------|-----|----------|------|
| 主绿色 | #c5f955 | `--color-accent-base` | 主要交互元素 |
| 悬停绿色 | #a8e328 | `--color-accent-base-hover` | 悬停状态 |
| 洋红色 | #ff3e8f | `--color-accent-support-base` | 辅助交互元素 |
| 粉色 | #ff97c2 | `--color-accent-support-highlight` | 装饰元素 |
| 深黑 | #181818 | `--color-bg-base` | 主背景 |
| 次黑 | #1e1e1e | `--color-bg-sub` | 卡片背景 |
| 边框灰 | #3f3f3f | `--color-bg-border` | 边框和分隔 |
| 主文本白 | #ffffff | `--color-label-title` | 标题文本 |
| 正文灰 | #dedede | `--color-label-base` | 正文内容 |
| 辅助灰 | #9b9b9b | `--color-label-soft` | 次要文本 |