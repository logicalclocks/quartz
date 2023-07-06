/// <reference types="react" />
import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';
import { TooltipProps } from '../tooltip';
export interface CheckboxProps extends Omit<RebassCheckboxProps, 'css'> {
    label?: string;
    mode?: string;
    tooltipProps?: Omit<TooltipProps, 'children'>;
}
declare const Checkbox: import("react").ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & import("react").RefAttributes<unknown>>;
export default Checkbox;
