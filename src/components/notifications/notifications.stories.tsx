import { Meta } from '@storybook/react';
import React, { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import { Flex } from 'rebass';
import NotificationManager from './notifications-manager';
// Components
import { Button, Label, Labeling } from '../../index';
import NotificationsContainer from './index';
import { NewNotification, useNotify } from './new-notification';
import { standaloneToast } from '../../theme-chakra/ChakraThemeProvider';

export default {
  title: 'Quartz/NotificationsContainer',
  component: NotificationsContainer,
} as Meta;

const Template = () => {
  const notify = useNotify();

  const notifyHandler = useCallback(() => {
    NotificationManager.create({
      isError: true,
      type: <Label fontSize="18px">Title</Label>,
      content: (
        <Flex alignItems="center">
          <Labeling>message or message or message</Labeling>
          <Button ml="-10px" intent="inline">
            link link link
          </Button>
        </Flex>
      ),
    });
  }, []);

  const another = () => {
    notify({
      title: 'Account created.',
      content: (
        <Flex alignItems="center">
          <Labeling>message or message or message</Labeling>
          <Button ml="-10px" intent="inline">
            link link link
          </Button>
        </Flex>
      ),
      duration: 118000,
    });
  };

  const another2 = () => {
    standaloneToast({
      title: 'Account created.',
      description: "We've created your account for you.",
      position: 'top-right',
      duration: 10000000,

      render: ({ onClose }) => {
        return (
          <NewNotification title="Title" onClose={onClose}>
            <Flex>
              <Labeling>
                <Button intent="inline" display="inline-block">
                  Job huemoe
                </Button>
                triggered for hey successfully
              </Labeling>
            </Flex>
          </NewNotification>
        );
      },
    });
  };

  return (
    <>
      <NotificationsContainer marginTop="200px" />
      <Button onClick={notifyHandler}>Notify</Button>
      <Button onClick={another}>Toast</Button>
      <Button onClick={another2}>Standalone</Button>
    </>
  );
};

export const Default = Template.bind({});
