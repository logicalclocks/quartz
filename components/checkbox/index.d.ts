import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';
import { FC } from 'react';
import { TooltipProps } from '../tooltip';
export interface CheckboxProps extends Omit<RebassCheckboxProps, 'css'> {
    label?: string;
    mode?: string;
    tooltipProps?: Omit<TooltipProps, 'children'>;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
