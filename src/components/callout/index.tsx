import React, { FC } from 'react';
import { Box, Flex, FlexProps, Text } from 'rebass';
import styles from './callout.styles';
import icons from '../../sources/icons';
import Icon from '../icon';
import { IconName } from '../..';
import { IconSize } from '../icon/list';

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
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxWidth={cta ? '80%' : '100%'}
    >
      <Box mt="-2px" mb="-3px" mr="8px">
        <Icon color="primary" icon={IconName.cpu}/>
      </Box>
      <Box as="pre">
        <Text
          width="100%"
          variant="labeling"
          fontWeight="label"
          sx={{ whiteSpace: 'break-spaces' }}
        >
          {content}
        </Text>
      </Box>
    </Flex>
    {cta && (
      <Flex ml="8px" maxWidth="20%" justifyContent="right">
        <Box>{cta}</Box>
      </Flex>
    )}
  </Flex>
);

export default Callout;
