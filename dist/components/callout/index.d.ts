/// <reference types="react" />
import { FlexProps } from 'rebass';
export declare enum CalloutTypes {
    valid = "valid",
    error = "error",
    warning = "warning",
    neutral = "neutral"
}
export interface ICalloutProps extends Omit<FlexProps, 'content' | 'css'> {
    type: CalloutTypes;
    content: string | React.ReactNode;
    cta?: React.ReactNode;
}
declare const Callout: ({ type, content, cta, ...props }: ICalloutProps) => import("react/jsx-runtime").JSX.Element;
export default Callout;
