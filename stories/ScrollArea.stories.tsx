import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '../src/components/ScrollArea/ScrollArea';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    height: '200px',
    style: { width: '300px' },
    children: (
      <div style={{ padding: '16px' }}>
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>这是第 {i + 1} 行内容</p>
        ))}
      </div>
    ),
  },
};

export const AutoHideDisabled: Story = {
  args: {
    height: '200px',
    style: { width: '300px' },
    autoHide: false,
    children: (
      <div style={{ padding: '16px' }}>
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>这是第 {i + 1} 行内容</p>
        ))}
      </div>
    ),
  },
};