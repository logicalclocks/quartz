import { ComponentType } from 'react';
import { TableItemPosition } from './types';
import { Mode } from '../container/types';
export interface RowItemProps {
    mode?: Mode;
    component: ComponentType<any>;
    componentProps: any;
    position?: TableItemPosition;
    fillSpace?: boolean;
}
declare const RowItem: ({ mode, component: Component, componentProps, position, fillSpace, ...props }: RowItemProps) => import("react/jsx-runtime").JSX.Element;
export default RowItem;
