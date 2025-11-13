# 设计令牌总览 (Design Tokens Overview)

## 概述

本文档概述了从 Meshy.ai 网站系统中提取的完整设计令牌系统。Meshy.ai 使用了现代化的基于 CSS 变量的设计令牌体系，确保了设计一致性和可维护性。

## 设计令牌分类

### 1. 颜色系统 (Color System)
- **主色调 (Primary Colors)**: 品牌标识色 #c5f955 (亮绿色)
- **辅助色 (Support Colors)**: #ff3e8f (洋红色), #ff97c2 (粉色)
- **背景色 (Background Colors)**: 深色主题背景 #181818, #1e1e1e, #303030
- **文本色 (Text Colors)**: 从白色到灰色的层次化文本系统
- **语义色 (Semantic Colors)**: 成功、错误、警告、信息状态色

### 2. 字体系统 (Typography System)
- **字体族**: Inter, Inter Tight, Figtree, 系统字体
- **字号体系**: 基于 rem 的响应式字号系统 (0.75rem - 2rem)
- **字重**: 300 (Light) 到 700 (Bold)
- **行高**: 紧凑到宽松的行高变化

### 3. 间距系统 (Spacing System)
- **基础单位**: 0.25rem (4px)
- **间距层级**: xs(0.25rem), sm(0.5rem), md(0.75rem), lg(1rem), 2xl(1.5rem)

### 4. 圆角系统 (Border Radius)
- **尺寸范围**: 0.125rem - 2rem
- **应用层级**: 从微小到超大圆角

### 5. 动效系统 (Animation System)
- **渐变动画**: mesh-gradient-rotation (5s 无限循环)
- **滑入动画**: slide-down-and-fade, slide-up-and-fade
- **脉冲动画**: pulse-quicker
- **缓动函数**: cubic-bezier(.16,1,.3,1)

## 技术实现

### CSS 变量命名规范
```css
/* 颜色变量 */
--color-[类别]-[属性]: [值]

/* 示例 */
--color-accent-base: #c5f955;
--color-bg-base: #181818;
--color-label-title: #ffffff;

/* 字体变量 */
--font-[属性]: [值]

/* 示例 */
--font-sans: ui-sans-serif, system-ui, sans-serif;
--text-base: 1rem;

/* 间距变量 */
--spacing-[尺寸]: [值]
--radius-[尺寸]: [值]

/* 动画变量 */
--animate-[名称]: [值]
```

### 使用原则
1. **语义化命名**: 使用语义化的变量名而非直接颜色值
2. **层级关系**: 保持设计令牌的层级结构
3. **响应式设计**: 所有令牌都支持响应式场景
4. **主题支持**: 令牌系统支持深色/浅色主题切换

## 设计令牌映射表

| 类别 | 令牌前缀 | 用途 | 示例 |
|------|----------|------|------|
| 颜色 | `--color-` | 所有颜色定义 | `--color-accent-base` |
| 字体 | `--font-`, `--text-` | 字体族和字号 | `--font-sans`, `--text-lg` |
| 间距 | `--spacing-`, `--radius-` | 间距和圆角 | `--spacing-md` |
| 动画 | `--animate-` | 动画效果 | `--animate-pulse-quicker` |

## 相关文档

- [02-color-system.md](02-color-system.md) - 详细颜色系统规范
- [03-typography.md](03-typography.md) - 字体系统规范
- [04-spacing.md](04-spacing.md) - 间距系统规范
- [05-layout.md](05-layout.md) - 布局系统规范
- [06-animations.md](06-animations.md) - 动效系统规范

## 版本信息

- **来源**: Meshy.ai 官方网站 (5个子页面综合分析)
- **分析日期**: 2025-11-14
- **设计版本**: 1.0.0