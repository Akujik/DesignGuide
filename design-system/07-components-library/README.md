# Meshy AI 组件库文档

生成时间: 2025/11/14 22:35:00

## 🎯 组件库概览

Meshy AI组件库包含7个核心组件类型，提供完整的用户界面构建块。

### 📊 统计概览

| 组件类型 | 总匹配数 | 变体数量 | 状态数量 | 网站覆盖 |
|----------|----------|----------|----------|----------|
| [buttons](./buttons.md) | 333 | 0 | 2 | 1/6 |
| [forms](./forms.md) | 6499 | 1 | 0 | 1/6 |
| [cards](./cards.md) | 146 | 0 | 0 | 1/6 |
| [navigation](./navigation.md) | 352 | 0 | 0 | 1/6 |
| [modals](./modals.md) | 27 | 0 | 0 | 1/6 |
| [badges](./badges.md) | 63 | 0 | 0 | 1/6 |
| [avatars](./avatars.md) | 79 | 0 | 0 | 1/6 |

## 🚀 快速开始

### 安装和设置

```bash
# 安装组件库
npm install @meshy/ui-components

# 导入样式
import '@meshy/ui-components/dist/styles.css';
```

### 基本使用

```jsx
import { Button, Card, Form } from '@meshy/ui-components';

function App() {
  return (
    <div className="app">
      <Button variant="primary" size="large">
        开始使用
      </Button>
      <Card variant="elevated">
        <Card.Header>欢迎使用</Card.Header>
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

1. **一致性**: 所有组件遵循统一的设计语言和交互模式
2. **可访问性**: 符合WCAG 2.1 AA级可访问性标准
3. **响应式**: 移动优先，适配各种屏幕尺寸
4. **可定制**: 提供丰富的变体和配置选项
5. **性能优**: 优化渲染性能和用户体验

## 🎨 主题定制

### CSS变量

```css
:root {
  --meshy-primary-color: #C5F955;
  --meshy-secondary-color: #FF97C2;
  --meshy-border-radius: 8px;
  --meshy-font-family: Inter, sans-serif;
}
```

### 深色主题

```css
[data-theme="dark"] {
  --meshy-bg-primary: #1a1a1a;
  --meshy-text-primary: #ffffff;
  --meshy-border-color: #333333;
}
```

## 🤝 贡献指南

1. 遵循现有的设计系统和组件规范
2. 确保新组件的完整性和一致性
3. 编写清晰的文档和使用示例
4. 进行充分的测试和可访问性检查

