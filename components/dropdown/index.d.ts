import { ListProps } from '../list/container';
import { DropdownItem } from './types';
export interface DropdownProps extends Omit<ListProps, 'css' | 'children'> {
    items: DropdownItem[];
    isOpen?: boolean;
    onClickOutside?: () => void;
}
declare const Dropdown: ({ items, isOpen, onClickOutside, ...props }: DropdownProps) => import("react/jsx-runtime").JSX.Element | null;
export default Dropdown;
