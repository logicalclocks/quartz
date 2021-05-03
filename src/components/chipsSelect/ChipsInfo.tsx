import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

// Types
import { Intents } from '../intents';
// Styles
import styles from './chips-info.styles';

export interface ChipsInfoProps extends Omit<TextProps, 'css'> {
  intent?: Intents;
  children: React.ReactNode;
}

const SelectInfo: FC<ChipsInfoProps> = ({
  intent = 'error',
  children,
  ...props
}: ChipsInfoProps) => (
  <Text as="span" variant={`selectInfo.${intent}`} sx={styles} {...props}>
    {children}
  </Text>
);

export default SelectInfo;
