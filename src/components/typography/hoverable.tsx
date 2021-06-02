import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface HoverableTextProps extends Omit<TextProps, 'css'> {}

const styles = {
  cursor: 'pointer',
  ':hover': {
    color: 'primary',
  },
  transition: 'all .4s',
};

const HoverableText: FC<HoverableTextProps> = (props: HoverableTextProps) => (
  <Text {...props} variant="title" sx={styles} />
);
export default HoverableText;
