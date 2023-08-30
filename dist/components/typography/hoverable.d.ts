import { TextProps, LinkProps } from 'rebass';
export interface HoverableTextProps extends Omit<TextProps, 'css'> {
}
export interface HoverableLinkProps extends Omit<LinkProps, 'css'> {
}
export declare const HoverableText: (props: HoverableTextProps) => import("react/jsx-runtime").JSX.Element;
export declare const HoverableLink: ({ href, target, ...props }: HoverableLinkProps) => import("react/jsx-runtime").JSX.Element;
