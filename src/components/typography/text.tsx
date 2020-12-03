import React, { FC } from 'react';
import { TextProps as RebassTextProps, Text as RebassText } from 'rebass';

export interface TextProps extends Omit<RebassTextProps, 'css'> {}

const Text: FC<TextProps> = ({ ...props }: TextProps) => (
  <RebassText fontFamily="Inter" {...props} as="p" variant="text" />
);

export default Text;
