/// <reference types="react" />
import { FlexProps } from 'rebass';
export interface LabelProps extends Omit<FlexProps, 'css' | 'action'> {
    action?: React.ReactNode;
    text?: string;
    pointer?: boolean;
    align?: 'top' | 'left';
    children?: React.ReactNode;
}
declare const Label: ({ action, text, children, pointer, align, as, sx, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
