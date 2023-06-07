import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { SxStyleProp } from 'rebass';
import { SelectProps } from '../select';
export interface DatePickerProps extends ReactDatePickerProps {
    selectProps: Pick<SelectProps, 'variant' | 'noDataMessage' | 'value'>;
    datePickerAlign?: 'left' | 'right';
    sx?: SxStyleProp;
}
declare const _default: React.NamedExoticComponent<DatePickerProps>;
export default _default;
