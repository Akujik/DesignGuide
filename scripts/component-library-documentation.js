#!/usr/bin/env node

/**
 * 组件库文档生成脚本
 * 基于验证结果生成按钮、表单、卡片、导航等组件的完整文档
 */

const fs = require('fs');
const path = require('path');

console.log('🧩 组件库文档生成启动...\n');

// 组件类型定义
const componentTypes = {
    buttons: {
        name: '按钮组件',
        patterns: [
            /\.btn[\w-]*/g,
            /\.button[\w-]*/g,
            /Button/g,
            /class="[^"]*btn[^"]*"/g,
            /className="[^"]*btn[^"]*"/g
        ],
        variants: [
            'primary', 'secondary', 'outline', 'ghost', 'link',
            'small', 'medium', 'large', 'disabled', 'loading',
            'icon', 'icon-only', 'full-width'
        ],
        states: ['hover', 'active', 'focus', 'disabled', 'loading']
    },
    forms: {
        name: '表单组件',
        patterns: [
            /\.form[\w-]*/g,
            /\.input[\w-]*/g,
            /\.field[\w-]*/g,
            /.input/g,
            /.form/g,
            /class="[^"]*input[^"]*"/g,
            /className="[^"]*input[^"]*"/g
        ],
        variants: [
            'text', 'email', 'password', 'number', 'tel', 'url',
            'textarea', 'select', 'checkbox', 'radio', 'switch',
            'file', 'date', 'time', 'search',
            'error', 'success', 'warning', 'valid', 'invalid'
        ],
        states: ['focus', 'blur', 'disabled', 'readonly', 'required', 'optional']
    },
    cards: {
        name: '卡片组件',
        patterns: [
            /\.card[\w-]*/g,
            /Card/g,
            /class="[^"]*card[^"]*"/g,
            /className="[^"]*card[^"]*"/g
        ],
        variants: [
            'default', 'outlined', 'elevated', 'filled',
            'small', 'medium', 'large',
            'interactive', 'clickable', 'hoverable',
            'with-image', 'with-header', 'with-footer'
        ],
        states: ['hover', 'active', 'selected', 'disabled']
    },
    navigation: {
        name: '导航组件',
        patterns: [
            /\.nav[\w-]*/g,
            /\.menu[\w-]*/g,
            /Nav/g,
            /Navigation/g,
            /class="[^"]*nav[^"]*"/g,
            /className="[^"]*nav[^"]*"/g
        ],
        variants: [
            'horizontal', 'vertical', 'sidebar', 'topbar',
            'breadcrumb', 'tabs', 'pagination',
            'mobile', 'desktop',
            'sticky', 'fixed', 'collapsible'
        ],
        states: ['active', 'hover', 'expanded', 'collapsed', 'mobile-open']
    },
    modals: {
        name: '模态框组件',
        patterns: [
            /\.modal[\w-]*/g,
            /\.dialog[\w-]*/g,
            /Modal/g,
            /class="[^"]*modal[^"]*"/g,
            /className="[^"]*modal[^"]*"/g
        ],
        variants: [
            'default', 'large', 'small', 'fullscreen',
            'with-header', 'with-footer', 'centered',
            'confirmation', 'alert', 'info'
        ],
        states: ['open', 'closed', 'opening', 'closing', 'backdrop']
    },
    badges: {
        name: '徽章组件',
        patterns: [
            /\.badge[\w-]*/g,
            /Badge/g,
            /class="[^"]*badge[^"]*"/g,
            /className="[^"]*badge[^"]*"/g
        ],
        variants: [
            'default', 'primary', 'secondary', 'success', 'warning', 'error', 'info',
            'small', 'medium', 'large',
            'pill', 'square', 'dot',
            'with-icon', 'countable'
        ],
        states: ['active', 'inactive', 'hover', 'new']
    },
    avatars: {
        name: '头像组件',
        patterns: [
            /\.avatar[\w-]*/g,
            /Avatar/g,
            /class="[^"]*avatar[^"]*"/g,
            /className="[^"]*avatar[^"]*"/g
        ],
        variants: [
            'default', 'rounded', 'circular', 'square',
            'small', 'medium', 'large', 'xlarge',
            'with-border', 'shadow',
            'with-status', 'with-initials', 'with-image'
        ],
        states: ['online', 'offline', 'away', 'busy', 'loading']
    }
};

// 网站配置
const websites = [
    {
        name: 'Contact Us',
        path: 'targets/Contact Us - Meshy (2025_11_13 22：52：57)',
        type: 'contact'
    },
    {
        name: 'Introduction',
        path: 'targets/Introduction - Meshy (2025_11_13 22：52：57)',
        type: 'introduction'
    },
    {
        name: 'Main Site',
        path: 'targets/Meshy AI - 3D AI Mesh Generator (2025_11_13 22：52：57)',
        type: 'main'
    },
    {
        name: 'API Platform',
        path: 'targets/API Platform - Meshy (2025_11_13 22：52：57)',
        type: 'api'
    },
    {
        name: 'Blog',
        path: 'targets/Meshy AI Blog - 3D News (2025_11_13 22：52：57)',
        type: 'blog'
    },
    {
        name: 'Careers',
        path: 'targets/ Careers - Meshy (2025_11_13 22：52：57)',
        type: 'careers'
    }
];

// 分析单个文件中的组件
function analyzeComponentsInFile(filePath) {
    if (!fs.existsSync(filePath)) return {};

    const content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath).toLowerCase();
    const results = {};

    Object.keys(componentTypes).forEach(componentType => {
        const componentInfo = componentTypes[componentType];
        results[componentType] = {
            matches: [],
            variants: new Set(),
            states: new Set(),
            implementations: []
        };

        // 查找所有匹配的模式
        componentInfo.patterns.forEach(pattern => {
            const matches = content.match(pattern) || [];
            matches.forEach(match => {
                results[componentType].matches.push({
                    pattern: pattern.source,
                    match: match,
                    context: extractContext(content, match)
                });
            });
        });

        // 分析变体和状态
        const allMatches = results[componentType].matches.map(m => m.match).join(' ');
        componentInfo.variants.forEach(variant => {
            if (allMatches.includes(variant)) {
                results[componentType].variants.add(variant);
            }
        });

        componentInfo.states.forEach(state => {
            if (allMatches.includes(state)) {
                results[componentType].states.add(state);
            }
        });

        // 提取具体实现
        if (ext === '.css') {
            const implementations = extractCSSImplementations(content, componentType);
            results[componentType].implementations = implementations;
        } else if (ext === '.html') {
            const implementations = extractHTMLImplementations(content, componentType);
            results[componentType].implementations = implementations;
        }
    });

    return results;
}

// 提取匹配的上下文
function extractContext(content, match, lines = 2) {
    const linesArray = content.split('\n');
    let matchLine = -1;

    for (let i = 0; i < linesArray.length; i++) {
        if (linesArray[i].includes(match)) {
            matchLine = i;
            break;
        }
    }

    if (matchLine === -1) return '';

    const start = Math.max(0, matchLine - lines);
    const end = Math.min(linesArray.length - 1, matchLine + lines);
    return linesArray.slice(start, end + 1).join('\n');
}

// 提取CSS实现
function extractCSSImplementations(content, componentType) {
    const implementations = [];
    const componentInfo = componentTypes[componentType];

    // 查找CSS规则
    const cssRuleRegex = new RegExp(`([^{]*\\${componentType}[^{]*?)\\s*\\{([^}]*)\\}`, 'g');
    let match;

    while ((match = cssRuleRegex.exec(content)) !== null) {
        implementations.push({
            selector: match[1].trim(),
            properties: match[2].trim(),
            type: 'css'
        });
    }

    return implementations;
}

// 提取HTML实现
function extractHTMLImplementations(content, componentType) {
    const implementations = [];
    const componentInfo = componentTypes[componentType];

    // 查找HTML元素
    componentInfo.patterns.forEach(pattern => {
        const regex = new RegExp(`(<[^>]*class="[^"]*${componentType}[^"]*"[^>]*>.*?</[^>]*>)`, 'gs');
        let match;

        while ((match = regex.exec(content)) !== null) {
            implementations.push({
                element: match[1].trim(),
                type: 'html'
            });
        }
    });

    return implementations;
}

// 获取所有文件
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

// 分析所有网站的组件
function analyzeAllWebsites() {
    console.log('🔍 分析网站组件...');

    const allResults = {};

    Object.keys(componentTypes).forEach(componentType => {
        console.log(`  📦 分析 ${componentTypes[componentType].name}...`);
        allResults[componentType] = {
            name: componentTypes[componentType].name,
            websites: {},
            totalMatches: 0,
            totalVariants: new Set(),
            totalStates: new Set(),
            allImplementations: [],
            usageFrequency: {}
        };
    });

    websites.forEach(website => {
        console.log(`\n🌐 网站: ${website.name}`);

        let files = [];
        try {
            if (fs.existsSync(website.path)) {
                files = getAllFiles(website.path);
            }
        } catch (error) {
            console.log(`  ❌ 无法访问目录: ${website.path}`);
            return;
        }

        const relevantFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.css', '.html', '.jsx', '.tsx', '.js'].includes(ext);
        });

        console.log(`  📄 分析 ${relevantFiles.length} 个文件...`);

        relevantFiles.forEach(file => {
            const fileResults = analyzeComponentsInFile(file);

            Object.keys(fileResults).forEach(componentType => {
                const componentData = fileResults[componentType];
                const globalData = allResults[componentType];

                // 初始化网站数据
                if (!globalData.websites[website.name]) {
                    globalData.websites[website.name] = {
                        type: website.type,
                        matches: [],
                        variants: new Set(),
                        states: new Set(),
                        implementations: [],
                        fileCount: 0
                    };
                }

                const websiteData = globalData.websites[website.name];

                // 合并匹配数据
                componentData.matches.forEach(match => {
                    websiteData.matches.push({
                        ...match,
                        file: path.basename(file)
                    });
                });

                // 合并变体和状态
                componentData.variants.forEach(variant => {
                    websiteData.variants.add(variant);
                    globalData.totalVariants.add(variant);
                });

                componentData.states.forEach(state => {
                    websiteData.states.add(state);
                    globalData.totalStates.add(state);
                });

                // 合并实现
                componentData.implementations.forEach(impl => {
                    websiteData.implementations.push({
                        ...impl,
                        file: path.basename(file)
                    });
                    globalData.allImplementations.push({
                        ...impl,
                        file: path.basename(file),
                        website: website.name
                    });
                });

                globalData.totalMatches += componentData.matches.length;
                websiteData.fileCount++;
            });
        });
    });

    return allResults;
}

// 生成组件文档
function generateComponentDocumentation(allResults) {
    console.log('\n📄 生成组件文档...');

    const docDir = 'component-library';
    if (!fs.existsSync(docDir)) {
        fs.mkdirSync(docDir, { recursive: true });
    }

    Object.keys(allResults).forEach(componentType => {
        const componentData = allResults[componentType];
        const fileName = `${componentType}.md`;
        const filePath = path.join(docDir, fileName);

        let doc = `# ${componentData.name}\n\n`;
        doc += `生成时间: ${new Date().toLocaleString('zh-CN')}\n\n`;

        // 统计信息
        doc += '## 📊 统计信息\n\n';
        doc += `- **总匹配数**: ${componentData.totalMatches}\n`;
        doc += `- **变体数量**: ${componentData.totalVariants.size}\n`;
        doc += `- **状态数量**: ${componentData.totalStates.size}\n`;
        doc += `- **实现数量**: ${componentData.allImplementations.length}\n`;
        doc += `- **网站覆盖**: ${Object.keys(componentData.websites).length}/${websites.length}\n\n`;

        // 使用分布
        doc += '### 🌐 网站使用分布\n\n';
        Object.keys(componentData.websites).forEach(websiteName => {
            const websiteData = componentData.websites[websiteName];
            doc += `- **${websiteName}** (${websiteData.type}): `;
            doc += `${websiteData.matches.length} 匹配, `;
            doc += `${websiteData.variants.size} 变体, `;
            doc += `${websiteData.implementations.length} 实现\n`;
        });
        doc += '\n';

        // 变体列表
        if (componentData.totalVariants.size > 0) {
            doc += '## 🎨 变体类型\n\n';
            doc += '| 变体 | 描述 | 使用网站 |\n';
            doc += '|------|------|----------|\n';

            Array.from(componentData.totalVariants).forEach(variant => {
                const usedIn = Object.keys(componentData.websites).filter(website =>
                    componentData.websites[website].variants.has(variant)
                ).join(', ');
                doc += `| \`${variant}\` | ${getVariantDescription(componentType, variant)} | ${usedIn} |\n`;
            });
            doc += '\n';
        }

        // 状态列表
        if (componentData.totalStates.size > 0) {
            doc += '## 🔄 状态类型\n\n';
            doc += '| 状态 | 描述 | 使用网站 |\n';
            doc += '|------|------|----------|\n';

            Array.from(componentData.totalStates).forEach(state => {
                const usedIn = Object.keys(componentData.websites).filter(website =>
                    componentData.websites[website].states.has(state)
                ).join(', ');
                doc += `| \`${state}\` | ${getStateDescription(componentType, state)} | ${usedIn} |\n`;
            });
            doc += '\n';
        }

        // CSS实现示例
        const cssImplementations = componentData.allImplementations.filter(impl => impl.type === 'css');
        if (cssImplementations.length > 0) {
            doc += '## 🎯 CSS实现示例\n\n';
            doc += '```css\n';
            cssImplementations.slice(0, 5).forEach(impl => {
                doc += `/* ${impl.website}/${impl.file} */\n`;
                doc += `${impl.selector} {\n`;
                doc += `  ${impl.properties}\n`;
                doc += `}\n\n`;
            });
            doc += '```\n\n';
        }

        // HTML实现示例
        const htmlImplementations = componentData.allImplementations.filter(impl => impl.type === 'html');
        if (htmlImplementations.length > 0) {
            doc += '## 🏗️ HTML实现示例\n\n';
            htmlImplementations.slice(0, 5).forEach(impl => {
                doc += `**来源**: ${impl.website}/${impl.file}\n\n`;
                doc += '```html\n';
                doc += impl.element;
                doc += '\n```\n\n';
            });
        }

        // 使用指南
        doc += '## 📖 使用指南\n\n';
        doc += generateUsageGuide(componentType, componentData);

        // 最佳实践
        doc += '## ✅ 最佳实践\n\n';
        doc += generateBestPractices(componentType, componentData);

        // 保存文档
        fs.writeFileSync(filePath, doc);
        console.log(`  ✅ 生成文档: ${fileName}`);
    });
}

// 获取变体描述
function getVariantDescription(componentType, variant) {
    const descriptions = {
        buttons: {
            primary: '主要按钮，用于主要操作',
            secondary: '次要按钮，用于次要操作',
            outline: '轮廓按钮，透明背景',
            ghost: '幽灵按钮，无边框',
            link: '链接样式按钮',
            small: '小尺寸按钮',
            medium: '中等尺寸按钮',
            large: '大尺寸按钮',
            disabled: '禁用状态',
            loading: '加载中状态',
            icon: '带图标的按钮',
            'icon-only': '仅图标按钮',
            'full-width': '全宽按钮'
        },
        forms: {
            text: '文本输入框',
            email: '邮箱输入框',
            password: '密码输入框',
            number: '数字输入框',
            tel: '电话输入框',
            url: 'URL输入框',
            textarea: '多行文本框',
            select: '下拉选择框',
            checkbox: '复选框',
            radio: '单选框',
            switch: '开关组件',
            file: '文件上传',
            date: '日期选择器',
            time: '时间选择器',
            search: '搜索输入框',
            error: '错误状态',
            success: '成功状态',
            warning: '警告状态',
            valid: '验证通过',
            invalid: '验证失败'
        },
        cards: {
            default: '默认卡片样式',
            outlined: '带边框的卡片',
            elevated: '带阴影的卡片',
            filled: '实心背景卡片',
            small: '小尺寸卡片',
            medium: '中等尺寸卡片',
            large: '大尺寸卡片',
            interactive: '可交互卡片',
            clickable: '可点击卡片',
            hoverable: '悬停效果卡片',
            'with-image': '带图片的卡片',
            'with-header': '带头部的卡片',
            'with-footer': '带底部的卡片'
        },
        navigation: {
            horizontal: '水平导航',
            vertical: '垂直导航',
            sidebar: '侧边栏导航',
            topbar: '顶部导航栏',
            breadcrumb: '面包屑导航',
            tabs: '标签页导航',
            pagination: '分页导航',
            mobile: '移动端导航',
            desktop: '桌面端导航',
            sticky: '粘性导航',
            fixed: '固定导航',
            collapsible: '可折叠导航'
        }
    };

    return descriptions[componentType]?.[variant] || variant;
}

// 获取状态描述
function getStateDescription(componentType, state) {
    const descriptions = {
        buttons: {
            hover: '悬停状态',
            active: '激活状态',
            focus: '聚焦状态',
            disabled: '禁用状态',
            loading: '加载状态'
        },
        forms: {
            focus: '聚焦状态',
            blur: '失焦状态',
            disabled: '禁用状态',
            readonly: '只读状态',
            required: '必填状态',
            optional: '可选状态'
        },
        cards: {
            hover: '悬停状态',
            active: '激活状态',
            selected: '选中状态',
            disabled: '禁用状态'
        },
        navigation: {
            active: '当前激活',
            hover: '悬停状态',
            expanded: '展开状态',
            collapsed: '折叠状态',
            'mobile-open': '移动端展开'
        }
    };

    return descriptions[componentType]?.[state] || state;
}

// 生成使用指南
function generateUsageGuide(componentType, componentData) {
    const guides = {
        buttons: `
### 基本用法
\`\`\`html
<button class="btn btn-primary">主要按钮</button>
<button class="btn btn-secondary">次要按钮</button>
\`\`\`

### 尺寸变体
\`\`\`html
<button class="btn btn-primary btn-small">小按钮</button>
<button class="btn btn-primary btn-medium">中等按钮</button>
<button class="btn btn-primary btn-large">大按钮</button>
\`\`\`

### 状态变体
\`\`\`html
<button class="btn btn-primary" disabled>禁用按钮</button>
<button class="btn btn-primary btn-loading">加载中...</button>
\`\`\`
        `,
        forms: `
### 基本输入
\`\`\`html
<input type="text" class="form-input" placeholder="请输入内容">
<input type="email" class="form-input" placeholder="邮箱地址">
<input type="password" class="form-input" placeholder="密码">
\`\`\`

### 验证状态
\`\`\`html
<input type="text" class="form-input form-error" placeholder="错误状态">
<input type="text" class="form-input form-success" placeholder="成功状态">
\`\`\`

### 表单组
\`\`\`html
<div class="form-group">
  <label class="form-label">用户名</label>
  <input type="text" class="form-input" required>
  <span class="form-error-message">请输入用户名</span>
</div>
\`\`\`
        `,
        cards: `
### 基本卡片
\`\`\`html
<div class="card">
  <div class="card-header">卡片标题</div>
  <div class="card-body">
    <p>卡片内容</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">操作按钮</button>
  </div>
</div>
\`\`\`

### 不同样式
\`\`\`html
<div class="card card-outlined">轮廓卡片</div>
<div class="card card-elevated">阴影卡片</div>
<div class="card card-interactive">交互卡片</div>
\`\`\`
        `,
        navigation: `
### 基本导航
\`\`\`html
<nav class="nav nav-horizontal">
  <a href="#" class="nav-item nav-active">首页</a>
  <a href="#" class="nav-item">产品</a>
  <a href="#" class="nav-item">关于</a>
</nav>
\`\`\`

### 面包屑导航
\`\`\`html
<nav class="breadcrumb">
  <a href="#" class="breadcrumb-item">首页</a>
  <a href="#" class="breadcrumb-item">产品</a>
  <span class="breadcrumb-item active">详情</span>
</nav>
\`\`\`
        `
    };

    return guides[componentType] || `详细的${componentData.name}使用指南正在编写中...`;
}

// 生成最佳实践
function generateBestPractices(componentType, componentData) {
    const practices = {
        buttons: `
1. **可访问性**: 确保按钮有足够的对比度和清晰的标签
2. **触摸目标**: 按钮尺寸至少44x44px，间距至少8px
3. **状态反馈**: 提供明确的视觉反馈，特别是加载和禁用状态
4. **一致性**: 在整个应用中保持按钮样式和行为的一致性
        `,
        forms: `
1. **标签关联**: 确保每个输入框都有对应的label标签
2. **输入验证**: 提供实时验证和清晰的错误信息
3. **移动优化**: 使用适当的input类型激活正确的键盘
4. **键盘导航**: 支持Tab键导航和键盘操作
        `,
        cards: `
1. **内容层次**: 使用清晰的视觉层次组织卡片内容
2. **响应式设计**: 确保卡片在不同屏幕尺寸下都能正常显示
3. **交互反馈**: 提供悬停和点击状态的视觉反馈
4. **加载状态**: 处理图片和内容的加载状态
        `,
        navigation: `
1. **移动优先**: 确保导航在移动设备上易于使用
2. **视觉层级**: 清晰地区分当前页面和可导航项
3. **键盘友好**: 支持键盘导航和屏幕阅读器
4. **一致性**: 在所有页面保持导航的一致性
        `
    };

    return practices[componentType] || `1. **一致性**: 在整个应用中保持${componentData.name}的一致性\n2. **可访问性**: 确保组件符合WCAG可访问性标准\n3. **性能**: 优化组件的渲染性能和用户体验`;
}

// 生成总览文档
function generateOverviewDocument(allResults) {
    console.log('\n📋 生成组件库总览文档...');

    let overview = '# Meshy AI 组件库文档\n\n';
    overview += `生成时间: ${new Date().toLocaleString('zh-CN')}\n\n`;

    overview += '## 🎯 组件库概览\n\n';
    overview += `Meshy AI组件库包含${Object.keys(allResults).length}个核心组件类型，提供完整的用户界面构建块。\n\n`;

    overview += '### 📊 统计概览\n\n';
    overview += '| 组件类型 | 总匹配数 | 变体数量 | 状态数量 | 网站覆盖 |\n';
    overview += '|----------|----------|----------|----------|----------|\n';

    Object.keys(allResults).forEach(componentType => {
        const data = allResults[componentType];
        const coverage = Object.keys(data.websites).length;
        overview += `| [${componentType}](./${componentType}.md) | ${data.totalMatches} | ${data.totalVariants.size} | ${data.totalStates.size} | ${coverage}/${websites.length} |\n`;
    });

    overview += '\n';

    // 组件使用指南
    overview += '## 🚀 快速开始\n\n';
    overview += '### 安装和设置\n\n';
    overview += '```bash\n# 安装组件库\nnpm install @meshy/ui-components\n\n# 导入样式\nimport \'@meshy/ui-components/dist/styles.css\';\n```\n\n';

    overview += '### 基本使用\n\n';
    overview += '```jsx\nimport { Button, Card, Form } from \'@meshy/ui-components\';\n\nfunction App() {\n  return (\n    <div className="app">\n      <Button variant="primary" size="large">\n        开始使用\n      </Button>\n      <Card variant="elevated">\n        <Card.Header>欢迎使用</Card.Header>\n        <Card.Body>\n          <Form>\n            <Form.Input type="email" placeholder="邮箱地址" />\n            <Button type="submit">提交</Button>\n          </Form>\n        </Card.Body>\n      </Card>\n    </div>\n  );\n}\n```\n\n';

    // 设计原则
    overview += '## 🎨 设计原则\n\n';
    overview += '1. **一致性**: 所有组件遵循统一的设计语言和交互模式\n';
    overview += '2. **可访问性**: 符合WCAG 2.1 AA级可访问性标准\n';
    overview += '3. **响应式**: 移动优先，适配各种屏幕尺寸\n';
    overview += '4. **可定制**: 提供丰富的变体和配置选项\n';
    overview += '5. **性能优**: 优化渲染性能和用户体验\n\n';

    // 主题定制
    overview += '## 🎨 主题定制\n\n';
    overview += '### CSS变量\n\n';
    overview += '```css\n:root {\n  --meshy-primary-color: #C5F955;\n  --meshy-secondary-color: #FF97C2;\n  --meshy-border-radius: 8px;\n  --meshy-font-family: Inter, sans-serif;\n}\n```\n\n';

    overview += '### 深色主题\n\n';
    overview += '```css\n[data-theme="dark"] {\n  --meshy-bg-primary: #1a1a1a;\n  --meshy-text-primary: #ffffff;\n  --meshy-border-color: #333333;\n}\n```\n\n';

    // 贡献指南
    overview += '## 🤝 贡献指南\n\n';
    overview += '1. 遵循现有的设计系统和组件规范\n';
    overview += '2. 确保新组件的完整性和一致性\n';
    overview += '3. 编写清晰的文档和使用示例\n';
    overview += '4. 进行充分的测试和可访问性检查\n\n';

    fs.writeFileSync('component-library/README.md', overview);
    console.log('  ✅ 生成总览文档: README.md');
}

// 主函数
async function main() {
    try {
        console.log('🔍 开始分析组件库...\n');

        // 分析所有网站的组件
        const allResults = analyzeAllWebsites();

        // 生成组件文档
        generateComponentDocumentation(allResults);

        // 生成总览文档
        generateOverviewDocument(allResults);

        // 保存完整数据
        const outputDir = 'css-analysis';
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // 创建精简的数据版本，避免字符串过长
        const summaryData = {
            timestamp: new Date().toISOString(),
            websites: websites.length,
            componentSummary: {}
        };

        Object.keys(allResults).forEach(componentType => {
            const data = allResults[componentType];
            summaryData.componentSummary[componentType] = {
                name: data.name,
                totalMatches: data.totalMatches,
                variantsCount: data.totalVariants.size,
                statesCount: data.totalStates.size,
                implementationsCount: data.allImplementations.length,
                websiteCount: Object.keys(data.websites).length
            };
        });

        fs.writeFileSync(
            path.join(outputDir, 'component-library-analysis.json'),
            JSON.stringify(summaryData, null, 2)
        );

        console.log('\n✅ 组件库文档生成完成！');
        console.log('\n📁 生成的文件:');
        console.log('  - component-library/README.md (总览文档)');
        Object.keys(allResults).forEach(componentType => {
            console.log(`  - component-library/${componentType}.md (${allResults[componentType].name})`);
        });
        console.log('  - css-analysis/component-library-analysis.json (分析数据)');

    } catch (error) {
        console.error('❌ 生成过程中出现错误:', error);
    }
}

// 运行主函数
main();