# Dialog 对话框

模态对话框，在浮层中显示，引导用户进行相关操作。

## 基础用法

```tsx
import { Dialog, Button } from 'my-react-ui-library';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button text="Open Dialog" onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        onClose={() => setVisible(false)}
        onOk={() => console.log('OK clicked')}
        onCancel={() => console.log('Cancel clicked')}
      />
    </div>
  );
};
```

## 自定义标题和内容

```tsx
import { Dialog, Button } from 'my-react-ui-library';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button text="Open Dialog" onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        title="Custom Dialog Title"
        onClose={() => setVisible(false)}
      >
        <p>This is a dialog with custom title and content.</p>
      </Dialog>
    </div>
  );
};
```

## 自定义底部按钮

```tsx
import { Dialog, Button } from 'my-react-ui-library';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button text="Open Dialog" onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        title="Custom Footer"
        onClose={() => setVisible(false)}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Button text="No" variant="neutral" onClick={() => setVisible(false)} />
            <Button text="Yes" onClick={() => setVisible(false)} />
          </div>
        }
      >
        <p>Dialog with custom footer buttons.</p>
      </Dialog>
    </div>
  );
};
```

## 自定义宽度

```tsx
import { Dialog, Button } from 'my-react-ui-library';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button text="Open Dialog" onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        width="800px"
        title="Wide Dialog"
        onClose={() => setVisible(false)}
      >
        <p>This is a dialog with custom width.</p>
      </Dialog>
    </div>
  );
};
```

## API

| 属性         | 说明                 | 类型                              | 默认值                  |
| ------------ | -------------------- | --------------------------------- | ---------------------- |
| visible      | 对话框是否可见       | boolean                           | false                  |
| width        | 对话框宽度           | string                            | '570px'                |
| title        | 对话框标题           | string \| ReactNode \| ReactNode[] | 'Are you absolutely sure?' |
| children     | 对话框内容           | ReactNode                         | -                      |
| footer       | 对话框底部内容       | ReactNode \| ReactNode[]          | -                      |
| maskClosable | 点击遮罩层是否可关闭 | boolean                           | true                   |
| onClose      | 关闭对话框回调       | () => void                        | -                      |
| onOk         | 确认按钮回调         | () => void                        | -                      |
| onCancel     | 取消按钮回调         | () => void                        | -                      |