import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

// Types
import { Intents } from '../../intents';
// Styles
import styles from './select-info.styles';

export interface SelectInfoProps extends Omit<TextProps, 'css'> {
  intent?: Intents;
  children: React.ReactNode;
}

const SelectInfo: FC<SelectInfoProps> = ({
  intent = 'error',
  children,
  ...props
}: SelectInfoProps) => (
  <Text as="span" variant={`selectInfo.${intent}`} sx={styles} {...props}>
    {children}
  </Text>
);

export default SelectInfo;
