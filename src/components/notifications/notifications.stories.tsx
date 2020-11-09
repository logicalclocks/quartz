import React, { useCallback } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NotificationManager from './notifications-manager';
// Components
import NotificationsContainer from './index';
import { Badge, Button, Label } from '../../index';

export default {
  title: 'Quartz/NotificationsContainer',
  component: NotificationsContainer,
} as Meta;

const Template: Story = () => {
  const notifyHandler = useCallback(() => {
    NotificationManager.create({
      type: (
        <Badge
          width="fit-content"
          mb="14px"
          variant="fail"
          value="server error"
        />
      ),
      content: <Label>Try again later or contact the support</Label>,
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
