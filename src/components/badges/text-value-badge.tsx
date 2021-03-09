import React, { FC } from 'react';
import { Box, BoxProps, SxStyleProp } from 'rebass';

// Components
import Value from '../typography/value';
import Labeling from '../typography/labeling';

export interface TextValueBadgeProps extends Omit<BoxProps, 'css'> {
  text: string;
  value: string | number;
  variant?: 'white' | 'gray';
}

const styles: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',

  borderWidth: '1px',
  borderStyle: 'solid',

  borderRadius: '2px',

  overflow: 'hidden',

  '> span': {
    lineHeight: '13px',
    py: '3px',
    px: '6px',
  },
};

const TextValueBadge: FC<TextValueBadgeProps> = ({
  text,
  value,
  variant = 'white',
  ...props
}: TextValueBadgeProps) => (
  <Box tx="variants.badges.keyValue" sx={styles} variant={variant} {...props}>
    <Labeling as="span">{text}</Labeling>
    <Value as="span">{value}</Value>
  </Box>
);

export default TextValueBadge;
