/// <reference types="react" />
import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';
export interface ToggleButtonProps extends Omit<RebassCheckboxProps, 'css'> {
    children: string | React.ReactNode;
    variant?: 'primary' | 'white';
}
declare const ToggleButton: ({ name, id, disabled, onChange, checked, children, variant, sx, ...props }: ToggleButtonProps) => import("react/jsx-runtime").JSX.Element;
export default ToggleButton;
