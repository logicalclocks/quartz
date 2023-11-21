/// <reference types="react" />
import { BoxProps } from 'rebass';
export interface ListItemProps extends Omit<BoxProps, 'css' | 'action'> {
    children: React.ReactNode;
    variant?: 'primary' | 'active';
    hasDivider?: boolean;
    isRightAlignment?: boolean;
    action?: [string, (event: React.MouseEvent<HTMLButtonElement>) => void];
    isActive?: boolean;
}
declare const _default: import("react").MemoExoticComponent<({ children, variant, hasDivider, action, isActive, isRightAlignment, disabled, onClick, sx, ...props }: ListItemProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
