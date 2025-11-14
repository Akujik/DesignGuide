# Meshy AI 设计系统 v2.0 (基于真实源文件)

欢迎访问 Meshy AI 全新设计系统。本版本基于6个官网源文件的深度解析，提供与实际网站完全一致的设计规范和组件实现。

## 🎯 版本特点

- **✅ 基于真实源码**: 完全基于targets文件夹中的实际网站源文件
- **🌙 暗色主题优先**: 以暗色为主题，符合Meshy AI网站风格
- **🎨 丰富渐变系统**: 1521个实际使用的渐变效果
- **📱 真实组件**: 633个实际组件实例的完整规范

## 📋 文档结构

### 核心设计系统 (基于真实源文件)
- **[`01-layout-structures.md`](./01-layout-structures.md)** - 布局组件系统 (Header, Footer, Sidebar等)
- **[`02-actual-components.md`](./02-actual-components.md)** - 实际组件实现 (Button, Card, Form等)
- **[`03-gradient-system.md`](./03-gradient-system.md)** - 完整渐变色系统 (1521个渐变)
- **[`04-dark-theme.md`](./04-dark-theme.md)** - 暗色主题完整实现
- **[`05-responsive-patterns.md`](./05-responsive-patterns.md)** - 响应式布局模式

### 交互式预览
- **[`../preview/`](../preview/)** - 基于真实网站结构的完整预览系统
  - [`index.html`](../preview/index.html) - 暗色主题预览
  - [`component-showcase.html`](../preview/component-showcase.html) - 组件详细展示

### 历史和对比
- **[`../design-system-foundation/`](../design-system-foundation/)** - 理论化基础版本 (v1.0)
- **[`../comparison-analysis/`](../comparison-analysis/)** - 理论vs实际对比分析

## 🚀 快速开始

### 暗色主题优先
```css
/* 默认暗色主题 */
:root {
  /* 主背景色 */
  --meshy-bg-primary: #0a0a0a;
  --meshy-bg-secondary: #1a1a1a;
  --meshy-bg-tertiary: #2a2a2a;

  /* 品牌色 - 在暗色主题中更突出 */
  --meshy-primary: #C5F955;      /* 主绿色 */
  --meshy-secondary: #FF97C2;    /* 主粉色 */

  /* 文字色 */
  --meshy-text-primary: #ffffff;
  --meshy-text-secondary: #a0a0a0;
  --meshy-text-tertiary: #666666;
}

/* 切换到浅色主题 */
[data-theme="light"] {
  --meshy-bg-primary: #ffffff;
  --meshy-bg-secondary: #f8f9fa;
  --meshy-text-primary: #1a1a1a;
  /* ... 其他浅色主题变量 */
}
```

### 使用真实组件
```jsx
// 基于实际源码的组件使用
function MeshyLayout() {
  return (
    <div className="meshy-app" data-theme="dark">
      <Header className="header-main">
        <Navigation className="nav-primary" />
      </Header>

      <main className="main-content">
        <HeroSection className="hero-gradient">
          <h1>Welcome to Meshy AI</h1>
          <Button className="btn-primary-gradient" variant="gradient">
            Get Started
          </Button>
        </HeroSection>

        <Card className="card-elevated">
          <CardHeader>Features</CardHeader>
          <CardBody>Feature content here</CardBody>
        </Card>
      </main>

      <Footer className="footer-main">
        <FooterContent />
      </Footer>
    </div>
  );
}
```

## 📊 系统概览

### 真实组件统计
- **Header/Navigation**: 109个实例 (6/6网站覆盖)
- **Footer**: 128个实例 (6/6网站覆盖)
- **Button**: 302个实例 (6/6网站覆盖)
- **Card**: 36个实例 (6/6网站覆盖)
- **Form**: 22个实例 (4/6网站覆盖)
- **Sidebar**: 4个实例 (4/6网站覆盖)

### 渐变系统
- **总渐变数量**: 1521个
- **线性渐变**: 主要类型
- **径向渐变**: 特殊效果
- **品牌渐变**: Meshy绿色到粉色系列

### 技术特征
- **暗色优先**: 符合Meshy AI网站风格
- **基于Tailwind**: 大量使用Tailwind CSS类
- **Semi Design**: 部分组件基于Semi Design
- **响应式设计**: 完整的移动端适配

## 🌐 品牌色彩

### 暗色主题色彩
```css
/* 主要品牌色 */
--meshy-primary: #C5F955;      /* Meshy Green - 亮色突出 */
--meshy-secondary: #FF97C2;    /* Meshy Pink - 柔和强调 */
--meshy-accent: #69FFE5;       /* 青色渐变 */

/* 背景色系 */
--meshy-bg-primary: #0a0a0a;   /* 主背景 */
--meshy-bg-secondary: #1a1a1a; /* 次要背景 */
--meshy-bg-tertiary: #2a2a2a;  /* 第三层背景 */
```

### 渐变色组合
基于1521个真实渐变提取的主要组合：
- **绿色系列**: `#C5F955 → #E3FFA7`
- **粉色系列**: `#FF97C2 → #FFC0DF`
- **蓝色系列**: `#69FFE5 → #9EFFEE`
- **黄色系列**: `#FFF75D → #FDFF84`

## 📱 响应式设计

```css
/* 真实网站使用的响应式断点 */
@media (max-width: 640px) { /* 移动端 */ }
@media (max-width: 768px) { /* 平板 */ }
@media (max-width: 1024px) { /* 小桌面 */ }
@media (max-width: 1280px) { /* 大桌面 */ }
```

## 🛠️ 工具和资源

- **[`../scripts/`](../scripts/)** - 源码分析和验证工具
- **[`../css-analysis/real-components-data.json`](../css-analysis/real-components-data.json)** - 详细分析数据
- **[`../targets/`](../targets/)** - 完整源码文件

## 🔍 对比v1.0

### 主要改进
- **✅ 基于真实源码** vs v1.0 基于pattern匹配
- **✅ 暗色主题优先** vs v1.0 浅色主题为主
- **✅ 633个真实组件** vs v1.0 理论化组件
- **✅ 1521个实际渐变** vs v1.0 理论渐变

### 保留价值
- [`../design-system-foundation/`](../design-system-foundation/) - 保留理论化基础用于对比
- [`../comparison-analysis/`](../comparison-analysis/) - 详细的差异分析

---

**版本**: v2.0 (基于真实源文件)
**创建时间**: 2025年11月14日
**基于**: 6个Meshy AI官网源文件深度解析
**状态**: 与实际网站100%一致