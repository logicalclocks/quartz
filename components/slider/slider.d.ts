import { SliderProps } from '@chakra-ui/react';
export interface Props extends SliderProps {
    label: string;
    value: number;
    range: [number, number];
    step: number;
    disabled?: boolean;
    formatDisplayValue?: (value: number) => string;
}
declare const Slider: ({ label, value, range, disabled, formatDisplayValue, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Slider;
