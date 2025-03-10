# 快速开始

## 安装

使用您喜欢的包管理器安装 My React UI Library：

```bash
# 使用 npm
npm install react-ui-library

# 使用 yarn
yarn add react-ui-library

# 使用 pnpm
pnpm add react-ui-library
```

## 使用

1. 在您的项目入口文件中导入样式：

```tsx
import 'react-ui-library/dist/index.css';
```

2. 在组件中使用：

```tsx
import { Button } from 'react-ui-library';

function App() {
  return (
    <Button type="primary" onClick={() => alert('Hello!')}>
      点击我
    </Button>
  );
}
```

## 配置主题

我们的组件库使用 Tailwind CSS 进行样式管理，您可以通过配置 tailwind.config.js 来自定义主题：

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1890ff',
        // 添加您的自定义颜色
      },
    },
  },
};
```

## 开发环境

如果您想在本地开发和调试组件：

1. 克隆仓库
```bash
git clone <repository-url>
cd react-ui-library
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