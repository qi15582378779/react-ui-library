import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components';

const meta = {
  title: "组件/Button 按钮",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: '按钮文本',
      control: 'text'
    },
    size: {
      description: '按钮尺寸',
      options: ['sm', 'default', 'lg', 'icon'],
      control: { type: 'select' }
    },
    variant: {
      description: '按钮变体样式',
      options: ['default', 'neutral', 'no-shadow'],
      control: { type: 'select' }
    },
    disabled: {
      description: '是否禁用',
      control: 'boolean'
    },
    href: {
      description: '链接地址',
      control: 'text'
    },
    openInNewTab: {
      description: '是否在新窗口打开',
      control: 'boolean'
    },
    iconName: {
      description: '图标名称',
      control: 'select',
      options: ['plus', 'minus', 'search', 'check']
    },
    iconSize: {
      description: '图标大小',
      control: 'number'
    },
    iconColor: {
      description: '图标颜色',
      control: 'color'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础按钮
export const Default: Story = {
  args: {
    text: '默认按钮'
  }
};

// 不同尺寸
export const Sizes: Story = {
  render: () => React.createElement('div', 
    { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
    React.createElement(Button, { size: "sm", text: "小按钮" }),
    React.createElement(Button, { size: "default", text: "默认按钮" }),
    React.createElement(Button, { size: "lg", text: "大按钮" })
  )
};

// 不同变体
export const Variants: Story = {
  render: () => React.createElement('div',
    { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
    React.createElement(Button, { variant: "default", text: "默认样式" }),
    React.createElement(Button, { variant: "neutral", text: "中性样式" }),
    React.createElement(Button, { variant: "no-shadow", text: "无阴影" })
  )
};

// 图标按钮
export const IconButtons: Story = {
  render: () => React.createElement('div',
    { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
    React.createElement(Button, { size: "icon", iconName: "plus" }),
    React.createElement(Button, { size: "icon", iconName: "search" }),
    React.createElement(Button, { size: "icon", iconName: "check", variant: "neutral" })
  )
};

// 禁用状态
export const Disabled: Story = {
  args: {
    text: '禁用按钮',
    disabled: true
  }
};

// 链接按钮
export const Link: Story = {
  args: {
    text: '链接按钮',
    href: 'https://example.com',
    openInNewTab: true
  }
};