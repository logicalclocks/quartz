import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import CommitGraph, { CommitGraphProps } from './index';

export default {
  title: 'Quartz/CommitGraph',
  component: CommitGraph,
} as Meta;

const keys = ['added', 'removed', 'modified'];
const groupKey = 'date';

const argTypes = {
  values: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'Array of split graph values',
    },
  },
  groupKey: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'Key to be grouped by',
    },
  },
  keys: {
    control: {
      type: 'inline-check',
      options: [groupKey, ...keys],
    },
    type: {
      required: true,
      summary: 'Keys to represent',
    },
  },
};

const mockValues = Array(Math.floor(Math.random() * 10) + 1)
  .fill(null)
  .map((__u: null, i: number) => {
    const random = (max: number) => Math.round(Math.random() * max);
    return {
      date: new Date(Date.now() + (i + 1) * 60000).toLocaleString(),
      added: random(100),
      removed: random(16),
      modified: random(34),
    };
  });

const Template: Story<CommitGraphProps> = (props) => (
  <Box width="600px">
    <CommitGraph {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  values: mockValues,
  groupKey,
  keys,
};

Default.argTypes = argTypes;
