import React, { FC } from 'react';
import { Box, Flex, FlexProps } from 'rebass';
import Labeling from '../typography/labeling';
import styles from './callout.styles';
import icons from '../../sources/icons';

export enum CalloutTypes {
  valid = 'valid',
  error = 'error',
  warning = 'warning',
  neutral = 'neutral',
}

export interface ICalloutProps extends Omit<FlexProps, 'content' | 'css'> {
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
    <Flex justifyContent="space-between" alignItems="center" maxWidth="80%">
      <Box mt="-2px" mb="-3px" mr="8px">
        {icons.info_block}
      </Box>
      <Box as="pre" mr="8px">
        <Labeling bold>{content}</Labeling>
      </Box>
    </Flex>
    <Flex maxWidth="20%" justifyContent="right">
      {cta && <Box>{cta}</Box>}
    </Flex>
  </Flex>
);

export default Callout;
