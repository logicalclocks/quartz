import React, { FC } from 'react';
import { FlexProps } from 'rebass';
export interface LabelProps extends Omit<FlexProps, 'css' | 'action'> {
    action?: React.ReactNode;
    text?: string;
    pointer?: boolean;
    align?: 'top' | 'left';
    children: React.ReactNode;
}
declare const Label: FC<LabelProps>;
export default Label;
