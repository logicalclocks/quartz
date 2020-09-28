import React, { FC } from 'react';
import { Button as RebassButton, ButtonProps } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Components
import Tooltip from '../tooltip';

// Styles
import styles from './icon-button.styles';

export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
  intent?: 'primary' | 'ghost' | 'ghost-white';
  tooltip?: string;
  icon: IconDefinition;
  disabled?: boolean;
  iconOnHover?: IconDefinition;
}

const IconButton: FC<IconButtonProps> = ({
  tooltip,
  intent = 'primary',
  icon,
  disabled,
  iconOnHover,
  ...props
}: IconButtonProps) => {
  if (tooltip) {
    return (
      <Tooltip disabled={disabled} mainText={tooltip}>
        <RebassButton
          sx={styles}
          variant={`icon-${intent}`}
          disabled={disabled}
          {...props}
        >
          <FontAwesomeIcon icon={icon} />
          {(iconOnHover || icon) && (
            <FontAwesomeIcon icon={iconOnHover || icon} />
          )}
        </RebassButton>
      </Tooltip>
    );
  }

  return (
    <RebassButton sx={styles} variant={`icon-${intent}`} {...props}>
      <FontAwesomeIcon icon={icon} />
      {(iconOnHover || icon) && <FontAwesomeIcon icon={iconOnHover || icon} />}
    </RebassButton>
  );
};

export default IconButton;
