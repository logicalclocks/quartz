import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';
import { AnimatedProgress } from './AnimatedProgress';

const meta: Meta<typeof AnimatedProgress> = {
  title: 'AnimatedProgress',
  argTypes: {
    isAnimating: {
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
  },
};
export default meta;

type Story = StoryObj<typeof AnimatedProgress>;

export const Default: Story = {
  args: {
    variant: 'perf.green',
  },
  render: (args) => {
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
  },
};
