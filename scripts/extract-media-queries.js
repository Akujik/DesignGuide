#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('📱 响应式设计专项分析 - 媒体查询提取...\n');

// Find all CSS files
const cssFiles = execSync('find targets/ -name "*.css"', { encoding: 'utf-8' }).trim().split('\n').filter(Boolean);
console.log(`📁 分析 ${cssFiles.length} 个 CSS 文件中的媒体查询\n`);

// Results storage
const mediaQueries = {
  all: [],
  breakpoints: new Map(),
  responsivePatterns: new Map(),
  touchPatterns: [],
  printStyles: [],
  highDPI: [],
  darkMode: [],
  reducedMotion: [],
  customQueries: []
};

// Common breakpoint patterns
const breakpointPatterns = {
  'mobile': {
    patterns: ['max-width: 640px', 'max-width: 768px'],
    aliases: ['sm', 'mobile', 'phone']
  },
  'tablet': {
    patterns: ['min-width: 641px', 'min-width: 768px', 'max-width: 1024px'],
    aliases: ['md', 'tablet', 'ipad']
  },
  'desktop': {
    patterns: ['min-width: 1025px', 'min-width: 1280px'],
    aliases: ['lg', 'desktop', 'xl']
  }
};

console.log('🔍 提取所有@media规则...\n');

cssFiles.forEach((filePath, index) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const siteName = filePath.split('/')[1];

    // Extract @media rules with more comprehensive regex
    const mediaRegex = /@media[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g;
    const matches = content.match(mediaRegex) || [];

    matches.forEach(match => {
      // Clean up the media query
      const cleanQuery = match.replace(/\s+/g, ' ').trim();
      const queryLine = cleanQuery.substring(0, cleanQuery.indexOf('{')).trim();

      // Store full query
      mediaQueries.all.push({
        file: filePath,
        site: siteName,
        query: queryLine,
        fullMatch: cleanQuery,
        length: cleanQuery.length
      });

      // Categorize media queries
      if (queryLine.includes('pointer: coarse') || queryLine.includes('touch')) {
        mediaQueries.touchPatterns.push({ query: queryLine, file: filePath });
      }

      if (queryLine.includes('print')) {
        mediaQueries.printStyles.push({ query: queryLine, file: filePath });
      }

      if (queryLine.includes('min-resolution') || queryLine.includes('dpi')) {
        mediaQueries.highDPI.push({ query: queryLine, file: filePath });
      }

      if (queryLine.includes('prefers-color-scheme: dark')) {
        mediaQueries.darkMode.push({ query: queryLine, file: filePath });
      }

      if (queryLine.includes('prefers-reduced-motion')) {
        mediaQueries.reducedMotion.push({ query: queryLine, file: filePath });
      }

      // Extract breakpoints
      const widthMatch = queryLine.match(/(?:min|max)-width:\s*(\d+(?:\.\d+)?(?:px|em|rem))/g);
      if (widthMatch) {
        widthMatch.forEach(bp => {
          const value = bp.match(/\d+(?:\.\d+)?/)[0];
          const unit = bp.match(/(px|em|rem)/)[1];
          const key = `${value}${unit}`;
          mediaQueries.breakpoints.set(key, (mediaQueries.breakpoints.get(key) || 0) + 1);
        });
      }

      // Identify responsive patterns
      if (queryLine.includes('grid') || queryLine.includes('flex') || queryLine.includes('display')) {
        const pattern = `layout_${queryLine.includes('grid') ? 'grid' : 'flex'}`;
        mediaQueries.responsivePatterns.set(pattern, (mediaQueries.responsivePatterns.get(pattern) || 0) + 1);
      }
    });

    console.log(`✅ ${index + 1}/${cssFiles.length} ${siteName.substring(0, 30)}... - ${matches.length} 个@media规则`);

  } catch (error) {
    console.error(`❌ 错误处理文件 ${filePath}:`, error.message);
  }
});

// Generate comprehensive report
console.log('\n' + '='.repeat(80));
console.log('📱 响应式设计分析报告');
console.log('='.repeat(80));

console.log(`\n📊 媒体查询统计:`);
console.log(`   总计: ${mediaQueries.all.length} 个@media规则`);
console.log(`   触摸设备: ${mediaQueries.touchPatterns.length} 个`);
console.log(`   打印样式: ${mediaQueries.printStyles.length} 个`);
console.log(`   高DPI屏幕: ${mediaQueries.highDPI.length} 个`);
console.log(`   深色模式: ${mediaQueries.darkMode.length} 个`);
console.log(`   减少动画: ${mediaQueries.reducedMotion.length} 个}`);

// Breakpoint analysis
console.log(`\n🎯 断点分析 (前15个最常用):`);
const sortedBreakpoints = Array.from(mediaQueries.breakpoints.entries())
  .sort(([,a], [,b]) => b - a)
  .slice(0, 15);

sortedBreakpoints.forEach(([breakpoint, count], index) => {
  const isStandard = ['640px', '768px', '1024px', '1280px'].some(standard =>
    breakpoint.includes(standard.replace('px', ''))
  );
  const standard = isStandard ? ' 📏' : '';
  console.log(`   ${(index + 1).toString().padStart(2)}. ${breakpoint}: ${count.toString().padStart(3)} 次${standard}`);
});

// Responsive patterns
console.log(`\n🎨 响应式布局模式:`);
Array.from(mediaQueries.responsivePatterns.entries()).forEach(([pattern, count]) => {
  console.log(`   ${pattern}: ${count} 次`);
});

// Touch-specific patterns
if (mediaQueries.touchPatterns.length > 0) {
  console.log(`\n👆 触摸设备适配:`);
  mediaQueries.touchPatterns.slice(0, 5).forEach(({ query }, index) => {
    console.log(`   ${index + 1}. ${query.substring(0, 80)}...`);
  });
  if (mediaQueries.touchPatterns.length > 5) {
    console.log(`   ... 还有 ${mediaQueries.touchPatterns.length - 5} 个触摸模式`);
  }
}

// Dark mode patterns
if (mediaQueries.darkMode.length > 0) {
  console.log(`\n🌙 深色模式支持:`);
  mediaQueries.darkMode.forEach(({ query }) => {
    console.log(`   - ${query}`);
  });
}

// High DPI patterns
if (mediaQueries.highDPI.length > 0) {
  console.log(`\n🔍 高分辨率屏幕支持:`);
  mediaQueries.highDPI.slice(0, 3).forEach(({ query }) => {
    console.log(`   - ${query}`);
  });
}

// Analyze Tailwind responsive utilities
console.log(`\n🎨 Tailwind CSS 响应式类分析:`);

let tailwindResponsiveCount = 0;
const responsivePrefixes = ['sm:', 'md:', 'lg:', 'xl:', '2xl:'];

cssFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    responsivePrefixes.forEach(prefix => {
      const regex = new RegExp(prefix + '[\\w-]+', 'g');
      const matches = content.match(regex) || [];
      tailwindResponsiveCount += matches.length;
    });
  } catch (error) {
    // Skip errors
  }
});

console.log(`   Tailwind 响应式类: ${tailwindResponsiveCount} 个`);

// Mobile-first vs Desktop-first analysis
console.log(`\n📱 移动优先 vs 桌面优先分析:`);

let mobileFirst = 0;
let desktopFirst = 0;

mediaQueries.all.forEach(({ query }) => {
  if (query.includes('min-width')) {
    desktopFirst++;
  } else if (query.includes('max-width')) {
    mobileFirst++;
  }
});

console.log(`   移动优先 (max-width): ${mobileFirst} 个规则`);
console.log(`   桌面优先 (min-width): ${desktopFirst} 个规则`);

const approach = mobileFirst > desktopFirst ? '移动优先' : '桌面优先';
console.log(`   📊 主要方法: ${approach}`);

// Accessibility features
console.log(`\n♿ 无障碍功能支持:`);
console.log(`   减少动画偏好: ${mediaQueries.reducedMotion.length} 个规则`);
console.log(`   深色模式支持: ${mediaQueries.darkMode.length} 个规则`);
console.log(`   高DPI适配: ${mediaQueries.highDPI.length} 个规则`);

// Save detailed results
const outputDir = 'css-analysis';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const mediaQueryReport = {
  summary: {
    totalMediaQueries: mediaQueries.all.length,
    touchPatterns: mediaQueries.touchPatterns.length,
    printStyles: mediaQueries.printStyles.length,
    highDPI: mediaQueries.highDPI.length,
    darkMode: mediaQueries.darkMode.length,
    reducedMotion: mediaQueries.reducedMotion.length,
    tailwindResponsive: tailwindResponsiveCount
  },
  breakpoints: Object.fromEntries(mediaQueries.breakpoints),
  responsivePatterns: Object.fromEntries(mediaQueries.responsivePatterns),
  designApproach: {
    mobileFirst,
    desktopFirst,
    primary: mobileFirst > desktopFirst ? 'mobile-first' : 'desktop-first'
  },
  accessibility: {
    reducedMotion: mediaQueries.reducedMotion.length > 0,
    darkMode: mediaQueries.darkMode.length > 0,
    highDPI: mediaQueries.highDPI.length > 0
  },
  allQueries: mediaQueries.all.map(({ query, site }) => ({ query, site }))
};

fs.writeFileSync(
  `${outputDir}/media-query-analysis.json`,
  JSON.stringify(mediaQueryReport, null, 2)
);

console.log(`\n💾 详细分析已保存到 ${outputDir}/media-query-analysis.json`);
console.log('✅ 响应式设计分析完成!');

// Verification checklist
console.log(`\n📋 响应式验证检查清单:`);
console.log(`   [${mediaQueries.all.length > 0 ? '✅' : '❌'}] 媒体查询: ${mediaQueries.all.length} 个规则`);
console.log(`   [${mediaQueries.touchPatterns.length > 0 ? '✅' : '⚠️'}] 触摸设备支持: ${mediaQueries.touchPatterns.length} 个规则`);
console.log(`   [${mediaQueries.darkMode.length > 0 ? '✅' : '⚠️'}] 深色模式: ${mediaQueries.darkMode.length} 个规则`);
console.log(`   [${tailwindResponsiveCount > 100 ? '✅' : '⚠️'}] Tailwind响应式: ${tailwindResponsiveCount} 个类`);
console.log(`   [${Object.keys(mediaQueries.breakpoints).length > 5 ? '✅' : '⚠️'}] 断点系统: ${Object.keys(mediaQueries.breakpoints).length} 个断点值`);

// Recommendation
console.log(`\n💡 建议:`);
if (mobileFirst > desktopFirst) {
  console.log(`   🎯 现代移动优先设计方法 ✅`);
} else {
  console.log(`   ⚠️ 建议采用移动优先设计方法`);
}

if (mediaQueries.darkMode.length === 0) {
  console.log(`   🌙 建议添加深色模式支持`);
}

if (mediaQueries.reducedMotion.length === 0) {
  console.log(`   ♿ 建议添加减少动画偏好支持`);
}

console.log(`   📏 标准化断点系统 (640px, 768px, 1024px, 1280px)`);