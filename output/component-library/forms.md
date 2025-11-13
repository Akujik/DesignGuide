# 表单组件分析 (Form Components Analysis)

## 概述

Meshy.ai 的表单系统设计注重用户体验，提供了清晰、直观的输入控件。表单组件遵循现代设计原则，具有良好的验证反馈和无障碍访问支持。

## 输入控件类型

### 1. 文本输入框 (Text Input)
```html
<div class="form-group">
  <label for="username" class="form-label">Username</label>
  <input
    type="text"
    id="username"
    class="form-input"
    placeholder="Enter your username"
    required
  />
  <div class="form-help">Choose a unique username for your account</div>
</div>
```

**样式特征**:
- 背景: `--color-bg-base` (#181818)
- 边框: 1px solid `--color-bg-border` (#3f3f3f)
- 圆角: `--radius-md` (0.375rem)
- 内边距: `var(--p-md) var(--p-lg)`
- 文字色: `--color-label-base`

**CSS 实现**:
```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  margin-bottom: var(--m-lg);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-label-base);
}

.form-input {
  background-color: var(--color-bg-base);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  padding: var(--p-md) var(--p-lg);
  color: var(--color-label-base);
  font-family: var(--font-inter);
  font-size: var(--text-base);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.form-input::placeholder {
  color: var(--color-label-muted);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-accent-base);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}

.form-help {
  font-size: var(--text-sm);
  color: var(--color-label-soft);
  margin-top: var(--p-xs);
}
```

### 2. 文本域 (Textarea)
```html
<div class="form-group">
  <label for="message" class="form-label">Message</label>
  <textarea
    id="message"
    class="form-textarea"
    rows="4"
    placeholder="Type your message here..."
  ></textarea>
  <div class="form-character-count">
    <span>0</span> / 500 characters
  </div>
</div>
```

**CSS 实现**:
```css
.form-textarea {
  background-color: var(--color-bg-base);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  padding: var(--p-md) var(--p-lg);
  color: var(--color-label-base);
  font-family: var(--font-inter);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  resize: vertical;
  min-height: 100px;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.form-textarea:focus {
  outline: none;
  border-color: var(--color-accent-base);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}

.form-character-count {
  font-size: var(--text-xs);
  color: var(--color-label-muted);
  text-align: right;
  margin-top: var(--p-xs);
}
```

### 3. 选择框 (Select Dropdown)
```html
<div class="form-group">
  <label for="model-type" class="form-label">Model Type</label>
  <div class="select-wrapper">
    <select id="model-type" class="form-select">
      <option value="">Choose a model type</option>
      <option value="character">Character</option>
      <option value="environment">Environment</option>
      <option value="object">Object</option>
      <option value="vehicle">Vehicle</option>
    </select>
    <div class="select-arrow">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </div>
  </div>
</div>
```

**CSS 实现**:
```css
.select-wrapper {
  position: relative;
}

.form-select {
  appearance: none;
  background-color: var(--color-bg-base);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  padding: var(--p-md) var(--p-3xl) var(--p-md) var(--p-lg);
  color: var(--color-label-base);
  font-family: var(--font-inter);
  font-size: var(--text-base);
  width: 100%;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.form-select:focus {
  outline: none;
  border-color: var(--color-accent-base);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}

.select-arrow {
  position: absolute;
  top: 50%;
  right: var(--p-lg);
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-label-soft);
  transition: transform var(--duration-fast) var(--ease-smooth);
}

.form-select:focus + .select-arrow {
  transform: translateY(-50%) rotate(180deg);
}
```

### 4. 复选框 (Checkbox)
```html
<div class="form-group">
  <label class="checkbox-wrapper">
    <input type="checkbox" class="checkbox-input" />
    <span class="checkbox-box">
      <svg class="checkbox-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
    </span>
    <span class="checkbox-label">I agree to the terms and conditions</span>
  </label>
</div>
```

**CSS 实现**:
```css
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-sm);
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-box {
  position: relative;
  width: 20px;
  height: 20px;
  background-color: var(--color-bg-base);
  border: 2px solid var(--color-bg-border);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  margin-top: 2px;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.checkbox-check {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 12px;
  height: 12px;
  color: var(--color-bg-base);
  transition: transform var(--duration-fast) var(--ease-smooth);
}

.checkbox-input:checked + .checkbox-box {
  background-color: var(--color-accent-base);
  border-color: var(--color-accent-base);
}

.checkbox-input:checked + .checkbox-box .checkbox-check {
  transform: translate(-50%, -50%) scale(1);
}

.checkbox-input:focus + .checkbox-box {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}

.checkbox-label {
  color: var(--color-label-base);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}
```

### 5. 单选按钮 (Radio Button)
```html
<div class="form-group">
  <label class="form-label">Model Quality</label>
  <div class="radio-group">
    <label class="radio-wrapper">
      <input type="radio" name="quality" value="standard" class="radio-input" />
      <span class="radio-circle"></span>
      <span class="radio-label">Standard</span>
    </label>
    <label class="radio-wrapper">
      <input type="radio" name="quality" value="high" class="radio-input" />
      <span class="radio-circle"></span>
      <span class="radio-label">High</span>
    </label>
    <label class="radio-wrapper">
      <input type="radio" name="quality" value="ultra" class="radio-input" />
      <span class="radio-circle"></span>
      <span class="radio-label">Ultra</span>
    </label>
  </div>
</div>
```

**CSS 实现**:
```css
.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.radio-wrapper {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  cursor: pointer;
  user-select: none;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-circle {
  position: relative;
  width: 20px;
  height: 20px;
  background-color: var(--color-bg-base);
  border: 2px solid var(--color-bg-border);
  border-radius: var(--radius-full);
  flex-shrink: 0;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.radio-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 8px;
  height: 8px;
  background-color: var(--color-accent-base);
  border-radius: var(--radius-full);
  transition: transform var(--duration-fast) var(--ease-smooth);
}

.radio-input:checked + .radio-circle {
  border-color: var(--color-accent-base);
}

.radio-input:checked + .radio-circle::after {
  transform: translate(-50%, -50%) scale(1);
}

.radio-input:focus + .radio-circle {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}

.radio-label {
  color: var(--color-label-base);
  font-size: var(--text-base);
}
```

### 6. 开关 (Toggle Switch)
```html
<div class="form-group">
  <label class="toggle-wrapper">
    <input type="checkbox" class="toggle-input" />
    <span class="toggle-slider"></span>
    <span class="toggle-label">Enable notifications</span>
  </label>
</div>
```

**CSS 实现**:
```css
.toggle-wrapper {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  cursor: pointer;
  user-select: none;
}

.toggle-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.toggle-slider {
  position: relative;
  width: 44px;
  height: 24px;
  background-color: var(--color-bg-border);
  border-radius: var(--radius-pill);
  flex-shrink: 0;
  transition: background-color var(--duration-fast) var(--ease-smooth);
}

.toggle-slider::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: var(--color-bg-base);
  border-radius: var(--radius-full);
  transition: transform var(--duration-fast) var(--ease-smooth);
}

.toggle-input:checked + .toggle-slider {
  background-color: var(--color-accent-base);
}

.toggle-input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

.toggle-input:focus + .toggle-slider {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}

.toggle-label {
  color: var(--color-label-base);
  font-size: var(--text-base);
}
```

### 7. 文件上传 (File Upload)
```html
<div class="form-group">
  <label for="file-upload" class="form-label">Upload Model</label>
  <div class="file-upload-wrapper">
    <input
      type="file"
      id="file-upload"
      class="file-input"
      accept=".obj,.fbx,.gltf"
      multiple
    />
    <label for="file-upload" class="file-upload-area">
      <div class="file-upload-icon">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17,8 12,3 7,8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
      </div>
      <div class="file-upload-text">
        <p class="file-upload-title">Drop your files here or browse</p>
        <p class="file-upload-subtitle">Support for OBJ, FBX, GLTF formats</p>
      </div>
    </label>
    <div class="file-list" id="file-list"></div>
  </div>
</div>
```

**CSS 实现**:
```css
.file-input {
  display: none;
}

.file-upload-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--p-3xl);
  background-color: var(--color-bg-sub);
  border: 2px dashed var(--color-bg-border);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.file-upload-area:hover {
  background-color: var(--color-bg-base-hover);
  border-color: var(--color-accent-base);
}

.file-upload-area.dragover {
  background-color: var(--color-accent-bg);
  border-color: var(--color-accent-base);
}

.file-upload-icon {
  width: 48px;
  height: 48px;
  color: var(--color-label-soft);
  margin-bottom: var(--p-lg);
}

.file-upload-title {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-label-base);
  margin-bottom: var(--p-xs);
}

.file-upload-subtitle {
  font-size: var(--text-sm);
  color: var(--color-label-soft);
}

.file-list {
  margin-top: var(--p-lg);
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--p-md);
  background-color: var(--color-bg-base);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-md);
}

.file-info {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.file-name {
  font-size: var(--text-sm);
  color: var(--color-label-base);
}

.file-size {
  font-size: var(--text-xs);
  color: var(--color-label-soft);
}

.file-remove {
  background: none;
  border: none;
  color: var(--color-semantic-error-base);
  cursor: pointer;
  padding: var(--p-xs);
  border-radius: var(--radius-sm);
  transition: background-color var(--duration-fast) var(--ease-smooth);
}

.file-remove:hover {
  background-color: var(--color-semantic-error-base);
  background-opacity: 0.1;
}
```

## 表单状态

### 正常状态 (Normal State)
```css
.form-input {
  background-color: var(--color-bg-base);
  border-color: var(--color-bg-border);
  color: var(--color-label-base);
}
```

### 悬停状态 (Hover State)
```css
.form-input:hover {
  border-color: var(--color-label-muted);
  background-color: var(--color-bg-base-hover);
}
```

### 焦点状态 (Focus State)
```css
.form-input:focus {
  outline: none;
  border-color: var(--color-accent-base);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}
```

### 成功状态 (Success State)
```html
<div class="form-group form-success">
  <label for="email" class="form-label">Email</label>
  <input
    type="email"
    id="email"
    class="form-input"
    value="user@example.com"
    readonly
  />
  <div class="form-success-message">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    Email is valid
  </div>
</div>
```

**CSS**:
```css
.form-group.form-success .form-input {
  border-color: var(--color-semantic-success-base);
  background-color: rgba(46, 224, 64, 0.05);
}

.form-success-message {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  color: var(--color-semantic-success-base);
  font-size: var(--text-sm);
  margin-top: var(--p-xs);
}

.form-success-message .icon {
  width: 16px;
  height: 16px;
}
```

### 错误状态 (Error State)
```html
<div class="form-group form-error">
  <label for="password" class="form-label">Password</label>
  <input
    type="password"
    id="password"
    class="form-input"
    value="123"
  />
  <div class="form-error-message">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
    Password must be at least 8 characters
  </div>
</div>
```

**CSS**:
```css
.form-group.form-error .form-input {
  border-color: var(--color-semantic-error-base);
  background-color: rgba(255, 51, 51, 0.05);
  animation: shake var(--duration-normal) var(--ease-bounce);
}

.form-error-message {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  color: var(--color-semantic-error-base);
  font-size: var(--text-sm);
  margin-top: var(--p-xs);
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
```

### 警告状态 (Warning State)
```html
<div class="form-group form-warning">
  <label for="api-key" class="form-label">API Key</label>
  <input
    type="text"
    id="api-key"
    class="form-input"
    placeholder="Enter your API key"
  />
  <div class="form-warning-message">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
    API key usage limit approaching
  </div>
</div>
```

**CSS**:
```css
.form-group.form-warning .form-input {
  border-color: var(--color-semantic-warning-base);
  background-color: rgba(246, 153, 43, 0.05);
}

.form-warning-message {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  color: var(--color-semantic-warning-base);
  font-size: var(--text-sm);
  margin-top: var(--p-xs);
}
```

### 禁用状态 (Disabled State)
```html
<div class="form-group">
  <label for="disabled-field" class="form-label">Disabled Field</label>
  <input
    type="text"
    id="disabled-field"
    class="form-input"
    value="This field is disabled"
    disabled
  />
</div>
```

**CSS**:
```css
.form-input:disabled,
.form-input.disabled {
  background-color: var(--color-bg-shade);
  border-color: var(--color-bg-border);
  color: var(--color-label-muted);
  cursor: not-allowed;
  opacity: 0.6;
}
```

### 只读状态 (Readonly State)
```html
<div class="form-group">
  <label for="readonly-field" class="form-label">Readonly Field</label>
  <input
    type="text"
    id="readonly-field"
    class="form-input"
    value="This field is readonly"
    readonly
  />
</div>
```

**CSS**:
```css
.form-input:readonly,
.form-input[readonly] {
  background-color: var(--color-bg-shade);
  border-color: var(--color-bg-border);
  color: var(--color-label-soft);
  cursor: default;
}
```

### 加载状态 (Loading State)
```html
<div class="form-group form-loading">
  <label for="loading-input" class="form-label">Validating...</label>
  <div class="input-with-loading">
    <input
      type="text"
      id="loading-input"
      class="form-input"
      value="Checking availability..."
    />
    <div class="input-loading-spinner">
      <div class="spinner"></div>
    </div>
  </div>
</div>
```

**CSS**:
```css
.input-with-loading {
  position: relative;
}

.input-loading-spinner {
  position: absolute;
  top: 50%;
  right: var(--p-md);
  transform: translateY(-50%);
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-bg-border);
  border-top-color: var(--color-accent-base);
  border-radius: var(--radius-full);
  animation: spin var(--duration-slow) linear infinite;
}

.form-loading .form-input {
  color: var(--color-label-muted);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

## 表单布局

### 垂直布局（默认）
```html
<form class="form-vertical">
  <div class="form-group">
    <label class="form-label">First Name</label>
    <input type="text" class="form-input" />
  </div>
  <div class="form-group">
    <label class="form-label">Last Name</label>
    <input type="text" class="form-input" />
  </div>
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="email" class="form-input" />
  </div>
</form>
```

### 水平布局
```html
<form class="form-horizontal">
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">First Name</label>
      <input type="text" class="form-input" />
    </div>
    <div class="form-group">
      <label class="form-label">Last Name</label>
      <input type="text" class="form-input" />
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="email" class="form-input" />
  </div>
</form>
```

**CSS**:
```css
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-lg);
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: var(--gap-md);
  }
}
```

### 内联表单
```html
<form class="form-inline">
  <div class="form-group">
    <input type="search" class="form-input" placeholder="Search models..." />
  </div>
  <button type="submit" class="button button-primary">Search</button>
</form>
```

**CSS**:
```css
.form-inline {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
}

.form-inline .form-group {
  margin-bottom: 0;
  flex: 1;
}
```

## 特殊表单组件

### 搜索框
```html
<div class="form-group">
  <div class="search-input-wrapper">
    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
    <input
      type="search"
      class="form-input search-input"
      placeholder="Search models, tutorials, and more..."
    />
    <button type="button" class="search-clear" hidden>
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
</div>
```

**CSS**:
```css
.search-input-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: var(--p-lg);
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: var(--color-label-soft);
}

.search-input {
  padding-left: calc(var(--p-lg) + 24px);
  padding-right: calc(var(--p-lg) + 32px);
}

.search-clear {
  position: absolute;
  top: 50%;
  right: var(--p-lg);
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-label-soft);
  cursor: pointer;
  padding: var(--p-xs);
  border-radius: var(--radius-sm);
  transition: color var(--duration-fast) var(--ease-smooth);
}

.search-clear:hover {
  color: var(--color-label-base);
}
```

### 密码输入框
```html
<div class="form-group">
  <label for="password" class="form-label">Password</label>
  <div class="password-input-wrapper">
    <input
      type="password"
      id="password"
      class="form-input password-input"
      placeholder="Enter your password"
    />
    <button type="button" class="password-toggle" aria-label="Toggle password visibility">
      <svg class="icon eye-open" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      <svg class="icon eye-closed" viewBox="0 0 24 24" fill="none" stroke="currentColor" hidden>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    </button>
  </div>
</div>
```

**CSS**:
```css
.password-input-wrapper {
  position: relative;
}

.password-input {
  padding-right: calc(var(--p-lg) + 32px);
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: var(--p-lg);
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-label-soft);
  cursor: pointer;
  padding: var(--p-xs);
  border-radius: var(--radius-sm);
  transition: color var(--duration-fast) var(--ease-smooth);
}

.password-toggle:hover {
  color: var(--color-label-base);
}

.password-toggle .icon {
  width: 18px;
  height: 18px;
}
```

## 可访问性考虑

### 语义化标记
```html
<form role="form" aria-labelledby="form-title">
  <h2 id="form-title">Create New Model</h2>

  <div class="form-group">
    <label for="model-name" class="form-label">
      Model Name
      <span class="required" aria-label="required">*</span>
    </label>
    <input
      type="text"
      id="model-name"
      class="form-input"
      required
      aria-describedby="model-name-help"
      aria-invalid="false"
    />
    <div id="model-name-help" class="form-help">
      Choose a descriptive name for your 3D model
    </div>
  </div>
</form>
```

### 错误处理
```html
<div class="form-group form-error" role="alert">
  <input
    type="text"
    class="form-input"
    aria-invalid="true"
    aria-describedby="error-message"
  />
  <div id="error-message" class="form-error-message">
    This field is required
  </div>
</div>
```

### 键盘导航
```css
.form-input:focus-visible {
  outline: 2px solid var(--color-accent-base);
  outline-offset: 2px;
}

.form-input:focus:not(:focus-visible) {
  outline: none;
}
```

## 响应式设计

### 移动设备适配
```css
@media (max-width: 768px) {
  .form-input {
    padding: var(--p-md);
    font-size: 16px; /* 防止 iOS 缩放 */
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: var(--gap-md);
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }

  .form-inline .button {
    width: 100%;
  }
}
```

### 触摸设备优化
```css
@media (hover: none) {
  .form-input:hover {
    border-color: var(--color-bg-border);
  }

  .checkbox-wrapper:hover .checkbox-box,
  .radio-wrapper:hover .radio-circle,
  .toggle-wrapper:hover .toggle-slider {
    /* 移除悬停效果 */
  }
}
```

## 表单使用指南

### 表单设计原则
- 清晰的标签和指示
- 一致的视觉反馈
- 适当的验证和错误处理
- 键盘导航支持
- 移动设备友好

### 最佳实践
- 使用语义化的 HTML 标签
- 提供清晰的错误信息
- 实现实时验证反馈
- 确保足够的触摸目标尺寸
- 保持一致的样式和行为

### 表单验证
- 客户端验证提升用户体验
- 服务器端验证确保数据安全
- 提供清晰的验证反馈
- 使用适当的验证时机

## 预览系统

### 交互式预览
查看所有表单组件的实时预览和交互效果：
- [表单组件预览页面](../preview/forms.html)

### 功能特性
- ✨ **实时预览** - 所有表单控件和验证状态
- 🎨 **颜色复制** - 点击颜色块复制HEX值
- 📋 **代码复制** - 一键复制所有表单代码
- 📱 **响应式** - 适配所有设备尺寸
- ⚡ **交互演示** - 验证、状态切换、焦点效果

## 表单组件速查表

| 组件类型 | 用途 | 特殊属性 | 状态支持 | 预览链接 |
|----------|------|----------|----------|-----------|
| Text Input | 文本输入 | placeholder, maxlength | 全部 | [预览](../preview/forms.html) |
| Textarea | 长文本输入 | rows, resize | 全部 | [预览](../preview/forms.html) |
| Select | 下拉选择 | multiple, size | 全部 | [预览](../preview/forms.html) |
| Checkbox | 多选 | checked, indeterminate | 全部 | [预览](../preview/forms.html) |
| Radio | 单选 | checked, name groups | 全部 | [预览](../preview/forms.html) |
| Toggle | 开关 | checked, disabled | 全部 | [预览](../preview/forms.html) |
| File Upload | 文件上传 | accept, multiple | 正常/禁用 | [预览](../preview/forms.html) |
| Search | 搜索输入 | search action | 正常/加载 | [预览](../preview/forms.html) |

## 代码示例

### 完整的注册表单
```html
<form class="registration-form" role="form" aria-labelledby="registration-title">
  <h2 id="registration-title">Create Your Account</h2>

  <div class="form-row">
    <div class="form-group">
      <label for="first-name" class="form-label">First Name</label>
      <input
        type="text"
        id="first-name"
        class="form-input"
        required
        aria-describedby="first-name-help"
      />
      <div id="first-name-help" class="form-help">Enter your first name</div>
    </div>

    <div class="form-group">
      <label for="last-name" class="form-label">Last Name</label>
      <input
        type="text"
        id="last-name"
        class="form-input"
        required
      />
    </div>
  </div>

  <div class="form-group">
    <label for="email" class="form-label">Email Address</label>
    <input
      type="email"
      id="email"
      class="form-input"
      required
      autocomplete="email"
    />
  </div>

  <div class="form-group">
    <label for="password" class="form-label">Password</label>
    <div class="password-input-wrapper">
      <input
        type="password"
        id="password"
        class="form-input password-input"
        required
        minlength="8"
        aria-describedby="password-help"
      />
      <button type="button" class="password-toggle" aria-label="Toggle password visibility">
        <svg class="icon eye-open" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </button>
    </div>
    <div id="password-help" class="form-help">Password must be at least 8 characters long</div>
  </div>

  <div class="form-group">
    <label class="checkbox-wrapper">
      <input type="checkbox" class="checkbox-input" required />
      <span class="checkbox-box">
        <svg class="checkbox-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </span>
      <span class="checkbox-label">
        I agree to the <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy</a>
      </span>
    </label>
  </div>

  <div class="form-actions">
    <button type="submit" class="button button-primary button-full-width">
      Create Account
    </button>
  </div>
</form>
```