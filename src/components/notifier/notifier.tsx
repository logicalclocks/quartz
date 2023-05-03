import { useToast } from '@chakra-ui/react';
import React, { ReactNode, useCallback } from 'react';
import { standaloneToast } from '../../theme-chakra/ChakraThemeProvider';
import { Notification } from './Notification';

type Status = 'success' | 'error';

export interface INotification {
  title: string | ReactNode;
  content: string | ReactNode;
  duration?: number;
  status?: Status;
}

export const useNotifier = () => {
  const toast = useToast();

  const notify = useCallback(
    (status: Status) => (notification: INotification) =>
      toast({
        status,
        duration: notification.duration ?? 5000,
        isClosable: true,
        render: ({ onClose }) => {
          return (
            <Notification
              title={notification.title}
              content={notification.content}
              onClose={onClose}
              status={status}
            />
          );
        },
      }),
    [toast],
  );

  return {
    success: notify('success'),
    error: notify('error'),
    closeAll: toast.closeAll,
    close: toast.close,
  };
};

export const createNotifier = () => {
  const notify = (status: Status) => (notification: INotification) =>
    standaloneToast({
      status,
      duration: notification.duration ?? 5000,
      isClosable: true,
      position: 'top-right',
      render: ({ onClose }) => {
        return (
          <Notification
            title={notification.title}
            content={notification.content}
            onClose={onClose}
            status={status}
          />
        );
      },
    });

  return {
    success: notify('success'),
    error: notify('error'),
    closeAll: standaloneToast.closeAll,
    close: standaloneToast.close,
  };
};
