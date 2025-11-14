# 表单组件

生成时间: 2025/11/14 22:35:00

## 📊 统计信息

- **总匹配数**: 6499
- **变体数量**: 1
- **状态数量**: 0
- **实现数量**: 0
- **网站覆盖**: 1/6

### 🌐 网站使用分布

- **Contact Us** (contact): 6499 匹配, 1 变体, 0 实现

## 🎨 变体类型

| 变体 | 描述 | 使用网站 |
|------|------|----------|
| `date` | 日期选择器 | Contact Us |

## 📖 使用指南


### 基本输入
```html
<input type="text" class="form-input" placeholder="请输入内容">
<input type="email" class="form-input" placeholder="邮箱地址">
<input type="password" class="form-input" placeholder="密码">
```

### 验证状态
```html
<input type="text" class="form-input form-error" placeholder="错误状态">
<input type="text" class="form-input form-success" placeholder="成功状态">
```

### 表单组
```html
<div class="form-group">
  <label class="form-label">用户名</label>
  <input type="text" class="form-input" required>
  <span class="form-error-message">请输入用户名</span>
</div>
```
        ## ✅ 最佳实践


1. **标签关联**: 确保每个输入框都有对应的label标签
2. **输入验证**: 提供实时验证和清晰的错误信息
3. **移动优化**: 使用适当的input类型激活正确的键盘
4. **键盘导航**: 支持Tab键导航和键盘操作
        