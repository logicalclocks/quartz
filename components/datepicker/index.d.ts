/// <reference types="react" />
import { ReactDatePickerProps } from 'react-datepicker';
import { SxStyleProp } from 'rebass';
import { SelectProps } from '../select';
export interface DatePickerProps extends ReactDatePickerProps {
    selectProps: Pick<SelectProps, 'variant' | 'noDataMessage' | 'value'>;
    datePickerAlign?: 'left' | 'right';
    sx?: SxStyleProp;
}
declare const _default: import("react").MemoExoticComponent<({ selectProps, datePickerAlign, sx, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
