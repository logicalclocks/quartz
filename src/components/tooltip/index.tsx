import React, { FC, useRef, useState } from 'react';
import { Box, BoxProps } from 'rebass';

// Enums
import TooltipPositions from './positions';

// Styles
import { getPopupStyles, getTooltipStyles } from './tooltip.styles';
import Portal from './Portal';

export interface TooltipProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode;
  mainText: string;
  secondaryText?: string;
  disabled?: boolean;
  visibleDefault?: boolean;
  position?: TooltipPositions;
}

export interface TooltipStyles {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const space = 8;

const getStyles = (
  dimensions: DOMRect,
  position: TooltipPositions,
): TooltipStyles => {
  const positionsMap = new Map<TooltipPositions, TooltipStyles>([
    [
      TooltipPositions.bottom,
      {
        left: dimensions.left + dimensions.width / 2,
        top: dimensions.top + dimensions.height + space,
      },
    ],
    [
      TooltipPositions.right,
      {
        left: dimensions.right + space,
        top: dimensions.top + dimensions.height / 2,
      },
    ],
  ]);

  return positionsMap.get(position) || {};
};

const Tooltip: FC<TooltipProps> = ({
  children,
  mainText,
  secondaryText,
  disabled,
  visibleDefault = false,
  position = TooltipPositions.bottom,
  ...props
}: TooltipProps) => {
  const timeout = useRef(0);

  const [visible, setVisible] = useState<boolean>(visibleDefault);

  const containerRef = useRef<HTMLDivElement>(null);

  const styles = containerRef.current
    ? getStyles(containerRef.current.getBoundingClientRect(), position)
    : {};

  return (
    <Box
      onMouseOver={() => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        setVisible(true);
      }}
      onMouseOut={() => {
        timeout.current = setTimeout(() => {
          setVisible(false);
        }, 100);
      }}
      {...props}
      ref={containerRef}
    >
      {children}

      {visible && !disabled && (
        <Portal>
          <Box
            sx={{
              position: 'fixed',
              ...getPopupStyles(position, visible),
            }}
            style={styles}
            as="span"
          >
            <Box sx={getTooltipStyles(position)} as="span" variant="tooltip">
              {mainText}
              {secondaryText && <span>{secondaryText}</span>}
            </Box>
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default Tooltip;
