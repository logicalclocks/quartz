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
  ModalBodyProps,
  ModalFooterProps,
  ModalHeaderProps,
} from '@chakra-ui/react';

export interface PopupProps
  extends Omit<ModalProps, 'title' | 'closeOnOverlayClick' | 'children'> {
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
  headerProps,
  bodyProps,
  footerProps,
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
      {title && <ModalHeader {...headerProps}>{title}</ModalHeader>}
      {hasCloseButton && <ModalCloseButton />}
      <ModalBody {...bodyProps}>{children}</ModalBody>
      {footer && <ModalFooter {...footerProps}>{footer}</ModalFooter>}
    </ModalContent>
  </Modal>
);

export default Popup;
