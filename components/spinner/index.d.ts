import { BoxProps } from 'rebass';
export interface SpinnerProps extends Omit<BoxProps, 'css'> {
    size?: number;
    color?: string;
}
declare const Spinner: ({ size, color, ...props }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
export default Spinner;
