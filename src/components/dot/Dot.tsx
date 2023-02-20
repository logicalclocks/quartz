import React from 'react';
import { Flex, FlexProps } from 'rebass';
import Tooltip from '../tooltip';
import TooltipPositions from '../tooltip/positions';

export interface Props extends Omit<FlexProps, 'css'> {
  /** Text to render on hover */
  mainText: string;
  /** Color variants: e.g. `green` */
  variant?: 'green' | 'black' | 'white';
  /** Secondary text on the tooltip */
  secondaryText?: string;
  /** Position of the tooltip, e.g. `top` or `right` */
  tooltipPosition?: TooltipPositions;
}

export const Dot = ({
  mainText,
  secondaryText,
  tooltipPosition: position = TooltipPositions.bottom,
  variant = 'black',
  sx,
  ...props
}: Props) => (
  <Tooltip
    mainText={mainText}
    secondaryText={secondaryText}
    position={position}
  >
    <Flex
      width="12px"
      height="12px"
      {...props}
      as="span"
      tx="variants.badges.dot"
      variant={variant}
      alignItems="center"
      justifyContent="center"
      sx={{
        fontSize: '11px',
        fontFamily: 'Inter',
        borderRadius: '50%',
        userSelect: 'none',
        ...(variant === 'white' && {
          borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: 'black',
        }),
        ...sx,
      }}
    />
  </Tooltip>
);
