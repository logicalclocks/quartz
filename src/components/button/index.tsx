import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Styles
import styles from './button.styles';

export interface QuartzButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
  icon?: IconDefinition;
}

const Button: FC<QuartzButtonProps> = ({
  intent = 'primary',
  icon,
  children,
  ...props
}: QuartzButtonProps) => (
  <RebassButton sx={styles} variant={intent} {...props}>
    {icon && (
      <span>
        <FontAwesomeIcon icon={icon} size="sm" />
      </span>
    )}
    {children}
  </RebassButton>
);

export default Button;
