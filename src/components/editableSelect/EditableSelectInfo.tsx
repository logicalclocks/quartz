import { Text, TextProps } from 'rebass';

import { Intents } from '../intents';
import styles from './editableSelectInfo.styles';

export interface EditableSelectInfoProps extends Omit<TextProps, 'css'> {
  intent?: Intents;
  children: React.ReactNode;
}

const EditableSelectInfo = ({
  intent = 'error',
  children,
  ...props
}: EditableSelectInfoProps) => (
  <Text as="span" variant={`selectInfo.${intent}`} sx={styles} {...props}>
    {children}
  </Text>
);

export default EditableSelectInfo;
