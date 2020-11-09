import React, { FC, useCallback, useEffect, useState } from 'react';

import NotificationManager from './notifications-manager';
// Types
import { SystemNotification } from './notifications-manager';
// Components
import NotificationsItemsContainer from './notifications-container';
import { FlexProps } from 'rebass';

export interface NotificationContainerProps extends Omit<FlexProps, 'css'> {}

const NotificationsContainer: FC<NotificationContainerProps> = (props) => {
  const [notifications, setNotifications] = useState<SystemNotification[]>([]);

  const handleChange = useCallback((list: SystemNotification[]) => {
    setNotifications(list.slice());
  }, []);

  useEffect(() => {
    NotificationManager.addChangeListener(handleChange);

    return () => {
      NotificationManager.removeChangeListener(handleChange);
    };
  }, []);

  return (
    <NotificationsItemsContainer {...props} notifications={notifications} />
  );
};

export default NotificationsContainer;
