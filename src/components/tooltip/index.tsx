import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Styles
import { containerStyles, popupStyles, tooltipStyles } from './tooltip.styles';

export interface TooltipProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode;
  mainText: React.ReactNode;
  secondaryText?: React.ReactNode;
  disabled?: boolean;
}

const Tooltip: FC<TooltipProps> = ({
  children,
  mainText,
  secondaryText,
  disabled,
  ...props
}: TooltipProps) => (
  <Box {...props} sx={containerStyles}>
    {children}
    {!disabled && (
      <Box as="span" sx={popupStyles}>
        <Box as="span" variant="tooltip" sx={tooltipStyles}>
          {mainText}
          {secondaryText && <span>{secondaryText}</span>}
        </Box>
      </Box>
    )}
  </Box>
);

export default Tooltip;
