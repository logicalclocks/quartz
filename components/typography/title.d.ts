import { FC } from 'react';
import { TextProps } from 'rebass';
export interface TitleProps extends Omit<TextProps, 'css'> {
    uppercase?: boolean;
}
declare const Title: FC<TitleProps>;
export default Title;
