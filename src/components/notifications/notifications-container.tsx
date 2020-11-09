import React, { FC } from 'react';
import { Flex, FlexProps } from 'rebass';
import { useTransition, animated } from 'react-spring';

// Types
import { SystemNotification } from './notifications-manager';
// Components
import Notification from './notification';

import styles from './notifications-styles';

export interface NotificationsItemsContainerProps
  extends Omit<FlexProps, 'css'> {
  notifications: SystemNotification[];
}

const NotificationsItemsContainer: FC<NotificationsItemsContainerProps> = ({
  notifications,
  ...props
}) => {
  const transitions = useTransition<SystemNotification, {}>(
    notifications,
    (item) => item.id,
    {
      from: { transform: 'translate3d(100%, 0, 0)' },
      enter: { transform: 'translate3d(-5%, 0, 0)' },
      leave: { transform: 'translate3d(110%, 0, 0)' },
    },
  );

  return (
    <Flex {...props} flexDirection="column" sx={styles.wrapper}>
      {transitions.map(({ item: notification, props, key }) => (
        <animated.div key={key} style={props}>
          <Notification
            id={notification.id}
            key={notification.id}
            duration={notification.duration}
            type={notification.type}
            content={notification.content}
          />
        </animated.div>
      ))}
    </Flex>
  );
};

export default NotificationsItemsContainer;
