import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface LabelingProps extends Omit<TextProps, 'css'> {
  bold?: boolean;
  gray?: boolean;
}

const Labeling: FC<LabelingProps> = ({
  children,
  bold,
  gray,
  ...props
}: LabelingProps) => (
  <Text
    {...props}
    variant={`labeling${gray ? 'Gray' : ''}`}
    fontWeight={bold ? 'label' : undefined}
  >
    {children}
  </Text>
);

export default Labeling;
