/// <reference types="react" />
import { BoxProps } from '@chakra-ui/react';
import { OptionBase } from 'chakra-react-select';
import { Intents } from '../intents';
export interface Props extends Omit<BoxProps, 'onChange' | 'children' | 'className'> {
    value: SingleSelectOption['value'];
    options: SingleSelectOption[] | string[];
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    width?: string | number;
    maxListHeight?: string;
    labelAction?: React.ReactNode;
    /** @deprecated not used meaningfully anywhere */
    listWidth?: string | number;
    onChange: (value: SingleSelectOption['value']) => void;
    variant?: 'primary' | 'white';
    noDataMessage?: string;
    isClearable?: boolean;
    labelPosition?: 'side' | 'inline' | 'outside';
    labelPlacement?: 'default' | 'inverted';
    intent?: Intents;
    customFilter?: React.ReactNode;
    bottomActionText?: string;
    bottomActionHandler?: () => void;
    additionalTexts?: string[];
    additionalComponents?: React.ReactNode[];
    needSwap?: boolean;
}
export interface SingleSelectOption extends OptionBase {
    label: string;
    value: string | number | undefined;
    additionalText?: string;
    additionalComponent?: React.ReactNode;
}
export declare const SingleSelect: ({ options: rawOptions, value, onChange, placeholder, disabled, label, labelAction, width, maxListHeight, variant, noDataMessage, isClearable, labelPosition, labelPlacement, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
