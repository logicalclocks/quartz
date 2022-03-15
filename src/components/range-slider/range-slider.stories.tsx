import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Box } from 'rebass';
import RangeSlider, { Props } from './range-slider';
import Value from '../typography/value';
import Divider from '../divider';
import Labeling from '../typography/labeling';

export default {
  title: 'Quartz/RangeSlider',
  component: RangeSlider,
} as Meta;

export const DefaultSlider: Story<Pick<Props, 'label' | 'step' | 'range'>> = (
  props,
) => {
  const [value, setValue] = useState([2, 4]);

  return (
    <Box width="700px">
      <RangeSlider value={value} onChange={setValue} {...props} />
      <Divider />
      <Labeling>Current value:</Labeling>
      <Value>[{value.join(', ')}]</Value>
    </Box>
  );
};

DefaultSlider.args = {
  label: 'CPU cores',
  step: 1,
  range: [0, 10],
};

export const WithCustomDisplayValue: Story<
  Pick<Props, 'label' | 'step' | 'range' | 'formatDisplayValue'>
> = (props) => {
  const [value, setValue] = useState([128, 256]);

  return (
    <Box width="700px">
      <RangeSlider value={value} onChange={setValue} {...props} />
      <Divider />
      <Labeling>Current value:</Labeling>
      <Value>[{value.join(', ')}]</Value>
    </Box>
  );
};

WithCustomDisplayValue.args = {
  label: 'RAM',
  step: 128,
  range: [0, 1024],
  formatDisplayValue: (value) => `${value} MB`,
};
