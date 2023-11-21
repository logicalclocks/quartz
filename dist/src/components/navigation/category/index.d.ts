/// <reference types="react" />
import { NavigationItemProps } from '../types';
export interface NavigationCategoryProps extends Omit<NavigationItemProps, 'isSubItem'> {
    onBackClick?: () => void;
    hideBack?: boolean;
}
declare const _default: import("react").MemoExoticComponent<({ children, title, hideBack, ...props }: NavigationCategoryProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
