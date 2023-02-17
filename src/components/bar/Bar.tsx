import React from 'react';
import { Box, BoxProps } from '../box';
import { Flex } from '../flex';
import Value from '../typography/value';

import * as R from 'ramda';

export interface Props extends Omit<BoxProps, 'css'> {
  /** width of the bar */
  width?: string;
  /** percentage value, e.g. 50 which means 50% */
  value: number;
  /** whether to show caption with percentage */
  hasCaption?: boolean;
}

export const Bar = ({
  value,
  width = '100px',
  hasCaption = false,
  ...props
}: Props) => (
  <Flex alignItems="center" gap="5px">
    <Box
      {...props}
      bg="grayShade2"
      variant="progress"
      width={width}
      sx={outside}
    >
      <Box
        as="span"
        bg="black"
        width={`${R.clamp(0, 100, value)}%`}
        sx={inside}
      />
    </Box>
    {hasCaption && (
      <Value fontFamily="IBM Plex Mono" fontSize="11px">
        {value}%
      </Value>
    )}
  </Flex>
);

export const inside = {
  height: '100%',
  display: 'block',
  position: 'absolute',

  pointerEvents: 'none',
};

const outside = {
  height: '7px',
  position: 'relative',

  overflow: 'hidden',

  borderRadius: '3.5px',
};
