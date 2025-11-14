#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔍 遗漏项定向补充分析 - 基于验证结果建立遗漏追踪清单...\n');

// 读取所有已生成的分析结果
console.log('📖 读取已有分析结果...');

const analysisFiles = [
  'css-analysis/complete-color-analysis.json',
  'css-analysis/component-inventory.json',
  'css-analysis/media-query-analysis.json',
  'css-analysis/md-vs-source-comparison-correct.json',
  'css-analysis/screenshot-visual-analysis.json'
];

const allAnalysisData = {};
analysisFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const fileName = file.split('/').pop().replace('.json', '');
    allAnalysisData[fileName] = JSON.parse(content);
    console.log(`   ✅ ${fileName}`);
  } catch (error) {
    console.log(`   ❌ 无法读取 ${file}: ${error.message}`);
  }
});

// 创建遗漏项追踪系统
const missingItemsTracker = {
  summary: {
    totalCategories: 0,
    totalMissingItems: 0,
    criticalItems: 0,
    warnings: 0,
    recommendations: []
  },
  categories: {}
};

console.log('\n🎯 开始遗漏项分析...\n');

// 1. 颜色系统遗漏项分析
console.log('🎨 分析颜色系统遗漏项...');
const colorCategory = analyzeMissingColors(allAnalysisData['complete-color-analysis']);
missingItemsTracker.categories.colors = colorCategory;
missingItemsTracker.summary.totalCategories++;
missingItemsTracker.summary.totalMissingItems += colorCategory.items.length;
if (colorCategory.critical > 0) missingItemsTracker.summary.criticalItems += colorCategory.critical;
missingItemsTracker.summary.warnings += colorCategory.warnings;

// 2. 组件系统遗漏项分析
console.log('🧩 分析组件系统遗漏项...');
const componentCategory = analyzeMissingComponents(allAnalysisData['component-inventory']);
missingItemsTracker.categories.components = componentCategory;
missingItemsTracker.summary.totalCategories++;
missingItemsTracker.summary.totalMissingItems += componentCategory.items.length;
if (componentCategory.critical > 0) missingItemsTracker.summary.criticalItems += componentCategory.critical;
missingItemsTracker.summary.warnings += componentCategory.warnings;

// 3. 响应式设计遗漏项分析
console.log('📱 分析响应式设计遗漏项...');
const responsiveCategory = analyzeMissingResponsive(allAnalysisData['media-query-analysis']);
missingItemsTracker.categories.responsive = responsiveCategory;
missingItemsTracker.summary.totalCategories++;
missingItemsTracker.summary.totalMissingItems += responsiveCategory.items.length;
if (responsiveCategory.critical > 0) missingItemsTracker.summary.criticalItems += responsiveCategory.critical;
missingItemsTracker.summary.warnings += responsiveCategory.warnings;

// 4. MD文件遗漏项分析
console.log('📄 分析MD文件遗漏项...');
const mdCategory = analyzeMissingMDContent(allAnalysisData['md-vs-source-comparison-correct']);
missingItemsTracker.categories.mdContent = mdCategory;
missingItemsTracker.summary.totalCategories++;
missingItemsTracker.summary.totalMissingItems += mdCategory.items.length;
if (mdCategory.critical > 0) missingItemsTracker.summary.criticalItems += mdCategory.critical;
missingItemsTracker.summary.warnings += mdCategory.warnings;

// 5. 截图验证遗漏项分析
console.log('🖼️ 分析截图验证遗漏项...');
const screenshotCategory = analyzeMissingScreenshots(allAnalysisData['screenshot-visual-analysis']);
missingItemsTracker.categories.screenshots = screenshotCategory;
missingItemsTracker.summary.totalCategories++;
missingItemsTracker.summary.totalMissingItems += screenshotCategory.items.length;
if (screenshotCategory.critical > 0) missingItemsTracker.summary.criticalItems += screenshotCategory.critical;
missingItemsTracker.summary.warnings += screenshotCategory.warnings;

// 生成全局建议
missingItemsTracker.summary.recommendations = generateGlobalRecommendations(missingItemsTracker);

// 颜色系统遗漏项分析
function analyzeMissingColors(colorData) {
  const category = {
    name: '颜色系统',
    items: [],
    critical: 0,
    warnings: 0,
    recommendations: []
  };

  if (!colorData) {
    category.items.push('颜色分析数据缺失');
    category.critical++;
    return category;
  }

  // 检查品牌色完整性
  const expectedBrandColors = ['#C5F955', '#FF3E8F', '#FF97C2'];
  const foundColors = colorData.allColors ? colorData.allColors.hex : [];

  expectedBrandColors.forEach(color => {
    const found = foundColors.some(c => c.toLowerCase() === color.toLowerCase());
    if (!found) {
      category.items.push({
        type: 'missing_brand_color',
        description: `缺失品牌色: ${color}`,
        priority: 'high',
        recommendation: `添加 ${color} 到设计系统中`
      });
      category.critical++;
    }
  });

  // 检查颜色系统规模
  if (foundColors.length < 500) {
    category.items.push({
      type: 'insufficient_color_variety',
      description: `颜色系统不够丰富，当前只有${foundColors.length}种颜色`,
      priority: 'medium',
      recommendation: '扩展颜色系统，增加更多颜色变体'
    });
    category.warnings++;
  }

  // 检查现代颜色空间
  const oklchColors = colorData.oklchColors || [];
  if (oklchColors.length === 0) {
    category.items.push({
      type: 'missing_modern_color_space',
      description: '缺少现代颜色空间支持 (OKLCH)',
      priority: 'medium',
      recommendation: '添加OKLCH颜色空间支持以提供更好的颜色控制'
    });
    category.warnings++;
  }

  if (category.items.length === 0) {
    category.recommendations.push('颜色系统完整，继续保持');
  }

  return category;
}

// 组件系统遗漏项分析
function analyzeMissingComponents(componentData) {
  const category = {
    name: '组件系统',
    items: [],
    critical: 0,
    warnings: 0,
    recommendations: []
  };

  if (!componentData) {
    category.items.push('组件分析数据缺失');
    category.critical++;
    return category;
  }

  // 检查核心组件类型
  const expectedComponents = ['buttons', 'cards', 'navigation', 'forms', 'modals', 'badges', 'avatars'];
  const foundComponentTypes = Object.keys(componentData.components || {});

  expectedComponents.forEach(component => {
    const componentData = foundComponentTypes.find(type => type.toLowerCase().includes(component.toLowerCase()));
    if (!componentData) {
      category.items.push({
        type: 'missing_component_type',
        description: `缺失组件类型: ${component}`,
        priority: 'high',
        recommendation: `实现${component}组件的相关样式`
      });
      category.critical++;
    } else {
      const cssClasses = componentData.cssClasses || [];
      if (cssClasses.length === 0) {
        category.items.push({
          type: 'component_without_implementations',
          description: `${component}组件类型存在但没有CSS实现`,
          priority: 'high',
          recommendation: `为${component}组件添加具体的CSS实现`
        });
        category.critical++;
      }
    }
  });

  // 检查组件覆盖率
  const summary = componentData.summary || {};
  const totalComponents = summary.totalUniqueClasses || 0;
  if (totalComponents < 100) {
    category.items.push({
      type: 'insufficient_components',
      description: `组件库不够丰富，当前只有${totalComponents}个CSS类`,
      priority: 'medium',
      recommendation: '扩展组件库，增加更多可复用组件'
    });
    category.warnings++;
  }

  // 检查响应式组件
  const responsiveUsage = summary.responsivePatterns || {};
  if (Object.keys(responsiveUsage).length < 5) {
    category.items.push({
      type: 'missing_responsive_components',
      description: '响应式组件模式不足',
      priority: 'high',
      recommendation: '增加更多响应式组件变体'
    });
    category.warnings++;
  }

  if (category.items.length === 0) {
    category.recommendations.push('组件系统基本完整，考虑扩展高级组件');
  }

  return category;
}

// 响应式设计遗漏项分析
function analyzeMissingResponsive(responsiveData) {
  const category = {
    name: '响应式设计',
    items: [],
    critical: 0,
    warnings: 0,
    recommendations: []
  };

  if (!responsiveData) {
    category.items.push('响应式分析数据缺失');
    category.critical++;
    return category;
  }

  // 检查媒体查询数量
  const totalMediaQueries = responsiveData.summary.totalMediaQueries || 0;
  if (totalMediaQueries < 100) {
    category.items.push({
      type: 'insufficient_media_queries',
      description: `媒体查询数量不足，当前只有${totalMediaQueries}个`,
      priority: 'medium',
      recommendation: '增加更多响应式断点和样式'
    });
    category.warnings++;
  }

  // 检查移动优先设计
  const designApproach = responsiveData.designApproach || {};
  if (designApproach.primary === 'desktop-first') {
    category.items.push({
      type: 'not_mobile_first',
      description: '采用桌面优先设计，不符合现代移动优先原则',
      priority: 'high',
      recommendation: '重构为移动优先的响应式设计'
    });
    category.critical++;
  }

  // 检查无障碍功能
  const accessibility = responsiveData.accessibility || {};
  if (!accessibility.reducedMotion) {
    category.items.push({
      type: 'missing_reduced_motion',
      description: '缺少减少动画偏好的支持',
      priority: 'medium',
      recommendation: '添加@media (prefers-reduced-motion) 支持'
    });
    category.warnings++;
  }

  if (!accessibility.darkMode) {
    category.items.push({
      type: 'missing_dark_mode',
      description: '缺少深色模式媒体查询',
      priority: 'medium',
      recommendation: '添加深色模式支持'
    });
    category.warnings++;
  }

  // 检查触摸设备支持
  if (!accessibility.touchOptimization) {
    category.items.push({
      type: 'missing_touch_optimization',
      description: '缺少触摸设备特定优化',
      priority: 'medium',
      recommendation: '添加触摸设备媒体查询和优化'
    });
    category.warnings++;
  }

  if (category.items.length === 0) {
    category.recommendations.push('响应式系统基本完善，考虑添加更多无障碍功能');
  }

  return category;
}

// MD文件内容遗漏项分析
function analyzeMissingMDContent(mdData) {
  const category = {
    name: 'MD文档内容',
    items: [],
    critical: 0,
    warnings: 0,
    recommendations: []
  };

  if (!mdData) {
    category.items.push('MD分析数据缺失');
    category.critical++;
    return category;
  }

  const summary = mdData.summary || {};
  const detailed = mdData.detailedAnalysis || [];

  // 检查MD文件覆盖率
  if (summary.totalMdFiles < 6) {
    category.items.push({
      type: 'insufficient_md_files',
      description: `MD文件数量不足，当前只有${summary.totalMdFiles}个，预期6个`,
      priority: 'medium',
      recommendation: '补充缺失的MD文件'
    });
    category.warnings++;
  }

  // 检查内容一致性
  if (summary.foundDifferences > 0) {
    category.items.push({
      type: 'content_inconsistency',
      description: `${summary.foundDifferences}个MD文件与源码存在差异`,
      priority: 'high',
      recommendation: '同步MD文件与源码内容，确保一致性'
    });
    category.critical++;
  }

  // 检查HTML和CSS代码块数量
  if (summary.totalHtmlSnippets < 50) {
    category.items.push({
      type: 'insufficient_code_examples',
      description: `HTML代码片段不足，当前只有${summary.totalHtmlSnippets}个`,
      priority: 'medium',
      recommendation: '增加更多代码示例和说明'
    });
    category.warnings++;
  }

  // 检查CSS代码块
  if (summary.totalCssCode < 20) {
    category.items.push({
      type: 'insufficient_css_examples',
      description: `CSS代码块不足，当前只有${summary.totalCssCode}个`,
      priority: 'medium',
      recommendation: '添加更多CSS实现示例'
    });
    category.warnings++;
  }

  if (category.items.length === 0) {
    category.recommendations.push('MD文档内容基本完整，可以增加更多实用示例');
  }

  return category;
}

// 截图验证遗漏项分析
function analyzeMissingScreenshots(screenshotData) {
  const category = {
    name: '截图验证',
    items: [],
    critical: 0,
    warnings: 0,
    recommendations: []
  };

  if (!screenshotData) {
    category.items.push('截图分析数据缺失');
    category.critical++;
    return category;
  }

  const summary = screenshotData.summary || {};

  // 检查截图与源码匹配
  if (summary.foundMatches === 0) {
    category.items.push({
      type: 'no_source_code_matches',
      description: '没有找到与源码匹配的截图',
      priority: 'critical',
      recommendation: '重新建立截图与源码的对应关系'
    });
    category.critical++;
  } else if (summary.foundMatches < summary.analyzedShots) {
    category.items.push({
      type: 'partial_source_code_matches',
      description: `${summary.analyzedShots - summary.foundMatches}个截图缺少源码匹配`,
      priority: 'high',
      recommendation: '完善截图与源码的映射关系'
    });
    category.warnings++;
  }

  // 检查文件大小优化
  const averageSize = summary.averageSize / 1024 / 1024;
  if (averageSize > 2) {
    category.items.push({
      type: 'large_file_sizes',
      description: `截图文件过大，平均${averageSize.toFixed(2)}MB`,
      priority: 'medium',
      recommendation: '优化截图压缩策略'
    });
    category.warnings++;
  }

  // 检查截图数量
  if (summary.totalScreenshots < 5) {
    category.items.push({
      type: 'insufficient_screenshots',
      description: `截图数量不足，当前只有${summary.totalScreenshots}个`,
      priority: 'medium',
      recommendation: '添加更多页面截图以完善视觉验证'
    });
    category.warnings++;
  }

  if (category.items.length === 0) {
    category.recommendations.push('截图验证系统基本完整');
  }

  return category;
}

// 生成全局建议
function generateGlobalRecommendations(tracker) {
  const recommendations = [];

  if (tracker.summary.criticalItems > 0) {
    recommendations.push(`🚨 优先处理 ${tracker.summary.criticalItems} 个关键遗漏项`);
  }

  if (tracker.summary.warnings > 0) {
    recommendations.push(`⚠️ 处理 ${tracker.summary.warnings} 个警告项`);
  }

  recommendations.push('📈 建立定期验证机制，确保设计系统持续保持完整');

  // 基于遗漏项类型生成建议
  const categories = Object.keys(tracker.categories);

  if (categories.includes('colors')) {
    const colorCategory = tracker.categories.colors;
    if (colorCategory.critical > 0) {
      recommendations.push('🎨 重点完善颜色系统，确保品牌色完整性');
    }
    if (colorCategory.warnings > 0) {
      recommendations.push('🌈 扩展颜色系统，增加现代色彩支持');
    }
  }

  if (categories.includes('components')) {
    const componentCategory = tracker.categories.components;
    if (componentCategory.critical > 0) {
      recommendations.push('🧩 重点完善核心组件实现');
    }
    if (componentCategory.warnings > 0) {
      recommendations.push('🔧 扩展组件库，增加响应式变体');
    }
  }

  if (categories.includes('responsive')) {
    const responsiveCategory = tracker.categories.responsive;
    if (responsiveCategory.critical > 0) {
      recommendations.push('📱 重点改进响应式设计，采用移动优先');
    }
    if (responsiveCategory.writical > 0) {
      recommendations.push('♿ 增强无障碍功能支持');
    }
  }

  recommendations.push('📊 建立设计系统度量指标，定期评估成熟度');
  recommendations.push('🔄 实施持续集成流程，自动检测设计系统变化');

  return recommendations;
}

// 生成最终报告
console.log('\n' + '='.repeat(80));
console.log('🔍 遗漏项定向补充分析报告');
console.log('='.repeat(80));

console.log(`\n📈 遗漏项统计:`);
console.log(`   分析类别: ${missingItemsTracker.summary.totalCategories}`);
console.log(`   总遗漏项: ${missingItemsTracker.summary.totalMissingItems}`);
console.log(`   关键遗漏: ${missingItemsTracker.summary.criticalItems}`);
console.log(`   警告项: ${missingItemsTracker.summary.warnings}`);

console.log(`\n📋 分类统计:`);
Object.entries(missingItemsTracker.categories).forEach(([category, data]) => {
  console.log(`\n📂 ${data.name}:`);
  console.log(`   遗漏项数量: ${data.items.length}`);
  console.log(`   关键项: ${data.critical}`);
  console.log(`   警告项: ${data.warnings}`);

  if (data.items.length > 0) {
    console.log(`   主要问题:`);
    data.items.slice(0, 3).forEach((item, index) => {
      console.log(`     ${index + 1}. ${item.description} (${item.priority})`);
    });

    if (data.items.length > 3) {
      console.log(`     ... 还有 ${data.items.length - 3} 项`);
    }
  }

  if (data.recommendations.length > 0) {
    console.log(`   建议: ${data.recommendations.slice(0, 2).join('; ')}`);
  }
});

console.log(`\n🎯 全局建议:`);
missingItemsTracker.summary.recommendations.forEach((recommendation, index) => {
  console.log(`   ${index + 1}. ${recommendation}`);
});

// 保存详细分析结果
const missingItemsData = {
  summary: missingItemsTracker.summary,
  categories: missingItemsTracker.categories,
  actionPlan: generateActionPlan(missingItemsTracker),
  prioritizedList: generatePrioritizedList(missingItemsTracker)
};

fs.writeFileSync('css-analysis/comprehensive-missing-items-analysis.json', JSON.stringify(missingItemsData, null, 2));

// 生成Markdown报告
let markdownReport = `# 遗漏项定向补充分析报告

## 📊 分析概览

- **分析类别**: ${missingItemsTracker.summary.totalCategories}
- **总遗漏项**: ${missingItemsTracker.summary.totalMissingItems}
- **关键遗漏**: ${missingItemsTracker.summary.criticalItems}
- **警告项**: ${missingItemsTracker.summary.warnings}

## 🎯 优先处理建议

${missingItemsTracker.summary.criticalItems > 0 ? '### 🚨 关键遗漏项（优先处理）' : '### ✅ 无关键遗漏项'}

${missingItemsTracker.summary.recommendations.map((rec, index) => `${index + 1}. ${rec}`).join('\n')}

## 📋 分类详情
`;

Object.entries(missingItemsTracker.categories).forEach(([category, data]) => {
  markdownReport += `\n### ${data.name}\n`;
  markdownReport += `- **遗漏项数量**: ${data.items.length}\n`;
  markdownReport += `- **关键项**: ${data.critical}\n`;
  markdownReport += `- **警告项**: ${data.warnings}\n`;

  if (data.items.length > 0) {
    markdownReport += `\n#### 主要问题\n`;
    data.items.forEach((item, index) => {
      const priorityIcon = item.priority === 'high' ? '🔴' : item.priority === 'medium' ? '🟡' : '🟢';
      markdownReport += `${priorityIcon} **${item.type}**: ${item.description}\n`;
      markdownReport += `   - **建议**: ${item.recommendation}\n`;
    });
  }

  if (data.recommendations.length > 0) {
    markdownReport += `\n#### 建议\n`;
    data.recommendations.forEach((rec, index) => {
      markdownReport += `- ${rec}\n`;
    });
  }
});

markdownReport += `\n\n## 📋 行动计划

### 立即执行 (本周)
${missingItemsData.actionPlan.immediate.length > 0 ? missingItemsData.actionPlan.immediate.map((item, index) => `${index + 1}. ${item}`).join('\n') : '- 无立即执行项'}

### 短期执行 (1-2周)
${missingItemsData.actionPlan.shortTerm.length > 0 ? missingItemsData.actionPlan.shortTerm.map((item, index) => `${index + 1}. ${item}`).join('\n') : '- 无短期执行项'}

### 长期执行 (1个月)
${missingItemsData.actionPlan.longTerm.length > 0 ? missingItemsData.actionPlan.longTerm.map((item, index) => `${index + 1}. ${item}`).join('\n') : '- 无长期执行项'}

## 📊 优先级清单

### 🔴 高优先级 (关键遗漏)
`;

const highPriorityItems = missingItemsData.prioritizedList.filter(item => item.priority === 'high');
if (highPriorityItems.length > 0) {
  highPriorityItems.forEach((item, index) => {
    markdownReport += `${index + 1}. **${item.category}**: ${item.description}\n`;
  });
} else {
  markdownReport += '- 无高优先级遗漏项\n';
}

markdownReport += `\n### 🟡 中优先级 (改进项)
`;

const mediumPriorityItems = missingItemsData.prioritizedList.filter(item => item.priority === 'medium');
if (mediumPriorityItems.length > 0) {
  mediumPriorityItems.forEach((item, index) => {
    markdownReport += `${index + 1}. **${item.category}**: ${item.description}\n`;
  });
} else {
  markdownReport += '- 无中优先级遗漏项\n';
}

markdownReport += `\n### 🟢 低优先级 (优化项)
`;

const lowPriorityItems = missingItemsData.prioritizedList.filter(item => item.priority === 'low');
if (lowPriorityItems.length > 0) {
  lowPriorityItems.forEach((item, index) => {
    markdownReport += `${index + 1}. **${item.category}**: ${item.description}\n`;
  });
} else {
  markdownReport += '- 无低优先级遗漏项\n';
}

markdownReport += `\n---\n*分析时间: ${new Date().toISOString()}*`;

fs.writeFileSync('css-analysis/comprehensive-missing-items-analysis.md', markdownReport);

console.log(`\n💾 详细报告已保存:`);
console.log(`   - css-analysis/comprehensive-missing-items-analysis.json`);
console.log(`   - css-analysis/comprehensive-missing-items-analysis.md`);

console.log('\n✅ 遗漏项定向补充分析完成!');

// 生成行动计划
function generateActionPlan(tracker) {
  const plan = {
    immediate: [],
    shortTerm: [],
    longTerm: []
  };

  Object.values(tracker.categories).forEach(category => {
    category.items.forEach(item => {
      const action = `${category.name}: ${item.description} - ${item.recommendation}`;

      if (item.priority === 'high') {
        plan.immediate.push(action);
      } else if (item.priority === 'medium') {
        plan.shortTerm.push(action);
      } else {
        plan.longTerm.push(action);
      }
    });
  });

  return plan;
}

// 生成优先级清单
function generatePrioritizedList(tracker) {
  const allItems = [];

  Object.values(tracker.categories).forEach(category => {
    category.items.forEach(item => {
      allItems.push({
        category: category.name,
        ...item,
        priority: item.priority || 'medium'
      });
    });
  });

  // 按优先级排序
  const priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 };
  allItems.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return allItems;
}