# Meshy.ai Design System Preview

## 文件结构说明

```
preview/
├── README.md                     # 本说明文件
├── v1-old/                       # 旧版本设计系统
│   ├── design-system.css         # 旧版本样式文件
│   ├── index.html               # 旧版本首页
│   ├── colors.html              # 旧版本颜色系统
│   ├── buttons.html             # 旧版本按钮组件
│   ├── typography.html          # 旧版本字体系统
│   ├── spacing.html             # 旧版本间距系统
│   ├── layout.html              # 旧版本布局系统
│   ├── animations.html          # 旧版本动效系统
│   ├── cards.html               # 旧版本卡片组件
│   ├── forms.html               # 旧版本表单组件
│   ├── navigation.html          # 旧版本导航组件
│   └── hero-sections.html       # 旧版本Hero区域
│
└── v2-new/                      # 新版本设计系统
    ├── assets/
    │   ├── css/
    │   │   └── design-system.css # 新版本样式文件
    │   └── js/
    │       └── design-system.js # 新版本交互脚本
    ├── index.html               # 新版本首页
    ├── colors.html              # 新版本颜色系统
    ├── buttons.html             # 新版本按钮组件
    └── README.md               # 新版本说明（可选）
```

## 版本对比

### v1-old (旧版本)
- 文章式布局，简单直接
- 基础的左侧导航
- 原有的CSS设计令牌系统
- 简单的代码展示和复制功能
- 基础的响应式设计

### v2-new (新版本)
- 现代化卡片式布局
- 增强的导航系统，包含搜索功能
- 全新的视觉设计语言
- 优化的组件展示方式
- 完整的交互效果和动画
- 无障碍支持
- 开发者友好的代码示例

## 使用方式

### 查看旧版本
直接打开 `v1-old/index.html` 即可查看旧版本的设计系统

### 查看新版本
直接打开 `v2-new/index.html` 即可查看新版本的设计系统

## 组件内容说明

**重要说明**：两个版本包含相同的组件内容和设计令牌，差异仅在于：

1. **展示方式**：新版本采用现代化的视觉设计和交互体验
2. **代码结构**：新版本重构了CSS架构和HTML结构
3. **用户体验**：新版本提供了更好的导航和搜索功能

所有原有的设计令牌、组件规范和使用指南都保持不变，只是呈现方式得到了优化。

## 开发建议

- 如果您需要快速参考组件规范，建议使用新版本 v2-new
- 如果您需要兼容旧版本的样式，可以参考 v1-old
- 两个版本可以并存，满足不同的使用需求