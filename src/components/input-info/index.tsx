import { FC } from 'react';
import { Text, TextProps } from 'rebass';

// Types
import { Intents } from '../intents';
// Styles
import styles from './input-info.styles';

export interface InputInfoProps extends Omit<TextProps, 'css'> {
  intent?: Intents;
  children: React.ReactNode;
}

const InputInfo: FC<InputInfoProps> = ({
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
