import React, { FC } from 'react';
import { FlexProps, Flex } from 'rebass';

// Components
import Tooltip from '../tooltip';
// Types
import TooltipPositions from '../tooltip/positions';

export interface DotProps extends Omit<FlexProps, 'css'> {
  mainText: string;
  variant?: 'green' | 'black' | 'info';
  secondaryText?: string;
  position?: TooltipPositions;
}

const Dot: FC<DotProps> = ({
  mainText,
  secondaryText,
  position,
  variant = 'black',
  ...props
}: DotProps) => (
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
      }}
    >
      {variant === 'info' && 'i'}
    </Flex>
  </Tooltip>
);

export default Dot;
