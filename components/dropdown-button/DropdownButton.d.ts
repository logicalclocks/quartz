import React from 'react';
import { FlexProps } from 'rebass';
import { DropdownProps } from '../dropdown';
type RenderDropdownItems = ({ onClose, }: {
    onClose: () => void;
}) => DropdownProps['items'];
export interface Props extends Omit<FlexProps, 'css'> {
    /** To align dropdown on the left or right, the default is right alignment
     * TODO: in the future we might need excact place of opening dropdown similar to tooltip
     */
    alignLeft?: boolean;
    /** Setting custom style for container when dropdown is open' */
    containerOpenSx?: FlexProps['sx'];
    /** Setting custom style for dropdown */
    dropdownSx?: DropdownProps['sx'];
    /** Dropwdown items either could be an Array, in this case dropdown will be closed after any item clicked
     *  in order to handle closing of dropdown manually you have to pass a callback function which accepts the `onClose` handler function
     */
    items: DropdownProps['items'] | RenderDropdownItems;
    /** To Render custom component as dropdown's button */
    renderButton: ({ onClick, isOpen, }: {
        onClick: () => void;
        isOpen: boolean;
    }) => React.ReactNode;
}
export declare const DropdownButton: React.FC<Props>;
export {};
