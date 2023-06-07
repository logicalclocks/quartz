import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Box } from 'rebass';
import Slider, { Props } from './slider';

const meta: Meta<Props> = {
  title: 'Slider',
  component: Slider,
  args: {
    label: 'CPU cores',
    step: 1,
    range: [0, 10],
  },
};

export default meta;

type Story = StoryObj<Props>;

export const DefaultSlider: Story = {
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
