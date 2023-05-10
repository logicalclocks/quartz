import { Meta } from '@storybook/react';
import React, { useCallback } from 'react';
import { Flex } from 'rebass';
import NotificationManager from './notifications-manager';
// Components
import { Button, Label, Labeling } from '../../index';
import NotificationsContainer from './index';

export default {
  title: 'Quartz/NotificationsContainer',
  component: NotificationsContainer,
} as Meta;

const Template = () => {
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

  return (
    <>
      <NotificationsContainer marginTop="200px" />
      <Button onClick={notifyHandler}>Notify</Button>
    </>
  );
};

export const Default = Template.bind({});
