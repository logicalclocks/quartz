import { FC } from 'react';
import { TextProps } from 'rebass';
export interface SubtitleProps extends Omit<TextProps, 'css'> {
}
declare const Subtitle: FC<SubtitleProps>;
export default Subtitle;
