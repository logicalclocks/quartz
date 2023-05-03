import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';

import { expect } from '@storybook/jest';

import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';
import Value from '../typography/value';
import { INotification } from './Notification';
import { createNotifier, useNotifier } from './notifier';

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
        title: `Error!: ${title}`,
        content,
        duration,
      });
    };

    return (
      <Flex flexDirection="column" gap="20px">
        <Flex gap="20px">
          <Button intent="primary" onClick={showSuccess}>
            Success
          </Button>
          <Button intent="alert" onClick={showError}>
            Error
          </Button>
        </Flex>
        <Button intent="secondary" onClick={() => notify.closeAll()}>
          Clear all notifications
        </Button>
      </Flex>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const portal = within(document.querySelector('.chakra-portal')!);

    await userEvent.click(canvas.getByText('Success'));
    await expect(portal.getByText('Something happened')).toBeInTheDocument();

    await userEvent.click(canvas.getByText('Error'));
    await expect(
      portal.getByText('Error!: Something happened'),
    ).toBeInTheDocument();

    await userEvent.click(canvas.getByText('Clear all notifications'));
    await waitFor(() =>
      expect(portal.queryByText('Something happened')).not.toBeInTheDocument(),
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

export const Standalone: Story = {
  parameters: {
    docs: {
      source: `huy`,
    },
  },
  render: (args) => {
    const notifier = createNotifier();
    const another = () => {
      notifier.success({
        title: args.title,
        content: args.content,
        duration: args.duration,
      });
    };

    return (
      <Flex flexDirection="column" gap="20px">
        <Value>This is for situations when you cannot use a hook.</Value>
        <Button onClick={another}>Success</Button>
      </Flex>
    );
  },
};
