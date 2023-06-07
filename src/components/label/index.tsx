import { FC } from 'react';
import { Flex, FlexProps } from 'rebass';

import styles from './label.styles';

export interface LabelProps extends Omit<FlexProps, 'css' | 'action'> {
  action?: React.ReactNode;
  text?: string;
  pointer?: boolean;
  align?: 'top' | 'left';
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({
  action,
  text,
  children,
  pointer = false,
  align = 'top',
  as = 'label',
  sx = {},
  ...props
}: LabelProps) => (
  <Flex
    flexDirection={align === 'top' ? 'column' : 'row'}
    as={as}
    variant="label"
    sx={{ ...styles, cursor: pointer ? 'pointer' : 'default', ...sx }}
    {...props}
  >
    {(text || action) && (
      <span>
        {text}
        {action}
      </span>
    )}
    {children}
  </Flex>
);

export default Label;
