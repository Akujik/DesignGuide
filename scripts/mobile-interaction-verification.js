#!/usr/bin/env node

/**
 * 移动端交互验证分析脚本
 * 分析触摸目标、移动端导航、表单适配等移动端交互特性
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 移动端交互验证分析启动...\n');

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

// 移动端交互检查项
const mobileChecks = {
    touchTargets: {
        patterns: [
            { pattern: /min-width:\s*(44|48)px/gi, description: '最小触摸目标宽度 (44-48px)', type: 'good' },
            { pattern: /min-height:\s*(44|48)px/gi, description: '最小触摸目标高度 (44-48px)', type: 'good' },
            { pattern: /touch-action/gi, description: '触摸动作控制', type: 'good' },
            { pattern: /-webkit-tap-highlight/gi, description: '触摸高亮控制', type: 'good' },
            { pattern: /user-select:\s*none/gi, description: '文本选择控制', type: 'good' },
            { pattern: /ontouch/gi, description: '触摸事件处理', type: 'good' },
            { pattern: /cursor:\s*pointer/gi, description: '手势指针', type: 'medium' }
        ]
    },
    mobileNavigation: {
        patterns: [
            { pattern: /hamburger|menu.*button|mobile.*menu/gi, description: '汉堡菜单按钮', type: 'critical' },
            { pattern: /drawer|sidebar|offcanvas/gi, description: '抽屉导航', type: 'critical' },
            { pattern: /transform:\s*translateX/gi, description: '侧滑导航', type: 'good' },
            { pattern: /overflow:\s*(auto|scroll)/gi, description: '滚动容器', type: 'medium' },
            { pattern: /position:\s*fixed.*top:\s*0/gi, description: '顶部固定导航', type: 'good' },
            { pattern: /z-index.*nav|nav.*z-index/gi, description: '导航层级控制', type: 'medium' }
        ]
    },
    formAdaptation: {
        patterns: [
            { pattern: /input.*type="tel"/gi, description: '电话输入类型', type: 'critical' },
            { pattern: /input.*type="email"/gi, description: '邮箱输入类型', type: 'critical' },
            { pattern: /input.*type="number"/gi, description: '数字输入类型', type: 'medium' },
            { pattern: /autocomplete/gi, description: '自动完成', type: 'good' },
            { pattern: /autocapitalize/gi, description: '自动大写', type: 'good' },
            { pattern: /autocorrect/gi, description: '自动纠正', type: 'good' },
            { pattern: /pattern=".*"/gi, description: '输入模式限制', type: 'medium' },
            { pattern: /inputmode/gi, description: '输入模式控制', type: 'critical' }
        ]
    },
    responsiveBreakpoints: {
        patterns: [
            { pattern: /@media.*max-width:\s*(767|767\.98|767\.99)px/gi, description: '平板断点 (768px以下)', type: 'critical' },
            { pattern: /@media.*max-width:\s*(480|479|479\.98)px/gi, description: '手机断点 (480px以下)', type: 'critical' },
            { pattern: /@media.*max-width:\s*(375|374|374\.98)px/gi, description: '小屏手机断点 (375px以下)', type: 'critical' },
            { pattern: /display:\s*none.*mobile|mobile.*display:\s*none/gi, description: '移动端隐藏元素', type: 'good' },
            { pattern: /display:\s*block.*mobile|mobile.*display:\s*block/gi, description: '移动端显示元素', type: 'good' },
            { pattern: /flex-direction:\s*column.*mobile|mobile.*flex-direction:\s*column/gi, description: '移动端垂直布局', type: 'critical' }
        ]
    },
    viewportOptimization: {
        patterns: [
            { pattern: /viewport.*width=device-width/gi, description: '视口宽度适配', type: 'critical' },
            { pattern: /viewport.*initial-scale=1/gi, description: '初始缩放控制', type: 'critical' },
            { pattern: /viewport.*user-scalable=no/gi, description: '用户缩放控制', type: 'medium' },
            { pattern: /viewport.*maximum-scale/gi, description: '最大缩放限制', type: 'medium' },
            { pattern: /viewport.*minimum-scale/gi, description: '最小缩放限制', type: 'medium' }
        ]
    },
    performanceOptimization: {
        patterns: [
            { pattern: /webp/gi, description: 'WebP图片格式', type: 'good' },
            { pattern: /lazyload|loading="lazy"/gi, description: '延迟加载', type: 'good' },
            { pattern: /srcset/gi, description: '响应式图片', type: 'good' },
            { pattern: /sizes/gi, description: '图片尺寸控制', type: 'good' },
            { pattern: /font-display:\s*swap/gi, description: '字体交换策略', type: 'medium' },
            { pattern: /prefetch|preload/gi, description: '资源预加载', type: 'medium' }
        ]
    }
};

// 分析单个文件
function analyzeFile(filePath, website) {
    if (!fs.existsSync(filePath)) return {};

    const content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath).toLowerCase();

    const results = {
        touchTargets: [],
        mobileNavigation: [],
        formAdaptation: [],
        responsiveBreakpoints: [],
        viewportOptimization: [],
        performanceOptimization: []
    };

    // 检查CSS文件
    if (ext === '.css') {
        Object.keys(mobileChecks).forEach(category => {
            mobileChecks[category].patterns.forEach(check => {
                const matches = content.match(check.pattern);
                if (matches) {
                    results[category].push({
                        pattern: check.pattern.source,
                        description: check.description,
                        type: check.type,
                        count: matches.length,
                        examples: matches.slice(0, 3)
                    });
                }
            });
        });
    }

    // 检查HTML文件
    if (ext === '.html') {
        // 检查viewport meta标签
        const viewportMatches = content.match(/<meta[^>]*viewport[^>]*>/gi);
        if (viewportMatches) {
            viewportMatches.forEach(viewport => {
                Object.keys(mobileChecks.viewportOptimization).forEach(key => {
                    const check = mobileChecks.viewportOptimization[key];
                    if (check && check.pattern && check.pattern.test(viewport)) {
                        results.viewportOptimization.push({
                            pattern: check.pattern.source,
                            description: check.description,
                            type: check.type,
                            count: 1,
                            examples: [viewport]
                        });
                    }
                });
            });
        }

        // 检查表单输入类型
        Object.keys(mobileChecks.formAdaptation).forEach(key => {
            const check = mobileChecks.formAdaptation[key];
            if (check && check.pattern) {
                const matches = content.match(check.pattern);
                if (matches) {
                    results.formAdaptation.push({
                        pattern: check.pattern.source,
                        description: check.description,
                        type: check.type,
                        count: matches.length,
                        examples: matches.slice(0, 3)
                    });
                }
            }
        });

        // 检查图片优化
        Object.keys(mobileChecks.performanceOptimization).forEach(key => {
            const check = mobileChecks.performanceOptimization[key];
            if (check && check.pattern) {
                const matches = content.match(check.pattern);
                if (matches) {
                    results.performanceOptimization.push({
                        pattern: check.pattern.source,
                        description: check.description,
                        type: check.type,
                        count: matches.length,
                        examples: matches.slice(0, 3)
                    });
                }
            }
        });
    }

    return results;
}

// 分析单个网站
function analyzeWebsite(website) {
    console.log(`📱 分析网站: ${website.name}`);

    const results = {
        website: website.name,
        type: website.type,
        files: {},
        totals: {
            touchTargets: { critical: 0, good: 0, medium: 0, total: 0 },
            mobileNavigation: { critical: 0, good: 0, medium: 0, total: 0 },
            formAdaptation: { critical: 0, good: 0, medium: 0, total: 0 },
            responsiveBreakpoints: { critical: 0, good: 0, medium: 0, total: 0 },
            viewportOptimization: { critical: 0, good: 0, medium: 0, total: 0 },
            performanceOptimization: { critical: 0, good: 0, medium: 0, total: 0 }
        },
        fileCounts: {
            css: 0,
            html: 0,
            js: 0,
            total: 0
        }
    };

    // 查找所有文件
    let files = [];

    try {
        if (fs.existsSync(website.path)) {
            files = getAllFiles(website.path);
        }
    } catch (error) {
        console.log(`  ❌ 无法访问目录: ${website.path}`);
        return results;
    }

    // 分析所有文件
    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();

        if (['.css', '.html', '.js'].includes(ext)) {
            results.fileCounts[ext === '.css' ? 'css' : ext === '.html' ? 'html' : 'js']++;
            results.fileCounts.total++;

            const fileResults = analyzeFile(file, website);
            results.files[file] = fileResults;

            // 统计总数
            Object.keys(fileResults).forEach(category => {
                fileResults[category].forEach(item => {
                    if (!results.totals[category]) {
                        results.totals[category] = { critical: 0, good: 0, medium: 0, total: 0 };
                    }

                    results.totals[category][item.type]++;
                    results.totals[category].total++;
                });
            });
        }
    });

    return results;
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

// 计算分数
function calculateMobileScore(totals) {
    let totalScore = 0;
    let maxScore = 0;

    Object.keys(totals).forEach(category => {
        const categoryData = totals[category];

        // 根据重要性设定权重
        let categoryWeight = 1;
        if (category === 'touchTargets' || category === 'mobileNavigation') {
            categoryWeight = 3; // 触摸目标和导航最重要
        } else if (category === 'responsiveBreakpoints' || category === 'viewportOptimization') {
            categoryWeight = 2; // 响应式和视口优化很重要
        }

        // 计算类别分数
        const criticalScore = categoryData.critical * 10 * categoryWeight;
        const goodScore = categoryData.good * 5 * categoryWeight;
        const mediumScore = categoryData.medium * 2 * categoryWeight;

        totalScore += criticalScore + goodScore + mediumScore;

        // 计算最大可能分数 (假设每个类别至少有2个critical项)
        maxScore += (2 * 10 * categoryWeight);
    });

    return {
        score: Math.round((totalScore / maxScore) * 100),
        grade: getGrade(totalScore / maxScore)
    };
}

function getGrade(score) {
    if (score >= 0.9) return 'A+';
    if (score >= 0.8) return 'A';
    if (score >= 0.7) return 'B';
    if (score >= 0.6) return 'C';
    if (score >= 0.5) return 'D';
    return 'F';
}

// 生成报告
function generateReport(allResults) {
    console.log('\n📊 移动端交互性分析报告生成中...');

    let report = '# 移动端交互验证分析报告\n\n';
    report += `生成时间: ${new Date().toLocaleString('zh-CN')}\n\n`;

    // 总体统计
    report += '## 📱 总体统计\n\n';

    const totalFiles = allResults.reduce((sum, result) => sum + result.fileCounts.total, 0);
    const totalCSS = allResults.reduce((sum, result) => sum + result.fileCounts.css, 0);
    const totalHTML = allResults.reduce((sum, result) => sum + result.fileCounts.html, 0);
    const totalJS = allResults.reduce((sum, result) => sum + result.fileCounts.js, 0);

    report += `- **分析网站数量**: ${allResults.length}\n`;
    report += `- **总文件数量**: ${totalFiles}\n`;
    report += `  - CSS文件: ${totalCSS}\n`;
    report += `  - HTML文件: ${totalHTML}\n`;
    report += `  - JS文件: ${totalJS}\n\n`;

    // 分类统计
    const categoryTotals = {
        touchTargets: { critical: 0, good: 0, medium: 0, total: 0 },
        mobileNavigation: { critical: 0, good: 0, medium: 0, total: 0 },
        formAdaptation: { critical: 0, good: 0, medium: 0, total: 0 },
        responsiveBreakpoints: { critical: 0, good: 0, medium: 0, total: 0 },
        viewportOptimization: { critical: 0, good: 0, medium: 0, total: 0 },
        performanceOptimization: { critical: 0, good: 0, medium: 0, total: 0 }
    };

    allResults.forEach(result => {
        Object.keys(result.totals).forEach(category => {
            if (categoryTotals[category]) {
                categoryTotals[category].critical += result.totals[category].critical;
                categoryTotals[category].good += result.totals[category].good;
                categoryTotals[category].medium += result.totals[category].medium;
                categoryTotals[category].total += result.totals[category].total;
            }
        });
    });

    report += '### 🎯 移动端特性分类统计\n\n';
    report += '| 类别 | 关键项 | 优秀项 | 一般项 | 总数 |\n';
    report += '|------|--------|--------|--------|------|\n';

    Object.keys(categoryTotals).forEach(category => {
        const total = categoryTotals[category].total;
        if (total > 0) {
            const critical = categoryTotals[category].critical;
            const good = categoryTotals[category].good;
            const medium = categoryTotals[category].medium;

            const categoryNames = {
                touchTargets: '触摸目标',
                mobileNavigation: '移动导航',
                formAdaptation: '表单适配',
                responsiveBreakpoints: '响应式断点',
                viewportOptimization: '视口优化',
                performanceOptimization: '性能优化'
            };

            report += `| ${categoryNames[category]} | ${critical} | ${good} | ${medium} | ${total} |\n`;
        }
    });

    // 各网站详细分析
    report += '\n## 🌐 各网站详细分析\n\n';

    allResults.forEach(result => {
        const score = calculateMobileScore(result.totals);
        report += `### ${result.website} (${result.type})\n\n`;
        report += `**移动端评分**: ${score.score}/100 (${score.grade})\n\n`;
        report += `**文件统计**: CSS ${result.fileCounts.css}, HTML ${result.fileCounts.html}, JS ${result.fileCounts.js}\n\n`;

        report += '#### 移动端特性详情\n\n';

        Object.keys(result.totals).forEach(category => {
            const total = result.totals[category].total;
            if (total > 0) {
                const critical = result.totals[category].critical;
                const good = result.totals[category].good;
                const medium = result.totals[category].medium;

                const categoryNames = {
                    touchTargets: '触摸目标',
                    mobileNavigation: '移动导航',
                    formAdaptation: '表单适配',
                    responsiveBreakpoints: '响应式断点',
                    viewportOptimization: '视口优化',
                    performanceOptimization: '性能优化'
                };

                report += `- **${categoryNames[category]}**: `;
                if (critical > 0) {
                    report += `🔴 ${critical} 关键项 `;
                }
                if (good > 0) {
                    report += `🟢 ${good} 优秀项 `;
                }
                if (medium > 0) {
                    report += `🟡 ${medium} 一般项 `;
                }
                report += `(${total} 项)\n`;
            }
        });

        report += '\n';
    });

    // 发现和问题
    report += '## 🔍 主要发现\n\n';

    const findings = [];

    // 分析触摸目标
    const touchTargetsTotal = categoryTotals.touchTargets.total;
    if (touchTargetsTotal === 0) {
        findings.push('❌ **缺失触摸目标优化** - 所有网站都没有44-48px最小触摸目标');
    } else if (touchTargetsTotal < 10) {
        findings.push('⚠️ **触摸目标不足** - 大部分按钮和链接可能不符合移动端标准');
    } else {
        findings.push('✅ **触摸目标良好** - 发现足够的移动端触摸目标');
    }

    // 分析移动导航
    const mobileNavTotal = categoryTotals.mobileNavigation.total;
    if (mobileNavTotal === 0) {
        findings.push('❌ **缺失移动端导航** - 没有发现汉堡菜单或抽屉导航');
    } else if (mobileNavTotal < 5) {
        findings.push('⚠️ **移动导航不足** - 移动端导航体验需要改进');
    } else {
        findings.push('✅ **移动导航完善** - 发现完整的移动端导航系统');
    }

    // 分析表单适配
    const formTotal = categoryTotals.formAdaptation.total;
    if (formTotal === 0) {
        findings.push('❌ **表单未适配移动端** - 缺少移动端输入类型和优化');
    } else if (formTotal < 5) {
        findings.push('⚠️ **表单适配不完整** - 部分表单元素需要移动端优化');
    } else {
        findings.push('✅ **表单适配良好** - 发现移动端表单优化特性');
    }

    // 分析响应式断点
    const responsiveTotal = categoryTotals.responsiveBreakpoints.total;
    if (responsiveTotal === 0) {
        findings.push('❌ **缺失响应式设计** - 没有发现移动端断点');
    } else if (responsiveTotal < 10) {
        findings.push('⚠️ **响应式不完整** - 移动端适配需要加强');
    } else {
        findings.push('✅ **响应式设计完善** - 发现完整的移动端断点系统');
    }

    // 分析视口优化
    const viewportTotal = categoryTotals.viewportOptimization.total;
    if (viewportTotal === 0) {
        findings.push('❌ **视口未优化** - 缺少viewport meta标签');
    } else {
        findings.push('✅ **视口已优化** - 发现viewport配置');
    }

    findings.forEach(finding => {
        report += `- ${finding}\n`;
    });

    // 改进建议
    report += '\n## 💡 改进建议\n\n';

    report += '### 🚨 紧急改进项\n\n';
    if (touchTargetsTotal === 0) {
        report += '1. **添加最小触摸目标尺寸** - 确保所有按钮和链接至少44x44px\n';
        report += '2. **优化触摸间距** - 增加触摸目标之间的间距\n';
    }
    if (mobileNavTotal === 0) {
        report += '3. **实现移动端导航** - 添加汉堡菜单和抽屉导航\n';
    }
    if (formTotal === 0) {
        report += '4. **优化移动端表单** - 添加tel、email等合适的input类型\n';
    }

    report += '\n### 🎯 重要改进项\n\n';
    report += '1. **添加触摸反馈** - 实现触摸高亮和振动反馈\n';
    report += '2. **优化移动端性能** - 使用WebP图片和延迟加载\n';
    report += '3. **改进手势支持** - 添加滑动操作和手势导航\n';
    report += '4. **测试触摸体验** - 在真实设备上测试所有交互\n';

    report += '\n### 🔮 长期优化项\n\n';
    report += '1. **实现PWA功能** - 添加离线支持和应用安装\n';
    report += '2. **优化加载性能** - 实现关键CSS内联和资源预加载\n';
    report += '3. **添加无障碍支持** - 改进屏幕阅读器和键盘导航\n';

    // 保存报告
    fs.writeFileSync('css-analysis/mobile-interaction-verification-report.md', report);

    // 生成JSON数据
    const jsonData = {
        timestamp: new Date().toISOString(),
        summary: {
            websites: allResults.length,
            totalFiles,
            categoryTotals,
            findings
        },
        results: allResults
    };

    fs.writeFileSync('css-analysis/mobile-interaction-verification-data.json', JSON.stringify(jsonData, null, 2));

    return { report, findings };
}

// 主函数
async function main() {
    try {
        const allResults = [];

        // 分析所有网站
        for (const website of websites) {
            const result = analyzeWebsite(website);
            allResults.push(result);
        }

        // 生成报告
        const { report, findings } = generateReport(allResults);

        console.log('\n✅ 移动端交互验证分析完成！');
        console.log('\n📋 主要发现:');
        findings.forEach(finding => {
            console.log(`  ${finding}`);
        });

        console.log('\n📄 报告已保存:');
        console.log('  - css-analysis/mobile-interaction-verification-report.md');
        console.log('  - css-analysis/mobile-interaction-verification-data.json');

    } catch (error) {
        console.error('❌ 分析过程中出现错误:', error);
    }
}

// 运行主函数
main();