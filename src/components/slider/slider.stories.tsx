import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Box } from 'rebass';
import Slider, { Props } from './slider';

export default {
  title: 'Quartz/Slider',
  component: Slider,
} as Meta;

export const DefaultSlider: Story<Pick<Props, 'label' | 'step' | 'range'>> = (
  props,
) => {
  const [value, setValue] = useState(0);

  return (
    <Box width="700px">
      <Slider value={value} onChange={setValue} {...props} />
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
  const [value, setValue] = useState(0);

  return (
    <Box width="700px">
      <Slider value={value} onChange={setValue} {...props} />
    </Box>
  );
};

WithCustomDisplayValue.args = {
  label: 'RAM',
  step: 128,
  range: [0, 1024],
  formatDisplayValue: (value) => `${value} MB`,
};
