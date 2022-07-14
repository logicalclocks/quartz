import React from 'react';
import { Box, BoxProps } from 'rebass';

import Value from '../typography/value';
import Labeling from '../typography/labeling';

import * as S from './styles';

export interface Props extends Omit<BoxProps, 'css'> {
  /** Text for the badge. E.g. `deployment` */
  text: string;
  /** Value for the badge. E.g. `pending` or 18 */
  value: string | number;
  /** Color variants: e.g. `green` */
  variant?: 'white' | 'gray';
}

export const TextValueBadge = ({
  text,
  value,
  variant = 'white',
  sx,
  ...props
}: Props) => (
  <Box
    tx="variants.badges.keyValue"
    sx={{ ...S.wrapper, ...sx }}
    variant={variant}
    {...props}
  >
    <Labeling as="span">{text}</Labeling>
    <Value as="span">{value}</Value>
  </Box>
);
