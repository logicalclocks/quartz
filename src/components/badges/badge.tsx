import React, { FC } from 'react';
import { Flex, FlexProps } from 'rebass';

// Components
import Value from '../typography/value';

export interface BadgeProps extends Omit<FlexProps, 'css'> {
  value: string | number;
  variant?: 'light' | 'bold' | 'fail' | 'success' | 'label';
}

const Badge: FC<BadgeProps> = ({
  value,
  variant = 'light',
  ...props
}: BadgeProps) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    px="6px"
    py="3px"
    {...props}
    sx={{
      borderRadius: '2px',
    }}
    as="span"
    tx="variants.badges.primary"
    variant={variant}
  >
    <Value as="span" lineHeight="13px">
      {value}
    </Value>
  </Flex>
);

export default Badge;
