import Button from '../src/components/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: "组件/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '按钮变体样式',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' }
    },
    size: {
      description: '按钮尺寸',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    color: {
      description: '按钮颜色',
      options: ['red', 'green', 'blue'],
      control: { type: 'select' }
    },
    onClick: { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "主要按钮",
    color: "blue",
    size: "medium"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "次要按钮",
    color: "green",
    size: "medium"
  }
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "文本按钮",
    color: "blue",
    size: "medium"
  }
};

export const Small: Story = {
  args: {
    size: "small",
    children: "小型按钮",
    variant: "primary",
    color: "blue"
  }
};

export const Large: Story = {
  args: {
    size: "large",
    children: "大型按钮",
    variant: "primary",
    color: "green"
  }
};

export const Red: Story = {
  args: {
    color: "red",
    children: "红色按钮",
    variant: "primary",
    size: "medium"
  }
};

export const Green: Story = {
  args: {
    color: "green",
    children: "绿色按钮",
    variant: "primary",
    size: "medium"
  }
};

export const Blue: Story = {
  args: {
    color: "blue",
    children: "蓝色按钮",
    variant: "primary",
    size: "medium"
  }
};

export const WithOnClick: Story = {
  args: {
    children: "点击事件按钮",
    variant: "primary",
    color: "blue",
    size: "medium",
    onClick: () => alert("按钮被点击了！")
  }
};