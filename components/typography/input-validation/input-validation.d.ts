import { FC } from 'react';
import { TextProps } from 'rebass';
export interface InputValidationProps extends Omit<TextProps, 'css'> {
    intent?: 'success' | 'fail' | 'warning' | 'neutral';
}
declare const InputValidation: FC<InputValidationProps>;
export default InputValidation;
