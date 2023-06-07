import React, { FC } from 'react';
import { InputProps as RebassInputProps } from 'rebass__forms';
import { LabelProps } from '../label';
import { Intents } from '../intents';
import { IconName } from '../icon';
export interface InputProps extends Omit<RebassInputProps, 'css'> {
    variant?: 'primary' | 'white';
    intent?: Intents;
    info?: string;
    icon?: IconName;
    rightIcon?: React.ReactElement;
    suffix?: string;
    iconPaddingRight?: string;
    label?: string;
    placeholder?: string;
    width?: string | number;
    labelProps?: Omit<LabelProps, 'action' | 'text' | 'children'>;
    labelAction?: React.ReactNode;
    type?: 'text' | 'number' | 'textarea' | 'password';
    rows?: number;
    optional?: boolean;
    tooltipInfo?: string;
}
declare const Input: FC<InputProps>;
export default Input;
