import React, { FC } from 'react';
import { BoxProps } from 'rebass';
import Action from '../../action.type';
export interface DrawerSectionProps extends Omit<BoxProps, 'css' | 'title' | 'action'> {
    title: string;
    action?: Action<React.MouseEvent<HTMLButtonElement>>;
    children?: React.ReactNode;
}
declare const DrawerSection: FC<DrawerSectionProps>;
export default DrawerSection;
