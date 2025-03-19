import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dialog from '../src/components/Dialog/Dialog';
import Button from '../src/components/Button/Button';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
    onClose: () => console.log('Dialog closed'),
    onOk: () => console.log('OK clicked'),
    onCancel: () => console.log('Cancel clicked')
  }
};

export const CustomTitle: Story = {
  args: {
    visible: true,
    title: "Custom Dialog Title",
    children: <p>This is a dialog with custom title and content.</p>,
    onClose: () => console.log('Dialog closed'),
    onOk: () => console.log('OK clicked'),
    onCancel: () => console.log('Cancel clicked')
  }
};

export const CustomFooter: Story = {
  args: {
    visible: true,
    title: "Custom Footer",
    children: <p>Dialog with custom footer buttons.</p>,
    onClose: () => console.log('Dialog closed'),
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <Button text="No" variant="neutral" onClick={() => console.log('Cancel clicked')} />
        <Button text="Yes" onClick={() => console.log('OK clicked')} />
      </div>
    )
  }
};

export const CustomWidth: Story = {
  args: {
    visible: true,
    width: "800px",
    title: "Wide Dialog",
    children: <p>This is a dialog with custom width.</p>,
    onClose: () => console.log('Dialog closed'),
    onOk: () => console.log('OK clicked'),
    onCancel: () => console.log('Cancel clicked')
  }
};