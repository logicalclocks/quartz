/// <reference types="react" />
import { RadioProps as RebassRadioProps } from '@rebass/forms';
import { TooltipProps } from '../tooltip';
export interface RadioProps extends Omit<RebassRadioProps, 'css'> {
    label?: string;
    addtionalText?: string;
    tooltip?: string;
    tooltipPosition?: TooltipProps['position'];
}
declare const Radio: import("react").ForwardRefExoticComponent<Omit<RadioProps, "ref"> & import("react").RefAttributes<unknown>>;
export default Radio;
