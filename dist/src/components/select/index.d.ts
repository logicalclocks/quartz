/// <reference types="react" />
import { Intents } from '../intents';
import { LabelProps } from '../label';
export interface SelectProps extends Omit<LabelProps, 'onChange' | 'children'> {
    value: string[];
    options: string[];
    placeholder: string;
    isMulti?: boolean;
    appendToBody?: boolean;
    label?: string;
    disabled?: boolean;
    width?: string | number;
    maxListHeight?: string;
    labelAction?: React.ReactNode;
    listWidth?: string | number;
    variant?: 'primary' | 'white';
    info?: string;
    intent?: Intents;
    onChange: (value: string[]) => void;
    noDataMessage?: string;
    bottomActionText?: string;
    bottomActionHandler?: () => void;
    hasPlaceholder?: boolean;
    hasSearch?: boolean;
    searchPlaceholder?: string;
    customFilter?: React.ReactNode;
    additionalTexts?: string[];
    additionalComponents?: React.ReactNode[];
    noMathText?: string;
    needSecondaryText?: boolean;
    deletabled?: boolean;
    needSwap?: boolean;
}
declare const Select: ({ labelAction, label, width, variant, options, disabled, listWidth, value, isMulti, placeholder, maxListHeight, noDataMessage, info, intent, onChange, bottomActionHandler, bottomActionText, hasPlaceholder, hasSearch, searchPlaceholder, customFilter, additionalComponents, additionalTexts, noMathText, needSecondaryText, deletabled, needSwap, appendToBody, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export default Select;
