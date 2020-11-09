import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Box, Flex } from 'rebass';
import NotificationManager, {
  SystemNotification,
} from './notifications-manager';
import styles from './notifications-styles';
import IconButton from '../icon-button';

const Notification: FC<SystemNotification> = ({
  id,
  type,
  content,
  duration,
}) => {
  const [timeout, setTimeoutNumber] = useState<number | null>(null);

  useEffect(() => {
    setTimeoutNumber(
      setTimeout(() => {
        NotificationManager.remove(id);
      }, duration),
    );
  }, []);

  const hoverHandler = useCallback(() => {
    if (timeout) {
      clearTimeout(timeout);
      setTimeoutNumber(null);
    }
  }, [timeout]);

  const removeHandler = useCallback(
    (id) => () => {
      NotificationManager.remove(id);
    },
    [],
  );

  return (
    <Box
      sx={styles.notification}
      key={id}
      onMouseEnter={hoverHandler}
      mb="20px"
      p="20px"
      tx="notification.secondary"
      variant="notification"
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        {type}
        <IconButton
          mt="-10px"
          mr="-10px"
          onClick={removeHandler(id)}
          intent="ghost"
          tooltip="hide"
          icon="times"
        />
      </Flex>
      {content}
    </Box>
  );
};

export default memo(Notification);
