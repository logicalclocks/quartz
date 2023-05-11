import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React, { useRef } from 'react';

import { expect } from '@storybook/jest';

import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';
import Value from '../typography/value';
import { INotification, createNotifier, useNotifier } from './notifier';

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
        title: `Success: ${title}`,
        content,
        duration,
      });
    };

    const showError = () => {
      notify.error({
        title: `Error: ${title}`,
        content,
        duration,
      });
    };

    const showInfo = () => {
      notify.info({
        title: `Info: ${title}`,
        content,
        duration,
      });
    };

    const showWarning = () => {
      notify.warning({
        title: `Warning: ${title}`,
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
          <Button intent="secondary" onClick={showInfo}>
            Info
          </Button>
          <Button intent="ghost" onClick={showWarning}>
            Warning
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

    userEvent.click(canvas.getByText('Success'));
    expect(
      await portal.findByText('Success: Something happened'),
    ).toBeInTheDocument();

    userEvent.click(canvas.getByText('Warning'));
    expect(
      await portal.findByText('Warning: Something happened'),
    ).toBeInTheDocument();

    userEvent.click(canvas.getByText('Info'));
    expect(
      await portal.findByText('Info: Something happened'),
    ).toBeInTheDocument();

    userEvent.click(canvas.getByText('Error'));
    expect(
      await portal.findByText('Error: Something happened'),
    ).toBeInTheDocument();

    userEvent.click(canvas.getByText('Clear all notifications'));
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
    const counter = useRef(1);

    const another = () => {
      notify.success({
        title: `${args.title} ${counter.current}`,
        content: args.content,
        duration: args.duration,
      });

      counter.current += 1;
    };

    return (
      <Box>
        <Button onClick={another}>Success</Button>
      </Box>
    );
  },
};

export const PreventDuplicateNotifications: Story = {
  render: (args) => {
    const notify = useNotifier();

    const showRegular = () => {
      notify.info({
        title: `Regular: ${args.title}`,
        content: args.content,
        duration: args.duration,
      });
    };

    const showPrevented = () => {
      notify.success({
        title: `Prevents others: ${args.title}`,
        content: args.content,
        duration: args.duration,
        uniqueId: 'just one id',
      });
    };

    return (
      <Flex flexDirection="column" gap="1rem">
        <Value fontSize="18px" width="300px">
          If you pass an ID to a notifier, it is going to prevent other
          notifications with the same ID from being shown.
        </Value>
        <Flex gap="20px">
          <Button onClick={showRegular}>Regular</Button>
          <Button onClick={showPrevented}>With ID given</Button>
        </Flex>
      </Flex>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const portal = within(document.querySelector('.chakra-portal')!);

    userEvent.click(canvas.getByText('Regular'));
    userEvent.click(canvas.getByText('Regular'));
    userEvent.click(canvas.getByText('Regular'));
    expect(
      await portal.findAllByText('Regular: Something happened'),
    ).toHaveLength(3);

    userEvent.click(canvas.getByText('With ID given'));
    userEvent.click(canvas.getByText('With ID given'));
    userEvent.click(canvas.getByText('With ID given'));
    expect(
      await portal.findAllByText('Prevents others: Something happened'),
    ).toHaveLength(1);
  },
};

export const Standalone: Story = {
  parameters: {
    docs: {
      source: `huy`,
    },
  },
  render: ({ title, content, duration }) => {
    const notifier = createNotifier();

    const showSuccess = () => {
      notifier.success({
        title: `Success: ${title}`,
        content,
        duration,
      });
    };

    const showError = () => {
      notifier.error({
        title: `Error: ${title}`,
        content,
        duration,
      });
    };

    const showInfo = () => {
      notifier.info({
        title: `Info: ${title}`,
        content,
        duration,
      });
    };

    const showWarning = () => {
      notifier.warning({
        title: `Warning: ${title}`,
        content,
        duration,
      });
    };

    return (
      <Flex flexDirection="column" gap="20px">
        <Value>This is for situations when you cannot use a hook.</Value>
        <Button onClick={showSuccess}>Success</Button>
        <Button intent="alert" onClick={showError}>
          Error
        </Button>
        <Button intent="secondary" onClick={showInfo}>
          Info
        </Button>
        <Button intent="ghost" onClick={showWarning}>
          Warning
        </Button>
        <Button intent="secondary" onClick={() => notifier.closeAll()}>
          Clear all notifications
        </Button>
      </Flex>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const portal = within(document.querySelector('.chakra-portal')!);

    userEvent.click(canvas.getByText('Success'));
    expect(
      await portal.findByText('Success: Something happened'),
    ).toBeInTheDocument();

    userEvent.click(canvas.getByText('Warning'));
    expect(
      await portal.findByText('Warning: Something happened'),
    ).toBeInTheDocument();

    userEvent.click(canvas.getByText('Info'));
    expect(
      await portal.findByText('Info: Something happened'),
    ).toBeInTheDocument();

    userEvent.click(canvas.getByText('Error'));
    expect(
      await portal.findByText('Error: Something happened'),
    ).toBeInTheDocument();

    userEvent.click(canvas.getByText('Clear all notifications'));
    await waitFor(() =>
      expect(portal.queryByText('Something happened')).not.toBeInTheDocument(),
    );
  },
};
