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
  extends Omit<ModalProps, 'title' | 'closeOnOverlayClick'> {
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  hasBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  hasCloseButton?: boolean;
  overlayProps?: ModalOverlayProps;
  contentProps?: ModalContentProps;
  /** @deprecated */
  left?: string;
  /** @deprecated */
  top?: string;
  /** @deprecated */
  bottom?: string;
  /** @deprecated */
  right?: string;
}

const Popup = ({
  title,
  children,
  footer,
  size = 'sm',
  hasBackdrop = true,
  isOpen = false,
  closeOnBackdropClick = true,
  onClose = () => {},
  hasCloseButton = false,
  overlayProps,
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
