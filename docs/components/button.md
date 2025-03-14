# Button 按钮

按钮用于触发一个操作或者跳转链接。

## 基础用法

最基础的按钮用法。

```tsx
import { Button } from '@yuqi_dev/react-ui-library';

export default () => (
  <>
    <Button text="默认按钮" />
    <Button variant="neutral" text="中性按钮" />
    <Button variant="no-shadow" text="无阴影按钮" />
  </>
);
```

## 按钮尺寸

按钮支持四种尺寸：小型(sm)、默认(default)、大型(lg)和图标型(icon)。

```tsx
import { Button } from '@yuqi_dev/react-ui-library';

export default () => (
  <>
    <Button size="sm" text="小按钮" />
    <Button size="default" text="默认按钮" />
    <Button size="lg" text="大按钮" />
    <Button size="icon" iconName="plus" />
  </>
);
```

## 图标按钮

可以通过设置 `iconName` 或 `iconSrc` 来使用图标按钮。

```tsx
import { Button } from '@yuqi_dev/react-ui-library';

export default () => (
  <>
    <Button size="icon" iconName="plus" />
    <Button size="icon" iconName="search" variant="neutral" />
    <Button text="带图标的按钮" iconName="check" />
  </>
);
```

## 链接按钮

可以通过设置 `href` 属性将按钮变成链接。

```tsx
import { Button } from '@yuqi_dev/react-ui-library';

export default () => (
  <Button 
    text="访问外部链接" 
    href="https://example.com" 
    openInNewTab={true}
  />
);
```

## 禁用状态

通过 `disabled` 属性设置按钮禁用状态。

```tsx
import { Button } from '@yuqi_dev/react-ui-library';

export default () => (
  <Button text="禁用按钮" disabled />
);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文本 | `string` | `'Button'` |
| size | 按钮大小 | `'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` |
| variant | 按钮变体样式 | `'default' \| 'neutral' \| 'no-shadow'` | `'default'` |
| className | 自定义类名 | `string` | - |
| href | 链接地址 | `string` | - |
| onClick | 点击事件回调 | `(event: React.MouseEvent<HTMLDivElement>) => void` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| openInNewTab | 是否在新窗口打开链接 | `boolean` | `true` |
| iconName | 图标名称 | `IconName` | - |
| iconSrc | 图标资源地址 | `string` | - |
| iconSize | 图标大小 | `number \| string \| [number, number]` | `24` |
| iconColor | 图标颜色 | `string` | `'currentColor'` |

### CSS 变量

按钮组件使用了以下 CSS 变量，你可以通过覆盖这些变量来自定义样式：

```css
:root {
  --collection-1-border-duplicate: /* 边框颜色 */
  --collection-1-border-radius-duplicate: /* 边框圆角 */
  --text: /* 文本颜色 */
  --main: /* 主要背景色 */
  --box-shadow: /* 阴影效果 */
}
```

## 设计指南

- 主要按钮：用于主要操作，一个操作区域建议只有一个主要按钮
- 次要按钮：用于次要操作，可以和主要按钮搭配使用
- 文本按钮：用于最次级的操作，通常用于链接或者不太重要的操作