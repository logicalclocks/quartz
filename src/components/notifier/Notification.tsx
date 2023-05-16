import {
  Alert,
  AlertDescription,
  AlertProps,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Flex } from '../flex';

interface Props extends Omit<AlertProps, 'title' | 'content'> {
  onClose: any;
  title: ReactNode;
  content: ReactNode;
}

export const Notification = ({
  onClose,
  content,
  title,
  status,
  ...restProps
}: Props) => {
  return (
    <Alert
      variant="left-accent"
      status={status}
      borderLeftWidth="5px"
      flexDirection="column"
      alignItems="start"
      minW="350px"
      bg="white"
      _dark={{
        bg: 'dark.white',
      }}
      gap={1}
      pb={4}
      pl={6}
      {...restProps}
    >
      <Flex width="100%" justifyContent="space-between" alignItems="flex-start">
        {React.isValidElement(title) ? (
          title
        ) : (
          <AlertTitle fontSize="md">{title}</AlertTitle>
        )}
        <CloseButton onClick={onClose} />
      </Flex>

      {React.isValidElement(content) ? (
        content
      ) : (
        <AlertDescription fontSize="xs">{content}</AlertDescription>
      )}
    </Alert>
  );
};
