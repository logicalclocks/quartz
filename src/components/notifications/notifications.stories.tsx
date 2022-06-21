import React, { useCallback } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Flex } from 'rebass';
import NotificationManager from './notifications-manager';
// Components
import NotificationsContainer from './index';
import { Button, Label, Labeling } from '../../index';

export default {
  title: 'Quartz/NotificationsContainer',
  component: NotificationsContainer,
} as Meta;

const Template: Story = () => {
  const notifyHandler = useCallback(() => {
    NotificationManager.create({
      type: <Label fontSize="18px">'Title</Label>,
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
