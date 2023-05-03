import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { INotification, Notification, useNotify } from './Notification';
import { Button } from '../button';
import { Box } from '../box';
import { useNotifier } from './notifier';
import { Flex } from '../flex';

const meta: Meta<INotification> = {
  title: 'Notifier',
  tags: ['autodocs'],
  args: {
    title: 'Something happened',
    content: 'You have to see it.',
    duration: 5000,
  },
};

export default meta;

export const Primary: Story = {
  render: ({ title, content, duration }) => {
    const notify = useNotifier();

    const showSuccess = () => {
      notify.success({
        title,
        content,
        duration,
      });
    };

    const showError = () => {
      notify.error({
        title,
        content,
        duration,
      });
    };

    return (
      <Flex gap="20px">
        <Button intent="primary" onClick={showSuccess}>
          Success
        </Button>
        <Button intent="alert" onClick={showError}>
          Error
        </Button>
      </Flex>
    );
  },
};

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
