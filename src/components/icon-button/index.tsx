import { Link } from 'react-router-dom';
import { ButtonProps } from 'rebass';

// Components
import Tooltip, { TooltipProps } from '../tooltip';

import { Button } from '../button';
import GetIcon from '../icon/GetIcon';
import { IconName } from '../icon/list';
import { Color } from '../../theme/types';

import * as S from './icon-button.styles';

export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
  intent?: 'primary' | 'ghost' | 'ghost-white'; // TODO remove this intent, not used
  tooltip?: string;
  icon: IconName;
  iconColor?: Color;
  disabled?: boolean;
  href?: string;
  tooltipProps?: Omit<TooltipProps, 'children' | 'mainText'>;
  onClickIcon?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const IconButton = ({
  intent: _, // TODO remove this
  tooltip,
  icon,
  iconColor,
  disabled = false,
  tooltipProps,
  href,
  onClickIcon,
  target,
  sx,
  ...props
}: IconButtonProps) => {
  let component;
  if (tooltip) {
    component = (
      <Tooltip {...tooltipProps} disabled={disabled} mainText={tooltip}>
        <Button
          sx={{ ...S.wrapper, ...sx }}
          variant="secondary"
          disabled={disabled}
          {...props}
        >
          <GetIcon
            disabled={disabled}
            icon={icon}
            color={iconColor}
            size="sm"
          />
        </Button>
      </Tooltip>
    );
  } else {
    component = (
      <Button
        sx={{ ...S.wrapper, ...sx }}
        variant="secondary"
        disabled={disabled}
        {...props}
      >
        <GetIcon disabled={disabled} icon={icon} color={iconColor} size="sm" />
      </Button>
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
