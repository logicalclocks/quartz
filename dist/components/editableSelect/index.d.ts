/// <reference types="react" />
import { OptionBase, CreatableProps } from 'chakra-react-select';
export interface EditableSelectProps extends Omit<CreatableProps<Option, boolean, any>, 'onChange' | 'value'> {
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
    errorMessage?: string;
}
interface Option extends OptionBase {
    label: string;
    value: string;
}
declare const EditableSelect: ({ label, value, options: optionsAsStrings, onChange, labelAction, placeholder, width, isMulti, disabled, noDataMessage, preventAdding, variant, isInvalid, errorMessage, ...props }: EditableSelectProps) => import("react/jsx-runtime").JSX.Element;
export default EditableSelect;
