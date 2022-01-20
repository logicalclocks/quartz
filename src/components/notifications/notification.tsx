import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Box, Flex } from 'rebass';
import NotificationManager, {
  SystemNotification,
} from './notifications-manager';
import styles from './notifications-styles';
import Tooltip from '../tooltip';
import Icon from '../icon';
import { IconName } from '../..';

const Notification: FC<SystemNotification> = ({
  id,
  type,
  content,
  duration,
  isError = true,
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
      sx={{
        ...styles.notification,
        borderLeftColor: isError ? 'labels.red' : 'labels.green',
      }}
      key={id}
      onMouseEnter={hoverHandler}
      mb="20px"
      p="20px"
      tx="notification.secondary"
      variant="notification"
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        {type}
        <Tooltip mainText="Hide">
          <Box
            mt="-5px"
            mr="-7px"
            onClick={removeHandler(id)}
            p="2px"
            height="30px"
            sx={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'transparent',
              cursor: 'pointer',

              ':hover': {
                backgroundColor: 'grayShade3',
                borderColor: 'grayShade3',
              },
            }}
          >
            <Icon icon={IconName.cross} />
          </Box>
        </Tooltip>
      </Flex>
      <Box sx={{ whiteSpace: 'nowrap' }} maxWidth="fit-content">
        {content}
      </Box>
    </Box>
  );
};

export default memo(Notification);
