import { FC } from 'react';
import { RadioProps as RebassRadioProps } from '@rebass/forms';
import { TooltipProps } from '../tooltip';
export interface RadioProps extends Omit<RebassRadioProps, 'css'> {
    label?: string;
    addtionalText?: string;
    tooltip?: string;
    tooltipPosition?: TooltipProps['position'];
}
declare const Radio: FC<RadioProps>;
export default Radio;
