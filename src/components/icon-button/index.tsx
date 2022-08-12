import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';
import { Link } from 'react-router-dom';

// Components
import Tooltip, { TooltipProps } from '../tooltip';

import { getIcon, IconName } from '../icon/list';
import styles from './icon-button.styles';

export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
  intent?: 'primary' | 'ghost' | 'ghost-white';
  tooltip?: string;
  icon: IconName;
  disabled?: boolean;
  href?: string;
  tooltipProps?: Omit<TooltipProps, 'children' | 'mainText'>;
  onClickIcon?: React.MouseEventHandler<HTMLAnchorElement>;
}

const IconButton: FC<IconButtonProps> = ({
  tooltip,
  intent = 'primary',
  icon,
  disabled = false,
  tooltipProps,
  href,
  onClickIcon,
  target,
  ...props
}: IconButtonProps) => {
  let component;
  if (tooltip) {
    component = (
      <Tooltip {...tooltipProps} disabled={disabled} mainText={tooltip}>
        <RebassButton
          sx={styles(disabled)}
          variant={`icon-${intent}`}
          disabled={disabled}
          {...props}
        >
          {getIcon(icon, 'black')}
        </RebassButton>
      </Tooltip>
    );
  } else {
    component = (
      <RebassButton
        sx={styles(disabled)}
        variant={`icon-${intent}`}
        disabled={disabled}
        {...props}
      >
        {getIcon(icon, 'black')}
      </RebassButton>
    );
  }

  if (href) {
    return (
      <Link
        style={{
          textDecoration: 'none',
        }}
        onClick={onClickIcon}
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

export default IconButton;
