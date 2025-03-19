# ScrollArea 滚动区域

## 介绍

ScrollArea 是一个自定义滚动区域组件，它提供了一个可定制的滚动容器，支持自定义滚动条样式，并保持跨平台的一致性。

## 功能特点

- 自定义滚动条样式
- 平滑滚动效果
- 支持水平和垂直滚动
- 响应式设计
- 跨平台一致性

## 代码示例

```jsx
import { ScrollArea } from '@my-react-ui/core';

function App() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div>
        <h4>长文本内容</h4>
        <p>
          这是一段很长的文本内容，当内容超出容器高度时，
          ScrollArea 组件会自动显示滚动条。滚动条的样式
          可以通过主题进行自定义，确保与整体设计风格保持一致。
        </p>
      </div>
    </ScrollArea>
  );
}
```

## API

### ScrollArea

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 滚动区域的内容 | ReactNode | - |
| className | 自定义类名 | string | - |
| type | 滚动条类型，可选值：`auto`、`always`、`hover`、`scroll` | string | `auto` |
| scrollHideDelay | 滚动条自动隐藏延迟时间（毫秒） | number | 600 |
| dir | 文字方向，可选值：`ltr`、`rtl` | string | `ltr` |

### ScrollBar

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| orientation | 滚动条方向，可选值：`vertical`、`horizontal` | string | `vertical` |
| className | 自定义类名 | string | - |

## 注意事项

1. ScrollArea 组件需要设置固定的宽度和高度才能正常工作
2. 当内容较多时，建议使用虚拟滚动来优化性能
3. 可以通过主题自定义滚动条的样式，包括宽度、颜色等
4. 在移动端使用时，建议适当调整滚动条的宽度以提升可操作性