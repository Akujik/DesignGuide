# 设计令牌 (Design Tokens)

> Meshy AI 设计系统的核心基础元素

设计令牌是设计系统中最小的、原子化的设计决策元素。它们构成了整个Meshy AI产品线的设计基础，确保所有产品在视觉上保持一致性。

## 令牌分类

### 1. 颜色令牌 (Color Tokens)
- **基础颜色 (Base Colors)**: 原始色彩定义
- **语义颜色 (Semantic Colors)**: 具有特定含义的颜色
- **主题颜色 (Theme Colors)**: 支持深色/浅色主题的颜色系统

### 2. 尺寸令牌 (Size Tokens)
- **间距令牌 (Spacing)**: 基于8点网格的间距系统
- **尺寸令牌 (Sizing)**: 组件和元素的尺寸定义

### 3. 排版令牌 (Typography Tokens)
- **字体族 (Font Families)**: 系统字体栈定义
- **字号 (Font Sizes)**: 响应式字号系统
- **字重 (Font Weights)**: 字体粗细级别
- **行高 (Line Heights)**: 文本行高定义

### 4. 效果令牌 (Effect Tokens)
- **圆角 (Border Radius)**: 元素圆角半径
- **阴影 (Shadows)**: 阴影效果定义
- **动画 (Animations)**: 过渡和动画效果

## 使用原则

### 1. 始终使用令牌
不要使用硬编码值（如 `#ffffff`、`16px`），始终使用对应的设计令牌。

### 2. 语义化优先
当有语义颜色可用时，优先使用语义颜色（如 `--positive-color`）而不是基础颜色（如 `--green-500`）。

### 3. 主题感知
使用主题令牌（如 `--background-base-color`）而不是绝对颜色，以支持自动主题切换。

### 4. 响应式设计
使用响应式字号令牌，确保在不同设备上都有良好的阅读体验。

## 令牌命名规范

### 1. 分层命名
```
--{category}-{subcategory}-{property}-{state}
```

示例：
- `--color-primary-base`: 主色基础色
- `--spacing-md`: 中等间距
- `--font-size-sm-plus`: 小号加粗字体

### 2. 主题前缀
- `--light-*`: 浅色主题专用
- `--dark-*`: 深色主题专用
- 无前缀: 当前主题（默认浅色）

### 3. 状态后缀
- `-hover`: 悬停状态
- `-active`: 激活状态
- `-focus`: 焦点状态
- `-disabled`: 禁用状态

## 技术实现

### CSS变量 (Custom Properties)
所有设计令牌都使用CSS自定义属性实现：

```css
:root {
  --primary-color: #c5f955;
  --spacing-md: 16px;
  --font-size-base: 1rem;
}

[data-theme="dark"] {
  --primary-color: #a8e328;
  --background-base-color: #0f0f0f;
}
```

### 令牌引用
令牌可以引用其他令牌：

```css
:root {
  --button-primary-bg: var(--primary-color);
  --button-primary-text: var(--background-inverse-color);
}
```

## 维护指南

### 1. 添加新令牌
1. 确定令牌分类和用途
2. 按照命名规范命名
3. 在相应文档中记录
4. 更新组件使用示例

### 2. 修改现有令牌
1. 评估影响范围
2. 测试所有使用场景
3. 更新相关文档
4. 通知开发团队

### 3. 废弃令牌
1. 标记为废弃但不立即删除
2. 提供迁移建议
3. 在下个主版本中移除

## 相关文档

- [颜色系统](./02-color-system.md) - 详细的颜色使用指南
- [排版系统](./03-typography.md) - 字体和文本样式
- [间距系统](./04-spacing.md) - 布局和间距规范
- [布局系统](./05-layout.md) - 网格和容器系统
- [动画系统](./06-animations.md) - 动画和过渡效果

---

*最后更新: 2025年11月14日*