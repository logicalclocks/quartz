import React, { FC } from 'react';
import { BoxProps } from '../box';
import { Intents } from '../intents';
import { LabelProps } from '../label';
export interface CodeInputProps extends Omit<BoxProps, 'children' | 'onChange'> {
    label?: string;
    value: string;
    mode: 'json' | 'javascript' | 'yaml' | 'python' | 'sql';
    width?: string | number;
    height?: string;
    labelAction?: React.ReactNode;
    optional?: boolean;
    tooltipInfo?: string;
    labelProps?: Omit<LabelProps, 'action' | 'text' | 'children'>;
    onChange: (value: string) => void;
    readOnly: boolean;
    info?: string;
    intent?: Intents;
}
declare const CodeInput: FC<CodeInputProps>;
export default CodeInput;
