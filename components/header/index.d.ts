import React, { FC } from 'react';
import { BoxProps } from 'rebass';
export interface HeaderProps extends Omit<BoxProps, 'css'> {
    children?: React.ReactNode;
    user?: React.ReactNode;
    actions?: React.ReactNode[];
    menuAction: React.ReactNode;
    logoAction?: () => void;
}
declare const Header: FC<HeaderProps>;
export default Header;
