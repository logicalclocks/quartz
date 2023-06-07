import { FC } from 'react';
import { LabelProps } from '../label';
import { TooltipProps } from '../tooltip';
export interface CheckboxGroupProps extends Omit<LabelProps, 'children' | 'onChange'> {
    label: string;
    value: string[];
    options: string[];
    onChange: (value: string[]) => void;
    disabledUnselect?: boolean;
    tooltipProps?: Omit<TooltipProps, 'children'>;
}
declare const CheckboxGroup: FC<CheckboxGroupProps>;
export default CheckboxGroup;
