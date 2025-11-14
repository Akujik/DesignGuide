# Meshy AI 设计系统

> 基于6个Meshy AI网站源代码提取的完整设计系统

## 概述

本项目从Meshy AI的6个核心网站源代码中提取并重建了完整的设计系统，包括设计令牌、组件库和交互预览。这为Meshy AI产品线提供了统一、可维护的设计基础。

## 📁 项目结构

```
output/
├── README.md                          # 项目说明文档
├── design-system/                     # 设计规范文档
│   ├── 01-design-tokens.md           # 设计令牌基础
│   ├── 02-color-system.md            # 颜色系统
│   ├── 03-typography.md              # 排版系统
│   ├── 04-spacing.md                 # 间距系统
│   ├── 05-layout.md                  # 布局系统
│   └── 06-animations.md              # 动画系统
├── component-library/                 # 组件库文档
│   ├── buttons.md                    # 按钮组件
│   ├── cards.md                      # 卡片组件
│   ├── forms.md                      # 表单组件
│   ├── navigation.md                 # 导航组件
│   └── hero-sections.md              # Hero区域组件
└── preview/                          # HTML预览文件
    ├── index.html                    # 主导航页面
    ├── colors.html                   # 颜色系统预览
    ├── typography.html               # 排版系统预览
    ├── spacing.html                  # 间距系统预览
    ├── buttons.html                  # 按钮组件预览
    ├── cards.html                    # 卡片组件预览
    ├── forms.html                    # 表单组件预览
    ├── navigation.html               # 导航组件预览
    └── hero-sections.html            # Hero组件预览
```

## 🎨 设计系统特性

### 核心特点

- **🌈 完整的颜色系统**: 支持浅色/深色主题，基于OKLCH色彩空间
- **📝 响应式排版**: 系统字体栈，8个字号级别，可读性优先
- **📏 8点网格系统**: 一致的间距和布局规则
- **🎭 丰富的动画**: 微妙的交互效果和过渡动画
- **♿ 无障碍友好**: WCAG 2.1 AA级标准，键盘导航支持
- **📱 移动优先**: 响应式设计，触摸优化

### 技术特性

- **CSS变量驱动**: 易于主题切换和维护
- **组件化架构**: 可复用的UI组件
- **语义化HTML**: 良好的SEO和可访问性
- **现代CSS**: Grid、Flexbox、Container Queries
- **性能优化**: 硬件加速动画，懒加载图片

## 🚀 快速开始

### 1. 浏览设计规范

从设计令牌开始了解系统的核心概念：

- [设计令牌基础](design-system/01-design-tokens.md) - 系统概述和使用原则
- [颜色系统](design-system/02-color-system.md) - 完整的色彩体系
- [排版系统](design-system/03-typography.md) - 字体和文本样式
- [间距系统](design-system/04-spacing.md) - 布局和间距规则

### 2. 查看组件库

了解可用的UI组件及其使用方法：

- [按钮组件](component-library/buttons.md) - 主要操作元素
- [卡片组件](component-library/cards.md) - 内容容器
- [表单组件](component-library/forms.md) - 数据输入控件
- [导航组件](component-library/navigation.md) - 导航模式
- [Hero区域](component-library/hero-sections.md) - 页面头部

### 3. 交互式预览

在浏览器中查看实时预览：

```bash
# 启动本地服务器（推荐）
npx serve output/preview

# 或使用Python
python -m http.server 8000 --directory output/preview
```

然后访问 http://localhost:8000 查看完整的预览系统。

## 🎯 核心设计令牌

### 颜色系统

```css
/* 主色调 */
--primary-color: #c5f955;           /* Meshy 绿色 */
--primary-color-hover: #a8e328;     /* 悬停状态 */

/* 语义颜色 */
--positive-color: var(--hydra-450); /* 成功 */
--negative-color: var(--rosa-450);  /* 错误 */
--attention-color: var(--costa-400);/* 警告 */

/* 主题颜色 */
--background-base-color: var(--pale-yellow-100); /* 浅色主题背景 */
--foreground-color: var(--pale-blue-200);         /* 前景色 */
--border-color: var(--pale-yellow-600);           /* 边框色 */
```

### 间距系统

```css
/* 8点网格基础 */
--spacing-xs: 0.25rem;  /* 4px */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 0.75rem;  /* 12px */
--spacing-lg: 1rem;     /* 16px */
--spacing-xl: 1.25rem;  /* 20px */
--spacing-2xl: 1.5rem;  /* 24px */
```

### 字体系统

```css
/* 字号 */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */

/* 字重 */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

## 🧩 组件使用示例

### 按钮组件

```html
<!-- 主要按钮 -->
<button class="button button-primary">主要操作</button>

<!-- 次要按钮 -->
<button class="button button-secondary">次要操作</button>

<!-- 危险按钮 -->
<button class="button button-destructive">删除</button>

<!-- 不同尺寸 -->
<button class="button button-primary button-sm">小按钮</button>
<button class="button button-primary button-lg">大按钮</button>
```

### 卡片组件

```html
<!-- 标准卡片 -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">卡片标题</h3>
  </div>
  <div class="card-content">
    <p>卡片内容</p>
  </div>
  <div class="card-footer">
    <button class="button button-primary">操作</button>
  </div>
</div>

<!-- 可交互卡片 -->
<a href="#" class="card card-clickable">
  <div class="card-content">
    <h4>点击查看详情</h4>
  </div>
</a>
```

### 表单组件

```html
<div class="form-group">
  <label for="email" class="form-label">邮箱地址</label>
  <input type="email" id="email" class="form-input" placeholder="example@email.com">
  <div class="form-help">请输入有效的邮箱地址</div>
</div>
```

## 🎨 主题系统

### 浅色主题（默认）

```css
:root {
  --background-base-color: #fafafa;
  --foreground-color: #18181b;
  --border-color: #e5e5e5;
  --primary-color: #c5f955;
}
```

### 深色主题

```css
[data-theme="dark"] {
  --background-base-color: #4fc3f7;
  --foreground-color: #f0f9ff;
  --border-color: #e3f2fd;
  --primary-color: #a8e328;
}
```

### 主题切换

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
```

## 📱 响应式设计

### 断点系统

```css
/* 移动优先断点 */
--breakpoint-sm: 640px;   /* 小屏幕 */
--breakpoint-md: 768px;   /* 中等屏幕 */
--breakpoint-lg: 1024px;  /* 大屏幕 */
--breakpoint-xl: 1280px;  /* 超大屏幕 */
```

### 容器系统

```css
.container-sm { max-width: 24rem; }  /* 384px */
.container-md { max-width: 28rem; }  /* 448px */
.container-lg { max-width: 32rem; }  /* 512px */
.container-xl { max-width: 36rem; }  /* 576px */
.container-2xl { max-width: 42rem; } /* 672px */
```

## ♿ 无障碍性

### 最佳实践

- **键盘导航**: 所有交互元素支持键盘操作
- **屏幕阅读器**: 使用语义化HTML和ARIA属性
- **颜色对比**: 确保文本对比度达到WCAG AA标准
- **触摸目标**: 移动设备最小触摸目标44px
- **动画控制**: 支持`prefers-reduced-motion`

### 示例

```html
<!-- 语义化结构 -->
<header role="banner">
  <nav aria-label="主导航">
    <ul>
      <li><a href="/" aria-current="page">首页</a></li>
    </ul>
  </nav>
</header>

<main role="main">
  <section aria-labelledby="section-title">
    <h1 id="section-title">页面标题</h1>
  </section>
</main>
```

## 🔧 自定义和扩展

### 添加新颜色

```css
:root {
  --custom-color-50: #f0f9ff;
  --custom-color-500: #3b82f6;
  --custom-color-900: #1e3a8a;
}
```

### 扩展间距

```css
:root {
  --spacing-3xl: 2rem;    /* 32px */
  --spacing-4xl: 2.5rem;  /* 40px */
  --spacing-5xl: 3rem;    /* 48px */
}
```

### 创建新组件

```css
.new-component {
  /* 使用设计令牌 */
  padding: var(--spacing-lg);
  background-color: var(--background-base-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  color: var(--foreground-color);
}
```

## 🧪 测试指南

### 设计令牌测试

- [ ] 所有CSS变量正确定义
- [ ] 主题切换功能正常
- [ ] 颜色对比度符合标准
- [ ] 响应式断点正确

### 组件测试

- [ ] 组件样式一致性
- [ ] 交互状态正常
- [ ] 键盘导航完整
- [ ] 屏幕阅读器友好

### 浏览器兼容性

- [ ] Chrome/Edge (最新版本)
- [ ] Firefox (最新版本)
- [ ] Safari (最新版本)
- [ ] 移动设备浏览器

## 📈 性能优化

### CSS优化

- 使用CSS变量减少重复
- 避免复杂的选择器
- 合理使用`will-change`
- 启用CSS containment

### 图片优化

- 使用现代格式（WebP、AVIF）
- 响应式图片
- 懒加载非关键图片
- 适当的图片尺寸

### 动画优化

- 使用`transform`和`opacity`
- 避免布局重排
- 尊重`prefers-reduced-motion`
- 硬件加速

## 🤝 贡献指南

### 开发流程

1. Fork 项目
2. 创建功能分支
3. 修改设计令牌或组件
4. 更新文档和预览
5. 提交Pull Request

### 代码规范

- 使用语义化的CSS类名
- 遵循BEM命名约定
- 添加适当的注释
- 确保可访问性

### 文档更新

- 更新相关的设计令牌文档
- 添加组件使用示例
- 更新预览页面
- 更新CHANGELOG

## 📄 许可证

本项目基于 MIT 许可证开源。

## 🔗 相关链接

- [Meshy AI 官网](https://meshy.ai)
- [GitHub 仓库](https://github.com/meshy-ai/design-system)
- [设计系统博客](https://blog.meshy.ai/design-system)
- [组件库文档](component-library/)

---

**Meshy AI 设计系统 v1.0.0**
*最后更新: 2025年11月14日*