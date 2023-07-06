import { BoxProps } from 'rebass';
export interface DividerProps extends Omit<BoxProps, 'css'> {
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    width?: string;
    legend?: string;
}
declare const Divider: ({ mt, mb, mr, ml, width, legend, ...props }: DividerProps) => import("react/jsx-runtime").JSX.Element;
export default Divider;
