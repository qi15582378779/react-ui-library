# 快速开始

## 安装

使用您喜欢的包管理器安装 My React UI Library：

```bash
# 使用 npm
npm install @yuqi_dev/react-ui-library

# 使用 yarn
yarn add @yuqi_dev/react-ui-library

# 使用 pnpm
pnpm add @yuqi_dev/react-ui-library
```

## 使用

1. 在您的项目中导入组件：

```tsx
import { Button } from '@yuqi_dev/react-ui-library';

function App() {
  return (
    <Button type="primary" onClick={() => alert('Hello!')}>
      点击我
    </Button>
  );
}
```

## 组件文档

访问我们的[在线文档](http://localhost:5173)了解更多组件的使用方法和示例。每个组件都提供了详细的 API 说明和使用示例，帮助您快速上手。

## 开发环境

如果您想在本地运行文档站点或开发环境：

```bash
# 启动组件库开发环境
pnpm dev

# 启动 Storybook
pnpm storybook

# 启动文档站点
pnpm docs:dev
```