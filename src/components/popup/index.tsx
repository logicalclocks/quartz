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
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { GetIcon, IconName } from '../icon';

export interface PopupProps extends Omit<
  ModalProps,
  'title' | 'closeOnOverlayClick' | 'children'
> {
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  hasBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  hasCloseButton?: boolean;
  expandable?: boolean;
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
  expandable = false,
  overlayProps,
  contentProps,
  headerProps,
  bodyProps,
  footerProps,
  ...props
}: PopupProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentSize = isExpanded ? 'full' : size;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={currentSize}
      closeOnOverlayClick={closeOnBackdropClick}
      scrollBehavior="inside"
      isCentered
      {...props}
    >
      {hasBackdrop && <ModalOverlay {...overlayProps} />}
      <ModalContent {...contentProps}>
        {title && (
          <ModalHeader {...headerProps}>
            {title}
            {expandable && (
              <IconButton
                aria-label={isExpanded ? 'Minimize' : 'Expand to full screen'}
                icon={
                  <GetIcon
                    icon={
                      isExpanded
                        ? IconName.arrows_minimize
                        : IconName.arrows_maximize
                    }
                    size="sm"
                  />
                }
                size="sm"
                variant="ghost"
                position="absolute"
                right={hasCloseButton ? '40px' : '8px'}
                top="8px"
                onClick={() => setIsExpanded(!isExpanded)}
                data-testid="expand-button"
                borderRadius="0.7px"
                _hover={{
                  backgroundColor: 'gray.100',
                  _dark: {
                    backgroundColor: 'whiteAlpha.200',
                  },
                }}
                _focusVisible={{
                  boxShadow: '0 0 0 2px rgba(33, 177, 130, 0.6)',
                }}
              />
            )}
          </ModalHeader>
        )}
        {hasCloseButton && <ModalCloseButton />}
        <ModalBody {...bodyProps}>{children}</ModalBody>
        {footer && <ModalFooter {...footerProps}>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default Popup;
