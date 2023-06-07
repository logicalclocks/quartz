import { SliderProps } from '@chakra-ui/react';
import React from 'react';
export interface Props extends SliderProps {
    label: string;
    value: number;
    range: [number, number];
    step: number;
    disabled?: boolean;
    formatDisplayValue?: (value: number) => string;
}
declare const Slider: ({ label, value, range, disabled, formatDisplayValue, ...props }: Props) => React.JSX.Element;
export default Slider;
