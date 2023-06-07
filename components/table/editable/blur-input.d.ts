/// <reference types="react" />
import { InputProps } from '../../input';
interface TInputProps extends Omit<InputProps, 'onChange'> {
    onChange: (value: string) => void;
    defaultValue: string;
}
declare const _default: import("react").MemoExoticComponent<({ defaultValue, onChange, ...props }: TInputProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
