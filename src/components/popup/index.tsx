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
import { useState, useCallback } from 'react';
import { GetIcon, IconName } from '../icon';

/**
 * Props for the Popup component
 * @interface PopupProps
 * @extends {Omit<ModalProps, 'title' | 'closeOnOverlayClick' | 'children'>}
 */
export interface PopupProps extends Omit<
  ModalProps,
  'title' | 'closeOnOverlayClick' | 'children'
> {
  /** The title content displayed in the modal header */
  title?: React.ReactNode;
  /** The main content of the modal */
  children?: React.ReactNode;
  /** Footer content displayed at the bottom of the modal */
  footer?: React.ReactNode;
  /** Whether to show the backdrop overlay behind the modal @default true */
  hasBackdrop?: boolean;
  /** Whether clicking the backdrop closes the modal @default true */
  closeOnBackdropClick?: boolean;
  /** Whether to show the close button in the header @default false */
  hasCloseButton?: boolean;
  /**
   * Whether to show an expand/minimize button for full-screen toggle
   * When true, adds an expand button next to the close button that allows
   * users to toggle between normal and full-screen modal sizes
   * @default false
   * @example
   * ```tsx
   * <Popup expandable={true} hasCloseButton={true} title="Expandable Modal">
   *   <p>Content that benefits from full-screen viewing</p>
   * </Popup>
   * ```
   */
  expandable?: boolean;
  /** Props passed to the ModalOverlay component */
  overlayProps?: ModalOverlayProps;
  /** Props passed to the ModalContent component */
  contentProps?: ModalContentProps;
  /** Props passed to the ModalHeader component */
  headerProps?: ModalHeaderProps;
  /** Props passed to the ModalBody component */
  bodyProps?: ModalBodyProps;
  /** Props passed to the ModalFooter component */
  footerProps?: ModalFooterProps;
  /** Scroll behavior for the modal content @default 'inside' */
  scrollBehavior?: 'inside' | 'outside';
  /** @deprecated Use CSS positioning instead */
  left?: string;
  /** @deprecated Use CSS positioning instead */
  top?: string;
  /** @deprecated Use CSS positioning instead */
  bottom?: string;
  /** @deprecated Use CSS positioning instead */
  right?: string;
}

/**
 * A customizable modal popup component built on top of Chakra UI's Modal.
 *
 * Features:
 * - Configurable backdrop and overlay
 * - Optional close button in header
 * - Expandable full-screen mode
 * - Customizable header, body, and footer
 * - Accessible keyboard navigation
 *
 * @param props - The popup component properties
 * @returns A React functional component
 *
 * @example
 * ```tsx
 * // Basic popup
 * <Popup title="Basic Modal" isOpen={isOpen} onClose={handleClose}>
 *   <p>Modal content goes here</p>
 * </Popup>
 *
 * // Expandable popup with close button
 * <Popup
 *   title="Expandable Modal"
 *   expandable={true}
 *   hasCloseButton={true}
 *   isOpen={isOpen}
 *   onClose={handleClose}
 * >
 *   <p>This modal can be expanded to full screen</p>
 * </Popup>
 * ```
 */
const Popup = ({
  title,
  children,
  footer,
  overlayProps,
  contentProps,
  headerProps,
  bodyProps,
  footerProps,
  size = 'sm',
  hasBackdrop = true,
  isOpen = false,
  closeOnBackdropClick = true,
  onClose = () => {},
  hasCloseButton = false,
  expandable = false,
  scrollBehavior = 'inside',
  ...props
}: PopupProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const currentSize = isExpanded ? 'full' : size;

  const currentScrollBehavior = isExpanded ? 'inside' : scrollBehavior;

  const expandIcon = isExpanded
    ? IconName.arrows_minimize
    : IconName.arrows_maximize;

  const expandAriaLabel = isExpanded ? 'Minimize' : 'Expand to full screen';

  // Memoize the expand button click handler
  const handleExpandToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={currentSize}
      closeOnOverlayClick={closeOnBackdropClick}
      scrollBehavior={currentScrollBehavior}
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
                aria-label={expandAriaLabel}
                icon={<GetIcon icon={expandIcon} size="sm" />}
                size="sm"
                variant="ghost"
                position="absolute"
                right={hasCloseButton ? '40px' : '8px'}
                top="8px"
                onClick={handleExpandToggle}
                data-testid="expand-button"
                borderRadius="0.7px"
                _hover={{
                  backgroundColor: 'gray.100',
                  _dark: {
                    backgroundColor: 'whiteAlpha.200',
                  },
                }}
                _focusVisible={{
                  boxShadow: '0 0 0 2px',
                  boxShadowColor: 'primary.default',
                  opacity: 0.6,
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
