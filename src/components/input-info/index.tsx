import { Text, TextProps } from 'rebass';

import { Intents } from '../intents';
import styles from './input-info.styles';

export interface InputInfoProps extends Omit<TextProps, 'css'> {
  intent?: Intents;
}

const InputInfo = ({
  intent = 'error',
  children,
  sx = {},
  ...props
}: InputInfoProps) => (
  <Text
    as="span"
    variant={`inputInfo.${intent}`}
    sx={{ ...styles, ...sx }}
    {...props}
  >
    {children}
  </Text>
);

export default InputInfo;
