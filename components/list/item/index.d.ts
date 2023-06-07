import React from 'react';
import { BoxProps } from 'rebass';
export interface ListItemProps extends Omit<BoxProps, 'css' | 'action'> {
    children: React.ReactNode;
    variant?: 'primary' | 'active';
    hasDivider?: boolean;
    isRightAlignment?: boolean;
    action?: [string, (event: React.MouseEvent<HTMLButtonElement>) => void];
    isActive?: boolean;
}
declare const _default: React.NamedExoticComponent<ListItemProps>;
export default _default;
