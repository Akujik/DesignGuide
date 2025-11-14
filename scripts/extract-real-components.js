#!/usr/bin/env node

/**
 * 真实源文件组件解析脚本
 * 基于targets文件夹中的实际源码，提取真实的组件实现
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 开始解析真实源文件组件...\n');

// 网站配置
const websites = [
    {
        name: 'Main Site',
        path: 'targets/Meshy AI - The #1 AI 3D Model Generator (2025_11_9 00：23：32)',
        type: 'main'
    },
    {
        name: 'Blog',
        path: 'targets/Blog - Meshy (2025_11_13 22：13：06)',
        type: 'blog'
    },
    {
        name: 'Careers',
        path: 'targets/Careers - Meshy AI (2025_11_13 22：52：04)',
        type: 'careers'
    },
    {
        name: 'Contact Us',
        path: 'targets/Contact Us - Meshy (2025_11_13 22：52：57)',
        type: 'contact'
    },
    {
        name: 'API Platform',
        path: 'targets/API Platform - Meshy (2025_11_13 22：04：05)',
        type: 'api'
    },
    {
        name: 'Introduction',
        path: 'targets/Introduction - Meshy Docs (2025_11_14 03：02：58)',
        type: 'introduction'
    }
];

// 组件分类定义
const componentCategories = {
    header: {
        name: 'Header/Navigation',
        selectors: [
            /header[^>]*>/gi,
            /nav[^>]*>/gi,
            /class="[^"]*header[^"]*"/gi,
            /class="[^"]*navbar[^"]*"/gi,
            /class="[^"]*navigation[^"]*"/gi,
            /class="[^"]*menu[^"]*"/gi
        ]
    },
    footer: {
        name: 'Footer',
        selectors: [
            /footer[^>]*>/gi,
            /class="[^"]*footer[^"]*"/gi,
            /class="[^"]*bottom[^"]*"/gi
        ]
    },
    hero: {
        name: 'Hero Section',
        selectors: [
            /class="[^"]*hero[^"]*"/gi,
            /class="[^"]*banner[^"]*"/gi,
            /class="[^"]*landing[^"]*"/gi,
            /class="[^"]*main[^"]*"[^>]*>(.(?!<))*section/gi
        ]
    },
    sidebar: {
        name: 'Sidebar',
        selectors: [
            /class="[^"]*sidebar[^"]*"/gi,
            /class="[^"]*side[^"]*"/gi,
            /class="[^"]*aside[^"]*"/gi
        ]
    },
    card: {
        name: 'Card',
        selectors: [
            /class="[^"]*card[^"]*"/gi,
            /class="[^"]*tile[^"]*"/gi,
            /class="[^"]*grid[^"]*"[^>]*>(.(?!<))*div/gi
        ]
    },
    button: {
        name: 'Button',
        selectors: [
            /<button[^>]*>/gi,
            /class="[^"]*btn[^"]*"/gi,
            /class="[^"]*button[^"]*"/gi
        ]
    },
    form: {
        name: 'Form',
        selectors: [
            /<form[^>]*>/gi,
            /<input[^>]*>/gi,
            /<textarea[^>]*>/gi,
            /<select[^>]*>/gi,
            /class="[^"]*form[^"]*"/gi,
            /class="[^"]*input[^"]*"/gi
        ]
    },
    breadcrumb: {
        name: 'Breadcrumb',
        selectors: [
            /class="[^"]*breadcrumb[^"]*"/gi,
            /class="[^"]*crumb[^"]*"/gi
        ]
    }
};

// 解析单个文件
function parseFile(filePath, category) {
    if (!fs.existsSync(filePath)) return { matches: [], examples: [] };

    const content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath).toLowerCase();
    const result = { matches: [], examples: [] };

    if (ext === '.html') {
        category.selectors.forEach(selector => {
            const matches = content.match(selector) || [];
            matches.forEach(match => {
                result.matches.push(match);
                // 提取上下文
                const index = content.indexOf(match);
                const start = Math.max(0, index - 100);
                const end = Math.min(content.length, index + match.length + 100);
                result.examples.push(content.substring(start, end).replace(/\n+/g, ' '));
            });
        });
    }

    if (ext === '.css') {
        // 提取CSS类定义
        category.selectors.forEach(selector => {
            const cssRegex = new RegExp(`([^.]*\\${category.name.toLowerCase()}[^{]*?)\\s*\\{([^}]*)\\}`, 'gi');
            let match;
            while ((match = cssRegex.exec(content)) !== null) {
                result.matches.push(match[0]);
                result.examples.push(`.selector { ${match[2]} }`);
            }
        });
    }

    return result;
}

// 解析单个网站
function parseWebsite(website) {
    console.log(`🌐 解析网站: ${website.name}`);

    const result = {
        website: website.name,
        type: website.type,
        files: {},
        categories: {}
    };

    // 初始化分类
    Object.keys(componentCategories).forEach(category => {
        result.categories[category] = {
            name: componentCategories[category].name,
            totalMatches: 0,
            files: []
        };
    });

    // 查找所有相关文件
    let files = [];
    try {
        if (fs.existsSync(website.path)) {
            const getAllFiles = (dirPath, arrayOfFiles = []) => {
                const files = fs.readdirSync(dirPath);
                files.forEach(file => {
                    const fullPath = path.join(dirPath, file);
                    if (fs.statSync(fullPath).isDirectory()) {
                        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
                    } else {
                        const ext = path.extname(file).toLowerCase();
                        if (['.html', '.css', '.js'].includes(ext)) {
                            arrayOfFiles.push(fullPath);
                        }
                    }
                });
                return arrayOfFiles;
            };
            files = getAllFiles(website.path);
        }
    } catch (error) {
        console.log(`  ❌ 无法访问目录: ${website.path}`);
        return result;
    }

    console.log(`  📄 分析 ${files.length} 个文件...`);

    // 分析每个文件的每个类别
    files.forEach(file => {
        const fileName = path.basename(file);
        result.files[fileName] = {};

        Object.keys(componentCategories).forEach(category => {
            const parseResult = parseFile(file, componentCategories[category]);
            if (parseResult.matches.length > 0) {
                result.files[fileName][category] = parseResult;
                result.categories[category].totalMatches += parseResult.matches.length;
                result.categories[category].files.push({
                    file: fileName,
                    matches: parseResult.matches.length,
                    examples: parseResult.examples.slice(0, 3) // 最多3个示例
                });
            }
        });
    });

    return result;
}

// 提取CSS渐变系统
function extractGradientSystem(websites) {
    console.log('\n🎨 提取CSS渐变系统...');

    const gradients = {
        total: 0,
        types: {
            'linear-gradient': 0,
            'radial-gradient': 0,
            'conic-gradient': 0
        },
        colorPairs: {},
        examples: []
    };

    websites.forEach(website => {
        const websitePath = website.path;
        const cssFiles = [];

        // 收集CSS文件
        try {
            if (fs.existsSync(websitePath)) {
                const getAllFiles = (dirPath, arrayOfFiles = []) => {
                    const files = fs.readdirSync(dirPath);
                    files.forEach(file => {
                        const fullPath = path.join(dirPath, file);
                        if (fs.statSync(fullPath).isDirectory()) {
                            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
                        } else if (path.extname(file).toLowerCase() === '.css') {
                            arrayOfFiles.push(fullPath);
                        }
                    });
                    return arrayOfFiles;
                };
                cssFiles.push(...getAllFiles(websitePath));
            }
        } catch (error) {
            console.log(`  ❌ 无法解析 ${website.name} 的CSS文件`);
        }

        // 分析渐变
        cssFiles.forEach(file => {
            try {
                const content = fs.readFileSync(file, 'utf8');

                // 查找渐变
                const gradientRegex = /(linear|radial|conic)-gradient\([^)]+\)/gi;
                const matches = content.match(gradientRegex) || [];

                matches.forEach(gradient => {
                    gradients.total++;
                    if (gradient.includes('linear-gradient')) gradients.types['linear-gradient']++;
                    if (gradient.includes('radial-gradient')) gradients.types['radial-gradient']++;
                    if (gradient.includes('conic-gradient')) gradients.types['conic-gradient']++;

                    // 提取颜色对
                    const colorRegex = /#[0-9a-fA-F]{3,8}\b|[a-z]+(?:-[a-z]+)+/gi;
                    const colors = gradient.match(colorRegex) || [];
                    if (colors.length >= 2) {
                        const pair = colors.slice(0, 2).join(' → ');
                        gradients.colorPairs[pair] = (gradients.colorPairs[pair] || 0) + 1;
                    }

                    if (gradients.examples.length < 20) {
                        gradients.examples.push({
                            gradient: gradient,
                            file: path.basename(file),
                            website: website.name
                        });
                    }
                });
            } catch (error) {
                console.log(`  ❌ 无法读取文件: ${file}`);
            }
        });
    });

    return gradients;
}

// 提取暗色主题变量
function extractDarkTheme(websites) {
    console.log('\n🌙 提取暗色主题变量...');

    const darkTheme = {
        variables: {},
        mediaQueries: 0,
        examples: []
    };

    websites.forEach(website => {
        const websitePath = website.path;
        const cssFiles = [];

        // 收集CSS文件
        try {
            if (fs.existsSync(websitePath)) {
                const getAllFiles = (dirPath, arrayOfFiles = []) => {
                    const files = fs.readdirSync(dirPath);
                    files.forEach(file => {
                        const fullPath = path.join(dirPath, file);
                        if (fs.statSync(fullPath).isDirectory()) {
                            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
                        } else if (path.extname(file).toLowerCase() === '.css') {
                            arrayOfFiles.push(fullPath);
                        }
                    });
                    return arrayOfFiles;
                };
                cssFiles.push(...getAllFiles(websitePath));
            }
        } catch (error) {
            console.log(`  ❌ 无法解析 ${website.name} 的CSS文件`);
        }

        // 分析暗色主题
        cssFiles.forEach(file => {
            try {
                const content = fs.readFileSync(file, 'utf8');

                // 查找暗色媒体查询
                const darkMediaRegex = /@media[^)]*dark[^)]*[^{]*\{([^}]*)\}/gi;
                const darkMatches = content.match(darkMediaRegex) || [];
                darkTheme.mediaQueries += darkMatches.length;

                // 查找深色变量
                const darkVarRegex = /--[a-zA-Z0-9-]*dark[a-zA-Z0-9-]*:\s*([^;]+)/gi;
                let match;
                while ((match = darkVarRegex.exec(content)) !== null) {
                    const varName = match[0].split(':')[0];
                    const varValue = match[1].trim();
                    darkTheme.variables[varName] = varValue;
                }

                // 查找dark类相关的CSS
                const darkClassRegex = /\.dark[^{]*\{([^}]*)\}/gi;
                const darkClassMatches = content.match(darkClassRegex) || [];

                if ((darkMatches.length > 0 || darkClassMatches.length > 0) && darkTheme.examples.length < 10) {
                    darkTheme.examples.push({
                        file: path.basename(file),
                        website: website.name,
                        mediaQueries: darkMatches.length,
                        darkClasses: darkClassMatches.length,
                        sample: darkMatches[0] || darkClassMatches[0]
                    });
                }
            } catch (error) {
                console.log(`  ❌ 无法读取文件: ${file}`);
            }
        });
    });

    return darkTheme;
}

// 主函数
async function main() {
    try {
        console.log('🔍 开始深度解析targets源文件...\n');

        // 解析所有网站的组件
        const allResults = [];
        websites.forEach(website => {
            const result = parseWebsite(website);
            allResults.push(result);
        });

        // 提取渐变系统
        const gradients = extractGradientSystem(websites);

        // 提取暗色主题
        const darkTheme = extractDarkTheme(websites);

        // 生成分析报告
        console.log('\n📊 生成分析报告...');

        let report = '# Meshy AI 真实源文件组件分析报告\n\n';
        report += `生成时间: ${new Date().toLocaleString('zh-CN')}\n\n`;

        // 总体统计
        report += '## 📊 总体统计\n\n';
        report += `- **分析网站数量**: ${websites.length}\n`;
        report += `- **组件类别**: ${Object.keys(componentCategories).length}\n`;
        report += `- **发现渐变**: ${gradients.total}个\n`;
        report += `- **暗色主题**: ${darkTheme.mediaQueries}个媒体查询\n\n`;

        // 组件统计
        report += '## 🧩 组件发现统计\n\n';
        report += '| 组件类别 | 总匹配数 | 网站覆盖 |\n';
        report += '|----------|----------|----------|\n';

        Object.keys(componentCategories).forEach(category => {
            let totalMatches = 0;
            let websiteCoverage = 0;

            allResults.forEach(result => {
                const matches = result.categories[category].totalMatches;
                totalMatches += matches;
                if (matches > 0) websiteCoverage++;
            });

            const categoryName = componentCategories[category].name;
            report += `| ${categoryName} | ${totalMatches} | ${websiteCoverage}/${websites.length} |\n`;
        });

        // 网站详细分析
        report += '\n## 🌐 各网站详细分析\n\n';
        allResults.forEach(result => {
            report += `### ${result.website} (${result.type})\n\n`;

            Object.keys(result.categories).forEach(category => {
                const categoryData = result.categories[category];
                if (categoryData.totalMatches > 0) {
                    report += `**${categoryData.name}**: ${categoryData.totalMatches} 个匹配\n`;
                    categoryData.files.forEach(file => {
                        report += `  - ${file.file}: ${file.matches} 个\n`;
                    });
                }
            });
            report += '\n';
        });

        // 渐变系统
        report += '## 🎨 渐变系统分析\n\n';
        report += `- **总渐变数量**: ${gradients.total}\n`;
        report += `- **线性渐变**: ${gradients.types['linear-gradient']}\n`;
        report += `- **径向渐变**: ${gradients.types['radial-gradient']}\n`;
        report += `- **锥形渐变**: ${gradients.types['conic-gradient']}\n\n`;

        report += '### 主要渐变色对\n\n';
        Object.entries(gradients.colorPairs)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .forEach(([pair, count]) => {
                report += `- **${pair}**: ${count}次使用\n`;
            });

        // 暗色主题
        report += '\n## 🌙 暗色主题分析\n\n';
        report += `- **暗色媒体查询**: ${darkTheme.mediaQueries}个\n`;
        report += `- **暗色变量**: ${Object.keys(darkTheme.variables).length}个\n\n`;

        if (darkTheme.examples.length > 0) {
            report += '### 暗色主题示例\n\n';
            darkTheme.examples.forEach(example => {
                report += `**${example.website} - ${example.file}**\n`;
                report += `- 媒体查询: ${example.mediaQueries}\n`;
                report += `- 深色类: ${example.darkClasses}\n`;
                report += `\`\`\`css\n${example.sample}\`\`\`\n\n`;
            });
        }

        // 保存报告
        const outputDir = 'css-analysis';
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(path.join(outputDir, 'real-components-analysis.md'), report);

        // 保存详细数据
        const detailedData = {
            timestamp: new Date().toISOString(),
            websites: websites.length,
            componentCategories: Object.keys(componentCategories).length,
            results: allResults,
            gradients,
            darkTheme
        };

        fs.writeFileSync(
            path.join(outputDir, 'real-components-data.json'),
            JSON.stringify(detailedData, null, 2)
        );

        console.log('\n✅ 真实源文件分析完成！');
        console.log('\n📊 主要发现:');

        // 显示重要发现
        Object.keys(componentCategories).forEach(category => {
            let totalMatches = 0;
            allResults.forEach(result => {
                totalMatches += result.categories[category].totalMatches;
            });
            if (totalMatches > 0) {
                console.log(`  ✅ ${componentCategories[category].name}: ${totalMatches} 个实例`);
            } else {
                console.log(`  ⚠️ ${componentCategories[category].name}: 未发现实例`);
            }
        });

        console.log(`  🎨 发现 ${gradients.total} 个渐变效果`);
        console.log(`  🌙 发现 ${darkTheme.mediaQueries} 个暗色主题规则`);

        console.log('\n📄 报告已保存:');
        console.log('  - css-analysis/real-components-analysis.md');
        console.log('  - css-analysis/real-components-data.json');

    } catch (error) {
        console.error('❌ 分析过程中出现错误:', error);
    }
}

// 运行主函数
main();