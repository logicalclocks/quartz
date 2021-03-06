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
  href?: string;
}

const Button: FC<QuartzButtonProps> = ({
  intent = 'primary',
  icon,
  children,
  href,
  ...props
}: QuartzButtonProps) => {
  const component = (
    <RebassButton sx={styles} variant={intent} {...props}>
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} size="sm" />
        </span>
      )}
      {children}
    </RebassButton>
  );

  if (!!href) {
    return (
      <a
        style={{
          textDecoration: 'none',
        }}
        onClick={(e) => {
          e.preventDefault();
        }}
        href={href}
      >
        {component}
      </a>
    );
  }

  return component;
};

export default Button;
