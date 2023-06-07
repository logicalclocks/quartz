/// <reference types="react" />
import { BoxProps } from 'rebass';
export interface CollapseProps extends Omit<BoxProps, 'css' | 'title'> {
    title: React.ReactNode;
    secondaryContent?: React.ReactNode;
    contentProps?: Omit<BoxProps, 'css' | 'children'>;
    isOpenProps?: boolean;
    openChange?: (value: boolean) => void;
}
declare const _default: import("react").MemoExoticComponent<({ title, contentProps, secondaryContent, children, isOpenProps, openChange, ...props }: CollapseProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
