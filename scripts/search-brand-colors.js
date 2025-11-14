#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🎨 搜索 Meshy AI 品牌颜色...\n');

// Find all CSS and HTML files
const cssFiles = execSync('find targets/ -name "*.css"', { encoding: 'utf-8' }).trim().split('\n').filter(Boolean);
const htmlFiles = execSync('find targets/ -name "*.html"', { encoding: 'utf-8' }).trim().split('\n').filter(Boolean);

console.log(`📁 分析 ${cssFiles.length} 个 CSS 文件和 ${htmlFiles.length} 个 HTML 文件\n`);

// Brand colors to search for
const brandColors = [
  '#C5F955', // Meshy green
  '#FF3E8F', // Meshy pink
  '#c5f955', // lowercase version
  '#ff3e8f', // lowercase version
  'C5F955',
  'FF3E8F'
];

// Results storage
const colorOccurrences = {};
brandColors.forEach(color => {
  colorOccurrences[color] = {
    css: [],
    html: []
  };
});

// Search CSS files
cssFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const siteName = filePath.split('/')[1];

    brandColors.forEach(color => {
      const regex = new RegExp(color.replace('#', '[#]?'), 'gi');
      const matches = content.match(regex);
      if (matches) {
        colorOccurrences[color].css.push({
          file: filePath,
          site: siteName,
          count: matches.length,
          context: extractContext(content, color)
        });
      }
    });
  } catch (error) {
    console.error(`❌ 错误处理 CSS 文件 ${filePath}:`, error.message);
  }
});

// Search HTML files
htmlFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const siteName = filePath.split('/')[1];

    brandColors.forEach(color => {
      const regex = new RegExp(color.replace('#', '[#]?'), 'gi');
      const matches = content.match(regex);
      if (matches) {
        colorOccurrences[color].html.push({
          file: filePath,
          site: siteName,
          count: matches.length
        });
      }
    });
  } catch (error) {
    console.error(`❌ 错误处理 HTML 文件 ${filePath}:`, error.message);
  }
});

// Extract context around color occurrences
function extractContext(content, color) {
  const lines = content.split('\n');
  const contexts = [];

  lines.forEach((line, index) => {
    if (line.toLowerCase().includes(color.toLowerCase())) {
      const start = Math.max(0, index - 1);
      const end = Math.min(lines.length - 1, index + 1);
      const context = lines.slice(start, end + 1).join('\n').trim();
      contexts.push(`行 ${index + 1}: ${context}`);
    }
  });

  return contexts.slice(0, 3); // Limit to first 3 occurrences
}

// Generate report
console.log('='.repeat(80));
console.log('🎯 Meshy AI 品牌颜色搜索报告');
console.log('='.repeat(80));

let totalOccurrences = 0;

brandColors.forEach(color => {
  const cssCount = colorOccurrences[color].css.length;
  const htmlCount = colorOccurrences[color].html.length;
  const totalCount = cssCount + htmlCount;
  totalOccurrences += totalCount;

  if (totalCount > 0) {
    console.log(`\n🎨 ${color}:`);
    console.log(`   CSS 文件: ${cssCount} 个文件中出现`);
    console.log(`   HTML 文件: ${htmlCount} 个文件中出现`);
    console.log(`   总计: ${totalCount} 次出现`);

    // Show examples from CSS
    colorOccurrences[color].css.forEach(occurrence => {
      console.log(`\n   📄 ${occurrence.site}:`);
      console.log(`      文件: ${occurrence.file.split('/').pop()}`);
      console.log(`      次数: ${occurrence.count} 次`);

      if (occurrence.context.length > 0) {
        console.log(`      示例:`);
        occurrence.context.forEach(ctx => {
          console.log(`        ${ctx.substring(0, 120)}...`);
        });
      }
    });
  }
});

console.log(`\n📊 总结:`);
console.log(`   品牌颜色总出现次数: ${totalOccurrences}`);
console.log(`   搜索的颜色: ${brandColors.join(', ')}`);

// Search for gradient definitions
console.log(`\n🌈 搜索渐变定义...`);
let gradientCount = 0;

cssFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const gradients = content.match(/linear-gradient[^;)]+/g);
    if (gradients) {
      gradients.forEach(gradient => {
        if (gradient.includes('c5f955') || gradient.includes('ff3e8f') ||
            gradient.includes('C5F955') || gradient.includes('FF3E8F')) {
          gradientCount++;
          const siteName = filePath.split('/')[1];
          console.log(`   📍 ${siteName}: ${gradient.substring(0, 100)}...`);
        }
      });
    }
  } catch (error) {
    // Skip errors
  }
});

console.log(`   包含品牌色的渐变: ${gradientCount} 个`);

// Save detailed results
const outputDir = 'css-analysis';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(
  path.join(outputDir, 'brand-colors-analysis.json'),
  JSON.stringify({
    summary: {
      totalOccurrences,
      colorsSearched: brandColors,
      gradientsFound: gradientCount
    },
    details: colorOccurrences
  }, null, 2)
);

console.log(`\n💾 详细结果已保存到 ${outputDir}/brand-colors-analysis.json`);
console.log('✅ 品牌颜色搜索完成!');