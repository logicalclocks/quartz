import React from 'react';
import { Box } from 'rebass';
import { Story, Meta } from '@storybook/react/types-6-0';

import Bar, { BarProps } from './index';
import ProgressBar, { ProgressBarProps } from './progress';
import FreshnessBar, { FreshnessBarProps } from './freshness';
import ProgressBar2C, { ProgressBar2Props } from './progress-bar-2';

export default {
  title: 'Quartz/Bars',
  component: Bar,
} as Meta;

const Template: Story<BarProps> = (props) => <Bar {...props} />;

export const Default = Template.bind({});

Default.args = {
  value: 0.5,
};

Default.argTypes = {
  value: {
    control: {
      type: 'number',
      min: 0,
      max: 1,
      step: 0.01,
    },
    type: {
      required: true,
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['progress', 'freshness'],
    },
  },
};

export const Progress: Story<ProgressBarProps> = (props) => (
  <ProgressBar {...props} />
);

Progress.args = {
  completion: 0.75,
  tooltipValue: 'Tooltip',
  length: 'm',
};

Progress.argTypes = {
  tooltipValue: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Tooltip message',
    },
  },
  length: {
    control: {
      type: 'select',
      options: ['s', 'm'],
    },
    type: {
      required: false,
      summary: 'Tooltip length',
    },
    defaultValue: { summary: 'm' },
  },
  completion: {
    control: {
      type: 'number',
      min: 0,
      max: 1,
      step: 0.01,
    },
    type: {
      required: true,
    },
  },
};

export const Freshness: Story<FreshnessBarProps> = (props) => (
  <FreshnessBar {...props} />
);

Freshness.args = {
  time: '2020-04-08 15:00',
  length: 'm',
};

Freshness.argTypes = {
  length: {
    control: {
      type: 'select',
      options: ['s', 'm'],
    },
    type: {
      required: false,
      summary: 'Tooltip length',
    },
    defaultValue: { summary: 'm' },
  },
  time: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
};

// ProgressBar2
export const ProgressBar2: Story<ProgressBar2Props> = (props) => (
  <Box width="700px">
    <ProgressBar2C {...props} />
  </Box>
);

ProgressBar2.argTypes = {
  isAnimating: {
    control: {
      type: 'boolean',
    },
  },
  animationDuration: {
    control: {
      type: 'number',
    },
  },
  incrementDuration: {
    control: {
      type: 'number',
    },
  },
  minimum: {
    control: {
      type: 'number',
    },
  },
  variant: {
    control: {
      type: 'text',
    },
  },
};

ProgressBar2.args = {
  isAnimating: true,
  animationDuration: undefined,
  incrementDuration: undefined,
  minimum: undefined,
  variant: 'perf.green',
};
