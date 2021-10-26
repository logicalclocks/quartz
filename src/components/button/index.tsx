import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';

// Styles
import styles, { spinnerColor } from './button.styles';
import Spinner from '../spinner';
import IconButton from '../icon-button';
import { IconName } from '../icon/list';

export interface QuartzButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
  icon?: IconName;
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
  const test = { ...props };
  test.sx = { ...test.sx, ...styles };

  const component = (
    <RebassButton variant={intent} disabled={disabled || isLoading} {...test}>
      {icon && (!loadingOnly || !isLoading) && (
        <span>
          <IconButton icon={icon} />
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

  if (href) {
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
