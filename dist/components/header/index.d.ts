/// <reference types="react" />
import { BoxProps } from 'rebass';
export interface HeaderProps extends Omit<BoxProps, 'css'> {
    children?: React.ReactNode;
    user?: React.ReactNode;
    actions?: React.ReactNode[];
    menuAction: React.ReactNode;
    logoAction?: () => void;
}
declare const Header: ({ children, user, actions, menuAction, logoAction, }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
