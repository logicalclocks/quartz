import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

// Types
import { Intents } from '../intents';
// Styles
import styles from './editableSelectInfo.styles';

export interface EditableSelectInfoProps extends Omit<TextProps, 'css'> {
  intent?: Intents;
  children: React.ReactNode;
}

const EditableSelectInfo: FC<EditableSelectInfoProps> = ({
  intent = 'error',
  children,
  ...props
}: EditableSelectInfoProps) => (
  <Text as="span" variant={`selectInfo.${intent}`} sx={styles} {...props}>
    {children}
  </Text>
);

export default EditableSelectInfo;
