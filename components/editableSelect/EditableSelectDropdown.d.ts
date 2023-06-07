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
declare const EditableSelectDropdown: ({ type, value, width, search, isMulti, options, onClose, position, onChange, maxHeight, appendToBody, }: EditableSelectDropdownProps) => import("react/jsx-runtime").JSX.Element;
export default EditableSelectDropdown;
