import React, { FC } from 'react';
import { ButtonProps } from 'rebass';
import { TooltipProps } from '../tooltip';
import { IconName } from '../icon/list';
export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
    intent?: 'primary' | 'ghost' | 'ghost-white';
    tooltip?: string;
    icon: IconName;
    disabled?: boolean;
    href?: string;
    tooltipProps?: Omit<TooltipProps, 'children' | 'mainText'>;
    onClickIcon?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare const IconButton: FC<IconButtonProps>;
