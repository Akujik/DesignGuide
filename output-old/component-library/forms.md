# Meshy AI 组件库 - 表单组件分析

## 概述

Meshy AI 的表单组件采用现代化的设计语言，结合深色主题和品牌色彩，提供清晰易用的用户输入体验。

## 输入框组件

### 基础输入框

```css
.input {
  width: 100%;
  padding: var(--padding-md) var(--padding-lg);
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  color: var(--color-label-base);
  font-size: var(--text-base);
  font-family: var(--font-family-base);
  transition: all 0.2s ease-out;
  outline: none;
}

.input::placeholder {
  color: var(--color-label-faint);
}

.input:hover {
  background-color: var(--color-bg-shade);
  border-color: var(--color-bg-border);
}

.input:focus {
  background-color: var(--color-bg-sub);
  border-color: var(--color-accent-base);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}
```

### 输入框尺寸

```css
.input-sm {
  padding: var(--padding-sm) var(--padding-md);
  font-size: var(--text-sm);
  border-radius: var(--radius-md);
}

.input-lg {
  padding: var(--padding-lg) var(--padding-xl);
  font-size: var(--text-lg);
  border-radius: var(--radius-xl);
}
```

### 输入框状态

```css
/* 成功状态 */
.input.success {
  border-color: var(--color-success);
  background-color: rgba(34, 197, 94, 0.1);
}

.input.success:focus {
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
}

/* 错误状态 */
.input.error {
  border-color: var(--color-error);
  background-color: rgba(239, 68, 68, 0.1);
}

.input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

/* 禁用状态 */
.input:disabled {
  background-color: var(--color-bg-border);
  color: var(--color-label-muted);
  cursor: not-allowed;
  opacity: 0.6;
}

.input:disabled:hover {
  background-color: var(--color-bg-border);
  border-color: var(--color-bg-border);
  cursor: not-allowed;
}
```

### 输入框组合

```css
.input-group {
  display: flex;
  align-items: stretch;
  width: 100%;
}

.input-group .input {
  border-radius: 0;
  flex: 1;
}

.input-group .input:first-child {
  border-top-left-radius: var(--radius-lg);
  border-bottom-left-radius: var(--radius-lg);
}

.input-group .input:last-child {
  border-top-right-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
}

.input-group-addon {
  display: flex;
  align-items: center;
  padding: 0 var(--padding-md);
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  color: var(--color-label-soft);
  font-size: var(--text-sm);
  white-space: nowrap;
}

.input-group-addon:first-child {
  border-right: none;
  border-top-left-radius: var(--radius-lg);
  border-bottom-left-radius: var(--radius-lg);
}

.input-group-addon:last-child {
  border-left: none;
  border-top-right-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
}
```

## 标签组件

### 表单标签

```css
.label {
  display: block;
  margin-bottom: var(--margin-sm);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-label-base);
}

.label.required::after {
  content: ' *';
  color: var(--color-error);
}

.label.disabled {
  color: var(--color-label-muted);
}

.label-error {
  color: var(--color-error);
  font-size: var(--text-xs);
  margin-top: var(--margin-xs);
}

.label-helper {
  color: var(--color-label-soft);
  font-size: var(--text-xs);
  margin-top: var(--margin-xs);
}
```

## 文本域组件

```css
.textarea {
  width: 100%;
  min-height: 120px;
  padding: var(--padding-md) var(--padding-lg);
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  color: var(--color-label-base);
  font-size: var(--text-base);
  font-family: var(--font-family-base);
  line-height: var(--leading-relaxed);
  resize: vertical;
  transition: all 0.2s ease-out;
  outline: none;
}

.textarea:hover {
  background-color: var(--color-bg-shade);
  border-color: var(--color-bg-border);
}

.textarea:focus {
  background-color: var(--color-bg-sub);
  border-color: var(--color-accent-base);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}

.textarea-sm {
  min-height: 80px;
  padding: var(--padding-sm) var(--padding-md);
  font-size: var(--text-sm);
}

.textarea-lg {
  min-height: 160px;
  padding: var(--padding-lg) var(--padding-xl);
  font-size: var(--text-lg);
}
```

## 选择框组件

### 下拉选择框

```css
.select {
  position: relative;
  display: inline-block;
  width: 100%;
}

.select-trigger {
  width: 100%;
  padding: var(--padding-md) var(--padding-lg);
  padding-right: 40px;
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  color: var(--color-label-base);
  font-size: var(--text-base);
  font-family: var(--font-family-base);
  cursor: pointer;
  transition: all 0.2s ease-out;
  outline: none;
  position: relative;
}

.select-trigger::after {
  content: '';
  position: absolute;
  top: 50%;
  right: var(--padding-lg);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--color-label-soft);
  transform: translateY(-50%);
  transition: transform 0.2s ease-out;
}

.select:hover .select-trigger {
  background-color: var(--color-bg-shade);
  border-color: var(--color-bg-border);
}

.select:focus .select-trigger,
.select-trigger:focus {
  border-color: var(--color-accent-base);
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.1);
}

.select.open .select-trigger::after {
  transform: translateY(-50%) rotate(180deg);
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background-color: var(--color-bg-sub);
  border: 1px solid var(--color-bg-border);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
}

.select-option {
  padding: var(--padding-md) var(--padding-lg);
  color: var(--color-label-base);
  font-size: var(--text-base);
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.select-option:hover {
  background-color: var(--color-bg-shade);
  color: var(--color-label-title);
}

.select-option.selected {
  background-color: rgba(197, 249, 85, 0.1);
  color: var(--color-accent-base);
}

.select-option.disabled {
  color: var(--color-label-muted);
  cursor: not-allowed;
}
```

## 复选框组件

```css
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.checkbox-input {
  width: 20px;
  height: 20px;
  background-color: var(--color-bg-sub);
  border: 2px solid var(--color-bg-border);
  border-radius: var(--radius-md);
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-out;
  appearance: none;
  outline: none;
}

.checkbox-input:hover {
  border-color: var(--color-accent-base);
}

.checkbox-input:checked {
  background-color: var(--color-accent-base);
  border-color: var(--color-accent-base);
}

.checkbox-input:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-bg-base);
  font-size: 14px;
  font-weight: bold;
}

.checkbox-input:focus {
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.2);
}

.checkbox-input:disabled {
  background-color: var(--color-bg-border);
  border-color: var(--color-bg-border);
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-label {
  color: var(--color-label-base);
  font-size: var(--text-base);
  cursor: pointer;
  user-select: none;
}

.checkbox-label.disabled {
  color: var(--color-label-muted);
  cursor: not-allowed;
}
```

## 单选框组件

```css
.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.radio-item {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.radio-input {
  width: 20px;
  height: 20px;
  background-color: var(--color-bg-sub);
  border: 2px solid var(--color-bg-border);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-out;
  appearance: none;
  outline: none;
}

.radio-input:hover {
  border-color: var(--color-accent-base);
}

.radio-input:checked {
  border-color: var(--color-accent-base);
}

.radio-input:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: var(--color-accent-base);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.radio-input:focus {
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.2);
}

.radio-input:disabled {
  background-color: var(--color-bg-border);
  border-color: var(--color-bg-border);
  cursor: not-allowed;
  opacity: 0.6;
}

.radio-label {
  color: var(--color-label-base);
  font-size: var(--text-base);
  cursor: pointer;
  user-select: none;
}

.radio-label.disabled {
  color: var(--color-label-muted);
  cursor: not-allowed;
}
```

## 开关组件

```css
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.switch-input {
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-border);
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-out;
  appearance: none;
  outline: none;
}

.switch-input::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: var(--color-label-faint);
  border-radius: 50%;
  transition: all 0.2s ease-out;
}

.switch-input:hover {
  background-color: var(--color-bg-shade);
}

.switch-input:checked {
  background-color: var(--color-accent-base);
}

.switch-input:checked::after {
  background-color: var(--color-bg-base);
  transform: translateX(24px);
}

.switch-input:focus {
  box-shadow: 0 0 0 3px rgba(197, 249, 85, 0.2);
}

.switch-input:disabled {
  background-color: var(--color-bg-border);
  cursor: not-allowed;
  opacity: 0.6;
}

.switch-input:disabled::after {
  background-color: var(--color-label-muted);
  cursor: not-allowed;
}
```

## 表单布局

### 表单组

```css
.form-group {
  margin-bottom: var(--margin-lg);
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-group-inline {
  display: flex;
  gap: var(--gap-lg);
  align-items: flex-end;
}

.form-row {
  display: grid;
  gap: var(--gap-lg);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.form-row-2 {
  grid-template-columns: repeat(2, 1fr);
}

.form-row-3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .form-group-inline {
    flex-direction: column;
    align-items: stretch;
  }

  .form-row-2,
  .form-row-3 {
    grid-template-columns: 1fr;
  }
}
```

### 表单域

```css
.form-field {
  display: flex;
  flex-direction: column;
}

.form-field-horizontal {
  flex-direction: row;
  align-items: center;
  gap: var(--gap-md);
}

.form-field-horizontal .label {
  margin-bottom: 0;
  min-width: 120px;
}

.form-field-horizontal .input-group {
  flex: 1;
}

.form-field-error .input,
.form-field-error .textarea,
.form-field-error .select-trigger {
  border-color: var(--color-error);
  background-color: rgba(239, 68, 68, 0.1);
}

.form-field-success .input,
.form-field-success .textarea,
.form-field-success .select-trigger {
  border-color: var(--color-success);
  background-color: rgba(34, 197, 94, 0.1);
}
```

## 使用示例

### HTML 结构

```html
<!-- 基础表单 -->
<form class="form">
  <div class="form-group">
    <label class="label required" for="name">模型名称</label>
    <input type="text" id="name" class="input" placeholder="输入模型名称">
    <p class="label-helper">名称将在模型列表中显示</p>
  </div>

  <div class="form-group form-field-error">
    <label class="label required" for="description">模型描述</label>
    <textarea id="description" class="textarea" placeholder="描述您的模型"></textarea>
    <p class="label-error">描述不能为空</p>
  </div>

  <div class="form-group">
    <label class="label" for="category">模型类别</label>
    <div class="select">
      <div class="select-trigger">选择类别</div>
      <div class="select-dropdown">
        <div class="select-option">角色模型</div>
        <div class="select-option selected">场景模型</div>
        <div class="select-option">道具模型</div>
      </div>
    </div>
  </div>

  <div class="form-group">
    <label class="label">模型特性</label>
    <div class="checkbox-group">
      <label class="checkbox-item">
        <input type="checkbox" class="checkbox-input" checked>
        <span class="checkbox-label">包含动画</span>
      </label>
      <label class="checkbox-item">
        <input type="checkbox" class="checkbox-input">
        <span class="checkbox-label">包含贴图</span>
      </label>
      <label class="checkbox-item">
        <input type="checkbox" class="checkbox-input" checked>
        <span class="checkbox-label">优化格式</span>
      </label>
    </div>
  </div>

  <div class="form-group">
    <label class="label">渲染质量</label>
    <div class="radio-group">
      <label class="radio-item">
        <input type="radio" name="quality" class="radio-input">
        <span class="radio-label">标准质量</span>
      </label>
      <label class="radio-item">
        <input type="radio" name="quality" class="radio-input" checked>
        <span class="radio-label">高质量</span>
      </label>
      <label class="radio-item">
        <input type="radio" name="quality" class="radio-input">
        <span class="radio-label">超高质量</span>
      </label>
    </div>
  </div>

  <div class="form-group">
    <label class="checkbox-item">
      <input type="checkbox" class="switch-input switch" checked>
      <span class="checkbox-label">公开分享模型</span>
    </label>
  </div>

  <div class="form-group">
    <div class="form-field-horizontal">
      <label class="label" for="price">价格</label>
      <div class="input-group">
        <span class="input-group-addon">$</span>
        <input type="number" id="price" class="input" placeholder="0.00">
      </div>
    </div>
  </div>

  <div class="form-group">
    <div class="button-group">
      <button type="button" class="button button-secondary">取消</button>
      <button type="submit" class="button button-primary">创建模型</button>
    </div>
  </div>
</form>
```

## 最佳实践

1. **清晰的标签**: 使用简洁明确的标签文字，必要时提供帮助信息
2. **状态反馈**: 为验证状态提供清晰的视觉反馈
3. **键盘导航**: 确保表单可以通过键盘完全操作
4. **响应式设计**: 在不同屏幕尺寸上保持表单的可用性
5. **错误处理**: 提供清晰的错误信息和修复建议
6. **加载状态**: 为异步操作提供加载指示器

---

*此表单组件基于 Meshy AI 官方网站分析生成，最后更新：2025-11-13*