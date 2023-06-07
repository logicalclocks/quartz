import { FC } from 'react';
import { TextProps, LinkProps } from 'rebass';
export interface HoverableTextProps extends Omit<TextProps, 'css'> {
}
export interface HoverableLinkProps extends Omit<LinkProps, 'css'> {
}
export declare const HoverableText: FC<HoverableTextProps>;
export declare const HoverableLink: FC<HoverableLinkProps>;
