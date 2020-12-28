import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Enums
import TooltipPositions from './positions';

// Styles
import {
  containerStyles,
  getPopupStyles,
  getTooltipStyles,
} from './tooltip.styles';

export interface TooltipProps extends Omit<BoxProps, 'css'> {
  delayed?: boolean;
  children: React.ReactNode;
  mainText: string;
  secondaryText?: string;
  disabled?: boolean;
  visibleDefault?: boolean;
  position?: TooltipPositions;
}

const Tooltip: FC<TooltipProps> = ({
  children,
  mainText,
  secondaryText,
  disabled,
  visibleDefault,
  delayed = true,
  position = TooltipPositions.bottom,
  ...props
}: TooltipProps) => (
  <Box {...props} sx={containerStyles(delayed)}>
    {children}
    {!disabled && (
      <Box as="span" sx={getPopupStyles(position, visibleDefault)}>
        <Box as="span" variant="tooltip" sx={getTooltipStyles(position)}>
          {mainText}
          {secondaryText && <span>{secondaryText}</span>}
        </Box>
      </Box>
    )}
  </Box>
);

export default Tooltip;
