import { FC } from 'react';
import { ListProps } from '../list/container';
import { DropdownItem } from './types';
export interface DropdownProps extends Omit<ListProps, 'css' | 'children'> {
    items: DropdownItem[];
    isOpen?: boolean;
    onClickOutside?: () => void;
}
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
