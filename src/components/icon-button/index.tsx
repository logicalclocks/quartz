import React, { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Button as RebassButton, ButtonProps } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Tooltip, { TooltipProps } from '../tooltip';

// Styles
import styles from './icon-button.styles';

export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
  intent?: 'primary' | 'ghost' | 'ghost-white';
  tooltip: string;
  icon: IconProp | Element;
  disabled?: boolean;
  iconOnHover?: IconProp;
  href?: string;
  tooltipProps?: Omit<TooltipProps, 'children' | 'mainText'>;
}

const IconButton: FC<IconButtonProps> = ({
  tooltip,
  intent = 'primary',
  icon,
  disabled,
  iconOnHover,
  tooltipProps,
  href,
  ...props
}: IconButtonProps) => {
  // @ts-ignore
  const hoverIcon = iconOnHover ?? icon;

  const component = (
    <Tooltip {...tooltipProps} disabled={disabled} mainText={tooltip}>
      <RebassButton
        sx={styles}
        variant={`icon-${intent}`}
        disabled={disabled}
        {...props}
      >{(icon instanceof Element) ? 
        <>
          {icon}
        </>:
        <>
          <FontAwesomeIcon icon={icon as IconProp} />
          <FontAwesomeIcon icon={hoverIcon as IconProp} />
        </>}
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
