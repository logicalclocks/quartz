import React, { FC } from 'react';
import { Button as RebassButton } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Styles
import styles from './button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  intent: 'primary' | 'secondary' | 'ghost' | 'inline';
  disabled?: boolean;
  icon?: IconDefinition;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  intent,
  icon,
  children,
  ...props
}: ButtonProps) => (
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
