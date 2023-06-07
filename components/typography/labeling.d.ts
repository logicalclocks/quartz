import { FC } from 'react';
import { TextProps } from 'rebass';
export interface LabelingProps extends Omit<TextProps, 'css'> {
    bold?: boolean;
    gray?: boolean;
}
declare const Labeling: FC<LabelingProps>;
export default Labeling;
