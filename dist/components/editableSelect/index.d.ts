/// <reference types="react" />
import { LabelProps } from '../label';
export interface EditableSelectProps extends Omit<LabelProps, 'onChange' | 'children'> {
    label?: string;
    width?: string;
    value: string[];
    options: string[];
    isMulti?: boolean;
    disabled?: boolean;
    placeholder: string;
    noDataMessage?: string;
    labelAction?: React.ReactNode;
    onChange: (value: string[]) => void;
    preventAdding?: boolean;
    variant?: 'primary' | 'white';
}
declare const EditableSelect: ({ label, value, options: optionsAsStrings, onChange, labelAction, placeholder, width, isMulti, disabled, noDataMessage, preventAdding, variant, ...props }: EditableSelectProps) => import("react/jsx-runtime").JSX.Element;
export default EditableSelect;
