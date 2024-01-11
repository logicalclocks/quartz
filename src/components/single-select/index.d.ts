import { BoxProps, FormControlProps } from '@chakra-ui/react';
import { OptionBase, Props as PublicBaseSelectProps } from 'chakra-react-select';
import { ReactNode } from 'react';
import { Intents } from '../intents';
export interface SingleSelectOption extends OptionBase {
    label: string;
    value: string | undefined;
    additionalText?: string;
    additionalComponent?: React.ReactNode;
}
type ParentProps = Pick<PublicBaseSelectProps, 'menuPlacement'>;
type CleanBoxProps = Omit<BoxProps, 'onChange' | 'children' | 'className' | 'defaultValue'>;
type Conditionals = {
    isClearable: true;
    onChange: (value: string | undefined) => void;
} | {
    isClearable: false;
    onChange: (value: string) => void;
} | {
    isClearable?: undefined;
    onChange: (value: string) => void;
};
export type Props = ParentProps & FormControlProps & CleanBoxProps & Conditionals & {
    editable?: boolean;
    value: SingleSelectOption['value'];
    options: SingleSelectOption[] | string[];
    placeholder?: string;
    label?: string;
    width?: string | number;
    maxListHeight?: string;
    labelAction?: React.ReactNode;
    /** @deprecated not used meaningfully anywhere */
    listWidth?: string | number;
    variant?: 'primary' | 'white';
    noDataMessage?: string;
    isClearable?: boolean;
    labelPosition?: 'side' | 'inline' | 'outside';
    invertLabelPosition?: boolean;
    isLoading?: boolean;
    errorMessage?: ReactNode;
    intent?: Intents;
    bottomActionText?: string;
    bottomActionHandler?: () => void;
};
export declare const SingleSelect: ({ options: rawOptions, value, onChange, placeholder, label, labelAction, width, maxListHeight, variant, noDataMessage, editable, isClearable, labelPosition, invertLabelPosition, isLoading, errorMessage, menuPlacement, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
