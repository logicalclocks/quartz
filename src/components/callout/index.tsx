import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import Labeling from '../typography/labeling';
import styles from './callout.styles';
import icons from '../../sources/icons';

export enum CalloutTypes {
  valid = 'valid',
  error = 'error',
  warning = 'warning',
  neutral = 'neutral',
}

export interface ICalloutProps {
  type: CalloutTypes;
  content: string | React.ReactNode;
  cta?: React.ReactNode;
}

const Callout: FC<ICalloutProps> = ({
  type,
  content,
  cta,
  ...props
}: ICalloutProps) => (
  <Flex
    width="100%"
    variant={`callout.${type}`}
    sx={{ borderLeftWidth: cta ? '2px' : 0, ...styles }}
    {...props}
  >
    <Flex justifyContent="space-between" alignItems="center">
      <Box mt="-2px" mb="-3px">
        {icons.info_block}
      </Box>
      <Box ml="8px" as="pre">
        <Labeling bold>{content}</Labeling>
      </Box>
    </Flex>

    {cta && <Box>{cta}</Box>}
  </Flex>
);

export default Callout;
