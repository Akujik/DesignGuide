#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('📄 MD文件 vs 源码差异分析 (修正版) - 三重验证对比...\n');

// 获取targets目录中的MD文件
const mdFiles = execSync('find targets/ -name "*.md"', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`📁 找到 ${mdFiles.length} 个MD文件:`);
mdFiles.forEach(file => console.log(`   - ${file}`));

// 获取对应的源码网站目录
const sourceWebsites = execSync('find targets/ -maxdepth 1 -type d -not -name "targets"', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`\n📁 找到 ${sourceWebsites.length} 个源码网站:`);
sourceWebsites.forEach(site => console.log(`   - ${site}`));

// 分析结果存储
const analysisResults = {
  summary: {
    totalMdFiles: mdFiles.length,
    totalSourceSites: sourceWebsites.length,
    analyzedPairs: 0,
    foundDifferences: 0,
    totalHtmlSnippets: 0,
    totalCssCode: 0,
    totalColors: 0
  },
  detailedAnalysis: []
};

console.log('\n🔍 开始逐个文件分析...\n');

mdFiles.forEach((mdFile, index) => {
  const fileName = mdFile.split('/').pop();
  console.log(`\n📖 ${index + 1}/${mdFiles.length} 分析: ${fileName}`);

  // 读取MD文件内容
  let mdContent = '';
  try {
    mdContent = fs.readFileSync(mdFile, 'utf-8');
    console.log(`   ✅ MD文件读取成功 (${mdContent.length} 字符)`);
  } catch (error) {
    console.log(`   ❌ 无法读取MD文件: ${error.message}`);
    return;
  }

  // 确定对应的源码网站目录
  const baseName = fileName.replace('.md', '').toLowerCase();
  const sourceDir = sourceWebsites.find(site =>
    site.toLowerCase().includes(baseName) ||
    baseName.includes('homepage') && site.toLowerCase().includes('meshy')
  );

  if (!sourceDir) {
    console.log(`   ⚠️ 未找到对应源码网站: ${baseName}`);
    return;
  }

  console.log(`   🎯 对应源码: ${sourceDir}`);

  // 读取源码HTML文件
  const htmlFile = `${sourceDir}/index.html`;
  let htmlContent = '';
  try {
    htmlContent = fs.readFileSync(htmlFile, 'utf-8');
    console.log(`   ✅ 源码HTML读取成功 (${htmlContent.length} 字符)`);
  } catch (error) {
    console.log(`   ❌ 无法读取源码HTML: ${error.message}`);
    return;
  }

  // 读取所有CSS文件
  const cssFiles = execSync(`find "${sourceDir}" -name "stylesheet_*.css"`, { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .filter(Boolean);

  console.log(`   📋 找到 ${cssFiles.length} 个CSS文件`);

  let allCssContent = '';
  cssFiles.forEach(cssFile => {
    try {
      const cssContent = fs.readFileSync(cssFile, 'utf-8');
      allCssContent += cssContent + '\n';
    } catch (error) {
      console.log(`   ⚠️ 无法读取CSS文件 ${cssFile}: ${error.message}`);
    }
  });

  console.log(`   ✅ CSS内容读取完成 (${allCssContent.length} 字符)`);

  // 执行对比分析
  const analysis = performDetailedComparison(fileName, mdContent, htmlContent, allCssContent, cssFiles);

  analysisResults.detailedAnalysis.push(analysis);
  analysisResults.summary.analyzedPairs++;

  // 累计统计
  analysisResults.summary.totalHtmlSnippets += analysis.mdAnalysis.htmlSnippets.length;
  analysisResults.summary.totalCssCode += analysis.mdAnalysis.cssCode.length;
  analysisResults.summary.totalColors += Math.max(analysis.mdAnalysis.colors.length, analysis.sourceAnalysis.colors.length);

  if (analysis.hasDifferences) {
    analysisResults.summary.foundDifferences++;
  }

  console.log(`   📊 分析完成: ${analysis.hasDifferences ? '发现差异' : '内容一致'}`);
  console.log(`      - MD HTML片段: ${analysis.mdAnalysis.htmlSnippets.length}, CSS代码: ${analysis.mdAnalysis.cssCode.length}`);
  console.log(`      - 源码组件: ${analysis.sourceAnalysis.components.length}, 颜色: ${analysis.sourceAnalysis.colors.length}`);
});

// 详细对比函数 (与之前相同)
function performDetailedComparison(mdFileName, mdContent, htmlContent, cssContent, cssFiles) {
  const analysis = {
    fileName: mdFileName,
    hasDifferences: false,
    mdAnalysis: {},
    sourceAnalysis: {},
    differences: [],
    missingContent: [],
    extraContent: [],
    recommendations: []
  };

  console.log(`   🔍 执行详细对比分析...`);

  // 1. 分析MD文件中的HTML/CSS片段
  analysis.mdAnalysis = analyzeMDFile(mdContent);
  console.log(`      - MD文件中HTML片段: ${analysis.mdAnalysis.htmlSnippets.length} 个`);
  console.log(`      - MD文件中CSS代码: ${analysis.mdAnalysis.cssCode.length} 个`);
  console.log(`      - MD文件中颜色引用: ${analysis.mdAnalysis.colors.length} 个`);

  // 2. 分析源码中的关键元素
  analysis.sourceAnalysis = analyzeSourceCode(htmlContent, cssContent);
  console.log(`      - 源码中组件: ${analysis.sourceAnalysis.components.length} 个`);
  console.log(`      - 源码中颜色: ${analysis.sourceAnalysis.colors.length} 个`);
  console.log(`      - 源码中CSS类: ${analysis.sourceAnalysis.cssClasses.length} 个`);

  // 3. 对比HTML结构
  const htmlComparison = compareHTMLStructure(analysis.mdAnalysis.htmlSnippets, htmlContent);
  if (htmlComparison.differences.length > 0) {
    analysis.hasDifferences = true;
    analysis.differences.push(...htmlComparison.differences);
    analysis.missingContent.push(...htmlComparison.missingInMD);
    analysis.extraContent.push(...htmlComparison.missingInSource);
  }

  // 4. 对比CSS样式
  const cssComparison = compareCSSStyles(analysis.mdAnalysis.cssCode, cssContent);
  if (cssComparison.differences.length > 0) {
    analysis.hasDifferences = true;
    analysis.differences.push(...cssComparison.differences);
    analysis.missingContent.push(...cssComparison.missingInMD);
    analysis.extraContent.push(...cssComparison.missingInSource);
  }

  // 5. 对比颜色使用
  const colorComparison = compareColors(analysis.mdAnalysis.colors, analysis.sourceAnalysis.colors);
  if (colorComparison.differences.length > 0) {
    analysis.hasDifferences = true;
    analysis.differences.push(...colorComparison.differences);
  }

  // 6. 生成建议
  analysis.recommendations = generateRecommendations(analysis);

  return analysis;
}

// 分析MD文件内容
function analyzeMDFile(content) {
  const analysis = {
    htmlSnippets: [],
    cssCode: [],
    colors: [],
    components: [],
    structure: {
      headings: [],
      lists: [],
      codeBlocks: []
    }
  };

  // 提取HTML代码块
  const htmlCodeBlocks = content.match(/```html\n([\s\S]*?)\n```/g) || [];
  analysis.htmlSnippets = htmlCodeBlocks.map(block => block.replace(/```html\n|```\n?/g, '').trim());

  // 提取CSS代码块
  const cssCodeBlocks = content.match(/```css\n([\s\S]*?)\n```/g) || [];
  analysis.cssCode = cssCodeBlocks.map(block => block.replace(/```css\n|```\n?/g, '').trim());

  // 提取行内HTML
  const inlineHtml = content.match(/<[^>]+>/g) || [];
  analysis.htmlSnippets.push(...inlineHtml);

  // 提取颜色值
  const hexColors = content.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
  const rgbColors = content.match(/rgba?\([^)]+\)/g) || [];
  analysis.colors = [...new Set([...hexColors, ...rgbColors])];

  // 提取组件引用
  const components = content.match(/\b(btn|button|card|nav|form|modal|badge|avatar)[\w-]*/gi) || [];
  analysis.components = [...new Set(components)];

  // 提取标题结构
  const headings = content.match(/^#+\s+(.+)$/gm) || [];
  analysis.structure.headings = headings;

  // 提取列表
  const lists = content.match(/^[-*+]\s+.+$/gm) || [];
  analysis.structure.lists = lists;

  // 提取代码块
  const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
  analysis.structure.codeBlocks = codeBlocks;

  return analysis;
}

// 分析源码内容
function analyzeSourceCode(htmlContent, cssContent) {
  const analysis = {
    components: [],
    colors: [],
    cssClasses: [],
    structure: {
      doctype: '',
      lang: '',
      title: '',
      meta: []
    }
  };

  // 提取HTML结构信息
  const doctypeMatch = htmlContent.match(/<!DOCTYPE[^>]+>/);
  if (doctypeMatch) analysis.structure.doctype = doctypeMatch[0];

  const htmlTagMatch = htmlContent.match(/<html[^>]*>/);
  if (htmlTagMatch) analysis.structure.lang = htmlTagMatch[0];

  const titleMatch = htmlContent.match(/<title[^>]*>([^<]+)<\/title>/);
  if (titleMatch) analysis.structure.title = titleMatch[1];

  const metaTags = htmlContent.match(/<meta[^>]+>/g) || [];
  analysis.structure.meta = metaTags;

  // 提取CSS类名
  const classMatches = htmlContent.match(/class="([^"]+)"/g) || [];
  classMatches.forEach(match => {
    const classes = match.match(/class="([^"]+)"/)[1].split(/\s+/);
    analysis.cssClasses.push(...classes);
  });
  analysis.cssClasses = [...new Set(analysis.cssClasses)];

  // 从CSS中提取更多类名和颜色
  const cssClassMatches = cssContent.match(/\.[\w-]+/g) || [];
  analysis.cssClasses.push(...cssClassMatches);
  analysis.cssClasses = [...new Set(analysis.cssClasses)];

  // 提取组件类型
  const componentTypes = ['button', 'btn', 'card', 'nav', 'form', 'input', 'select', 'modal', 'badge', 'avatar'];
  componentTypes.forEach(type => {
    const regex = new RegExp(`<${type}[^>]*>`, 'gi');
    const matches = htmlContent.match(regex) || [];
    if (matches.length > 0) {
      analysis.components.push({ type, count: matches.length });
    }
  });

  // 提取颜色值
  const hexColors = cssContent.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
  const rgbColors = cssContent.match(/rgba?\([^)]+\)/g) || [];
  analysis.colors = [...new Set([...hexColors, ...rgbColors])];

  return analysis;
}

// 对比HTML结构
function compareHTMLStructure(mdHtmlSnippets, sourceHtml) {
  const comparison = {
    differences: [],
    missingInMD: [],
    missingInSource: []
  };

  // 提取MD文件中的关键HTML标签
  const mdTags = new Set();
  mdHtmlSnippets.forEach(snippet => {
    const tags = snippet.match(/<(\w+)/g) || [];
    tags.forEach(tag => mdTags.add(tag.replace(/</, '')));
  });

  // 提取源码中的关键HTML标签
  const sourceTags = new Set();
  const sourceTagMatches = sourceHtml.match(/<(\w+)/g) || [];
  sourceTagMatches.forEach(tag => sourceTags.add(tag.replace(/</, '')));

  // 查找差异
  mdTags.forEach(tag => {
    if (!sourceTags.has(tag)) {
      comparison.missingInSource.push(`MD中有但在源码中未找到: <${tag}>`);
    }
  });

  sourceTags.forEach(tag => {
    if (!mdTags.has(tag) && !['html', 'head', 'body', 'title', 'meta', 'link', 'script', 'div', 'span'].includes(tag)) {
      comparison.missingInMD.push(`源码中有但MD中未记录: <${tag}>`);
    }
  });

  if (comparison.missingInSource.length > 0 || comparison.missingInMD.length > 0) {
    comparison.differences.push(`HTML结构存在差异: MD中${mdTags.size}种标签，源码中${sourceTags.size}种标签`);
  }

  return comparison;
}

// 对比CSS样式
function compareCSSStyles(mdCSS, sourceCSS) {
  const comparison = {
    differences: [],
    missingInMD: [],
    missingInSource: []
  };

  // 提取MD文件中的CSS属性
  const mdProperties = new Set();
  mdCSS.forEach(css => {
    const props = css.match(/[\w-]+:\s*[^;]+/g) || [];
    props.forEach(prop => {
      const propName = prop.split(':')[0].trim();
      mdProperties.add(propName);
    });
  });

  // 提取源码中的CSS属性
  const sourceProperties = new Set();
  const sourceProps = sourceCSS.match(/[\w-]+:\s*[^;]+/g) || [];
  sourceProps.forEach(prop => {
    const propName = prop.split(':')[0].trim();
    sourceProperties.add(propName);
  });

  // 查找重要的CSS属性差异
  const importantProps = ['color', 'background', 'font-size', 'padding', 'margin', 'border', 'display', 'width', 'height'];

  importantProps.forEach(prop => {
    const inMD = mdCSS.some(css => css.includes(`${prop}:`));
    const inSource = sourceCSS.includes(`${prop}:`);

    if (inMD && !inSource) {
      comparison.missingInSource.push(`MD中提到但源码中未找到: ${prop}`);
    }
    if (!inMD && inSource) {
      // 只记录重要属性
      if (['color', 'background', 'font-size', 'padding'].includes(prop)) {
        comparison.missingInMD.push(`源码中使用但MD中未记录: ${prop}`);
      }
    }
  });

  if (comparison.missingInSource.length > 0 || comparison.missingInMD.length > 0) {
    comparison.differences.push(`CSS样式存在差异: MD中${mdProperties.size}种属性，源码中${sourceProperties.size}种属性`);
  }

  return comparison;
}

// 对比颜色使用
function compareColors(mdColors, sourceColors) {
  const comparison = {
    differences: []
  };

  const mdColorSet = new Set(mdColors);
  const sourceColorSet = new Set(sourceColors);

  // 查找重要品牌色的差异
  const brandColors = ['#C5F955', '#FF3E8F', '#FF97C2', '#0057ff'];

  brandColors.forEach(color => {
    const inMD = mdColors.some(c => c.toLowerCase() === color.toLowerCase());
    const inSource = sourceColors.some(c => c.toLowerCase() === color.toLowerCase());

    if (inMD && !inSource) {
      comparison.differences.push(`MD中提到品牌色但源码中未找到: ${color}`);
    }
    if (!inMD && inSource) {
      comparison.differences.push(`源码中使用品牌色但MD中未记录: ${color}`);
    }
  });

  return comparison;
}

// 生成建议
function generateRecommendations(analysis) {
  const recommendations = [];

  if (analysis.missingContent.length > 0) {
    recommendations.push(`建议补充MD文件中缺失的 ${analysis.missingContent.length} 项内容`);
  }

  if (analysis.extraContent.length > 0) {
    recommendations.push(`建议从MD文件中移除源码中不存在的 ${analysis.extraContent.length} 项内容`);
  }

  if (analysis.sourceAnalysis.colors.length > analysis.mdAnalysis.colors.length * 2) {
    recommendations.push('建议在MD文件中补充更多颜色使用说明');
  }

  if (analysis.sourceAnalysis.components.length > analysis.mdAnalysis.components.length) {
    recommendations.push('建议在MD文件中补充缺失的组件说明');
  }

  if (analysis.hasDifferences) {
    recommendations.push('建议同步MD文件与源码，确保文档与实际实现一致');
  } else {
    recommendations.push('MD文件与源码内容基本一致，继续保持');
  }

  return recommendations;
}

// 生成最终报告
console.log('\n' + '='.repeat(80));
console.log('📊 MD文件 vs 源码差异分析报告 (修正版)');
console.log('='.repeat(80));

console.log(`\n📈 分析统计:`);
console.log(`   MD文件总数: ${analysisResults.summary.totalMdFiles}`);
console.log(`   源码网站总数: ${analysisResults.summary.totalSourceSites}`);
console.log(`   成功对比: ${analysisResults.summary.analyzedPairs} 对`);
console.log(`   发现差异: ${analysisResults.summary.foundDifferences} 个文件有差异`);
console.log(`   总HTML片段: ${analysisResults.summary.totalHtmlSnippets}`);
console.log(`   总CSS代码: ${analysisResults.summary.totalCssCode}`);
console.log(`   总颜色引用: ${analysisResults.summary.totalColors}`);

console.log(`\n📋 详细差异分析:`);
analysisResults.detailedAnalysis.forEach(analysis => {
  console.log(`\n📄 ${analysis.fileName}:`);
  console.log(`   差异状态: ${analysis.hasDifferences ? '✅ 发现差异' : '✅ 内容一致'}`);
  console.log(`   MD分析: ${analysis.mdAnalysis.htmlSnippets.length} HTML片段, ${analysis.mdAnalysis.colors.length} 颜色`);
  console.log(`   源码分析: ${analysis.sourceAnalysis.components.length} 组件, ${analysis.sourceAnalysis.colors.length} 颜色`);

  if (analysis.differences.length > 0) {
    console.log(`   差异数量: ${analysis.differences.length}`);
    analysis.differences.slice(0, 3).forEach(diff => {
      console.log(`     - ${diff}`);
    });
  }

  if (analysis.recommendations.length > 0) {
    console.log(`   建议: ${analysis.recommendations.slice(0, 2).join('; ')}`);
  }
});

// 保存详细分析结果
const reportData = {
  summary: analysisResults.summary,
  detailedAnalysis: analysisResults.detailedAnalysis,
  globalInsights: generateGlobalInsights(analysisResults)
};

fs.writeFileSync('css-analysis/md-vs-source-comparison-correct.json', JSON.stringify(reportData, null, 2));

// 生成Markdown报告
let markdownReport = `# MD文件 vs 源码差异分析报告 (修正版)

## 📊 分析概览

- **MD文件总数**: ${analysisResults.summary.totalMdFiles}
- **源码网站总数**: ${analysisResults.summary.totalSourceSites}
- **成功对比**: ${analysisResults.summary.analyzedPairs} 对
- **发现差异**: ${analysisResults.summary.foundDifferences} 个文件有差异
- **总HTML片段**: ${analysisResults.summary.totalHtmlSnippets}
- **总CSS代码**: ${analysisResults.summary.totalCssCode}
- **总颜色引用**: ${analysisResults.summary.totalColors}

## 📋 全局洞察
`;

reportData.globalInsights.forEach(insight => {
  markdownReport += `\n- ${insight}`;
});

markdownReport += `\n\n## 详细分析
`;

analysisResults.detailedAnalysis.forEach(analysis => {
  markdownReport += `\n### 📄 ${analysis.fileName}\n`;
  markdownReport += `- **差异状态**: ${analysis.hasDifferences ? '✅ 发现差异' : '✅ 内容一致'}\n`;
  markdownReport += `- **MD分析**: ${analysis.mdAnalysis.htmlSnippets.length} HTML片段, ${analysis.mdAnalysis.colors.length} 颜色\n`;
  markdownReport += `- **源码分析**: ${analysis.sourceAnalysis.components.length} 组件, ${analysis.sourceAnalysis.colors.length} 颜色\n`;

  if (analysis.differences.length > 0) {
    markdownReport += `- **差异数量**: ${analysis.differences.length}\n`;
    analysis.differences.slice(0, 3).forEach(diff => {
      markdownReport += `  - ${diff}\n`;
    });
  }

  if (analysis.recommendations.length > 0) {
    markdownReport += `- **建议**: ${analysis.recommendations.join('; ')}\n`;
  }
});

markdownReport += `\n\n---\n*分析时间: ${new Date().toISOString()}*`;

fs.writeFileSync('css-analysis/md-vs-source-comparison-correct.md', markdownReport);

console.log(`\n💾 详细报告已保存:`);
console.log(`   - css-analysis/md-vs-source-comparison-correct.json`);
console.log(`   - css-analysis/md-vs-source-comparison-correct.md`);

console.log('\n✅ MD文件 vs 源码差异分析完成!');

// 生成全局洞察函数
function generateGlobalInsights(results) {
  const insights = [];

  if (results.summary.foundDifferences === 0) {
    insights.push('所有MD文件与源码内容基本一致，文档质量良好');
  } else {
    insights.push(`${results.summary.foundDifferences}个MD文件与源码存在差异，建议进行同步`);
  }

  if (results.summary.totalHtmlSnippets > 0) {
    insights.push(`MD文件包含${results.summary.totalHtmlSnippets}个HTML代码片段，说明有详细的技术文档`);
  }

  if (results.summary.totalCssCode > 0) {
    insights.push(`MD文件包含${results.summary.totalCssCode}个CSS代码块，提供了样式实现细节`);
  }

  if (results.summary.totalColors > 0) {
    insights.push(`文档中引用了${results.summary.totalColors}种颜色，有助于颜色系统理解`);
  }

  const avgComponents = results.detailedAnalysis.reduce((sum, a) => sum + a.sourceAnalysis.components.length, 0) / results.detailedAnalysis.length;
  if (avgComponents > 0) {
    insights.push(`平均每个页面包含${avgComponents.toFixed(1)}个组件，建议完善组件文档`);
  }

  insights.push('建议建立定期同步机制，确保文档与代码保持最新状态');
  insights.push('考虑使用自动化工具检测文档与代码的差异');

  return insights;
}