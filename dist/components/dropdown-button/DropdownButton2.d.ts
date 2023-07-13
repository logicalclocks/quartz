/// <reference types="react" />
import { MenuListProps, MenuProps, SystemStyleObject } from '@chakra-ui/react';
import { DropdownProps } from '../dropdown';
type RenderDropdownItems = ({ onClose, }: {
    onClose: () => void;
}) => DropdownProps['items'];
export interface Props extends Omit<MenuProps, 'children'> {
    /** Dropwdown items either could be an Array, in this case dropdown will be closed after any item clicked
     *  in order to handle closing of dropdown manually you have to pass a callback function which accepts the `onClose` handler function
     */
    items: DropdownProps['items'] | RenderDropdownItems;
    /** To Render custom component as dropdown's button */
    renderButton?: (p: {
        isOpen?: boolean;
    }) => React.ReactNode;
    sx?: SystemStyleObject;
    menuListProps?: MenuListProps;
}
export declare const DropdownButton2: ({ sx, placement, items, renderButton, menuListProps, ...restProps }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
