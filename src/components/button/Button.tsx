import * as R from 'ramda';
import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';
// Styles
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
import * as S from './styles';

import { Color } from '../../theme/types';
import { GetIcon, IconName } from '../icon';

type Intent = 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
export interface Props extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  /** Intent of a button, e.g. `ghost` to make it borderless */
  intent?: Intent;
  /** Icon to render left to text, an entry from `IconName`, e.g. `IconName.glass` for search */
  icon?: IconName;
  /** If you want it to be a link. Note: for `external` `_blank` targets the `rel=noreferrer noopener` is applied */
  href?: string;
  /** Whether it's an external link, i.e. outside the project */
  external?: boolean;
  /** When `true`, a spinner is hown */
  isLoading?: boolean;
  /** When `true`, and `isLoading`, doesn't show button text, only spinner */
  loadingOnly?: boolean;
  /** target */
  target?: string;
}

export const Button: FC<Props> = ({
  icon,
  children,
  href,
  target,
  sx,
  external = false,
  disabled = false,
  intent = 'primary',
  loadingOnly = false,
  isLoading = false,
  type = 'button',
  ...props
}: Props) => {
  const component = (
    <RebassButton
      variant={intent}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {icon && (!loadingOnly || !isLoading) && (
        <GetIcon icon={icon} size="md" color={buttonIntentToColor(intent)} />
      )}
      {(!loadingOnly || !isLoading) && children}
      {isLoading && (
        <Spinner
          color={S.spinnerColor(intent)}
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
