import React, { FC, Dispatch } from 'react';
import { BoxProps } from 'rebass';
import { Intents } from '../intents';
import { EditableSelectTypes, ChipsVariants } from './types';
export interface EditableSelectContainerProps extends Omit<BoxProps, 'css' | 'onChange'> {
    label: string;
    search: string;
    value: string[];
    intent: Intents;
    options: string[];
    disabled: boolean;
    isMulti: boolean;
    placeholder: string;
    inlineLegend?: string;
    noDataMessage?: string;
    inputWidth?: string;
    type: EditableSelectTypes;
    variant: ChipsVariants;
    children: React.ReactNode;
    setSearch: Dispatch<React.SetStateAction<string>>;
    onChange: (value: string[]) => void;
}
declare const EditableSelectContainer: FC<EditableSelectContainerProps>;
export default EditableSelectContainer;
