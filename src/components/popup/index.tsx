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
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
  isOpen?: boolean;
  onBackdropClick?: (event: React.SyntheticEvent<HTMLDivElement>) => void;
  onClose?: () => void;
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
  onClose = () => {},
  ...props
}: PopupProps) => {
  const sx = useMemo(() => getStyles({ left, top, bottom, right }), [
    left,
    top,
    bottom,
    right,
  ]);
  const openRef = useRef<boolean>(isOpen);

  useKeyUp(() => {
    if (openRef.current) {
      onClose();
    }
  });

  const handleBackdropClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      onClose();

      if (onBackdropClick) {
        onBackdropClick(event);
      }
    },
    [onClose, onBackdropClick],
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
      >
        {children}
      </Box>

      {/* Backdrop */}
      {hasBackdrop && <Box sx={backdropStyles} onClick={handleBackdropClick} />}
    </React.Fragment>
  );
};

export default Popup;
