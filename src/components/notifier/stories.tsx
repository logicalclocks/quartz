import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { INotification, Notification, useNotify } from './Notification';
import { Button } from '../button';
import { Box } from '../box';
import { useNotifier } from './notifier';

const meta: Meta<INotification> = {
  title: 'Notifier',
  args: {
    title: 'Something happened',
    content: 'You have to see it.',
    duration: 5000,
  },
};

export default meta;

type Story = StoryObj<INotification>;

export const Error: Story = {
  args: {
    title: 'Error happened',
  },
  render: (args) => {
    const notify = useNotifier();

    const another = () => {
      notify.error({
        title: args.title,
        content: args.content,
        duration: args.duration,
      });
    };

    return (
      <Box>
        <Button onClick={another}>Error</Button>
      </Box>
    );
  },
};

export const Success: Story = {
  render: (args) => {
    const notify = useNotifier();

    const another = () => {
      notify.success({
        title: args.title,
        content: args.content,
        duration: args.duration,
      });
    };

    return (
      <Box>
        <Button onClick={another}>Success</Button>
      </Box>
    );
  },
};
