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
declare const CheckboxGroup: ({ label, options, value, onChange, disabledUnselect, tooltipProps, ...props }: CheckboxGroupProps) => import("react/jsx-runtime").JSX.Element;
export default CheckboxGroup;
