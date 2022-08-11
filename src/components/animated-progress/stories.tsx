import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Box } from '../box';
import Button from '../button';
import { Flex } from '../flex';
import { AnimatedProgress, Props } from './AnimatedProgress';

export default {
  title: 'Quartz/AnimatedProgress',
  component: AnimatedProgress,
  args: {
    variant: 'perf.green',
  },
};

export const Default: Story<Props> = (args) => {
  const [isAnimating, setIsAnimating] = useState<boolean>();
  return (
    <Box width="700px">
      <Flex my="20px" justifyContent="center" sx={{ gap: '20px' }}>
        <Button disabled={isAnimating} onClick={() => setIsAnimating(true)}>
          {isAnimating === false ? 'restart' : 'start'}
        </Button>
        <Button disabled={!isAnimating} onClick={() => setIsAnimating(false)}>
          done
        </Button>
      </Flex>
      <AnimatedProgress {...args} isAnimating={isAnimating} />
    </Box>
  );
};

Default.argTypes = {
  isAnimating: {
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Number indicating if the progress bar is animating.',
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  animationDuration: {
    type: { name: 'number', required: false },
    defaultValue: 200,
    description: 'Number indicating the animation duration in ms.',
    control: {
      type: 'number',
      step: 25,
    },
    table: {
      defaultValue: { summary: 200 },
    },
  },
  incrementDuration: {
    type: { name: 'number', required: false },
    defaultValue: 800,
    description:
      'Number indicating the length of time between progress bar increments in ms.',
    control: {
      type: 'number',
      step: 100,
    },
    table: {
      defaultValue: { summary: 800 },
    },
  },
  minimum: {
    type: { name: 'number', required: false },
    defaultValue: 0.08,
    description:
      'Number between 0 and 1 indicating the minimum value of the progress bar.',
    control: {
      type: 'number',
      min: 0.01,
      max: 1,
      step: 0.1,
    },
    table: {
      defaultValue: { summary: 0.08 },
    },
  },
  variant: {
    type: { name: 'string', required: false },
    defaultValue: 'perf.green',
    description: 'color of progressing bar',
    options: ['perf.green', 'perf.orange', 'perf.black'],
    control: {
      type: 'select',
      labels: {
        'perf.green': 'Green',
        'perf.orange': 'Orange',
        'perf.black': 'Black',
      },
    },
    table: {
      defaultValue: { summary: 'perf.green' },
    },
  },
};
