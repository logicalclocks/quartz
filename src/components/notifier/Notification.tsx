import {
  Alert,
  AlertDescription,
  AlertProps,
  AlertTitle,
  CloseButton,
  useToast,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Flex } from '../flex';

interface Props extends Omit<AlertProps, 'title'> {
  onClose: any;
  title: string | ReactNode;
  content: string | ReactNode;
}

export const Notification = ({ onClose, content, title, status }: Props) => {
  return (
    <Alert
      variant="left-accent"
      status={status}
      bg="white"
      _dark={{
        bg: 'dark.white',
      }}
      flexDirection="column"
      alignItems="start"
      gap={1}
      pb={4}
      pl={6}
      minW="300px"
    >
      <Flex width="100%" justifyContent="space-between" alignItems="flex-start">
        {React.isValidElement(title) ? (
          title
        ) : (
          <AlertTitle fontSize="lg">{title}</AlertTitle>
        )}
        <CloseButton onClick={onClose} />
      </Flex>

      {React.isValidElement(content) ? (
        content
      ) : (
        <AlertDescription>{content}</AlertDescription>
      )}
    </Alert>
  );
};

export interface INotification {
  /** Title of the alert. */
  title: string | ReactNode;
  /** Content under the title. */
  content: string | ReactNode;
  /** Duration in milliseconds. E.g. 5000 by default */
  duration?: number;
  isError?: boolean;
}

export const useNotify = () => {
  const toast = useToast();

  return (notification: INotification) =>
    toast({
      position: 'top-right',
      status: notification.isError ? 'error' : 'success',
      duration: notification.duration ?? 5000,
      isClosable: true,
      render: ({ onClose }) => {
        return (
          <Notification
            title={notification.title}
            content={notification.content}
            onClose={onClose}
            status="error"
          />
        );
      },
    });
};
