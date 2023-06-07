import React, { FC } from 'react';
import { BoxProps } from 'rebass';
import { Intents } from '../intents';
export interface SelectLabelProps extends Omit<BoxProps, 'css' | 'onChange'> {
    variant: 'primary' | 'white' | 'disabled';
    placeholder: string;
    value: string[];
    options: string[];
    children: React.ReactNode;
    isMulti?: boolean;
    noDataMessage?: string;
    hasPlaceholder: boolean;
    intent: Intents;
    additionalTexts?: string[];
    needSecondaryText: boolean;
    needSwap: boolean;
    deletabled?: boolean;
    onChange: (value: string[]) => void;
}
declare const SelectLabel: FC<SelectLabelProps>;
export default SelectLabel;
