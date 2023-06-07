import { Box, Flex, FlexProps, Text } from 'rebass';
import styles from './callout.styles';
import { Color } from '../../theme/types';
import { GetIcon, IconName } from '../icon';

export enum CalloutTypes {
  valid = 'valid',
  error = 'error',
  warning = 'warning',
  neutral = 'neutral',
}

const calloutColors: Record<CalloutTypes, Color> = {
  valid: 'primary',
  error: 'labels.red',
  warning: 'labels.orange',
  neutral: 'black',
};
export interface ICalloutProps extends Omit<FlexProps, 'content' | 'css'> {
  type: CalloutTypes;
  content: string | React.ReactNode;
  cta?: React.ReactNode;
}

const Callout = ({ type, content, cta, ...props }: ICalloutProps) => (
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
      <GetIcon
        size="sm"
        mr="12px"
        ml="5px"
        color={calloutColors[type]}
        icon={IconName.info_block}
      />
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
