import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Styles
import styles from './icon-button.styles';

export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
  intent?: 'primary' | 'ghost' | 'ghost-white';
  tooltip?: string;
  icon: IconDefinition;
  iconOnHover?: IconDefinition;
}

const IconButton: FC<IconButtonProps> = ({
  tooltip,
  intent = 'primary',
  icon,
  iconOnHover,
  ...props
}: IconButtonProps) => (
  <RebassButton sx={styles} variant={`icon-${intent}`} {...props}>
    <FontAwesomeIcon icon={icon} />
    {(iconOnHover || icon) && <FontAwesomeIcon icon={iconOnHover || icon} />}
    {tooltip && <span>{tooltip}</span>}
  </RebassButton>
);

export default IconButton;
