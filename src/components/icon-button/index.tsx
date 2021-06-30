import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';

// Components
import Tooltip, { TooltipProps } from '../tooltip';

// Styles
import styles from './icon-button.styles';
import { IconName, getIcon } from '../icon/list';

export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
  intent?: 'primary' | 'ghost' | 'ghost-white';
  tooltip: string;
  icon: IconName;
  disabled?: boolean;
  href?: string;
  tooltipProps?: Omit<TooltipProps, 'children' | 'mainText'>;
}

const IconButton: FC<IconButtonProps> = ({
  tooltip,
  intent = 'primary',
  icon,
  disabled,
  tooltipProps,
  href,
  ...props
}: IconButtonProps) => {

  const component = (
    <Tooltip {...tooltipProps} disabled={disabled} mainText={tooltip}>
      <RebassButton
        sx={styles}
        variant={`icon-${intent}`}
        disabled={disabled}
        {...props}
      >
        {getIcon(icon, "black")}
      </RebassButton>
    </Tooltip>
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

export default IconButton;
