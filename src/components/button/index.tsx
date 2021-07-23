import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Styles
import styles, { spinnerColor } from './button.styles';
import Spinner from '../spinner';

export interface QuartzButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
  icon?: IconDefinition;
  href?: string;
  isLoading?: boolean;
  loadingOnly?: boolean;
}

const Button: FC<QuartzButtonProps> = ({
  intent = 'primary',
  icon,
  children,
  href,
  disabled,
  isLoading,
  loadingOnly,
  ...props
}: QuartzButtonProps) => {
  const component = (
    <RebassButton
      sx={styles}
      disabled={disabled || isLoading}
      variant={intent}
      {...props}
    >
      {icon && (!loadingOnly || !isLoading) && (
        <span>
          <FontAwesomeIcon icon={icon} size="sm" />
        </span>
      )}
      {(!loadingOnly || !isLoading) && children}
      {isLoading && (
        <Spinner
          color={spinnerColor(intent)}
          ml={loadingOnly ? '0px' : '15px'}
        />
      )}
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
