#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🎨 全面提取所有颜色系统...\n');

// Find all CSS files
const cssFiles = execSync('find targets/ -name "*.css"', { encoding: 'utf-8' }).trim().split('\n').filter(Boolean);
console.log(`📁 分析 ${cssFiles.length} 个 CSS 文件\n`);

// Color patterns
const patterns = {
  hex: /#[0-9a-fA-F]{3,8}\b/g,
  rgb: /rgba?\([^)]+\)/g,
  hsl: /hsla?\([^)]+\)/g,
  namedColors: /(black|white|red|blue|green|yellow|purple|orange|pink|gray|grey|transparent|inherit|currentColor)\b/g,
  oklch: /oklch\([^)]+\)/g,
  lch: /lch\([^)]+\)/g,
  lab: /lab\([^)]+\)/g
};

// Results storage
const allColors = {
  hex: new Set(),
  rgb: new Set(),
  hsl: new Set(),
  namedColors: new Set(),
  oklch: new Set(),
  lch: new Set(),
  lab: new Set()
};

// Brand colors we're specifically looking for
const brandColors = ['#C5F955', '#c5f955', '#FF3E8F', '#ff3e8f', '#FF97C2', '#ff97c2'];

console.log('🔍 提取所有颜色类型...\n');

cssFiles.forEach((filePath, index) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const siteName = filePath.split('/')[1];

    // Extract each color type
    Object.entries(patterns).forEach(([type, pattern]) => {
      const matches = content.match(pattern) || [];
      matches.forEach(color => {
        // Normalize colors
        if (type === 'hex') {
          // Convert to lowercase for deduplication
          allColors[type].add(color.toLowerCase());
        } else {
          allColors[type].add(color);
        }
      });
    });

    console.log(`✅ ${index + 1}/${cssFiles.length} ${siteName.substring(0, 30)}...`);

  } catch (error) {
    console.error(`❌ 错误处理文件 ${filePath}:`, error.message);
  }
});

// Analyze and categorize colors
console.log('\n' + '='.repeat(80));
console.log('📊 颜色系统完整分析报告');
console.log('='.repeat(80));

console.log(`\n🎯 总计:`);
Object.entries(allColors).forEach(([type, colors]) => {
  console.log(`   ${type.toUpperCase()}: ${colors.size} 个唯一值`);
});

// Analyze brand colors
console.log(`\n🏢 品牌颜色分析:`);
brandColors.forEach(color => {
  const found = allColors.hex.has(color.toLowerCase());
  console.log(`   ${color}: ${found ? '✅ 找到' : '❌ 未找到'}`);
});

// Find most common colors
const hexColors = Array.from(allColors.hex);
const colorUsage = {};

// Count frequency in all files
cssFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    hexColors.forEach(color => {
      const regex = new RegExp(color.replace('#', '[#]?'), 'gi');
      const matches = content.match(regex) || [];
      colorUsage[color] = (colorUsage[color] || 0) + matches.length;
    });
  } catch (error) {
    // Skip errors
  }
});

// Sort by usage frequency
const sortedColors = Object.entries(colorUsage)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 20);

console.log(`\n🔥 最常用的颜色 (前20):`);
sortedColors.forEach(([color, count], index) => {
  const isBrand = brandColors.includes(color);
  const brand = isBrand ? ' 🏢' : '';
  console.log(`   ${(index + 1).toString().padStart(2)}. ${color}: ${count.toString().padStart(3)} 次${brand}`);
});

// Analyze color families
const colorFamilies = {
  green: [],
  pink: [],
  blue: [],
  purple: [],
  orange: [],
  yellow: [],
  gray: [],
  other: []
};

hexColors.forEach(color => {
  const lower = color.toLowerCase();
  if (lower.includes('55') || lower.includes('ac') || lower.includes('9f') || lower.includes('fc') || lower.includes('ed')) {
    if (brandColors.includes(color) || lower.includes('c5f9')) {
      colorFamilies.green.push(color);
    }
  }
  if (lower.includes('ff') && (lower.includes('3e') || lower.includes('97') || lower.includes('c2'))) {
    colorFamilies.pink.push(color);
  }
  if (lower.includes('0') && lower.includes('a') && lower.includes('f')) {
    colorFamilies.blue.push(color);
  }
  // Add more sophisticated color detection as needed
});

console.log(`\n🌈 颜色家族分析:`);
Object.entries(colorFamilies).forEach(([family, colors]) => {
  if (colors.length > 0) {
    console.log(`   ${family}: ${colors.length} 个颜色`);
    colors.slice(0, 5).forEach(color => {
      console.log(`     - ${color}`);
    });
    if (colors.length > 5) {
      console.log(`     ... 还有 ${colors.length - 5} 个`);
    }
  }
});

// Check for modern color spaces
console.log(`\n🚀 现代颜色空间:`);
console.log(`   OKLCH: ${allColors.oklch.size} 个颜色`);
console.log(`   LCH: ${allColors.lch.size} 个颜色`);
console.log(`   LAB: ${allColors.lab.size} 个颜色`);

if (allColors.oklch.size > 0) {
  console.log(`\n   OKLCH 示例:`);
  Array.from(allColors.oklch).slice(0, 3).forEach(color => {
    console.log(`     - ${color}`);
  });
}

// Save detailed analysis
const outputDir = 'css-analysis';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const analysisReport = {
  summary: {
    totalColors: Object.values(allColors).reduce((sum, colors) => sum + colors.size, 0),
    hexColors: allColors.hex.size,
    rgbColors: allColors.rgb.size,
    hslColors: allColors.hsl.size,
    namedColors: allColors.namedColors.size,
    oklchColors: allColors.oklch.size,
    brandColorsFound: brandColors.filter(color => allColors.hex.has(color.toLowerCase())).length
  },
  brandColors: brandColors.map(color => ({
    color,
    found: allColors.hex.has(color.toLowerCase()),
    usage: colorUsage[color.toLowerCase()] || 0
  })),
  topColors: sortedColors.slice(0, 50),
  colorFamilies: Object.fromEntries(
    Object.entries(colorFamilies).filter(([, colors]) => colors.length > 0)
  ),
  allColors: {
    hex: Array.from(allColors.hex).sort(),
    rgb: Array.from(allColors.rgb).sort(),
    hsl: Array.from(allColors.hsl).sort(),
    namedColors: Array.from(allColors.namedColors).sort(),
    oklch: Array.from(allColors.oklch).sort(),
    lch: Array.from(allColors.lch).sort(),
    lab: Array.from(allColors.lab).sort()
  }
};

fs.writeFileSync(
  `${outputDir}/complete-color-analysis.json`,
  JSON.stringify(analysisReport, null, 2)
);

console.log(`\n💾 详细分析已保存到 ${outputDir}/complete-color-analysis.json`);
console.log('✅ 颜色系统分析完成!');

// Summary for verification
console.log(`\n📋 验证检查清单:`);
console.log(`   [✅] 提取了 ${analysisReport.summary.hexColors} 个十六进制颜色`);
console.log(`   [✅] 找到 ${analysisReport.summary.brandColorsFound}/${brandColors.length} 个预期品牌颜色`);
console.log(`   [${analysisReport.summary.oklchColors > 0 ? '✅' : '❌'}] 现代颜色空间 (OKLCH) ${analysisReport.summary.oklchColors > 0 ? '已使用' : '未使用'}`);
console.log(`   [${allColors.hex.size > 100 ? '✅' : '⚠️'}] 颜色系统复杂度: ${allColors.hex.size > 100 ? '丰富' : '简单'}`);