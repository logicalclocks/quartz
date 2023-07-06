/// <reference types="react" />
import { Intents } from '../intents';
import { LabelProps } from '../label';
import { EditableSelectTypes, ChipsVariants } from './types';
export interface EditableSelectProps extends Omit<LabelProps, 'onChange' | 'children'> {
    appendToBody?: boolean;
    info?: string;
    label?: string;
    width?: string;
    value: string[];
    intent?: Intents;
    options: string[];
    isMulti?: boolean;
    inputWidth?: string;
    disabled?: boolean;
    placeholder: string;
    inlineLegend?: string;
    noDataMessage?: string;
    maxListHeight?: string;
    type?: EditableSelectTypes;
    variant?: ChipsVariants;
    labelAction?: React.ReactNode;
    onChange: (value: string[]) => void;
}
declare const EditableSelect: ({ info, label, value, options, onChange, inputWidth, labelAction, placeholder, inlineLegend, appendToBody, width, isMulti, type, disabled, intent, variant, maxListHeight, noDataMessage, ...props }: EditableSelectProps) => import("react/jsx-runtime").JSX.Element;
export default EditableSelect;
