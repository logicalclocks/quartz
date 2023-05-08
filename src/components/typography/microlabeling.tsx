import React, { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface MicrolabelingProps extends Omit<TextProps, 'css'> {
  gray?: boolean;
}

const Microlabeling: FC<MicrolabelingProps> = ({
  gray,
  sx,
  ...props
}: MicrolabelingProps) => (
  <Text
    {...props}
    as="h6"
    variant={`microlabeling${gray ? 'Gray' : ''}`}
    sx={{ wordWrap: 'normal', ...sx }}
  />
);

export default Microlabeling;
