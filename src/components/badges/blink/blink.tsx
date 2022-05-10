import React, { FC } from 'react';
import { FlexProps, Flex } from 'rebass';
import Labeling from '../../typography/labeling';
// Styles
import styles from './blink.styles';

export interface BlinkProps extends Omit<FlexProps, 'css'> {
  text?: string;
  variant?: 'green' | 'red' | 'gray';
}

const Blink: FC<BlinkProps> = ({
  variant = 'gray',
  text,
  ...props
}: BlinkProps) => (
  <Flex alignItems="center">
    <Flex
      className="dot"
      tx="variants.badges.blink"
      variant={variant}
      {...props}
      as="span"
      sx={styles}
    />
    {text && (
      <Labeling bold gray ml="8px">
        {text}
      </Labeling>
    )}
  </Flex>
);

export default Blink;
