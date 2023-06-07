import { FC } from 'react';
import { EditableSelectTypes } from './types';
export interface EditableSelectDropdownProps {
    value: string[];
    width?: string;
    search: string;
    position: number;
    options: string[];
    maxHeight: string;
    type?: EditableSelectTypes;
    isMulti: boolean;
    appendToBody: boolean;
    onChange: (value: string[]) => void;
    onClose: () => void;
}
declare const EditableSelectDropdown: FC<EditableSelectDropdownProps>;
export default EditableSelectDropdown;
