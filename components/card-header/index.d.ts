import React, { FC } from 'react';
import { BoxProps } from 'rebass';
export interface CardHeaderProps extends Omit<BoxProps, 'title' | 'css'> {
    title?: React.ReactElement | string;
    actions?: React.ReactNode;
    withShadow?: boolean;
    withBorderBottom?: boolean;
}
declare const CardHeader: FC<CardHeaderProps>;
export default CardHeader;
