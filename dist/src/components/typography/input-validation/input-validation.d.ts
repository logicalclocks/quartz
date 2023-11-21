import { TextProps } from 'rebass';
export interface InputValidationProps extends Omit<TextProps, 'css'> {
    intent?: 'success' | 'fail' | 'warning' | 'neutral';
}
declare const InputValidation: ({ intent, ...props }: InputValidationProps) => import("react/jsx-runtime").JSX.Element;
export default InputValidation;
