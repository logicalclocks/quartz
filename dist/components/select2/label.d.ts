/// <reference types="react" />
import { BoxProps } from 'rebass';
import { Intents } from '../intents';
import { SelectOpt } from './types';
export interface SelectLabelProps extends Omit<BoxProps, 'css' | 'onChange' | 'value'> {
    variant: 'primary' | 'white' | 'disabled';
    placeholder: string;
    value: SelectOpt[];
    options: SelectOpt[];
    children: React.ReactNode;
    isMulti?: boolean;
    noDataMessage?: string;
    intent: Intents;
    needSecondaryText: boolean;
    needSwap: boolean;
    deletabled?: boolean;
    label?: string;
    onChange: (value: SelectOpt | SelectOpt[]) => void;
}
declare const SelectLabel: import("react").ForwardRefExoticComponent<Omit<SelectLabelProps, "ref"> & import("react").RefAttributes<unknown>>;
export default SelectLabel;
