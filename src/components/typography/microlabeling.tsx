import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface MicrolabelingProps extends Omit<TextProps, 'css'> {
  gray?: boolean;
}

const Microlabeling: FC<MicrolabelingProps> = ({
  gray,
  ...props
}: MicrolabelingProps) => (
  <Text {...props} as="h6" variant={`microlabeling${gray ? 'Gray' : ''}`} />
);

export default Microlabeling;
