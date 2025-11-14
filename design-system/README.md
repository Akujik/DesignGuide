# Meshy AI 设计系统

欢迎访问 Meshy AI 完整的设计系统文档。本设计系统基于6个官网源码的深度分析，提供了完整的设计规范和组件库。

## 📋 文档结构

### 核心设计系统
- [`01-design-tokens.md`](./01-design-tokens.md) - 设计令牌系统
- [`02-color-system.md`](./02-color-system.md) - 颜色系统规范
- [`03-typography.md`](./03-typography.md) - 字体排版系统
- [`04-spacing.md`](./04-spacing.md) - 间距与布局系统
- [`05-components.md`](./05-components.md) - 组件系统规范
- [`06-animations.md`](./06-animations.md) - 动画与交互系统

### 组件库文档
- [`07-components-library/`](./07-components-library/) - 完整组件库文档
  - [`README.md`](./07-components-library/README.md) - 组件库总览
  - [`buttons.md`](./07-components-library/buttons.md) - 按钮组件
  - [`forms.md`](./07-components-library/forms.md) - 表单组件
  - [`cards.md`](./07-components-library/cards.md) - 卡片组件
  - [`navigation.md`](./07-components-library/navigation.md) - 导航组件
  - [`modals.md`](./07-components-library/modals.md) - 模态框组件
  - [`badges.md`](./07-components-library/badges.md) - 徽章组件
  - [`avatars.md`](./07-components-library/avatars.md) - 头像组件

### 交互式预览
- [`../preview/`](../preview/) - 交互式组件预览系统
  - [`index.html`](../preview/index.html) - 实时预览界面

## 🚀 快速开始

### 使用设计令牌
```css
:root {
  /* 品牌主色 */
  --meshy-green-50: #edffc5;
  --meshy-green-500: #C5F955;
  --meshy-green-900: #4b801d;

  /* 语义颜色 */
  --meshy-success: #28a745;
  --meshy-warning: #ffc107;
  --meshy-error: #dc3545;

  /* 间距系统 */
  --meshy-space-xs: 4px;
  --meshy-space-sm: 8px;
  --meshy-space-md: 16px;
  --meshy-space-lg: 24px;
  --meshy-space-xl: 32px;
}
```

### 使用组件
```jsx
import { Button, Card, Form } from '@meshy/ui-components';

function App() {
  return (
    <div className="meshy-app">
      <Button variant="primary" size="large">
        开始使用
      </Button>

      <Card variant="elevated">
        <Card.Header>欢迎使用 Meshy AI</Card.Header>
        <Card.Body>
          <Form>
            <Form.Input type="email" placeholder="邮箱地址" />
            <Button type="submit">提交</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
```

## 🎨 设计原则

1. **一致性** - 所有组件遵循统一的设计语言和交互模式
2. **可访问性** - 符合WCAG 2.1 AA级可访问性标准
3. **响应式** - 移动优先，适配各种屏幕尺寸
4. **可定制** - 提供丰富的变体和配置选项
5. **性能优** - 优化渲染性能和用户体验

## 📊 系统概览

- **颜色系统**: 785种颜色，包含品牌色、语义色、中性色
- **字体系统**: 4种字体栈，响应式排版
- **间距系统**: 8px网格，27个间距值
- **组件库**: 7个核心组件类型，7512个实现实例
- **响应式**: 422个媒体查询，支持移动优先设计
- **动画**: 完整的过渡和动画系统

## 🌐 品牌色彩

- **主绿色**: `#C5F955` (Meshy Green)
- **主粉色**: `#FF97C2` (Meshy Pink)
- **渐变**: 从绿色到粉色的品牌渐变

## 📱 响应式断点

```css
/* 移动优先设计 */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1440px) { /* 2xl */ }
```

## 📖 开发指南

### 1. 安装依赖
```bash
npm install @meshy/design-system
```

### 2. 导入样式
```css
@import '@meshy/design-system/dist/styles.css';
```

### 3. 使用设计令牌
```js
import { tokens } from '@meshy/design-system';

const spacing = tokens.spacing;
const colors = tokens.colors;
```

## 🛠️ 工具和资源

- [`../scripts/`](../scripts/) - 分析和验证工具
- [`../design-system-archive/`](../design-system-archive/) - 详细分析数据
- [`../targets/`](../targets/) - 源码截图和MD文件

## 🤝 贡献

1. 遵循现有的设计系统和组件规范
2. 确保新组件的完整性和一致性
3. 编写清晰的文档和使用示例
4. 进行充分的测试和可访问性检查

---

*最后更新: 2025年11月14日*
*基于6个Meshy AI官网源码分析*