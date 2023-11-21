/// <reference types="react" />
import { CardProps as RebassCardProps } from 'rebass';
export interface CardProps extends Omit<RebassCardProps, 'css' | 'title'> {
    title?: React.ReactElement | string;
    link?: string;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
    readOnly?: boolean;
    withoutShadow?: boolean;
    expandable?: boolean;
}
declare const _default: import("react").MemoExoticComponent<({ title, actions, children, maxHeight, readOnly, contentProps, withoutShadow, expandable, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
