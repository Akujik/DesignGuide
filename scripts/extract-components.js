#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🧩 组件库盘点验证分析...\n');

// Find all CSS and HTML files
const cssFiles = execSync('find targets/ -name "*.css"', { encoding: 'utf-8' }).trim().split('\n').filter(Boolean);
const htmlFiles = execSync('find targets/ -name "*.html"', { encoding: 'utf-8' }).trim().split('\n').filter(Boolean);

console.log(`📁 分析 ${cssFiles.length} 个 CSS 文件和 ${htmlFiles.length} 个 HTML 文件\n`);

// Component patterns to search for
const componentPatterns = {
  buttons: {
    selectors: [/\.(btn|button|Button)[\w-]*/g, /\[class*="[^"]*btn[^"]*"\]/g, /\[class*="[^"]*button[^"]*"\]/g],
    keywords: ['btn', 'button', 'Button']
  },
  cards: {
    selectors: [/\.(card|Card)[\w-]*/g, /\[class*="[^"]*card[^"]*"\]/g],
    keywords: ['card', 'Card']
  },
  navigation: {
    selectors: [/\.(nav|Nav|navbar|menu|Menu)[\w-]*/g, /\[class*="[^"]*nav[^"]*"\]/g],
    keywords: ['nav', 'Nav', 'navbar', 'menu', 'Menu']
  },
  forms: {
    selectors: [/\.(form|input|Input|select|Select|textarea)[\w-]*/g, /\[class*="[^"]*form[^"]*"\]/g],
    keywords: ['form', 'input', 'Input', 'select', 'Select', 'textarea']
  },
  modals: {
    selectors: [/\.(modal|Modal|dialog|popup)[\w-]*/g, /\[class*="[^"]*modal[^"]*"\]/g],
    keywords: ['modal', 'Modal', 'dialog', 'popup']
  },
  badges: {
    selectors: [/\.(badge|Badge|tag|Tag)[\w-]*/g, /\[class*="[^"]*badge[^"]*"\]/g],
    keywords: ['badge', 'Badge', 'tag', 'Tag']
  },
  avatars: {
    selectors: [/\.(avatar|Avatar)[\w-]*/g, /\[class*="[^"]*avatar[^"]*"\]/g],
    keywords: ['avatar', 'Avatar']
  },
  grids: {
    selectors: [/\.(grid|Grid|flex|Flex)[\w-]*/g, /\[class*="[^"]*grid[^"]*"\]/g],
    keywords: ['grid', 'Grid', 'flex', 'Flex']
  }
};

// Results storage
const componentInventory = {};
Object.keys(componentPatterns).forEach(type => {
  componentInventory[type] = {
    cssClasses: new Set(),
    htmlClasses: new Set(),
    totalOccurrences: 0,
    files: new Set()
  };
});

console.log('🔍 搜索组件相关类名...\n');

// Analyze CSS files
cssFiles.forEach((filePath, index) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const siteName = filePath.split('/')[1];

    Object.entries(componentPatterns).forEach(([componentType, patterns]) => {
      patterns.selectors.forEach(selector => {
        const matches = content.match(selector) || [];
        matches.forEach(match => {
          // Extract class names from matches
          const classNames = match.match(/\.[\w-]+/g) || match.match(/class="[^"]*"/g) || [];
          classNames.forEach(className => {
            // Clean up class name
            const cleanClass = className.replace(/^\./, '').replace(/class="([^"]*)".*/, '$1');

            // Check if it contains component keywords
            if (patterns.keywords.some(keyword =>
              cleanClass.toLowerCase().includes(keyword.toLowerCase())
            )) {
              componentInventory[componentType].cssClasses.add(cleanClass);
              componentInventory[componentType].files.add(filePath);
              componentInventory[componentType].totalOccurrences++;
            }
          });
        });
      });
    });

    console.log(`✅ ${index + 1}/${cssFiles.length} ${siteName.substring(0, 30)}...`);

  } catch (error) {
    console.error(`❌ 错误处理 CSS 文件 ${filePath}:`, error.message);
  }
});

// Analyze HTML files for actual usage
console.log('\n🎯 分析HTML文件中的组件使用...\n');

htmlFiles.forEach((filePath, index) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const siteName = filePath.split('/')[1];

    Object.entries(componentPatterns).forEach(([componentType, patterns]) => {
      patterns.keywords.forEach(keyword => {
        // Search for class attributes containing component keywords
        const classMatches = content.match(new RegExp(`class="[^"]*${keyword}[^"]*"`, 'gi')) || [];
        classMatches.forEach(match => {
          componentInventory[componentType].htmlClasses.add(match);
        });
      });
    });

    console.log`✅ ${index + 1}/${htmlFiles.length} ${siteName.substring(0, 30)}...`;

  } catch (error) {
    console.error(`❌ 错误处理 HTML 文件 ${filePath}:`, error.message);
  }
});

// Generate comprehensive report
console.log('\n' + '='.repeat(80));
console.log('🧩 组件库盘点分析报告');
console.log('='.repeat(80));

console.log(`\n📊 组件类型统计:`);

Object.entries(componentInventory).forEach(([componentType, data]) => {
  console.log(`\n🎯 ${componentType.toUpperCase()}:`);
  console.log(`   CSS 类名: ${data.cssClasses.size} 个`);
  console.log(`   HTML 使用: ${data.htmlClasses.size} 个`);
  console.log(`   文件分布: ${data.files.size} 个文件`);
  console.log(`   总出现次数: ${data.totalOccurrences}`);

  // Show unique class names (limit to 10)
  if (data.cssClasses.size > 0) {
    const topClasses = Array.from(data.cssClasses).slice(0, 10);
    console.log(`   主要类名:`);
    topClasses.forEach(className => {
      console.log(`     - ${className}`);
    });
    if (data.cssClasses.size > 10) {
      console.log(`     ... 还有 ${data.cssClasses.size - 10} 个类名`);
    }
  }
});

// Search for Tailwind component patterns
console.log(`\n🎨 Tailwind 组件模式分析:`);

const tailwindPatterns = {
  buttons: /bg-[\w-]+\s+(hover:bg-[\w-]+\s+)?(text-[\w-]+\s+)?(rounded-[\w-]+\s+)?(px-[\w-]+\s+)?(py-[\w-]+)/g,
  cards: /rounded-[\w-]+\s+(bg-[\w-]+\s+)?(p-[\w-]+\s+)?(shadow-[\w-]+)?/g,
  inputs: /w-[\w-]+\s+(rounded-[\w-]+\s+)?(border[\w-]*\s+)?(px-[\w-]+\s+)?(py-[\w-]+)/g,
  grids: /grid\s+grid-cols-[\w-]+(\s+gap-[\w-]+)?/g,
  flexbox: /flex\s+(justify-[\w-]+\s+)?(items-[\w-]+\s+)?(gap-[\w-]+)?/g
};

let tailwindComponentCount = 0;

cssFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    Object.entries(tailwindPatterns).forEach(([patternType, pattern]) => {
      const matches = content.match(pattern) || [];
      if (matches.length > 0) {
        tailwindComponentCount += matches.length;
      }
    });
  } catch (error) {
    // Skip errors
  }
});

console.log(`   Tailwind 组件模式: ${tailwindComponentCount} 个匹配`);

// Find Semi Design components
console.log(`\n🏢 Semi Design 组件分析:`);

const semiPatterns = [
  /\.semi-[\w-]+/g,
  /data-semi-/g,
  /Semi-[\w-]+/g
];

let semiComponentCount = 0;

cssFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    semiPatterns.forEach(pattern => {
      const matches = content.match(pattern) || [];
      semiComponentCount += matches.length;
    });
  } catch (error) {
    // Skip errors
  }
});

console.log(`   Semi Design 组件: ${semiComponentCount} 个匹配`);

// Save detailed results
const outputDir = 'css-analysis';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const componentReport = {
  summary: {
    totalComponentTypes: Object.keys(componentInventory).length,
    totalUniqueClasses: Object.values(componentInventory).reduce((sum, data) => sum + data.cssClasses.size, 0),
    totalHtmlUsages: Object.values(componentInventory).reduce((sum, data) => sum + data.htmlClasses.size, 0),
    tailwindPatterns: tailwindComponentCount,
    semiComponents: semiComponentCount
  },
  components: Object.fromEntries(
    Object.entries(componentInventory).map(([type, data]) => [
      type,
      {
        cssClasses: Array.from(data.cssClasses),
        htmlClasses: Array.from(data.htmlClasses),
        fileCount: data.files.size,
        totalOccurrences: data.totalOccurrences
      }
    ])
  )
};

fs.writeFileSync(
  `${outputDir}/component-inventory.json`,
  JSON.stringify(componentReport, null, 2)
);

console.log(`\n💾 详细分析已保存到 ${outputDir}/component-inventory.json`);
console.log('✅ 组件库盘点完成!');

// Verification checklist
console.log(`\n📋 组件验证检查清单:`);
Object.entries(componentInventory).forEach(([componentType, data]) => {
  const hasClasses = data.cssClasses.size > 0;
  const hasUsage = data.htmlClasses.size > 0;
  console.log(`   [${hasClasses ? '✅' : '❌'}] ${componentType}: ${data.cssClasses.size} 个类名`);
});

console.log(`\n🏗️ 架构模式:`);
console.log(`   [${tailwindComponentCount > 100 ? '✅' : '⚠️'}] Tailwind CSS 原子化组件: ${tailwindComponentCount} 个模式`);
console.log(`   [${semiComponentCount > 50 ? '✅' : '⚠️'}] Semi Design 组件库: ${semiComponentCount} 个匹配`);