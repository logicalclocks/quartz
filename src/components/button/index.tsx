import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';
import * as R from 'ramda';

// Styles
import styles, { spinnerColor } from './button.styles';
import Spinner from '../spinner';

import { GetIcon, IconName } from '../icon';
import { Color } from '../../theme/types';

type Intent = 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
export interface QuartzButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: Intent;
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

const intentToColor: { [intent in Intent]?: Color } = {
  primary: 'white',
  alert: 'labels.red',
  /* [others]: 'primary' */
}

const buttonIntentToColor = (intent: Intent): Color => {
  const getColor = R.propOr(intent, 'primary');

  return getColor(intentToColor);
}

