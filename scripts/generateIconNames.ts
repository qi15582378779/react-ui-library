import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置路径
const ICONS_DIR = path.resolve(__dirname, '../src/assets/icons');
const OUTPUT_FILE = path.resolve(__dirname, '../src/components/Icon/name.ts');

// 生成图标名称文件
function generateIconNames() {
  try {
    // 读取所有 SVG 文件
    const files = fs.readdirSync(ICONS_DIR);
    const iconNames = files
      .filter(file => file.endsWith('.svg'))
      .map(file => file.replace('.svg', ''))
      .sort(); // 按字母顺序排序

    // 生成 TypeScript 代码
    const content = `// 此文件由脚本自动生成，请勿手动修改
// Generated on ${new Date().toISOString()}

export const iconNames = [
  ${iconNames.map(name => `'${name}'`).join(',\n  ')}
] as const;

export type IconName = typeof iconNames[number];
`;

    // 写入文件
    fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
    console.log('✅ Icon names generated successfully!');
    console.log(`📝 Found ${iconNames.length} icons: ${iconNames.join(', ')}`);
  } catch (error) {
    console.error('❌ Error generating icon names:', error);
    process.exit(1);
  }
}

// 执行生成
generateIconNames(); 