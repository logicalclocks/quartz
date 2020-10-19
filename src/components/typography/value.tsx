import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface ValueProps extends Omit<TextProps, 'css'> {
  primary?: boolean;
}

const Value: FC<ValueProps> = ({ primary, ...props }: ValueProps) => (
  <Text {...props} variant={`value${primary ? 'Primary' : ''}`} />
);

export default Value;
