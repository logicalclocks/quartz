import React, { FC } from 'react';
import { SlideDirection } from '@chakra-ui/react';
import { PopupProps } from '../index';
import { DrawerSectionProps } from './drawer-section';
type IDrawer<P> = FC<P> & {
    Section: FC<DrawerSectionProps>;
};
type Children = React.ReactElement<DrawerSectionProps> | null;
export interface DrawerProps extends PopupProps {
    bottomButton?: [React.ReactNode, React.MouseEventHandler<HTMLButtonElement>];
    headerLine?: React.ReactNode;
    headerSummary?: React.ReactNode;
    children: Children | Children[];
    /** @deprecated */
    singleBottom?: boolean;
    placement?: SlideDirection;
}
declare const Drawer: IDrawer<DrawerProps>;
export default Drawer;
