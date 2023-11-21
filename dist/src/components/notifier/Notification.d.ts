import { AlertProps } from '@chakra-ui/react';
import React from 'react';
interface Props extends Omit<AlertProps, 'title' | 'content'> {
    onClose: any;
    title: React.ReactNode;
    content: React.ReactNode;
}
export declare const Notification: ({ onClose, content, title, status, ...restProps }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
