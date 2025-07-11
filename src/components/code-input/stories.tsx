import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import CodeInputComponent from '.';

const meta: Meta<typeof CodeInputComponent> = {
  title: 'Forms/Inputs/CodeInput',
  component: CodeInputComponent,
  argTypes: {
    onChange: {
      description: 'Input change callback function',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Input placeholder',
    },
    info: {
      control: { type: 'text' },
      description: 'Message text (validation error)',
    },
    label: {
      control: { type: 'text' },
    },
    labelAction: {
      description: 'Label action (React node)',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the input group (px, %, em)',
      defaultValue: { summary: '500px' },
    },
    height: {
      control: { type: 'text' },
      description: 'Required height of the input group (px, %, em)',
      defaultValue: { summary: '300px' },
    },
    mode: {
      control: { type: 'select' },
      options: ['javascript', 'yaml', 'python'],
      description: 'Input type',
      defaultValue: { summary: 'javascript' },
    },
    intent: {
      control: { type: 'select' },
      options: ['default', 'error'],
      description: 'Select intent (error border)',
    },
    completions: {
      control: { type: 'object' },
      description: 'Add some completions for code auto-complete',
    },
  },
};
export default meta;

export const CodeInput: StoryObj<typeof CodeInputComponent> = {
  args: {
    label: 'Label',
    mode: 'javascript',
    value: 'const a = 100;\nconst b = 120;',
    tooltipInfo: 'some tooltip',
    completions: [
      { label: 'panic', type: 'keyword' },
      { label: 'park', type: 'constant', info: 'Test completion' },
      { label: 'password', type: 'variable' },
    ],
    onChange: action('Input change'),
  },
};
