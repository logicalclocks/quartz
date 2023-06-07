import { FC } from 'react';
import { TextProps } from 'rebass';
export interface ValueProps extends Omit<TextProps, 'css'> {
    primary?: boolean;
}
declare const Value: FC<ValueProps>;
export default Value;
