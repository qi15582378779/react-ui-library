# Card 卡片

卡片组件，支持主题切换和自定义主题。

## 基础用法

最基础的卡片用法。

```tsx
import { Card } from '@yuqi_dev/react-ui-library';

export default () => (
  <Card
    title="基础卡片"
    subTitle="这是一个基础卡片示例"
  >
    卡片内容区域
  </Card>
);
```

## 主题切换

卡片组件支持主题切换，可以使用预设主题或自定义主题。

### 使用预设主题

通过 `ThemeProvider` 组件和预设主题名称来切换卡片主题。

```tsx
import { Card, ThemeProvider } from '@yuqi_dev/react-ui-library';

export default () => {
  const [theme, setTheme] = React.useState('blue');

  return (
    <ThemeProvider theme={theme}>
      <Card
        title="主题卡片"
        subTitle="使用预设主题"
      >
        这是一个支持主题切换的卡片组件
      </Card>
    </ThemeProvider>
  );
};
```

### 自定义主题

可以通过传入自定义主题对象来定制卡片样式。

```tsx
import { Card, ThemeProvider } from '@yuqi_dev/react-ui-library';

export default () => {
  const customTheme = {
    main: '#FF69B4',
    bg: '#FFF0F5',
    darkBg: '#4B0082'
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Card
        title="自定义主题卡片"
        subTitle="使用自定义主题颜色"
      >
        这是一个使用自定义主题的卡片组件
      </Card>
    </ThemeProvider>
  );
};
```

## API

### Card Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 卡片宽度 | string | '570px' |
| height | 卡片高度 | string | - |
| title | 标题 | string | '测试标题' |
| subTitle | 子标题 | string | '测试小标题' |
| rightContent | 右上角内容区域 | ReactNode | - |
| children | 子组件 | ReactNode | '内容区域' |

### 主题配置

预设主题包括：blue、orange、yellow、red、green、purple。

自定义主题对象结构：

```ts
interface ThemeColors {
  main: string;   // 主色调
  bg: string;     // 背景色
  darkBg: string; // 深色背景
}
```