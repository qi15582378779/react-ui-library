# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

基础的按钮用法。

```jsx
import { Button } from '@yuqi_dev/react-ui-library';

export default () => (
  <>
    <Button>默认按钮</Button>
    <Button variant="primary">主要按钮</Button>
    <Button variant="secondary">次要按钮</Button>
    <Button variant="tertiary">文本按钮</Button>
  </>
);
```

## 按钮尺寸

按钮有大、中、小三种尺寸。

```jsx
import { Button } from '@yuqi_dev/react-ui-library';

export default () => (
  <>
    <Button size="small">小型按钮</Button>
    <Button size="medium">中型按钮</Button>
    <Button size="large">大型按钮</Button>
  </>
);
```

## 按钮颜色

按钮有多种预设颜色。

```jsx
import { Button } from '@yuqi_dev/react-ui-library';

export default () => (
  <>
    <Button color="red">红色按钮</Button>
    <Button color="green">绿色按钮</Button>
    <Button color="blue">蓝色按钮</Button>
  </>
);
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 按钮变体样式 | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` |
| size | 按钮尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| color | 按钮颜色 | `'red' \| 'green' \| 'blue'` | `'red'` |
| children | 按钮内容 | `React.ReactNode` | - |
| onClick | 点击按钮时的回调 | `() => void` | - |

### 样式变量

按钮使用 Tailwind CSS 进行样式定制，你可以通过修改 Tailwind 配置来自定义按钮样式。

## 设计指南

- 主要按钮：用于主要操作，一个操作区域建议只有一个主要按钮
- 次要按钮：用于次要操作，可以和主要按钮搭配使用
- 文本按钮：用于最次级的操作，通常用于链接或者不太重要的操作