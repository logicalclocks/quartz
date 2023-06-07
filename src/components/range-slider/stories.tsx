import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Box } from 'rebass';
import RangeSlider from './range-slider';
import Value from '../typography/value';
import Divider from '../divider';
import Labeling from '../typography/labeling';

export default {
  title: 'RangeSlider',
  component: RangeSlider,
} as Meta;

type Story = StoryObj<typeof RangeSlider>;

export const DefaultSlider: Story = {
  args: {
    label: 'CPU cores',
    step: 1,
    range: [0, 10],
  },
  render: (props) => {
    const [value, setValue] = useState([2, 4]);

    return (
      <Box width="700px">
        <RangeSlider value={value} onChange={setValue} {...props} />
        <Divider />
        <Labeling>Current value:</Labeling>
        <Value>[{value.join(', ')}]</Value>
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
    const [value, setValue] = useState([128, 256]);

    return (
      <Box width="700px">
        <RangeSlider value={value} onChange={setValue} {...props} />
        <Divider />
        <Labeling>Current value:</Labeling>
        <Value>[{value.join(', ')}]</Value>
      </Box>
    );
  },
};
