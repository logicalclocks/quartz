import React from 'react';
import {
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalProps,
  ModalOverlayProps,
  ModalContentProps,
} from '@chakra-ui/react';

export interface PopupProps
  extends Omit<
    ModalProps,
    'css' | 'title' | 'closeOnOverlayClick' | 'isOpen' | 'onClose'
  > {
  children: React.ReactNode;
  title?: React.ReactNode;
  variant?: 'primary';
  hasBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  /** @deprecated */
  left?: string;
  /** @deprecated */
  top?: string;
  /** @deprecated */
  bottom?: string;
  /** @deprecated */
  right?: string;
  isOpen?: boolean;
  onClose?: () => void;
  footer?: React.ReactNode;
  hasCloseButton?: boolean;
  overlayProps?: ModalOverlayProps;
  contentProps?: ModalContentProps;
}

const Popup = ({
  title,
  footer,
  size = 'sm',
  hasBackdrop = true,
  isOpen = false,
  closeOnBackdropClick = true,
  onClose = () => {},
  hasCloseButton = false,
  overlayProps,
  children,
  contentProps,
  ...props
}: PopupProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    size={size}
    closeOnOverlayClick={closeOnBackdropClick}
    scrollBehavior="inside"
    isCentered
    {...props}
  >
    {hasBackdrop && <ModalOverlay {...overlayProps} />}
    <ModalContent {...contentProps}>
      {title && <ModalHeader>{title}</ModalHeader>}
      {hasCloseButton && <ModalCloseButton />}
      <ModalBody>{children}</ModalBody>
      {footer && <ModalFooter>{footer}</ModalFooter>}
    </ModalContent>
  </Modal>
);

export default Popup;
