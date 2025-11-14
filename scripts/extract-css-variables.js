#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all CSS files
const { execSync } = require('child_process');
const cssFiles = execSync('find targets/ -name "stylesheet_*.css"', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`🔍 分析 ${cssFiles.length} 个 CSS 文件...\n`);

// Results storage
const allVariables = new Set();
const colorVariables = new Set();
const spacingVariables = new Set();
const fontVariables = new Set();
const otherVariables = new Set();

// Variable patterns
const patterns = {
  color: /--[\w-]*color[\w-]*:\s*([^;]+)/gi,
  spacing: /--[\w-]*(spacing|margin|padding|gap|size)[\w-]*:\s*([^;]+)/gi,
  font: /--[\w-]*(font|text|typography)[\w-]*:\s*([^;]+)/gi,
  general: /--[\w-]+:\s*([^;]+)/gi
};

// Analyze each CSS file
cssFiles.forEach((filePath, index) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const siteName = filePath.split('/')[1]; // Extract site name from path

    // Extract all CSS variables
    const matches = content.match(/--[\w-]+:\s*[^;]+/g) || [];

    matches.forEach(match => {
      allVariables.add(match);

      // Categorize variables
      if (patterns.color.test(match)) {
        colorVariables.add(match);
      } else if (patterns.spacing.test(match)) {
        spacingVariables.add(match);
      } else if (patterns.font.test(match)) {
        fontVariables.add(match);
      } else {
        otherVariables.add(match);
      }
    });

    console.log(`✅ ${index + 1}/${cssFiles.length} ${siteName}: ${matches.length} 个变量`);

  } catch (error) {
    console.error(`❌ 错误处理文件 ${filePath}:`, error.message);
  }
});

// Generate analysis report
console.log('\n' + '='.repeat(80));
console.log('📊 CSS 变量提取分析报告');
console.log('='.repeat(80));

console.log(`\n🎯 总计:`);
console.log(`   全部变量: ${allVariables.size} 个`);
console.log(`   颜色变量: ${colorVariables.size} 个`);
console.log(`   间距变量: ${spacingVariables.size} 个`);
console.log(`   字体变量: ${fontVariables.size} 个`);
console.log(`   其他变量: ${otherVariables.size} 个`);

// Find most common variables
const variableCounts = {};
allVariables.forEach(variable => {
  const name = variable.split(':')[0];
  variableCounts[name] = (variableCounts[name] || 0) + 1;
});

// Sort by frequency
const sortedVariables = Object.entries(variableCounts)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 20);

console.log(`\n🔥 最常用的变量 (前20):`);
sortedVariables.forEach(([name, count]) => {
  console.log(`   ${name}: 在 ${count} 个文件中出现`);
});

// Color-specific analysis
console.log(`\n🎨 颜色变量详情:`);
const brandColors = Array.from(colorVariables).filter(v =>
  v.includes('brand') || v.includes('primary') || v.includes('secondary')
);
console.log(`   品牌相关颜色: ${brandColors.length} 个`);
brandColors.forEach(color => console.log(`     ${color}`));

console.log(`\n⚠️ 需要人工验证的潜在问题:`);
console.log(`   1. 变量值是否完整提取`);
console.log(`   2. 是否有变量被遗漏`);
console.log(`   3. 变量分类是否准确`);

// Save results to files
const outputDir = 'css-analysis';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(
  path.join(outputDir, 'all-variables.txt'),
  Array.from(allVariables).sort().join('\n')
);

fs.writeFileSync(
  path.join(outputDir, 'color-variables.txt'),
  Array.from(colorVariables).sort().join('\n')
);

fs.writeFileSync(
  path.join(outputDir, 'spacing-variables.txt'),
  Array.from(spacingVariables).sort().join('\n')
);

fs.writeFileSync(
  path.join(outputDir, 'font-variables.txt'),
  Array.from(fontVariables).sort().join('\n')
);

fs.writeFileSync(
  path.join(outputDir, 'variable-analysis.json'),
  JSON.stringify({
    summary: {
      total: allVariables.size,
      color: colorVariables.size,
      spacing: spacingVariables.size,
      font: fontVariables.size,
      other: otherVariables.size
    },
    topVariables: sortedVariables,
    brandColors: brandColors
  }, null, 2)
);

console.log(`\n💾 详细结果已保存到 ${outputDir}/ 目录`);
console.log('✅ CSS变量提取完成!');