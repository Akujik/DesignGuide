# 表单组件 (Forms)

> Meshy AI 的表单组件库和使用指南

## 概述

表单是用户输入和数据收集的核心组件。Meshy AI的表单系统提供了一致的输入控件、验证反馈、错误处理和无障碍支持，确保用户能够轻松、准确地完成数据输入。

## 输入控件

### 1. 文本输入框

最基础的文本输入控件。

```html
<div class="form-group">
  <label for="username" class="form-label">用户名</label>
  <input type="text" id="username" class="form-input" placeholder="请输入用户名">
  <div class="form-help">用户名长度为3-20个字符</div>
</div>
```

#### 样式规格
```css
.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-medium);
  color: var(--foreground-color);
  font-size: var(--text-sm-plus);
}

.form-input {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--background-base-color);
  color: var(--foreground-color);
  font-size: var(--text-base);
  transition: border-color var(--default-transition-duration),
              box-shadow var(--default-transition-duration);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}

.form-input::placeholder {
  color: var(--foreground-quiet-color);
}

.form-help {
  margin-top: var(--spacing-xs);
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
}
```

### 2. 密码输入框

```html
<div class="form-group">
  <label for="password" class="form-label">密码</label>
  <div class="form-input-wrapper">
    <input type="password" id="password" class="form-input" placeholder="请输入密码">
    <button type="button" class="form-input-toggle" aria-label="显示密码">
      <svg class="icon">👁️</svg>
    </button>
  </div>
</div>
```

```css
.form-input-wrapper {
  position: relative;
}

.form-input-toggle {
  position: absolute;
  top: 50%;
  right: var(--spacing-md);
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: var(--spacing-xs);
  cursor: pointer;
  color: var(--foreground-quiet-color);
  border-radius: var(--radius-sm);
}

.form-input-toggle:hover {
  color: var(--foreground-color);
  background-color: var(--background-subtle-color);
}

.form-input-toggle .icon {
  width: 20px;
  height: 20px;
}
```

### 3. 邮箱输入框

```html
<div class="form-group">
  <label for="email" class="form-label">邮箱地址</label>
  <input type="email" id="email" class="form-input" placeholder="example@email.com">
  <div class="form-error">请输入有效的邮箱地址</div>
</div>
```

```css
.form-error {
  margin-top: var(--spacing-xs);
  font-size: var(--text-sm);
  color: var(--negative-color);
  display: none;
}

.form-group.has-error .form-error {
  display: block;
}

.form-group.has-error .form-input {
  border-color: var(--negative-color);
}

.form-group.has-error .form-input:focus {
  box-shadow: 0 0 0 3px rgba(var(--negative-color-rgb), 0.1);
}
```

### 4. 搜索输入框

```html
<div class="form-group">
  <div class="form-input-wrapper">
    <input type="search" id="search" class="form-input form-input-search" placeholder="搜索...">
    <div class="form-input-icon">
      <svg class="icon">🔍</svg>
    </div>
  </div>
</div>
```

```css
.form-input-search {
  padding-left: var(--spacing-xl);
}

.form-input-icon {
  position: absolute;
  top: 50%;
  left: var(--spacing-md);
  transform: translateY(-50%);
  color: var(--foreground-quiet-color);
  pointer-events: none;
}

.form-input-icon .icon {
  width: 20px;
  height: 20px;
}
```

## 选择控件

### 1. 下拉选择框

```html
<div class="form-group">
  <label for="country" class="form-label">国家/地区</label>
  <select id="country" class="form-select">
    <option value="">请选择国家</option>
    <option value="cn">中国</option>
    <option value="us">美国</option>
    <option value="jp">日本</option>
  </select>
</div>
```

```css
.form-select {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--background-base-color);
  color: var(--foreground-color);
  font-size: var(--text-base);
  cursor: pointer;
  transition: border-color var(--default-transition-duration),
              box-shadow var(--default-transition-duration);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='currentColor' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--spacing-md) center;
  padding-right: var(--spacing-xl);
}

.form-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}
```

### 2. 单选按钮组

```html
<div class="form-group">
  <label class="form-label">性别</label>
  <div class="radio-group">
    <label class="radio-item">
      <input type="radio" name="gender" value="male" class="radio-input">
      <span class="radio-label">男</span>
    </label>
    <label class="radio-item">
      <input type="radio" name="gender" value="female" class="radio-input">
      <span class="radio-label">女</span>
    </label>
    <label class="radio-item">
      <input type="radio" name="gender" value="other" class="radio-input">
      <span class="radio-label">其他</span>
    </label>
  </div>
</div>
```

```css
.radio-group {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.radio-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--text-base);
}

.radio-input {
  position: absolute;
  opacity: 0;
}

.radio-label {
  position: relative;
  padding-left: var(--spacing-lg);
  cursor: pointer;
}

.radio-label::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  background-color: var(--background-base-color);
  transition: all var(--default-transition-duration);
}

.radio-label::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%) scale(0);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--primary-color);
  transition: transform var(--default-transition-duration);
}

.radio-input:checked + .radio-label::before {
  border-color: var(--primary-color);
}

.radio-input:checked + .radio-label::after {
  transform: translateY(-50%) scale(1);
}

.radio-input:focus + .radio-label::before {
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}
```

### 3. 复选框组

```html
<div class="form-group">
  <label class="form-label">兴趣爱好</label>
  <div class="checkbox-group">
    <label class="checkbox-item">
      <input type="checkbox" value="reading" class="checkbox-input">
      <span class="checkbox-label">阅读</span>
    </label>
    <label class="checkbox-item">
      <input type="checkbox" value="music" class="checkbox-input">
      <span class="checkbox-label">音乐</span>
    </label>
    <label class="checkbox-item">
      <input type="checkbox" value="sports" class="checkbox-input">
      <span class="checkbox-label">运动</span>
    </label>
  </div>
</div>
```

```css
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.checkbox-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--text-base);
}

.checkbox-input {
  position: absolute;
  opacity: 0;
}

.checkbox-label {
  position: relative;
  padding-left: var(--spacing-lg);
  cursor: pointer;
}

.checkbox-label::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--background-base-color);
  transition: all var(--default-transition-duration);
}

.checkbox-label::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%) scale(0);
  color: var(--background-inverse-color);
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  transition: transform var(--default-transition-duration);
}

.checkbox-input:checked + .checkbox-label::before {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.checkbox-input:checked + .checkbox-label::after {
  transform: translateY(-50%) scale(1);
}

.checkbox-input:focus + .checkbox-label::before {
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}
```

### 4. 开关控件

```html
<div class="form-group">
  <label class="form-label">通知设置</label>
  <div class="switch-group">
    <label class="switch-item">
      <input type="checkbox" class="switch-input">
      <span class="switch-label">邮件通知</span>
    </label>
    <label class="switch-item">
      <input type="checkbox" class="switch-input" checked>
      <span class="switch-label">推送通知</span>
    </label>
  </div>
</div>
```

```css
.switch-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.switch-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.switch-input {
  position: absolute;
  opacity: 0;
}

.switch-label {
  position: relative;
  padding-left: var(--spacing-xl);
  flex: 1;
  cursor: pointer;
}

.switch-label::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 44px;
  height: 24px;
  background-color: var(--border-color);
  border-radius: 12px;
  transition: background-color var(--default-transition-duration);
}

.switch-label::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: all var(--default-transition-duration);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.switch-input:checked + .switch-label::before {
  background-color: var(--primary-color);
}

.switch-input:checked + .switch-label::after {
  right: 2px;
}
```

## 文本区域

```html
<div class="form-group">
  <label for="message" class="form-label">留言内容</label>
  <textarea id="message" class="form-textarea" rows="4" placeholder="请输入您的留言..."></textarea>
  <div class="form-help">最多500个字符</div>
</div>
```

```css
.form-textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--background-base-color);
  color: var(--foreground-color);
  font-size: var(--text-base);
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  transition: border-color var(--default-transition-duration),
              box-shadow var(--default-transition-duration);
}

.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}

.form-textarea::placeholder {
  color: var(--foreground-quiet-color);
}
```

## 文件上传

```html
<div class="form-group">
  <label class="form-label">上传文件</label>
  <div class="file-upload">
    <input type="file" id="file" class="file-input" multiple>
    <label for="file" class="file-label">
      <div class="file-icon">
        <svg class="icon">📁</svg>
      </div>
      <div class="file-text">
        <p class="file-title">点击或拖拽文件到这里</p>
        <p class="file-subtitle">支持多种格式，单个文件最大10MB</p>
      </div>
    </label>
    <div class="file-list">
      <div class="file-item">
        <div class="file-info">
          <span class="file-name">document.pdf</span>
          <span class="file-size">2.3 MB</span>
        </div>
        <button type="button" class="file-remove" aria-label="移除文件">
          <svg class="icon">✕</svg>
        </button>
      </div>
    </div>
  </div>
</div>
```

```css
.file-upload {
  border: 2px dashed var(--border-color);
  border-radius: var(--radius-lg);
  background-color: var(--background-subtle-color);
  transition: border-color var(--default-transition-duration),
              background-color var(--default-transition-duration);
}

.file-upload.dragover {
  border-color: var(--primary-color);
  background-color: rgba(var(--primary-color-rgb), 0.05);
}

.file-input {
  display: none;
}

.file-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xl);
  cursor: pointer;
  text-align: center;
}

.file-icon .icon {
  width: 48px;
  height: 48px;
  color: var(--foreground-quiet-color);
  margin-bottom: var(--spacing-md);
}

.file-title {
  font-weight: var(--font-weight-medium);
  color: var(--foreground-color);
  margin-bottom: var(--spacing-xs);
}

.file-subtitle {
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
}

.file-list {
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-md);
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  background-color: var(--background-base-color);
}

.file-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.file-name {
  font-weight: var(--font-weight-medium);
  color: var(--foreground-color);
}

.file-size {
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
}

.file-remove {
  background: none;
  border: none;
  padding: var(--spacing-xs);
  cursor: pointer;
  color: var(--foreground-quiet-color);
  border-radius: var(--radius-sm);
}

.file-remove:hover {
  color: var(--negative-color);
  background-color: var(--background-subtle-color);
}

.file-remove .icon {
  width: 16px;
  height: 16px;
}
```

## 表单布局

### 1. 垂直布局

```html
<form class="form-vertical">
  <div class="form-group">
    <label class="form-label">姓名</label>
    <input type="text" class="form-input">
  </div>
  <div class="form-group">
    <label class="form-label">邮箱</label>
    <input type="email" class="form-input">
  </div>
  <div class="form-actions">
    <button type="button" class="button button-secondary">取消</button>
    <button type="submit" class="button button-primary">提交</button>
  </div>
</form>
```

```css
.form-vertical {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-actions {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
  margin-top: var(--spacing-xl);
}
```

### 2. 水平布局

```html
<form class="form-horizontal">
  <div class="form-group">
    <label class="form-label">姓名</label>
    <input type="text" class="form-input">
  </div>
  <div class="form-group">
    <label class="form-label">邮箱</label>
    <input type="email" class="form-input">
  </div>
  <div class="form-actions">
    <button type="submit" class="button button-primary">提交</button>
  </div>
</form>
```

```css
.form-horizontal {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.form-horizontal .form-label {
  margin-bottom: 0;
  margin-right: var(--spacing-md);
}

.form-horizontal .form-actions {
  grid-column: 2;
  justify-content: flex-start;
}

@media (max-width: 768px) {
  .form-horizontal {
    grid-template-columns: 1fr;
  }

  .form-horizontal .form-label {
    margin-bottom: var(--spacing-sm);
    margin-right: 0;
  }

  .form-horizontal .form-actions {
    grid-column: 1;
  }
}
```

### 3. 内联布局

```html
<form class="form-inline">
  <div class="form-group">
    <label class="form-label">搜索</label>
    <input type="search" class="form-input" placeholder="输入关键词...">
  </div>
  <button type="submit" class="button button-primary">搜索</button>
</form>
```

```css
.form-inline {
  display: flex;
  align-items: end;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.form-inline .form-group {
  margin-bottom: 0;
  flex: 1;
  min-width: 200px;
}

.form-inline .form-label {
  margin-bottom: var(--spacing-xs);
}

@media (max-width: 768px) {
  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }

  .form-inline .form-group {
    min-width: auto;
  }
}
```

## 表单验证

### 1. 实时验证

```html
<div class="form-group" data-validate="email">
  <label for="email" class="form-label">邮箱地址</label>
  <input type="email" id="email" class="form-input" required>
  <div class="form-feedback">
    <div class="form-error">请输入有效的邮箱地址</div>
    <div class="form-success">邮箱格式正确</div>
  </div>
</div>
```

```css
.form-feedback {
  margin-top: var(--spacing-xs);
}

.form-success {
  font-size: var(--text-sm);
  color: var(--positive-color);
  display: none;
}

.form-group.is-valid .form-success {
  display: block;
}

.form-group.is-valid .form-input {
  border-color: var(--positive-color);
}

.form-group.is-valid .form-input:focus {
  box-shadow: 0 0 0 3px rgba(var(--positive-color-rgb), 0.1);
}
```

### 2. 提交验证

```html
<form class="form-validate" novalidate>
  <div class="form-group">
    <label class="form-label">必填字段</label>
    <input type="text" class="form-input" required>
    <div class="form-error">此字段为必填项</div>
  </div>
  <button type="submit" class="button button-primary">提交</button>
</form>
```

### 3. 字符计数

```html
<div class="form-group">
  <label for="bio" class="form-label">个人简介</label>
  <textarea id="bio" class="form-textarea" maxlength="200" rows="3"></textarea>
  <div class="form-counter">
    <span class="counter-current">0</span>
    <span class="counter-separator">/</span>
    <span class="counter-max">200</span>
  </div>
</div>
```

```css
.form-counter {
  text-align: right;
  font-size: var(--text-sm);
  color: var(--foreground-quiet-color);
  margin-top: var(--spacing-xs);
}

.form-counter.warning {
  color: var(--attention-color);
}

.form-counter.error {
  color: var(--negative-color);
}
```

## 状态和反馈

### 1. 加载状态

```html
<div class="form-group">
  <label class="form-label">用户名</label>
  <div class="form-input-wrapper">
    <input type="text" class="form-input" value="checking...">
    <div class="form-loading">
      <div class="loading-spinner"></div>
    </div>
  </div>
</div>
```

```css
.form-loading {
  position: absolute;
  top: 50%;
  right: var(--spacing-md);
  transform: translateY(-50%);
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin var(--duration-slowest) linear infinite;
}
```

### 2. 成功状态

```html
<div class="form-group is-valid">
  <label class="form-label">邮箱地址</label>
  <div class="form-input-wrapper">
    <input type="email" class="form-input" value="user@example.com">
    <div class="form-success-icon">
      <svg class="icon">✓</svg>
    </div>
  </div>
</div>
```

```css
.form-success-icon {
  position: absolute;
  top: 50%;
  right: var(--spacing-md);
  transform: translateY(-50%);
  color: var(--positive-color);
}

.form-success-icon .icon {
  width: 20px;
  height: 20px;
}
```

### 3. 错误状态

```html
<div class="form-group has-error">
  <label class="form-label">密码</label>
  <input type="password" class="form-input" value="123">
  <div class="form-error">密码长度至少为8位</div>
</div>
```

## 可访问性

### 1. 语义化标签

```html
<form>
  <fieldset>
    <legend>个人信息</legend>
    <div class="form-group">
      <label for="name">姓名</label>
      <input type="text" id="name" required aria-describedby="name-help">
      <div id="name-help" class="form-help">请输入您的真实姓名</div>
    </div>
  </fieldset>
</form>
```

### 2. ARIA 属性

```html
<div class="form-group">
  <label for="password">密码</label>
  <input type="password"
         id="password"
         class="form-input"
         aria-describedby="password-help password-error"
         aria-invalid="true"
         aria-required="true">
  <div id="password-help" class="form-help">密码长度为8-20位</div>
  <div id="password-error" class="form-error" role="alert">密码长度不足</div>
</div>
```

### 3. 键盘导航

```css
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.form-input:focus:not(:focus-visible),
.form-select:focus:not(:focus-visible),
.form-textarea:focus:not(:focus-visible) {
  outline: none;
}
```

## 使用指南

### 1. 表单设计原则

```html
✅ 清晰的标签和帮助文本
<div class="form-group">
  <label for="email">邮箱地址</label>
  <input type="email" id="email" placeholder="example@email.com">
  <div class="form-help">我们将使用此邮箱发送确认信息</div>
</div>

✅ 合理的分组和层次
<fieldset>
  <legend>账户设置</legend>
  <div class="form-group">...</div>
  <div class="form-group">...</div>
</fieldset>

✅ 明确的错误提示
<div class="form-group has-error">
  <label>密码</label>
  <input type="password">
  <div class="form-error">密码长度至少为8位，需包含字母和数字</div>
</div>
```

### 2. 验证策略

```html
✅ 即时反馈
<input type="email" class="form-input" onblur="validateEmail(this)">

✅ 分步验证
<form onsubmit="return validateForm()">
  <div class="form-step">
    <!-- 第一步 -->
  </div>
  <div class="form-step">
    <!-- 第二步 -->
  </div>
</form>

✅ 友好的错误信息
<div class="form-error">邮箱地址格式不正确，请检查是否包含@符号</div>
```

### 3. 移动端优化

```html
✅ 使用适当的输入类型
<input type="email" placeholder="邮箱">
<input type="tel" placeholder="电话">
<input type="number" placeholder="数量">

✅ 设置键盘类型
<input type="text" inputmode="numeric" pattern="[0-9]*">
<input type="text" inputmode="decimal">

✅ 优化触摸目标
@media (max-width: 768px) {
  .form-input, .form-select, .form-textarea {
    min-height: 44px;
    font-size: 16px; /* 防止iOS缩放 */
  }
}
```

## 工具类

### 表单布局
```css
.form-vertical { /* 垂直布局 */ }
.form-horizontal { /* 水平布局 */ }
.form-inline { /* 内联布局 */ }
.form-grid { /* 网格布局 */ }
```

### 输入尺寸
```css
.form-input-sm { /* 小尺寸 */ }
.form-input-md { /* 中尺寸 */ }
.form-input-lg { /* 大尺寸 */ }
```

### 验证状态
```css
.is-valid { /* 验证成功 */ }
.has-error { /* 验证失败 */ }
.is-warning { /* 警告状态 */ }
.is-loading { /* 加载状态 */ }
```

## 测试清单

### 功能测试
- [ ] 所有输入控件功能正常
- [ ] 表单验证正确工作
- [ ] 错误提示准确显示
- [ ] 提交功能正常

### 可访问性测试
- [ ] 键盘导航完整
- [ ] 屏幕阅读器友好
- [ ] ARIA 属性正确
- [ ] 焦点管理正确

### 用户体验测试
- [ ] 表单布局清晰
- [ ] 错误信息易懂
- [ ] 加载状态明显
- [ ] 移动端操作方便

### 兼容性测试
- [ ] 跨浏览器兼容
- [ ] 不同设备适配
- [ ] 输入法兼容
- [ ] 自动填充功能

---

*最后更新: 2025年11月14日*