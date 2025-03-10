# React UI Library

一个现代化的 React UI 组件库，基于 React + TypeScript + Vite + Tailwind CSS 构建。

## 特性

- 🚀 基于 React 19 和 TypeScript 5.7
- 📦 使用 Vite 6.2 构建，开发体验极佳
- 🎨 集成 Tailwind CSS，灵活的样式定制
- 📚 完整的 TypeScript 类型支持
- 🔍 Storybook 组件预览和文档
- ✅ Vitest 单元测试支持
- 📝 VitePress 文档站点

## 安装

```bash
npm install react-ui-library
# 或者
yarn add react-ui-library
# 或者
pnpm add react-ui-library
```

## 快速开始

```jsx
import { Button } from 'react-ui-library'

function App() {
  return (
    <Button type="primary">点击我</Button>
  )
}
```

## 文档

访问我们的[在线文档](http://localhost:5173)了解更多信息。

## 本地开发

1. 克隆仓库
```bash
git clone <repository-url>
cd my-react-ui-library
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
# 启动组件库开发环境
pnpm dev

# 启动 Storybook
pnpm storybook

# 启动文档站点
pnpm docs:dev
```

## 构建

```bash
# 构建组件库
pnpm build

# 构建文档站点
pnpm docs:build

# 构建 Storybook
pnpm build-storybook
```

## 测试

```bash
# 运行单元测试
pnpm test

# 类型检查
pnpm type-check
```

## 目录结构

```
├── src/               # 组件源码
├── docs/              # 文档
├── stories/           # Storybook 示例
├── tests/             # 测试文件
└── vite.config.ts     # Vite 配置
```

## 技术栈

- React 19
- TypeScript 5.7
- Vite 6.2
- Tailwind CSS 3.4
- Storybook 8.6
- VitePress 1.6
- Vitest 3.0

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交你的改动 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 开启一个 Pull Request

## 许可证

[ISC](LICENSE)
