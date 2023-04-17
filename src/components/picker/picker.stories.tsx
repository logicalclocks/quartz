import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from 'rebass';
import Picker, { PickerProps } from './container';
import SingleRangeSlider, {
  SingleRangeSliderProps,
} from './single-range-slider';

import MultiRangeSlider, { MultiRangeSliderProps } from './multi-range-slider';

export default {
  title: 'Quartz/Picker',
  component: Picker,
} as Meta;

export const Container: Story<PickerProps> = (props) => (
  <Box width="700px">
    <Picker {...props} />
  </Box>
);

Container.args = {
  min: -1,
  max: 70,
  value: [30],
  step: 0.01,
  handleChange: action('OnChange'),
};
Container.argTypes = {
  min: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  max: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  value: {
    control: {
      type: 'array',
    },
    type: {
      required: true,
      summary: 'array of integers',
    },
  },
  step: {
    control: {
      type: 'number',
    },
    type: {
      summary: 'integer',
    },
    defaultValue: { summary: 0.01 },
  },
  handleChange: {
    control: {
      type: 'object',
      disable: true,
    },
    type: {
      summary: 'function',
    },
  },
};

export const SingleRange: Story<SingleRangeSliderProps> = (props) => {
  const [value, setValue] = useState(10);
  return (
    <Box width="700px">
      <SingleRangeSlider {...props} value={value} handleChange={setValue} />
    </Box>
  );
};

SingleRange.args = {
  min: -1,
  max: 70,
  value: 30,
  step: 0.01,
  handleChange: action('OnChange'),
};
SingleRange.argTypes = {
  min: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  max: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  value: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  step: {
    control: {
      type: 'number',
    },
    type: {
      summary: 'integer',
    },
    defaultValue: { summary: 0.01 },
  },
  handleChange: {
    control: {
      type: 'object',
      disable: true,
    },
    type: {
      summary: 'function',
    },
  },
};

export const DoubleRange: Story<MultiRangeSliderProps> = (props) => {
  const [value, setValue] = useState([-0.55, 0.1]);
  return (
    <Box width="700px">
      <MultiRangeSlider {...props} value={value} handleChange={setValue} />
    </Box>
  );
};

DoubleRange.args = {
  min: -1,
  max: 1,
  step: 0.01,
  handleChange: action('OnChange'),
};
DoubleRange.argTypes = {
  min: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  max: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  value: {
    control: {
      type: 'array',
    },
    type: {
      required: true,
      summary: 'array of integers',
    },
  },
  step: {
    control: {
      type: 'number',
    },
    type: {
      summary: 'integer',
    },
    defaultValue: { summary: 0.01 },
  },
  handleChange: {
    control: {
      type: 'object',
      disable: true,
    },
    type: {
      summary: 'function',
    },
  },
};

export const MultiRange: Story<MultiRangeSliderProps> = (props) => {
  const [value, setValue] = useState([-1, -0.55, 0.1, 1]);
  return (
    <Box width="700px">
      <MultiRangeSlider {...props} value={value} handleChange={setValue} />
    </Box>
  );
};

MultiRange.args = {
  min: -1,
  max: 1,
  step: 0.01,
};
MultiRange.argTypes = {
  min: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  max: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'integer',
    },
  },
  value: {
    control: {
      type: 'array',
    },
    type: {
      required: true,
      summary: 'array of integers',
    },
  },
  step: {
    control: {
      type: 'number',
    },
    type: {
      summary: 'integer',
    },
    defaultValue: { summary: 0.01 },
  },
  handleChange: {
    control: {
      type: 'object',
      disable: true,
    },
    type: {
      summary: 'function',
    },
  },
};
