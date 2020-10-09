import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface MicrolabelingProps extends Omit<TextProps, 'css'> {}

const Microlabeling: FC<MicrolabelingProps> = (props: MicrolabelingProps) => (
  <Text {...props} as="h6" variant="microlabeling" />
);

export default Microlabeling;
