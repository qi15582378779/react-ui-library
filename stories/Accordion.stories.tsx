import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../src/components/Accordion/Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <AccordionItem key="1" title="Section 1">
        <p>Content for section 1</p>
      </AccordionItem>,
      <AccordionItem key="2" title="Section 2">
        <p>Content for section 2</p>
      </AccordionItem>,
      <AccordionItem key="3" title="Section 3">
        <p>Content for section 3</p>
      </AccordionItem>
    ]
  }
};

export const WithDefaultExpanded: Story = {
  args: {
    children: [
      <AccordionItem key="1" title="Expanded Section" defaultExpanded={true}>
        <p>This section is expanded by default</p>
      </AccordionItem>,
      <AccordionItem key="2" title="Collapsed Section">
        <p>This section is collapsed by default</p>
      </AccordionItem>
    ]
  }
};

export const CustomClassName: Story = {
  args: {
    className: "custom-accordion",
    children: [
      <AccordionItem key="1" title="Custom Styled Section" className="custom-item">
        <p>Section with custom styling</p>
      </AccordionItem>
    ]
  }
};