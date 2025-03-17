import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, ThemeProvider } from '../src/components';
import { presetThemes, ThemeType } from '../src/components/ThemeProvider/themes';

const meta = {
  title: "组件/Card 卡片",
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    width: {
      description: '卡片宽度',
      control: 'text',
      defaultValue: '570px'
    },
    height: {
      description: '卡片高度',
      control: 'text'
    },
    title: {
      description: '标题',
      control: 'text',
      defaultValue: '测试标题'
    },
    subTitle: {
      description: '子标题',
      control: 'text',
      defaultValue: '测试小标题'
    },
    children: {
      description: '内容',
      control: 'text',
      defaultValue: '内容区域'
    }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础卡片
export const Default: Story = {
  args: {
    title: '基础卡片',
    subTitle: '这是一个基础卡片示例',
    children: '卡片内容区域'
  }
};

const ThemeCardDemo = () => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('blue');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        {Object.keys(presetThemes).map((theme) => (
          <button
            key={theme}
            onClick={() => setCurrentTheme(theme as ThemeType)}
            style={{
              padding: '8px 16px',
              backgroundColor: presetThemes[theme as keyof typeof presetThemes].main,
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              color: '#fff'
            }}
          >
            {theme}
          </button>
        ))}
      </div>
      <ThemeProvider theme={currentTheme}>
        <Card
          title={`${currentTheme} 主题卡片`}
          subTitle="点击上方按钮切换主题"
        >
          这是一个支持主题切换的卡片组件示例
        </Card>
      </ThemeProvider>
    </div>
  );
};

// 主题切换卡片
export const ThemeCard: Story = {
  render: () => <ThemeCardDemo />
};

// 自定义主题卡片
export const CustomThemeCard: Story = {
  render: () => {
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
          children="这是一个使用自定义主题的卡片组件示例"
        />
      </ThemeProvider>
    );
  }
};