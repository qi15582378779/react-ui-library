# Accordion 手风琴

可折叠的内容面板。

## 基础用法

```tsx
import { Accordion, AccordionItem } from 'my-react-ui-library';

export default () => (
  <Accordion>
    <AccordionItem title="Section 1">
      <p>Content for section 1</p>
    </AccordionItem>
    <AccordionItem title="Section 2">
      <p>Content for section 2</p>
    </AccordionItem>
  </Accordion>
);
```

## 默认展开

通过设置 `defaultExpanded` 属性可以指定默认展开的面板。

```tsx
import { Accordion, AccordionItem } from 'my-react-ui-library';

export default () => (
  <Accordion>
    <AccordionItem title="Expanded Section" defaultExpanded={true}>
      <p>This section is expanded by default</p>
    </AccordionItem>
    <AccordionItem title="Collapsed Section">
      <p>This section is collapsed by default</p>
    </AccordionItem>
  </Accordion>
);
```

## 自定义样式

通过 `className` 属性可以自定义组件样式。

```tsx
import { Accordion, AccordionItem } from 'my-react-ui-library';

export default () => (
  <Accordion className="custom-accordion">
    <AccordionItem title="Custom Styled Section" className="custom-item">
      <p>Section with custom styling</p>
    </AccordionItem>
  </Accordion>
);
```

## API

### Accordion

| 属性      | 说明             | 类型                                                                 | 默认值 |
| --------- | ---------------- | ------------------------------------------------------------------ | ------ |
| children  | AccordionItem 组件 | `ReactElement<AccordionItemProps>` \| `ReactElement<AccordionItemProps>[]` | `-`    |
| className | 自定义类名       | `string`                                                           | `-`    |
                                                        | -      |

### AccordionItem

| 属性            | 说明         | 类型      | 默认值  |
| --------------- | ------------ | --------- | ------- |
| title           | 标题         | string    | -       |
| children        | 子组件       | ReactNode | -       |
| defaultExpanded | 是否默认展开 | boolean   | false   |
| className       | 自定义类名   | string    | -       |