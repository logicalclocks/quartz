import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface LabelingProps extends Omit<TextProps, 'css'> {
  bold?: boolean;
}

const Labeling: FC<LabelingProps> = ({
  children,
  bold,
  ...props
}: LabelingProps) => (
  <Text {...props} variant={`labeling${bold ? 'Bold' : ''}`}>
    {children}
  </Text>
);

export default Labeling;
