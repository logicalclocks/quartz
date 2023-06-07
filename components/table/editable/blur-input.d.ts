import React from 'react';
import { InputProps } from '../../input';
interface TInputProps extends Omit<InputProps, 'onChange'> {
    onChange: (value: string) => void;
    defaultValue: string;
}
declare const _default: React.NamedExoticComponent<TInputProps>;
export default _default;
