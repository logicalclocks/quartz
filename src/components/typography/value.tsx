import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface ValueProps extends Omit<TextProps, 'css'> {}

const Value: FC<ValueProps> = (props: ValueProps) => (
  <Text {...props} variant="value" />
);

export default Value;
