import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Box } from 'rebass';
import Slider from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const DefaultSlider: Story = {
  args: {
    label: 'CPU cores',
    step: 1,
    range: [0, 10],
  },
  render: (props) => {
    const [value, setValue] = useState(0);

    return (
      <Box width="700px">
        <Slider {...props} value={value} onChange={setValue} />
      </Box>
    );
  },
};

export const WithCustomDisplayValue: Story = {
  args: {
    label: 'RAM',
    step: 128,
    range: [0, 1024],
    formatDisplayValue: (value) => `${value} MB`,
  },
  render: (props) => {
    const [value, setValue] = useState(0);

    return (
      <Box width="700px">
        <Slider {...props} value={value} onChange={setValue} />
      </Box>
    );
  },
};
