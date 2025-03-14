import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../src/components';
import { iconNames } from '../src/components/Icon/name';

const meta = {
  title: "组件/Icon 图标",
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      description: '图标名称',
      control: 'select',
      options: iconNames
    },
    iconSrc: {
      description: '自定义图标地址',
      control: 'text'
    },
    iconSize: {
      description: '图标大小',
      control: 'number',
      defaultValue: 24
    },
    iconColor: {
      description: '图标颜色',
      control: 'color',
      defaultValue: 'currentColor'
    },
    iconClassName: {
      description: '自定义类名',
      control: 'text'
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础图标
export const Default: Story = {
  args: {
    iconName: 'search'
  }
};

// 图标集合
export const IconSet: Story = {
  render: () => React.createElement('div',
    { 
      style: { 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '20px',
        padding: '20px'
      } 
    },
    ...iconNames.map(name => 
      React.createElement('div', 
        { 
          key: name,
          style: { 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }
        },
        React.createElement(Icon, { iconName: name }),
        React.createElement('span', { style: { fontSize: '12px' } }, name)
      )
    )
  )
};

// 自定义大小
export const CustomSize: Story = {
  render: () => React.createElement('div',
    { style: { display: 'flex', gap: '20px', alignItems: 'center' } },
    React.createElement(Icon, { iconName: 'search', iconSize: 16 }),
    React.createElement(Icon, { iconName: 'search', iconSize: 24 }),
    React.createElement(Icon, { iconName: 'search', iconSize: 32 }),
    React.createElement(Icon, { iconName: 'search', iconSize: [40, 20] })
  )
};

// 自定义颜色
export const CustomColor: Story = {
  render: () => React.createElement('div',
    { style: { display: 'flex', gap: '20px', alignItems: 'center' } },
    React.createElement(Icon, { iconName: 'search', iconColor: '#f00' }),
    React.createElement(Icon, { iconName: 'search', iconColor: '#0f0' }),
    React.createElement(Icon, { iconName: 'search', iconColor: '#00f' })
  )
}; 