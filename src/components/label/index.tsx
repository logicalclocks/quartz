import React, { FC } from 'react';
import { Flex, FlexProps } from 'rebass';

import styles from './label.styles';

export interface LabelProps extends Omit<FlexProps, 'css' | 'action'> {
  action?: React.ReactNode;
  text?: string;
  align?: 'top' | 'left';
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({
  action,
  text,
  children,
  align,
  as = 'label',
  ...props
}: LabelProps) => (
  <Flex
    flexDirection={align === 'top' ? 'column' : 'row'}
    as={as}
    {...props}
    variant="label"
    sx={styles}
  >
    {(text || action) && (
      <span>
        {text}
        {action}
      </span>
    )}
    {children}
  </Flex>
);

export default Label;
