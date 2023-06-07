import { FC } from 'react';
import { TextProps as RebassTextProps } from 'rebass';
export interface TextProps extends Omit<RebassTextProps, 'css'> {
}
declare const Text: FC<TextProps>;
export default Text;
