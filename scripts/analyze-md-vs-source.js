#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('📄 MD文件 vs 源码差异分析 - 三重验证对比...\n');

// 获取MD文件列表
const mdFiles = execSync('find . -maxdepth 1 -name "*.md" -not -name "./README.md"', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`📁 找到 ${mdFiles.length} 个MD文件:`);
mdFiles.forEach(file => console.log(`   - ${file}`));

// 获取对应的源码网站
const sourceWebsites = execSync('find targets/ -maxdepth 1 -type d -not -name "targets"', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`\n📁 找到 ${sourceWebsites.length} 个源码网站:`);
sourceWebsites.forEach(site => console.log(`   - ${site}`));

// MD文件映射到对应网站
const mdToSiteMapping = {
  'apipage.md': 'API Platform - Meshy',
  'blogpage.md': 'Blog - Meshy',
  'careerpage.md': 'Careers - Meshy AI',
  'contactpage.md': 'Contact Us - Meshy',
  'homepage.md': 'Meshy AI - The #1 AI 3D Model Generator',
  'loginpage.md': 'Login Page (特殊页面)',
  'intropage.md': 'Introduction - Meshy Docs'
};

// 分析结果存储
const analysisResults = {
  summary: {
    totalMdFiles: mdFiles.length,
    totalSourceSites: sourceWebsites.length,
    analyzedPairs: 0,
    foundDifferences: 0,
    missingContent: [],
    extraContent: []
  },
  detailedAnalysis: []
};

console.log('\n🔍 开始逐个文件分析...\n');

mdFiles.forEach((mdFile, index) => {
  console.log(`\n📖 ${index + 1}/${mdFiles.length} 分析: ${mdFile}`);

  // 读取MD文件内容
  let mdContent = '';
  try {
    mdContent = fs.readFileSync(mdFile, 'utf-8');
    console.log(`   ✅ MD文件读取成功 (${mdContent.length} 字符)`);
  } catch (error) {
    console.log(`   ❌ 无法读取MD文件: ${error.message}`);
    return;
  }

  // 确定对应的源码网站
  const siteName = mdToSiteMapping[mdFile.split('/').pop()];
  const sourceDir = sourceWebsites.find(site => site.includes(siteName?.split(' ')[0]?.toLowerCase() || ''));

  if (!sourceDir) {
    console.log(`   ⚠️ 未找到对应源码网站: ${siteName}`);
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
  const analysis = performDetailedComparison(mdFile, mdContent, htmlContent, allCssContent, cssFiles);

  analysisResults.detailedAnalysis.push(analysis);
  analysisResults.summary.analyzedPairs++;

  if (analysis.hasDifferences) {
    analysisResults.summary.foundDifferences++;
  }

  // 汇总缺失和额外内容
  analysisResults.summary.missingContent.push(...analysis.missingContent);
  analysisResults.summary.extraContent.push(...analysis.extraContent);

  console.log(`   📊 分析完成: ${analysis.hasDifferences ? '发现差异' : '内容一致'}`);
});

// 详细对比函数
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
    if (!mdTags.has(tag) && !['html', 'head', 'body', 'title', 'meta', 'link', 'script'].includes(tag)) {
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
console.log('📊 MD文件 vs 源码差异分析报告');
console.log('='.repeat(80));

console.log(`\n📈 分析统计:`);
console.log(`   MD文件总数: ${analysisResults.summary.totalMdFiles}`);
console.log(`   源码网站总数: ${analysisResults.summary.totalSourceSites}`);
console.log(`   成功对比: ${analysisResults.summary.analyzedPairs} 对`);
console.log(`   发现差异: ${analysisResults.summary.foundDifferences} 个文件有差异`);

console.log(`\n📋 缺失内容汇总:`);
if (analysisResults.summary.missingContent.length === 0) {
  console.log(`   ✅ 无重大缺失内容`);
} else {
  analysisResults.summary.missingContent.slice(0, 10).forEach((item, index) => {
    console.log(`   ${index + 1}. ${item}`);
  });
  if (analysisResults.summary.missingContent.length > 10) {
    console.log(`   ... 还有 ${analysisResults.summary.missingContent.length - 10} 项`);
  }
}

console.log(`\n🔍 详细差异分析:`);
analysisResults.detailedAnalysis.forEach(analysis => {
  console.log(`\n📄 ${analysis.fileName}:`);
  console.log(`   差异数量: ${analysis.differences.length}`);
  console.log(`   MD分析: ${analysis.mdAnalysis.htmlSnippets.length} HTML片段, ${analysis.mdAnalysis.colors.length} 颜色`);
  console.log(`   源码分析: ${analysis.sourceAnalysis.components.length} 组件, ${analysis.sourceAnalysis.colors.length} 颜色`);

  if (analysis.recommendations.length > 0) {
    console.log(`   建议: ${analysis.recommendations.slice(0, 2).join('; ')}`);
  }
});

// 保存详细分析结果
const reportData = {
  summary: analysisResults.summary,
  detailedAnalysis: analysisResults.detailedAnalysis,
  recommendations: generateGlobalRecommendations(analysisResults)
};

fs.writeFileSync('css-analysis/md-vs-source-comparison.json', JSON.stringify(reportData, null, 2));

// 生成Markdown报告
let markdownReport = `# MD文件 vs 源码差异分析报告

## 📊 分析概览

- **MD文件总数**: ${analysisResults.summary.totalMdFiles}
- **源码网站总数**: ${analysisResults.summary.totalSourceSites}
- **成功对比**: ${analysisResults.summary.analyzedPairs} 对
- **发现差异**: ${analysisResults.summary.foundDifferences} 个文件有差异

## 📋 主要发现

### 缺失内容
`;

if (analysisResults.summary.missingContent.length === 0) {
  markdownReport += `\n✅ **无重大缺失内容**\n`;
} else {
  analysisResults.summary.missingContent.forEach((item, index) => {
    markdownReport += `\n${index + 1}. ${item}`;
  });
}

markdownReport += `\n\n### 详细差异分析
`;

analysisResults.detailedAnalysis.forEach(analysis => {
  markdownReport += `\n#### 📄 ${analysis.fileName}\n`;
  markdownReport += `- **差异数量**: ${analysis.differences.length}\n`;
  markdownReport += `- **MD分析**: ${analysis.mdAnalysis.htmlSnippets.length} HTML片段, ${analysis.mdAnalysis.colors.length} 颜色\n`;
  markdownReport += `- **源码分析**: ${analysis.sourceAnalysis.components.length} 组件, ${analysis.sourceAnalysis.colors.length} 颜色\n`;

  if (analysis.recommendations.length > 0) {
    markdownReport += `- **建议**: ${analysis.recommendations.join('; ')}\n`;
  }
});

markdownReport += `\n\n### 全局建议\n`;
reportData.recommendations.forEach((rec, index) => {
  markdownReport += `\n${index + 1}. ${rec}`;
});

markdownReport += `\n\n---\n*分析时间: ${new Date().toISOString()}*`;

fs.writeFileSync('css-analysis/md-vs-source-comparison.md', markdownReport);

console.log(`\n💾 详细报告已保存:`);
console.log(`   - css-analysis/md-vs-source-comparison.json`);
console.log(`   - css-analysis/md-vs-source-comparison.md`);

console.log('\n✅ MD文件 vs 源码差异分析完成!');

// 生成全局建议函数
function generateGlobalRecommendations(results) {
  const recommendations = [];

  if (results.summary.foundDifferences > 0) {
    recommendations.push('建议对发现的差异进行修正，确保MD文件与源码内容一致');
  }

  if (results.summary.missingContent.length > 10) {
    recommendations.push('建议重点补充MD文件中缺失的重要内容，特别是颜色和组件说明');
  }

  const averageColorsPerFile = results.detailedAnalysis.reduce((sum, analysis) =>
    sum + analysis.sourceAnalysis.colors.length, 0) / results.detailedAnalysis.length;

  if (averageColorsPerFile > 50) {
    recommendations.push('建议建立更完善的颜色系统文档，提高设计系统的一致性');
  }

  recommendations.push('建议建立定期同步机制，确保文档与代码保持最新状态');
  recommendations.push('考虑使用自动化工具检测文档与代码的差异');

  return recommendations;
}