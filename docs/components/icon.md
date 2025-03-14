# Icon 图标

图标组件，支持使用内置图标或自定义SVG图标。

## 基础用法

使用内置图标。

```tsx
import { Icon } from '@yuqi_dev/react-ui-library';

export default () => (
  <Icon iconName="search" />
);
```

## 图标大小

可以通过 `iconSize` 属性设置图标大小，支持数字或数组形式。

```tsx
import { Icon } from '@yuqi_dev/react-ui-library';

export default () => (
  <>
    <Icon iconName="search" iconSize={16} />
    <Icon iconName="search" iconSize={24} />
    <Icon iconName="search" iconSize={32} />
    <Icon iconName="search" iconSize={[40, 20]} />
  </>
);
```

## 图标颜色

通过 `iconColor` 属性设置图标颜色。

```tsx
import { Icon } from '@yuqi_dev/react-ui-library';

export default () => (
  <>
    <Icon iconName="search" iconColor="#f00" />
    <Icon iconName="search" iconColor="#0f0" />
    <Icon iconName="search" iconColor="#00f" />
  </>
);
```

## 自定义图标

可以通过 `iconSrc` 属性使用自定义SVG图标。

```tsx
import { Icon } from '@yuqi_dev/react-ui-library';

export default () => (
  <Icon iconSrc="/path/to/custom-icon.svg" />
);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| iconName | 内置图标名称 | `IconName` | - |
| iconSrc | 自定义图标地址 | `string` | - |
| iconSize | 图标大小 | `number \| string \| [number, number]` | `24` |
| iconColor | 图标颜色 | `string` | `'currentColor'` |
| iconClassName | 自定义类名 | `string` | - |
| iconFallback | 加载失败时的占位内容 | `React.ReactNode` | - |
| onError | 加载失败时的回调函数 | `(error: Error) => void` | - |

### 内置图标

组件内置了以下图标：

```tsx
import { iconNames } from '@yuqi_dev/react-ui-library';

console.log(iconNames);
// ['align-justify', 'arrow-left', 'arrow-right', ...]
```

所有内置图标都可以在 Storybook 的 Icon 组件文档中预览。 