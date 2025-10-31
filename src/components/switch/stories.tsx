import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Switch from './index';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label="Enable feature"
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        label="Feature enabled"
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    checked: true,
  },
};
