import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { Box, BoxProps } from 'rebass';

// Hooks
import useKeyUp from '../../utils/useKeyUp';
// Styles
import getStyles, { backdropStyles } from './popup.styles';

export interface PopupProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode;
  variant?: 'primary';
  hasBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
  isOpen?: boolean;
  onBackdropClick?: (event: React.SyntheticEvent<HTMLDivElement>) => void;
  onClose?: () => void;
  disabledMainButton?: boolean;
  footer?: React.ReactNode;
  disabledSecondaryButton?: boolean;
}

const Popup: FC<PopupProps> = ({
  children,
  left,
  top,
  bottom,
  right,
  variant = 'primary',
  hasBackdrop = true,
  isOpen = false,
  onBackdropClick,
  closeOnBackdropClick = true,
  footer,
  onClose = () => {},
  ...props
}: PopupProps) => {
  const sx = useMemo(
    () => getStyles({ left, top, bottom, right }),
    [left, top, bottom, right],
  );
  const openRef = useRef<boolean>(isOpen);

  useKeyUp(() => {
    if (openRef.current) {
      onClose();
    }
  });

  const handleBackdropClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      if (closeOnBackdropClick) {
        onClose();
      }

      if (onBackdropClick) {
        onBackdropClick(event);
      }
    },
    [onClose, onBackdropClick, closeOnBackdropClick],
  );

  useEffect(() => {
    openRef.current = isOpen;
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <React.Fragment>
      <Box
        minWidth="417px"
        minHeight="141px"
        tx="variants.popup"
        variant={variant}
        {...props}
        sx={sx}
        overflowX="visible"
      >
        {children}
        {footer && (
          <Box width="100%" backgroundColor="grayShade3">
            {footer}
          </Box>
        )}
      </Box>
      {/* Backdrop */}
      {hasBackdrop && <Box sx={backdropStyles} onClick={handleBackdropClick} />}
    </React.Fragment>
  );
};

export default Popup;
