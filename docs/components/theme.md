# Theme 主题

主题提供了一种统一的方式来管理组件的视觉样式。

## 基础用法

使用 `ThemeProvider` 包裹组件，并通过 `theme` 属性设置主题。

```jsx
import { ThemeProvider, Card } from 'my-react-ui-library';

export default () => (
  <ThemeProvider theme="blue">
    <Card title="蓝色主题卡片">
      这是一个使用蓝色主题的卡片
    </Card>
  </ThemeProvider>
);
```

## 预设主题

我们提供了以下预设主题：

- `blue` - 蓝色主题
- `orange` - 橙色主题
- `yellow` - 黄色主题
- `red` - 红色主题
- `green` - 绿色主题
- `purple` - 紫色主题

## 自定义主题

你可以通过传入一个主题对象来自定义主题：

```jsx
const customTheme = {
  main: '#FF69B4',    // 主色
  bg: '#FFF0F5',      // 背景色
  darkBg: '#4B0082'   // 深色背景
};

export default () => (
  <ThemeProvider theme={customTheme}>
    <Card title="自定义主题卡片">
      这是一个使用自定义主题的卡片
    </Card>
  </ThemeProvider>
);
```

## API

### ThemeProvider

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 主题配置，可以是预设主题名或自定义主题对象 | `PresetThemeType \| ThemeColors` | - |
| children | 子组件 | `ReactNode` | - |
| onChange | 主题变化时的回调函数 | `(theme: ThemeType \| ThemeColors) => void` | - |

### ThemeColors

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| main | 主色 | `string` |
| bg | 背景色 | `string` |
| darkBg | 深色背景 | `string` |

### PresetThemeType

可用的预设主题类型：`'blue' \| 'orange' \| 'yellow' \| 'red' \| 'green' \| 'purple'` 