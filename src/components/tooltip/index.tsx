import React, { FC, useCallback, useRef, useState } from 'react';
import { Box, BoxProps } from 'rebass';

// Enums
import TooltipPositions from './positions';

// Styles
import { getPopupStyles, getTooltipStyles } from './tooltip.styles';
import Portal from './Portal';

export interface TooltipProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode;
  mainText?: string;
  secondaryText?: string;
  disabled?: boolean;
  visibleDefault?: boolean;
  position?: TooltipPositions;
  delayed?: boolean;
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
    [
      TooltipPositions.top,
      {
        left: dimensions.left + dimensions.width / 2,
        bottom: dimensions.top + dimensions.height + space,
      },
    ],
    [
      TooltipPositions.left,
      {
        left: dimensions.left - space,
        top: dimensions.top + dimensions.height / 2,
      },
    ],
  ]);

  return positionsMap.get(position) || {};
};

const delayTime = 500;

const Tooltip: FC<TooltipProps> = ({
  children,
  mainText,
  secondaryText,
  disabled,
  visibleDefault = false,
  position = TooltipPositions.bottom,
  delayed = true,
  ...props
}: TooltipProps) => {
  const overTimeout = useRef<number>(0);
  const outTimeout = useRef<number>(0);

  const [visible, setVisible] = useState<boolean>(visibleDefault);

  const containerRef = useRef<HTMLDivElement>(null);

  const styles = containerRef.current
    ? getStyles(containerRef.current.getBoundingClientRect(), position)
    : {};

  const handleMouseOver = useCallback(() => {
    if (delayed) {
      if (!overTimeout.current) {
        overTimeout.current = window.setTimeout(() => {
          setVisible(true);
        }, delayTime);
      } else if (outTimeout.current) {
        clearTimeout(outTimeout.current);
        outTimeout.current = 0;
      }
    } else {
      setVisible(true);

      if (outTimeout.current) {
        clearTimeout(outTimeout.current);
        outTimeout.current = 0;
      }
    }
  }, [delayed]);

  const handleMouseOut = useCallback(() => {
    if (outTimeout.current) {
      clearTimeout(outTimeout.current);
      outTimeout.current = 0;
    }

    outTimeout.current = window.setTimeout(() => {
      setVisible(false);

      if (overTimeout.current) {
        clearTimeout(overTimeout.current);
        overTimeout.current = 0;
      }
    }, 200);
  }, []);

  return (
    <Box
      ref={containerRef}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      onPointerOut={handleMouseOut}
      onPointerOver={handleMouseOver}
      {...props}
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
