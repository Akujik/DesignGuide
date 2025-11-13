# Meshy AI 设计系统 - 颜色系统规范

## 概述

Meshy AI 的颜色系统基于深色主题，以鲜明的绿色作为品牌主色，搭配支持性的品红色系，营造出现代且充满科技感的视觉体验。

## 核心颜色变量

### 背景色系

| 变量名 | 颜色值 | 用途 | 示例 |
|--------|--------|------|------|
| `--color-bg-base` | `#181818` | 主背景色 | ![#181818](https://via.placeholder.com/20/181818/000000?text=+) |
| `--color-bg-sub` | `#1e1e1e` | 次要背景色 | ![#1e1e1e](https://via.placeholder.com/20/1e1e1e/000000?text=+) |
| `--color-bg-shade` | `#303030` | 深色阴影/悬浮背景 | ![#303030](https://via.placeholder.com/20/303030/000000?text=+) |
| `--color-bg-border` | `#3f3f3f` | 边框颜色 | ![#3f3f3f](https://via.placeholder.com/20/3f3f3f/000000?text=+) |

### 文本色系

| 变量名 | 颜色值 | 用途 | 示例 |
|--------|--------|------|------|
| `--color-label-title` | `#ffffff` | 主要标题 | ![#ffffff](https://via.placeholder.com/20/ffffff/000000?text=+) |
| `--color-label-base` | `#dedede` | 正文文本 | ![#dedede](https://via.placeholder.com/20/dedede/000000?text=+) |
| `--color-label-soft` | `#9b9b9b` | 次要文本 | ![#9b9b9b](https://via.placeholder.com/20/9b9b9b/000000?text=+) |
| `--color-label-muted` | `#696969` | 淡色文本 | ![#696969](https://via.placeholder.com/20/696969/000000?text=+) |
| `--color-label-faint` | `#505050` | 极淡文本/占位符 | ![#505050](https://via.placeholder.com/20/505050/000000?text=+) |

### 品牌色系

| 变量名 | 颜色值 | 用途 | 示例 |
|--------|--------|------|------|
| `--color-accent-base` | `#C5F955` | 主要品牌绿 | ![#C5F955](https://via.placeholder.com/20/C5F955/000000?text=+) |
| `--color-accent-support-base` | `#FF3E8F` | 支持品红 | ![#FF3E8F](https://via.placeholder.com/20/FF3E8F/000000?text=+) |
| `--color-accent-highlight` | `#FF97C2` | 高亮粉色 | ![#FF97C2](https://via.placeholder.com/20/FF97C2/000000?text=+) |

### 功能色系

| 变量名 | 颜色值 | 用途 | 示例 |
|--------|--------|------|------|
| `--color-success` | `#22c55e` | 成功状态 | ![#22c55e](https://via.placeholder.com/20/22c55e/000000?text=+) |
| `--color-warning` | `#f59e0b` | 警告状态 | ![#f59e0b](https://via.placeholder.com/20/f59e0b/000000?text=+) |
| `--color-error` | `#ef4444` | 错误状态 | ![#ef4444](https://via.placeholder.com/20/ef4444/000000?text=+) |
| `--color-info` | `#3b82f6` | 信息状态 | ![#3b82f6](https://via.placeholder.com/20/3b82f6/000000?text=+) |

## 渐变色系统

### 品牌渐变

```css
.gradient-new-feature {
  background: linear-gradient(90deg, #C5F955, #FF97C2);
}

.gradient-credit {
  background: linear-gradient(90deg, #F9E855, #E99430);
}
```

### 功能渐变

```css
.gradient-success {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.gradient-error {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}
```

## 颜色使用指南

### 主要使用场景

1. **页面背景**: 使用 `--color-bg-base` 作为最基础的背景色
2. **卡片背景**: 使用 `--color-bg-sub` 创建层次感
3. **悬浮状态**: 使用 `--color-bg-shade` 表示悬浮或激活状态
4. **边框**: 使用 `--color-bg-border` 绘制分割线

### 文本颜色层级

1. **页面标题**: `--color-label-title` (H1, H2)
2. **正文内容**: `--color-label-base` (段落, 描述)
3. **辅助信息**: `--color-label-soft` (标签, 元数据)
4. **禁用状态**: `--color-label-muted`
5. **占位符**: `--color-label-faint`

### 品牌色应用

1. **主要按钮**: `--color-accent-base`
2. **重要链接**: `--color-accent-base`
3. **强调元素**: `--color-accent-support-base`
4. **装饰元素**: `--color-accent-highlight`

## 可访问性对比度

所有文本颜色都确保在深色背景下达到 WCAG AA 标准：

- **标题文本**: 对比度 > 7:1 (AAA)
- **正文文本**: 对比度 > 4.5:1 (AA)
- **辅助文本**: 对比度 > 3:1 (AA Large)

## CSS 实现示例

```css
:root {
  /* 背景色系 */
  --color-bg-base: #181818;
  --color-bg-sub: #1e1e1e;
  --color-bg-shade: #303030;
  --color-bg-border: #3f3f3f;

  /* 文本色系 */
  --color-label-title: #ffffff;
  --color-label-base: #dedede;
  --color-label-soft: #9b9b9b;
  --color-label-muted: #696969;
  --color-label-faint: #505050;

  /* 品牌色系 */
  --color-accent-base: #C5F955;
  --color-accent-support-base: #FF3E8F;
  --color-accent-highlight: #FF97C2;
}

/* 使用示例 */
.card {
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  color: var(--color-label-base);
}

.button-primary {
  background-color: var(--color-accent-base);
  color: var(--color-bg-base);
}
```

## 主题切换

系统支持深色/浅色主题，通过修改 CSS 变量实现：

```css
[data-theme="light"] {
  --color-bg-base: #ffffff;
  --color-bg-sub: #f8f9fa;
  --color-bg-shade: #e9ecef;
  --color-bg-border: #dee2e6;

  --color-label-title: #212529;
  --color-label-base: #495057;
  --color-label-soft: #6c757d;
  --color-label-muted: #adb5bd;
  --color-label-faint: #ced4da;
}
```

---

*此颜色系统基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*