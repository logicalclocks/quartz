import * as R from 'ramda';
import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';

// Styles
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
import styles, { spinnerColor } from './button.styles';

import { Color } from '../../theme/types';
import { GetIcon, IconName } from '../icon';

type Intent = 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
export interface QuartzButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: Intent;
  icon?: IconName;
  href?: string;
  external?: boolean;
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
  target,
  external,
  sx,
  type = 'button',
  ...props
}: QuartzButtonProps) => {
  const component = (
    <RebassButton
      variant={intent}
      disabled={disabled || isLoading}
      sx={{ ...sx, ...styles }}
      type={type}
      {...props}
    >
      {icon && (!loadingOnly || !isLoading) && (
        <GetIcon icon={icon} size="md" color={buttonIntentToColor(intent)} />
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
    if (external) {
      return (
        <a
          style={{
            textDecoration: 'none',
          }}
          href={href}
          target={target}
          {...(target === '_blank' ? { rel: 'noopener noreferrer' } : {})}
        >
          {component}
        </a>
      );
    }

    return (
      <Link
        style={{
          textDecoration: 'none',
        }}
        to={href}
        target={target}
        {...(target === '_blank' ? { rel: 'noopener noreferrer' } : {})}
      >
        {component}
      </Link>
    );
  }

  return component;
};

export default Button;

const intentToColor: { [intent in Intent]?: Color } = {
  primary: 'white',
  alert: 'labels.red',
  /* [others]: 'primary' */
};

const buttonIntentToColor = (intent: Intent): Color => {
  const getColor = R.propOr(intent, 'primary');

  return getColor(intentToColor);
};
