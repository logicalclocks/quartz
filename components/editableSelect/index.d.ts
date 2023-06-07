import React, { FC } from 'react';
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
declare const EditableSelect: FC<EditableSelectProps>;
export default EditableSelect;
