/// <reference types="react" />
import { BoxProps, SxStyleProp } from 'rebass';
export interface HeaderProps extends Omit<BoxProps, 'css'> {
    children?: React.ReactNode;
    user?: React.ReactNode;
    actions?: React.ReactNode[];
    menuAction: React.ReactNode;
    logoAction?: () => void;
    sx?: SxStyleProp;
}
declare const Header: ({ children, user, actions, menuAction, logoAction, sx, }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
