import { RangeSliderProps } from '@chakra-ui/react';
import React from 'react';
export interface Props extends RangeSliderProps {
    label: string;
    range: number[];
    disabled?: boolean;
    formatDisplayValue?: (value: number) => string;
}
declare const RangeSlider: ({ label, value, range, disabled, formatDisplayValue, ...props }: Props) => React.JSX.Element;
export default RangeSlider;
