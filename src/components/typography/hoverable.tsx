import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface HoverableTextProps extends Omit<TextProps, 'css'> {}

const styles = {
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
};

const HoverableText: FC<HoverableTextProps> = (props: HoverableTextProps) => (
  <Text {...props} variant="title" sx={styles} />
);
export default HoverableText;
