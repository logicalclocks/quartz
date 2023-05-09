import { ToastId, useToast } from '@chakra-ui/react';
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
    (status: Status) => (notification: INotification) => {
      const render = ({ onClose, id }: { onClose(): void; id: ToastId }) => {
        return (
          <Notification
            title={notification.title}
            content={notification.content}
            onClose={onClose}
            status={status}
            onMouseEnter={() => hoverHandler(id)}
            onMouseLeave={() => unhoverHandler(id)}
          />
        );
      };

      const hoverHandler = (id: ToastId) => {
        toast.update(id, { duration: 1e3, render });
      };

      const unhoverHandler = (id: ToastId) => {
        toast.update(id, {
          duration: notification.duration ?? 5000,
          render,
        });
      };

      toast({
        status,
        duration: notification.duration ?? 5000,
        isClosable: true,
        render,
      });
    },
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
