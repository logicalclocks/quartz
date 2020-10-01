import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Tooltip from '../tooltip';

// Styles
import styles from './icon-button.styles';

export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
  intent?: 'primary' | 'ghost' | 'ghost-white';
  tooltip: string;
  icon: IconProp;
  disabled?: boolean;
  iconOnHover?: IconProp;
}

const IconButton: FC<IconButtonProps> = ({
  tooltip,
  intent = 'primary',
  icon,
  disabled,
  iconOnHover,
  ...props
}: IconButtonProps) => {
  // @ts-ignore
  const hoverIcon = iconOnHover ?? icon;

  return (
    <Tooltip disabled={disabled} mainText={tooltip}>
      <RebassButton
        sx={styles}
        variant={`icon-${intent}`}
        disabled={disabled}
        {...props}
      >
        <FontAwesomeIcon icon={icon} />
        <FontAwesomeIcon icon={hoverIcon} />
      </RebassButton>
    </Tooltip>
  );
};

export default IconButton;
