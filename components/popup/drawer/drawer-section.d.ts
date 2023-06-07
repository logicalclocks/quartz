/// <reference types="react" />
import { BoxProps } from 'rebass';
import Action from '../../action.type';
export interface DrawerSectionProps extends Omit<BoxProps, 'css' | 'title' | 'action'> {
    title: string;
    action?: Action<React.MouseEvent<HTMLButtonElement>>;
    children?: React.ReactNode;
}
declare const DrawerSection: ({ title, action, children, ...props }: DrawerSectionProps) => import("react/jsx-runtime").JSX.Element;
export default DrawerSection;
