import { AlertProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
interface Props extends Omit<AlertProps, 'title' | 'content'> {
    onClose: any;
    title: ReactNode;
    content: ReactNode;
}
export declare const Notification: ({ onClose, content, title, status, ...restProps }: Props) => React.JSX.Element;
export {};
