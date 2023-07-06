/// <reference types="react" />
import { LabelProps } from '../label';
import { Intents } from '../intents';
import { SelectOpt } from './types';
export interface Select2Props extends Omit<LabelProps, 'onChange' | 'children' | 'value'> {
    value: (string | number) | (string | number)[];
    options: SelectOpt[];
    format?: 'fit' | 'fill';
    placeholder: string;
    isMulti?: boolean;
    appendToBody?: boolean;
    label?: string;
    labelMode?: 'default' | 'inline' | 'none';
    disabled?: boolean;
    maxListHeight?: string;
    labelAction?: React.ReactNode;
    color?: 'primary' | 'white';
    message?: string;
    state?: Intents;
    onChange: (value: SelectOpt | SelectOpt[]) => void;
    noDataMessage?: string;
    bottomActionText?: string;
    bottomActionHandler?: () => void;
    hasSearch?: boolean;
    searchPlaceholder?: string;
    customFilter?: React.ReactNode;
    noMatchText?: string;
    needSecondaryText?: boolean;
    deletabled?: boolean;
    needSwap?: boolean;
    info?: string;
}
declare const Select: ({ label, value, options, isMulti, info, message, disabled, onChange, deletabled, placeholder, labelAction, customFilter, noDataMessage, format, bottomActionText, needSwap, color, hasSearch, state, bottomActionHandler, appendToBody, labelMode, maxListHeight, needSecondaryText, noMatchText, searchPlaceholder, ...props }: Select2Props) => import("react/jsx-runtime").JSX.Element;
export default Select;
