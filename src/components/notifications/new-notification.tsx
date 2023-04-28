import {
  Alert,
  AlertDescription,
  AlertTitle,
  CloseButton,
  useToast,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Flex } from '../flex';

interface Props {
  onClose: any;
  title: string | ReactNode;
  content: string | ReactNode;
}

export const NewNotification = ({
  onClose,
  content,
  title,
  isError = true,
}: Props) => {
  return (
    <Alert
      variant="left-accent"
      status="success"
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

export interface Notification {
  title: string | ReactNode;
  content: string | ReactNode;
  duration?: number;
  isError?: boolean;
}

export const useNotify = () => {
  const toast = useToast();

  return (notification: Notification) =>
    toast({
      position: 'top-right',
      status: notification.isError ? 'error' : 'success',
      duration: notification.duration ?? 5000,
      isClosable: true,
      render: ({ onClose }) => {
        return (
          <NewNotification
            title={notification.title}
            content={notification.content}
            onClose={onClose}
          />
        );
      },
    });
};
