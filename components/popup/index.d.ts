import React from 'react';
import { ModalProps, ModalOverlayProps, ModalContentProps, ModalBodyProps, ModalFooterProps, ModalHeaderProps } from '@chakra-ui/react';
export interface PopupProps extends Omit<ModalProps, 'title' | 'closeOnOverlayClick' | 'children'> {
    title?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    hasBackdrop?: boolean;
    closeOnBackdropClick?: boolean;
    hasCloseButton?: boolean;
    overlayProps?: ModalOverlayProps;
    contentProps?: ModalContentProps;
    headerProps?: ModalHeaderProps;
    bodyProps?: ModalBodyProps;
    footerProps?: ModalFooterProps;
    /** @deprecated */
    left?: string;
    /** @deprecated */
    top?: string;
    /** @deprecated */
    bottom?: string;
    /** @deprecated */
    right?: string;
}
declare const Popup: ({ title, children, footer, size, hasBackdrop, isOpen, closeOnBackdropClick, onClose, hasCloseButton, overlayProps, contentProps, headerProps, bodyProps, footerProps, ...props }: PopupProps) => React.JSX.Element;
export default Popup;
