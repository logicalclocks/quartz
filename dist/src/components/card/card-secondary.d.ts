/// <reference types="react" />
import { CardProps as RebassCardProps } from 'rebass';
export interface CardSecondaryProps extends Omit<RebassCardProps, 'css' | 'title'> {
    title?: React.ReactElement | string;
    children: React.ReactNode;
    placeholder?: string;
    contentProps?: Omit<RebassCardProps, 'css' | 'children'>;
    readonly?: boolean;
}
declare const _default: import("react").MemoExoticComponent<({ title, children, maxHeight, contentProps, placeholder, readOnly, ...props }: CardSecondaryProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
