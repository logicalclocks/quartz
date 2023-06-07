import { FC } from 'react';
import { TextProps } from 'rebass';
export interface MicrolabelingProps extends Omit<TextProps, 'css'> {
    gray?: boolean;
}
declare const Microlabeling: FC<MicrolabelingProps>;
export default Microlabeling;
